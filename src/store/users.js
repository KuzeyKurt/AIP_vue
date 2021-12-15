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
	getters: {
        user(state) {
            return state.user

    },
  
    
}
}
