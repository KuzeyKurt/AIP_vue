// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import shared from './shared'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		ads,
		users,
		shared

	}
	
})
