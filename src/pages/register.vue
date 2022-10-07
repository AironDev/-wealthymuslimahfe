<template>
   
    <header class="ex-header py-10 bg-gray">
        <div class="container mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4">
            <h1 class="text-4xl">Register</h1>
        </div> 
    </header>

    <div class="ex-basic-1 py-1">
        <div class="container mx-auto px-4 sm:px-8 xl:max-w-5xl xl:px-12">
            <div class="text-box my-12">
                <p ref="alert" class="p-large mb-4 ">After registration you will be issued a pin, please keep it safe so you can view your investments and perform other Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet veniam.</p>
            </div> <!-- end of text-box -->

            <div class="">

                <form class="w-full mx-auto max-w-lg" @submit.prevent="onRegister()">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                                Name
                            </label>
                            <input v-model="regData.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="John Doe" required>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                Email
                            </label>
                            <input v-model="regData.email"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="johndoe@gmail.com" required>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Date of Birth
                            </label>
                            <input v-model="regData.dob"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="10/13/2001" required  max="2005-01-01">

                        </div>


                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full  px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Investible Cash
                            </label>
                            <input v-model="regData.investable_cash"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="20000" required>
                        </div>
                    </div>
                    
                   

                    <div class="flex flex-wrap my-12">
                        <button type="submit" class="btn-solid-reg mx-auto mb-12" href="index.html#download">Submit</button>
                    </div>
                </form>

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
        return {
            data: {}
        }
    },
    data() {
        return {
            regData: {}
        }
    },
    computed: {},
    mounted() {},
    methods: {
        ...mapActions('auth', ['register']),
        
        async onRegister(){
    
            await this.register(this.regData).then(res =>{
                this.$notify({
                  group: "success",
                  title: 'Registration is successful',
                  text: res.message
                }, 8000)

                this.$refs.alert.innerHTML = `Registration was successfull, your platform pin is <em class="text-green-700">${res.data.id}</em> please keep it safe. Click <a class="text-red-700" href="/login">Here</a> to view your investment profile.`
                this.regData = {}
            })
            .catch(err =>{
                this.$notify({
                  group: "error",
                  title: 'Error occured',
                  text: err.response.data.message
                }, 8000)
            })
        },

    }
}

</script>
<style>
</style>
