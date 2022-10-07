<template>
   
    <header class="ex-header py-10 bg-gray">
        <div class="container mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4">
            <h1 class="text-4xl">Login</h1>
        </div> 
    </header>

    <div class="ex-basic-1 py-1">
        <div class="container mx-auto px-4 sm:px-8 xl:max-w-5xl xl:px-12">
            
            <div class="mt-12">

                <div class="w-full mx-auto max-w-lg" @submit.prevent="onLogin()">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="secret number">
                            Secret Number
                        </label>
                        <input v-model="logData.id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="11001" required>
                        </div>
                        
                        <div class="flex items-center justify-between">
                        <button type="submit" class="btn-solid-reg mx-auto mb-12" href="index.html#download">Submit</button>
            
                        </div>
                    </form>
    
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
        return {
            data: {}
        }
    },
    data() {
        return {
            logData: {}
        }
    },
    computed: {},
    mounted() {},
    methods: {
        ...mapActions('auth', ['login']),
        
        async onLogin(){
            this.$router.push({
                name: 'profile-id',
                params: { id: this.logData.id},
            })
        }
    
            

    }
}

</script>
<style>
</style>
