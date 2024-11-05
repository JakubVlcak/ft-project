<template>
    <body>
        <div class="announcement">
            <p>Vážení študenti,<br><br>

dovoľujeme si vás informovať o zverejnení vyhlásenia<br><br>

<a href="https://www.ukf.sk/verejnost/aktuality/oznamy/6546-volby-do-as-ukf-v-nitre-vyhlasenie-volieb-do-studentskej-casti" target="_blank">vyhlásenia volieb do študentskej časti</a> a volieb do <a href="https://www.ukf.sk/verejnost/aktuality/oznamy/6547-volby-do-srvs-za-ukf-vyhlasenie-volieb">Študentskej rady vysokých škôl SR za UKF v Nitre.</a><br><br>

Tešíme sa na Vašu účasť!<br><br>

S pozdravom<br><br>

Kancelária rektora UKF v Nitre</p>
        </div>
       
<button @click="show = !show">
    <div class="notification-card">
        <div class="notification-title">Notifikácie</div>
        <div class="notification-icon">
        <div class="notification-badge">0</div>
        <div :class="['dropdown-icon', { 'rotate': show }]">
            <img :src="dropdown_icon" alt="Icon" />
          </div>
    </div>
</div>
</button>
<div class="subject-evaluation" v-if="show">
        <div class="notification-title">O hodnoteniach predmetov</div>
        <div class="notification-icon">
        <div class="notification-badge">0</div>
        <div class="dropdown-icon"><img :src="dropdown_icon" alt="Icon" /></div>
    </div>
</div>
<div class="dates-evaluation" v-if="show">
        <div class="notification-title">O termínoch hodnotenia</div>
        <div class="notification-icon">
        <div class="notification-badge">0</div>
        <div class="dropdown-icon"><img :src="dropdown_icon" alt="Icon" /></div>
    </div>
</div>
<div class="about-documents" v-if="show">
        <div class="notification-title">O termínoch hodnotenia</div>
        <div class="notification-icon">
        <div class="notification-badge">0</div>
        <div class="dropdown-icon"><img :src="dropdown_icon" alt="Icon" /></div>
    </div>
</div>


</body>
</template>

<script>
import dropdown_icon from '@/assets/dropdown_icon.png'
export default {
    name: 'Notification',
    data() {
      return {
        dropdown_icon,
        show: false,
      };
    },
  };
</script>

<style scoped>


        .notification-card {
            width: 50vh;
            border-radius: 20px;
            padding: 10px 20px;
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
/* Ikonka animacia */
        .notification-icon {
            display: flex;
            align-items: center;
            
        }
        .dropdown-icon {
         transition: 0.3s ease; 
        }

        .rotate {
         transform: rotate(180deg); 
        }

        .notification-badge {
            background-color: #f44336; /* Red color */
            color: white;
            font-size: 12px;
            border-radius: 50%;
            padding: 5px 10px;
            margin-right: 15px;
        }

        .dropdown-icon img {
            width: 25px;
            padding: 3px;
            }
            button{
                border-color: white;
                border: 0px;
            }

        .subject-evaluation{
            width: 450px;
            border-radius: 20px;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            cursor: pointer;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
            margin-top: 10px;
        }
        .dates-evaluation{
            width: 450px;
            border-radius: 20px;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            cursor: pointer;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
            margin-top: 10px;
        }
        .about-documents{
            width: 450px;
            border-radius: 20px;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            cursor: pointer;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
            margin-top: 10px;
        }
            .announcement{
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