<template>
  <h1>details</h1>
</template>
 <script>
 export default {
 name: 'ProjectApp',
    components: {},
  data() {
   return {
    task:{}
   };
    },
  created() {
    console.log('this.$route.params',this.$route.params.taskId);
  },
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style></style>