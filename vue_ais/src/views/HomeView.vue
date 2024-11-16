<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheNotification from '../components/TheNotification.vue'
import TheSiderBar from '../components/TheSideBar.vue'
import TheSchedule from '../components/TheSchedule.vue'
</script>

<template>
  <div>
    <TheHeader />
    <div class="main-content">
      <TheSiderBar class="sidebar" />
      <div class="content">
        <div class="notification-wrapper">
          <TheNotification />
        </div>
        <div class="schedule-wrapper">
          <TheSchedule />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main layout for content and sidebar */
.main-content {
  display: flex;
  padding: 0 20px;
}

/* Stack Notification and Schedule vertically in content */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px; /* Optional padding for better spacing */
}

/* Specific wrapper styles for spacing */
.notification-wrapper,
.schedule-wrapper {
  margin: 0; /* Remove any default margin */
}

.notification-wrapper {
  margin-bottom: 20px; /* Control spacing between Notification and Schedule */
}

body {
  margin: 0;
  padding: 0;
  height: auto;
}
</style>
