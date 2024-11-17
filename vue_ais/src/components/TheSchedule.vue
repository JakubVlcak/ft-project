<template>
  <RouterLink to="/schedule"
    ><div class="schedule-card">
      <h2>Môj rozvrh, vyhľadávanie rozvrhu</h2>
      <img :src="IconSchedule" alt="" /></div
  ></RouterLink>
</template>

<script>
import IconSchedule from '@/assets/schedule.png'

export default {
  data() {
    return {
      IconSchedule,
    }
  },
}
</script>

<style scoped>
.schedule-card {
  width: 70%;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding-left: 10px;
}
.schedule-card img {
  width: 150px; /* Set a smaller width */
  height: auto; /* Maintain aspect ratio */
}
.schedule-card:hover {
  background-color: rgb(230, 230, 230); /* Change to white when hovering */
}
h2 {
  color: #0069c8;
  margin: 0px;
}
a {
  text-decoration: none;
}
</style>
