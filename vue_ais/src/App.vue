<script setup>
import TheHeader from './components/TheHeader.vue';
import TheNotification from './components/TheNotification.vue'
import TheSiderBar from './components/TheSideBar.vue'

</script>

<template>

  <html>
  <header>
    <TheHeader></TheHeader>
  </header>
  <body>
    <TheSiderBar></TheSiderBar>
    <TheNotification></TheNotification>  
  </body>
  

</html>
</template>

<style scoped>
body{
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
}


</style>
