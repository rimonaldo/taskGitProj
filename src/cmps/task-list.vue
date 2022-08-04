<template>
<h1>branch practice</h1>
    <task-preview v-for="task in tasks" :key="task.id" :task="task" @click="route(task.id)" />
</template>
 <script>
 import taskPreview from '@/cmps/task-preview.vue'

 export default {
 name: 'taskList',
 props:{
  tasks:Array
 },
  data() {
    return {};
    },
    methods: {
      route(taskId){
        console.log(taskId);
      },
    },
     computed: {},
    components: { 
      taskPreview
      },
  }
  </script>
 <style></style>