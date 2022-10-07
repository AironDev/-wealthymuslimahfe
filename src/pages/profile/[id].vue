<template>
   
    <section id="header" class="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
        <div v-if="user.id" class="container px-4 flex flex-wrap items-center sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            
            <div class="cards-1">
                <div class="card">
                    <div class="card-image">
                        <img class="rounded-full" src="/images/user.jpg" alt="alternative">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{user.name}}</h5>
                        <p class="font-bold mt-2">{{user.email}}</p>
                        <p class="mb-2">{{user.dob}}</p>

                        
                        <p class="mb-4">Don't worry about future costs, pay once and receive all future updates at no extra cost</p>
                        <a class="btn-solid-lg secondary"  href="/"><i class="fab fa-google-play"></i>Logout</a>
                    </div>
                </div>
            </div>

            <div class="cards-1 h-full w-full">
                <div class="w-full  mx-auto bg-white shadow-sm rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b flex justify-between border-gray-100">
                            <div class="font-semibold text-left text-gray-800">MY INVESTMENTS</div>
                            
                            <button @click="showInvestmentForm = true" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">ADD NEW</button>
                        </header>

                        <div class="overflow-x-auto p-3">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th>SN</th>
                                        <th class="p-2">
                                            <div class="font-semibold text-center">INVESTABLE CASH</div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="text-sm divide-y divide-gray-100">

                                    <tr v-for="( investment, index ) in user.investments">
                                        <td class="p-2">{{++index}}</td>
                                        <td class="p-2">
                                            <div class="font-medium text-center text-gray-800">
                                                {{investment.investable_cash}}
                                            </div>
                                        </td>
                                        
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                            <div>Total</div>
                            <div class="text-blue-600"> {{ totalAmountInvested(user.investments) }} <span x-text="total.toFixed(2)"></span></div>
                        </div>

            
                    </div>
            </div>

        </div> 
        <div v-else class="container px-4 flex flex-wrap items-center sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                <h1 class="h1-large mb-5">Profile Not Found</h1>
                <p class="p-large mb-8">Something went wrong</p>
                <a class="btn-solid-lg secondary" href="/login"><i class="fab fa-google-play"></i>Go Back</a>
            </div>
        </div>
    </section> 



     <!-- create investment modal -->
     <div v-if="showInvestmentForm" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        
                        <div class="sm:flex sm:items-start">
                            <img class="h-5" src="/images/edit.png" alt="">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Add New Investment</h3>
                            </div>
                        </div>

                        <form @submit.prevent="investMore()" class="mt-12">
    


                            <div class="w-full my-6 hidden   px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                   User Id
                                </label>
                                <input v-model="newInvestment.user_id"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" >
                            </div>

                           
                            <div class="w-full  my-6 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Investible Cash
                                </label>
                                <input v-model="newInvestment.investable_cash"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Investible cash" required  >
                            </div>



                            <div class="bg-gray-50 px-4 py-3 sm:flex  sm:px-6">
                               
                                
                                <button @click="showInvestmentForm = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>

                                <button type="submit" class="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Create</button>
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
            user: {},
            showInvestmentForm: false,
            newInvestment: {}
        }
    },
    computed: {},
    async mounted() {
        await this.fetchUser()  
    },
    methods: {
        ...mapActions('auth', ['getUser', 'createInvestment']),

        totalAmountInvested(investments){
            let sum = 0;
            investments.forEach(investment => {
                return sum += Number(investment.investable_cash)
            })
            return sum
        },


        async fetchUser(){
            let id = this.$route.params.id
            await this.getUser(id).then(res =>{
                this.user = res.data
                console.log(res.data)
            })
        },
        async  investMore(){
           this.newInvestment.user_id = this.user.id
           await this.createInvestment(this.newInvestment).then(res =>{
                this.newInvestment = {}
                this.showInvestmentForm = false
                this.$notify({
                  group: "success",
                  title: 'Investment created successfully',
                  text: res.message
                }, 8000)
            }).catch(err =>{
                this.$notify({
                  group: "error",
                  title: 'Unkown error occured',
                  text: err.message
                }, 8000)
            })

            this.fetchUser(); 
        },
        
    }
}

</script>
<style>
</style>
