<template>
  <main class="task-details" v-if="tasks">
  
  <section class="tasks-container">

    <task-list :tasks="tasks"/>
  </section>

  </main>
</template>

<script>
import taskList from '../cmps/task-list.vue'
import firebaseService from '../services/firebase.service';
  export default {
    components:{
      taskList
    },
    computed:{
      tasks(){
      return this.$store.getters.tasks
    }
    }
  }
</script>