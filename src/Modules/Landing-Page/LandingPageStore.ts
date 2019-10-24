// import { action, observable, computed, flow } from 'mobx'
import { AxiosInstance } from 'axios'
import { RootStore } from '../../Store'


export class LandingPageStore {

    constructor(private readonly store: RootStore, private readonly axios: AxiosInstance) { }
}