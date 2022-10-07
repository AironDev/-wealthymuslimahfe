import { createStore, createLogger } from 'vuex'

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import auth from './modules/auth/'
import admin from './modules/admin/'
var ls = new SecureLS({ isCompression: false });


const debug = process.env.NODE_ENV !== 'production'

let plugins = [
	createPersistedState({
    paths: ['auth', 'admin'],
    }),
]

if(debug) plugins.push(createLogger())

const store = createStore({
    modules: {auth, admin},
    strict: debug,
    plugins,
})

export default store
