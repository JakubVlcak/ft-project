<script></script>

<template>
  <nav>
    <router-view></router-view>
  </nav>
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
