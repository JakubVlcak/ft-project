<template>
  <body>
    <div class="announcement">
      <p>
        Vážení študenti,<br /><br />

        dovoľujeme si vás informovať o zverejnení vyhlásenia<br /><br />

        <a
          href="https://www.ukf.sk/verejnost/aktuality/oznamy/6546-volby-do-as-ukf-v-nitre-vyhlasenie-volieb-do-studentskej-casti"
          target="_blank"
          >vyhlásenia volieb do študentskej časti</a
        >
        a volieb do
        <a
          href="https://www.ukf.sk/verejnost/aktuality/oznamy/6547-volby-do-srvs-za-ukf-vyhlasenie-volieb"
          >Študentskej rady vysokých škôl SR za UKF v Nitre.</a
        ><br /><br />

        Tešíme sa na Vašu účasť!<br /><br />

        S pozdravom<br /><br />

        Kancelária rektora UKF v Nitre
      </p>
    </div>

    <div class="notification-card" @click="toggleAwesome()">
      <div class="notifications-header">
        <h2>Notifikácie</h2>
        <div class="total-badge">{{ totalNotifications }}</div>
      </div>

      <!-- Notification categories -->
      <div v-if="awesome" class="toggle-notification-category">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="notification-category"
        >
          <div class="notification-title">
            <span>{{ category.title }}</span>
            <div class="category-controls">
              <span class="badge">{{ category.count }}</span>
              <button @click.stop="clearNotifications(index)" class="clear-btn">
                🗑️
              </button>
              <button @click.stop="toggleCategory(index)">
                {{ category.isOpen ? '▲' : '▼' }}
              </button>
            </div>
          </div>

          <!-- Show/hide details -->
          <div v-if="category.isOpen" class="notification-details">
            <p>Details about {{ category.title }} notifications...</p>
          </div>
        </div>

        <!-- Maintenance link -->
        <a href="#" class="maintenance-link">Údržba notifikácií</a>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
      categories: [
        { title: 'O hodnoteniach predmetov', count: 18, isOpen: false },
        { title: 'O termínoch hodnotenia', count: 107, isOpen: false },
        { title: 'O dokumentoch', count: 69, isOpen: false },
      ],
    }
  },
  computed: {
    totalNotifications() {
      // Sum of all category counts
      return this.categories.reduce((sum, category) => sum + category.count, 0)
    },
  },
  methods: {
    toggleCategory(index) {
      // Toggle the open state of the category
      this.categories[index].isOpen = !this.categories[index].isOpen
    },
    clearNotifications(index) {
      // Clear notifications for a specific category
      this.categories[index].count = 0
    },
    toggleAwesome() {
      this.awesome = !this.awesome
    },
  },
}
</script>

<style scoped>
.notification-card {
  width: auto;

  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding-left: 50%;
}
.notification-card:hover {
  background-color: rgb(230, 230, 230); /* Change to white when hovering */
}

.notification-title {
  font-size: 16px;
  color: #555;
  font-weight: bold;
}

.announcement {
  background-color: orange;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px lightgray;
  width: auto;
  margin: 10px;
  padding-left: 20px;
  padding-right: 40px;
}
</style>
