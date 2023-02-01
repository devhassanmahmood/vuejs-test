import Vuex from 'vuex'
import UserProfile from './userProfile'

// Create a new store instance.
export default new Vuex.Store({
  namespace: true,
  modules: {
    UserProfile
  }
});