<template>
  <div class="schedule-card">
    <div class="blue-card" @click="toggleAwesome()">
      <p>3AI22b - aplikovaná informatika (2024/2025)</p>
    </div>
  </div>
  <div v-if="awesome">
    <div class="Zapis">
      <h1>Zápisné listy:</h1>
      <br />
      <RouterLink to="/subjects">
        <h2>Moje predmety v 2024/2025 (3AI22b)</h2>
      </RouterLink>
      <br />
      <h3>Dátum zápisu: 1. 9. 2024 Zápis bol potvrdený študijným oddelením</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
    }
  },
  methods: {
    toggleAwesome() {
      this.awesome = !this.awesome
    },
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
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
}

.schedule-card:hover {
  background-color: rgb(230, 230, 230); /* Change to white when hovering */
}

.blue-card {
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0069c8;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding-left: 10px;
  padding-right: 10px;
}
p {
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
}
.Zapis {
  width: 70%;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
}
h2 {
  color: #0069c8;
  margin: 0px;
}
</style>
