// import Vue from 'vue'
// import Vuex from 'vuex'
// import ads from './ads'
// import user from './users'
import fb from 'firebase'

class User {
	constructor(id) {
		this.id = id
	}
}


export default {

    computed:
    {
        isUserLoggedIn () {
            return this.$store.getters.isUserLoggedIn
      },


      links () {
        if (this.isUserLoggedIn) {
          return [
          {title:"Orders", icon:"mdi-bookmark-multiple-outline", url:"/orders"},
          {title:"New ad", icon:"mdi-note-plus-outline", url:"/new"},
          {title:"My ads", icon:"mdi-view-list-outline", url:"/list"}
          ]
        } else {
          return [
          {title:"Login", icon:"mdi-lock", url:"/login"},
          {title:"Registration", icon:"mdi-face", url:"/registration"},
          ]
        }
      }
  
    
    },

	state: {
        user: null
    },
	mutations: {
        setUser(state,payload) {
            state.user = payload
        }
    
    },
	actions: {
        async registerUser({commit},{email, password}){
            commit('clearError')
            commit('setLoading', true)
            try {
        const response = await fb.auth().createUserWithEmailAndPassword(email,password)
                commit('setUser', new User(response.user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
        throw error
            }
        }
  
    },

    async loginUser({commit},{email, password}){
        commit('clearError')
        commit('setLoading', true)
        try {
        const response = await fb.auth().signInWithEmailAndPassword(email,password)
            commit('setUser', new User(response.user.uid))
            commit('setLoading', false)
               } catch (error) {
             commit('setLoading', false)
            commit('setError', error.message)
    throw error
        }	
    },
    
    

	getters: {
        user(state) {
            return state.user !== null

    },
  
    
}
}
