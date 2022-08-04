<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import appHeader from '@/cmps/app-header.vue'
import appFooter from './cmps/app-footer.vue'
import firebaseService from './services/firebase.service.js'

export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {
    tasks(){
      console.log(firebaseService.gTasks);
      return firebaseService.gTasks
    }
  },
  created(){
    this.$store.dispatch({type:'query'})
  }

}
</script>


