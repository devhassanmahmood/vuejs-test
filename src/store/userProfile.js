const state = {
  user: {}
}

const mutations = {
 
  setUser: (state, user) => {
    state.user = user
  }
}

const getters = {
  user: state => state.user,
}

export default {
  state,
  mutations,
  getters
}
