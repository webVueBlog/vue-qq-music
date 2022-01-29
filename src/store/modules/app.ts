import { VuexModule, Module, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IAppState {
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {

}

export const ErrorLogModule = getModule(App)