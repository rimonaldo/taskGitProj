<template>
  <main class="task-details">
  
  <section class="tasks-container">

    <task-list :tasks="tasks"/>
  </section>

  </main>
</template>

<script>
import taskList from '../cmps/task-list.vue'
  export default {
    components:{
      taskList
    },
    computed:{
      tasks(){
        return
      }
    }
  }
</script>