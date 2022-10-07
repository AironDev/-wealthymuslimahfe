import auth from '~/repository/auth'
const state = () => ({
    
})

const getters = {
    
}

const actions = {
    
    async register({}, data) {
        let res = await auth.register(data)        
        return res.data
    },


    async createInvestment({}, data) {
        let res = await auth.createInvestment(data)        
        return res.data
    },
    
    async getUser({}, id) {
        let res = await auth.fetchUser(id)        
        return res.data
    }

}

const mutations = {
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
