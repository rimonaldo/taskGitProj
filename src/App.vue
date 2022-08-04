<template>
  <app-header />
  <task-list v-if="tasks" :tasks="tasks"/>
  <app-footer />
</template>

<script>
import appHeader from '@/cmps/app-header.vue'
import appFooter from './cmps/app-footer.vue'
import firebaseService from './services/firebase.service.js'
import taskList from './cmps/task-list.vue'

export default {
  components: {
    appHeader,
    appFooter,
    taskList,
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {
    tasks(){
      return this.$store.getters.tasks
    }
  },
  created(){
    this.$store.dispatch({type:'query'})
  }

}
</script>


