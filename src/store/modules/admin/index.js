import admin from '~/repository/admin'
const state = () => ({
    
})

const getters = {
    
}

const actions = {

    async getUsers({}) {
        let res = await admin.fetchUsers()        
        return res.data
    },

    async deleteUser({}, id) {
        return await admin.deleteUser(id)        
    },

    async updateUser({}, user) {
        return await admin.updateUser(user)        
    },

    async createUser({}, data) {
        return await admin.createUser(data)        
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
