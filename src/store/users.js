import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import user from './user'

export default {
	state: {
        user: null
    },
	mutations: {},
	actions: {},
	getters: {
        user(state) {
            return state.user

    }
}
}
