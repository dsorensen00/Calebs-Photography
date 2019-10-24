import { configure } from 'mobx'
import { AxiosInstance } from 'axios'
import { RouterStore } from 'mobx-react-router'
import { LandingPageStore } from './Modules/Landing-Page/LandingPageStore'


//Forces all changes to state to be from an action
configure({ enforceActions: 'always' })

let sharedStore: RootStore

export const createStore = (axios: AxiosInstance): RootStore => {
  sharedStore = new RootStore(axios)
  return sharedStore
}

/** Gets the instance of the store */
//NOTE: Switch this to useContext instead of the singleton
export const getStore = (): RootStore => sharedStore

export class RootStore {
  public readonly promos: LandingPageStore
  public readonly routing: RouterStore

  constructor(private readonly axios: AxiosInstance) {
    this.promos = new LandingPageStore(this, axios)
    this.routing = new RouterStore()
  }
}