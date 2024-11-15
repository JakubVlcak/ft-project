<template>
  <div class="container">
    <h2>Študent</h2>
    <hr />
    <br />
    <p>
      IDO: 123456<br /><br />

      Posledné prihlásenie<br />
      18.10.2024 19:23<br />
      78.99.34.67<br /><br />

      Dnes je: <strong>18. 10. 2024</strong><br />
      Meniny má: <strong>Lukáš</strong>
    </p>

    <h2>Aplikácie</h2>
    <hr />

    <div class="container-a">
      <img :src="IconUser" alt="" />
      <p>Osobné údaje</p>
    </div>
    <div class="container-a">
      <img :src="IconUser" alt="" />
      <p>Osoba v AiS2</p>
    </div>
    <div class="container-a">
      <img :src="IconUsers" alt="" />
      <p>Správa použivaťela</p>
    </div>
    <div class="container-a">
      <img :src="IconDokumenty" alt="" />
      <p>Zverejnené dokumenty</p>
    </div>
    <div class="container-a">
      <img :src="IconStudia" alt="" />
      <p>Prehľad štúdií</p>
    </div>
    <div class="container-a">
      <img :src="IconProgramy" alt="" />
      <p>Študíjne programy</p>
    </div>
    <div class="container-a">
      <img :src="IconZlozkaBlue" alt="" />
      <p>Register predmetov</p>
    </div>
    <div class="container-a">
      <img :src="IconNastenka" alt="" />
      <p>Elektronická nástenka</p>
    </div>
    <div class="container-a">
      <img :src="IconHodnotenieBlue" alt="" />
      <p>Prihlášky uchádzača</p>
    </div>
    <div class="container-a">
      <img :src="IconCheckRed" alt="" />
      <p>Prihlasovanie na skúšky</p>
    </div>
    <div class="container-a">
      <img :src="IconVyhladanie" alt="" />
      <p>Vyhľadávanie osôb</p>
    </div>
    <div class="container-a">
      <img :src="IconPraca" alt="" />
      <p>Absolventi</p>
    </div>

    <h2>Diskusia</h2>
    <hr />
  </div>
</template>

<script>
import IconCheckRed from '@/assets/icon-check-red.png'
import IconDokumenty from '@/assets/icon-dokumenty.png'
import IconHodnotenieBlue from '@/assets/icon-hodnotenie-blue.png'
import IconNastenka from '@/assets/icon-nastenka.png'
import IconProgramy from '@/assets/icon-programy.png'
import IconStudia from '@/assets/icon-studia.png'
import IconUser from '@/assets/icon-user.png'
import IconUsers from '@/assets/icon-users.png'
import IconVyhladanie from '@/assets/icon-vyhladanie.png'
import IconZlozkaBlue from '@/assets/icon-zlozka-blue.png'
import IconPraca from '@/assets/icon-praca.png'
export default {
  data() {
    return {
      IconCheckRed, // Make the image available in the template
      IconDokumenty,
      IconHodnotenieBlue,
      IconNastenka,
      IconProgramy,
      IconStudia,
      IconUser,
      IconUsers,
      IconVyhladanie,
      IconZlozkaBlue,
      IconPraca,
    }
  },
}
</script>

<style scoped>
.container {
  padding-left: 30vh;
  padding-right: 5vh;
}
.container-a {
  display: flex;
  align-items: center;
}
.container-a p {
  margin: 0;
  padding: 0;
  padding-left: 10px;
}
.container-a p:hover {
  text-decoration: underline;
  cursor: pointer;
}

hr {
  border: none;
  border-top: 1px solid black; /* Set the thickness and color of the line */
  width: 100%; /* Full width line */
  margin-top: 10px; /* Space between the paragraph and the line */
}
</style>
