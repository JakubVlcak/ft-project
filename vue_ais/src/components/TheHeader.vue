<template>
  <header>
    <RouterLink to="/"
      ><div class="aisLogo"><img :src="aisLogo" alt="Logo" /></div
    ></RouterLink>
    <h1>Študent</h1>

    <div class="Student">
      <div class="profileIcon"><img :src="profileIcon" alt="Icon" /></div>
      <h2>Jakub V</h2>
      <div class="menu-icon">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </header>
</template>

<script>
import aisLogo from '@/assets/ais_logo.png' 
import profileIcon from '@/assets/profile_icon.png'

export default {
  name: 'TheHeader',
  data() {
    return {
      aisLogo, 
      profileIcon,
    }
  },
}
</script>

<style scoped>


.Student {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
}
.Student h2 {
  margin-right: 50px; 
  padding: 10px;
  font-weight: bold;
  font-size: medium;
}

header {
  background-color: #0069c8;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 5px;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  color: white;
  height: 60px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.aisLogo img {
  width: 90px; 
  height: auto; 
}
.profileIcon img {
  width: 30px; 
  padding-top: 5px;
}
.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  margin-right: 10px;
}

.menu-icon .dot {
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 40%;
}
h1 {
  font-weight: bold;
  padding: 0px;
  letter-spacing: -0.8px;
}
</style>
