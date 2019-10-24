import { connect } from '../../connect'
import { RootStore } from '../../Store'
import { LandingPage } from './components/LandingPage'

const mapStoreToProps = (store: RootStore) => ({

})

export const LandingPageContainer = connect(
  mapStoreToProps,
  LandingPage,
)