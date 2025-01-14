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

  </body>
</template>

<script>

</script>

<style scoped>
.notification-card {
  width: 70%;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding-left: 10px;
  position: relative; /* Make the card a positioned ancestor */
}
.notification-card:hover {
  background-color: rgb(230, 230, 230); /* Change to white when hovering */
}

.notification-title {
  font-size: 16px;
  color: #555;
  font-weight: bold;
  display: flex;
  padding: 10px;
}

.announcement {
  background-color: orange;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px lightgray;
  width: 70%;
  margin: 10px;
}
.total-badge {
  position: absolute; /* Position it relative to the card */
  top: 15px; /* Adjust the top distance */
  right: 20px; /* Adjust the right distance */
  background-color: red; /* Badge background color */
  color: white; /* Text color */
  border-radius: 50%; /* Make the badge circular */
  padding: 10px 7px; /* Adjust padding for size */
  font-weight: bold; /* Make the text bold */
  font-size: 20px; /* Adjust font size */
}
.toggle-notification-category {
  background-color: #f8f8f8; /* Adjust background color if necessary */
  border-radius: 10px; /* Optionally round the corners */
  padding: 20px; /* Add some padding for better appearance */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow */
  width: 200%; /* Make it full width or adjust as needed */
  max-width: auto; /* Optionally restrict the maximum width */
}
.category-controls {
  display: flex; /* Use flexbox to align the buttons in a row */
  gap: 10px; /* Adds a gap between the buttons */
  padding-left: 10px;
  padding-right: 10px;
}
.clear-btn,
button {
  background-color: transparent; /* Make the background clear */
  border: none; /* Remove border */
  color: #555; /* Set a default text color */
  font-size: 16px; /* Adjust the font size if necessary */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.clear-btn:hover,
button:hover {
  color: #000; /* Change text color on hover for better visibility */
}
.arrow-btn {
  background-color: transparent; /* Clear background */
  border: none; /* Remove border */
  font-size: 24px; /* Make the arrow icon larger */
  color: #555; /* Set arrow color */
  cursor: pointer; /* Pointer cursor on hover */
  margin-left: 10px; /* Add some space between the button and the text */
  align-self: center; /* Center align the button within the card */
  width: 200px;
}

.arrow-btn:hover {
  color: #000; /* Darker color on hover */
}
</style>
