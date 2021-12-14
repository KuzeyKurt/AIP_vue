import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import user from './user'
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
        registerUser({commit},{email, password}){
            fb.auth().createUserWithEmailAndPassword(email,password).then(response => {
                  console.log(response.user.uid)
                  commit('setUser', new User(response.user.uid))
  })
  }
  
    },
	getters: {
        user(state) {
            return state.user

    },
  
    
}
}
