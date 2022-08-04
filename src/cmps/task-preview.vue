<template>
<article class="task-preview flex">
  <div class="task-item">{{task.title}}</div>
  <div class="task-item">{{task.description}}</div>
  <div class="task-item">{{task.importance}}</div>
  <div class="task-item">{{task.createdAt}}</div>
  <div class="task-item">{{task.doneAt}}</div>
  <div class="task-item">{{task.status}}</div>
  </article>
</template>
 <script>
 export default {
 name: 'taskPreview',
 props:{
    task:Object
 },
  data() {
   return {};
    },
  methods: {},
  computed: {},
  }
  </script>
 <style></style>