import Vue from 'vue'
import Vuex from 'vuex'
const firebase = require('./firebaseConfig.js')

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {}
  },
  actions: {
    fetchUserProfile({ commit, state}) {
      firebase.usersCollection.doc(state.currentUser.uid).get().then(response => {
        commit('setUserProfile', response.data())
      }).catch(error => {
        console.log(error);
      })
    }
  },
  mutations: {
    setCurrentUser(state, value) {
      state.currentUser = value
    },
    setUserProfile(state, value) {
      state.userProfile = value
    }
  }
})
