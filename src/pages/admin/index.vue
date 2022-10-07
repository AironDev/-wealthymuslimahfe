<template>
   
    <section id="header" class="header  text-center ">
        <div class="container px-4 flex flex-wrap items-center sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            
            <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                <h1 class="h1-large mb-5">Welcome Admin !!</h1>
                <p class="p-large mb-8">You have 10 new notifications <a href="#" class="text-red-400"></a></p>
            </div>

        </div>


        <div class="container px-4  sm:px-8 ">
           
                <div class="">

                    <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b flex justify-between border-gray-100">
                            <div class="font-semibold text-left text-gray-800">Manage Users</div>
                            <button @click="showCreateForm = true" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">ADD USER</button>
                        </header>

                        <div class="overflow-x-auto p-3">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th></th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">User Name</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Total Investments</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Total Amount</div>
                                        </th>
                                        <th class="p-2">
                                            <div class="font-semibold text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="text-sm divide-y divide-gray-100">

                                    <tr v-for="( user, index ) in users">
                                        <td class="p-2">{{++index}}</td>
                                        <td class="p-2">
                                            <div class="font-medium text-left text-gray-800">
                                                {{user.name}}
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left">{{ user.investments.length }}</div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left font-medium text-green-500">
                                                {{ totalAmountInvested(user.investments) }}
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="flex justify-center">
                                                <button @click="onDeleteUser(user.id)">
                                                    <img  class="h-6 hover:text-blue-600  hover:bg-gray-100 p-1" src="/images/delete.png" alt="">
                                                </button>

                                                <button @click="onEditUser(user)">
                                                    <img class="h-6 hover:text-blue-600  hover:bg-gray-100 p-1" src="/images/edit.png" alt="">
                                                </button>

                                                
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <!-- total amount -->
                        <div class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                            <div>Total</div>
                            <div class="text-blue-600">RM <span x-text="total.toFixed(2)"></span></div>
                        </div>

                        <div class="flex justify-end">
                            <!-- send this data to backend (note: use class 'hidden' to hide this input) -->
                            <input type="hidden" class="border border-black bg-gray-50" x-model="selected" />
                        </div>
                    </div>
                </div>

           
        </div>

        
            
    </section> 

    <!-- edit user modal -->
    <div v-if="showEditForm" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        
                        <div class="sm:flex sm:items-start">
                            <img class="h-5" src="/images/edit.png" alt="">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Update user</h3>
                            </div>
                        </div>

                        <form @submit.prevent="onUpdateUser()" class="mt-12">
                            <div class="w-full my-6  px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                   Name
                                </label>
                                <input v-model="selectedUser.name"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"  required  max="2005-01-01">
                            </div>

                            <div class="w-full  my-6 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Date of Birth
                                </label>
                                <input v-model="selectedUser.dob"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="10/13/2001" required  max="2005-01-01">
                            </div>


                            <div class="bg-gray-50 px-4 py-3 sm:flex  sm:px-6">
                               
                                
                                <button @click="showEditForm = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>

                                <button type="submit" class="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Update</button>
                            </div>

                        </form>

                    
                    </div>
                </div>
            </div>
        </div>

    </div>


    <!-- create user modal -->
    <div v-if="showCreateForm" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        
                        <div class="sm:flex sm:items-start">
                            <img class="h-5" src="/images/edit.png" alt="">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Create user</h3>
                            </div>
                        </div>

                        <form @submit.prevent="onCreateUser()" class="mt-12">
                            <div class="w-full my-6  px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                                   Name
                                </label>
                                <input v-model="newUser.name"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"  required >
                            </div>


                            <div class="w-full my-6  px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                   Email
                                </label>
                                <input v-model="newUser.email"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email"  required  >
                            </div>

                            <div class="w-full  my-6 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Date of Birth
                                </label>
                                <input v-model="newUser.dob"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="10/13/2001" required >
                            </div>


                            <div class="w-full  my-6 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Investible Cash
                                </label>
                                <input v-model="newUser.investable_cash"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Investible cash" required  >
                            </div>



                            <div class="bg-gray-50 px-4 py-3 sm:flex  sm:px-6">
                               
                                
                                <button @click="showCreateForm = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>

                                <button type="submit" class="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Update</button>
                            </div>

                        </form>

                    
                    </div>
                </div>
            </div>
        </div>

    </div>



</template>

<route lang="yaml">
    meta:
        layout: default
        middleware: []
        requiresAuth: false
</route>

<script>
import { useMeta } from 'vue-meta'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapActions, useStore, mapGetters, mapState, mapMutations } from "vuex";
export default {
    setup() {
        useMeta({
            title: 'Home',
        })

    },
    data() {
        return {
            users: {},
            selectedUser: {},
            newUser: {},
            showEditForm: false,
            showCreateForm: false
        }
    },
    computed: {
        
    },
    mounted() {
        this.fetchUsers(); 
    },
    methods: {
        ...mapActions('admin', ['getUsers', 'deleteUser', 'updateUser', 'createUser']),
        
        totalAmountInvested(investments){
            let sum = 0;
            investments.forEach(investment => {
                return sum += Number(investment.investable_cash)
            })
            return sum
        },

        async fetchUsers(){
            await this.getUsers().then(res =>{
                this.users = res.data
            })

        },

        async onDeleteUser(id){
            await this.deleteUser(id).then(res =>{
                this.$notify({
                  group: "success",
                  title: 'User deleted successfully',
                  text: res.message
                }, 8000)
            })

            this.fetchUsers(); 
        },

        onEditUser(user){
            this.selectedUser = user
            this.showEditForm = true
            
        },

        async onUpdateUser(){
            await this.updateUser(this.selectedUser).then(res =>{
                this.selectedUser = {}
                this.showEditForm = false
                this.$notify({
                  group: "success",
                  title: 'User updated successfully',
                  text: res.message
                }, 8000)
            })
        },

        async onCreateUser(){
            await this.createUser(this.newUser).then(res =>{
                this.newUser = {}
                this.showCreateForm = false
                this.$notify({
                  group: "success",
                  title: 'User created successfully',
                  text: res.message
                }, 8000)
            }).catch(err =>{
                this.$notify({
                  group: "error",
                  title: 'Unkown error occured',
                  text: err.message
                }, 8000)
            })

            this.fetchUsers(); 
        }
       
    }
}

</script>
<style>
</style>
