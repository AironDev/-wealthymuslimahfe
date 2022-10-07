<template>
<!-- Main content Start -->
<div class="page-wrapper">
	<NavigationComponent></NavigationComponent>
    <!-- Main content area -->
    <router-view />
</div> 
<FooterComponent></FooterComponent>


<CustomScriptLoader :key="Math.random() "></CustomScriptLoader>

</template>

<script>
import { useMeta } from 'vue-meta'
import { computed, ref, onMounted, onBeforeMount, nextTick } from 'vue'
import { useStore } from 'vuex'
export default{
	setup(){
		const store = useStore()
		return {
		}
	},
	mounted(){
		
	}
}
</script>
