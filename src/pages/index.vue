<template>
   
    <header id="header" class="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                <h1 class="h1-large mb-5">Welcome to Wealthy Muslimah</h1>
                <p class="p-large mb-8">Start your investment journey today, join other smart investors that use our platform to secure their future</p>
                
                <a class="btn-solid-lg" href="register"><i class="fab fa-apple"></i>Register</a>
                <a class="btn-solid-lg secondary" href="/login"><i class="fab fa-google-play"></i>Signin</a>
            </div>
            <div class="xl:text-right">
                <img class="inline" src="images/header-smartphone.png" alt="alternative" />
            </div>
        </div> 
    </header> 



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
        return {}
    },
    computed: {},
    mounted() {},
    methods: {
        start(){
           if(this.data.type == 'person'){
                this.$router.push('person')
           }else{
                this.$router.push('company')
           }
        }
    }
}

</script>
<style>
</style>
