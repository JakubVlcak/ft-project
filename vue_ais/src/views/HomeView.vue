<script>
import TheHeader from '../components/TheHeader.vue'
import TheNotification from '../components/TheNotification.vue'
import TheSiderBar from '../components/TheSideBar.vue'
import TheSchedule from '../components/TheSchedule.vue'
import TheRecordSheet from '@/components/TheRecordSheet.vue'

export default {
  components: {
    TheHeader,
    TheNotification,
    TheSiderBar,
    TheSchedule,
    TheRecordSheet,
  },
}
</script>

<template>
  <div>
    <TheHeader />
    <div class="main-content">
      <TheSiderBar/>
      <div class="content">
        <div class="notification-wrapper">
          <TheNotification />
        </div>
        <div class="schedule-wrapper">
          <TheSchedule />
          <TheRecordSheet />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.main-content {
  display: flex;
  padding: 0 20px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px; 
}

.notification-wrapper,
.schedule-wrapper {
  margin: 0; 
  display: flex;
  flex-direction: column;
}
.schedule-wrapper > *:not(:last-child) {
  margin-bottom: 20px; 
}

.notification-wrapper {
  margin-bottom: 20px; 
}

body {
  margin: 0;
  padding: 0;
  height: auto;
}
</style>
