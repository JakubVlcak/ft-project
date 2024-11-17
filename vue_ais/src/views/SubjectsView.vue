<template>
  <TheHeader />
  <div class="subjectsCardTitle">
    <h1>Predmety</h1>
  </div>
  <div class="subjectMainCard">
    <form>
      <label>Celý rok</label>
      <input
        type="radio"
        id="option1"
        name="semester"
        value="all"
        class="checkbox-round"
        v-model="selectedSemester"
      />

      <label>Zimný semester</label>
      <input
        type="radio"
        id="option2"
        name="semester"
        value="ZS"
        class="checkbox-round"
        v-model="selectedSemester"
      />

      <label>Letný semester</label>
      <input
        type="radio"
        id="option3"
        name="semester"
        value="LS"
        class="checkbox-round"
        v-model="selectedSemester"
      />
    </form>
    <div class="SubjectsCard">
      <div class="SubjectTitle">
        <h2>Povinné predmety</h2>
        <h2>Kredity 0/0</h2>
      </div>
      <hr />
      <div v-for="(subject, index) in filteredPP" :key="index" class="subject">
        {{ subject.title }}
        {{ subject.popis }}
        <button>Pridať predmet</button>
      </div>
      <div class="SubjectTitle">
        <h2>Povinne voliteľné predmety</h2>
        <h2>Kredity 0/0</h2>
      </div>
      <hr />
      <div v-for="(subject, index) in filteredPV" :key="index" class="subject">
        {{ subject.title }}
        {{ subject.popis }}
        <button>Pridať predmet</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue' // Import `reactive` from -- Vue Use `ref` for `selectedSemester` -- // Import `computed`
import TheHeader from '@/components/TheHeader.vue'

const selectedSemester = ref('all')

const state = reactive({
  pp: [
    {
      title: 'Formálne jazyky a automaty',
      credity: 6,
      popis: '6K, ZS',
      semester: 'ZS',
    },
    { title: 'Internet vecí', credity: 6, popis: '6K, LS', semester: 'LS' },
    {
      title: 'Koncepty počítačovej bezpečnosti',
      credity: 6,
      popis: '6K, ZS',
      semester: 'ZS',
    },
    { title: 'Odborná prax', credity: 5, popis: '5K, ZS', semester: 'ZS' },
    {
      title: 'Počítačová analýza dát',
      credity: 6,
      popis: '6K, ZS',
      semester: 'ZS',
    },
    {
      title: 'Seminár k bakalárskej práci I.',
      credity: 2,
      popis: '2K, ZS',
      semester: 'ZS',
    },
    {
      title: 'Seminár k bakalárskej práci II.',
      credity: 2,
      popis: '2K, LS',
      semester: 'LS',
    },
    {
      title: 'Umelá inteligencia',
      credity: 6,
      popis: '6K, LS',
      semester: 'LS',
    },
  ],
  pv: [
    {
      title: 'Aplikácie počítačových sietí',
      credity: 3,
      popis: '3K, ZS',
      semester: 'ZS',
    },
    {
      title: 'Aplikácie priemyselných riadiacich systémov',
      credity: 5,
      popis: '5K, ZS',
      semester: 'ZS',
    },
    {
      title: 'Backendové technológie',
      credity: 5,
      popis: '5K, LS',
      semester: 'LS',
    },
    {
      title: 'Frontendové technológie',
      credity: 5,
      popis: '5K, ZS',
      semester: 'ZS',
    },
    {
      title: 'IT projektový manažment',
      credity: 3,
      popis: '3K, LS',
      semester: 'LS',
    },
    {
      title: 'Modelovanie a simulácia',
      credity: 6,
      popis: '6K, ZS',
      semester: 'ZS',
    },
    {
      title: 'Programovanie mikroprocesorových systémov',
      credity: 5,
      popis: '5K, LS',
      semester: 'LS',
    },
    {
      title: 'Testovanie softvéru',
      credity: 3,
      popis: '3K, LS',
      semester: 'LS',
    },
    {
      title: 'Vývoj 3D aplikácií',
      credity: 3,
      popis: '3K, ZS',
      semester: 'ZS',
    },
  ],
})
const filteredPP = computed(() => {
  if (selectedSemester.value === 'all') {
    return state.pp // Show all subjects
  }
  return state.pp.filter(subject => subject.semester === selectedSemester.value)
})

const filteredPV = computed(() => {
  if (selectedSemester.value === 'all') {
    return state.pv // Show all subjects
  }
  return state.pv.filter(subject => subject.semester === selectedSemester.value)
})
</script>

<style scoped>
.subjectsCardTitle {
  background: #0069c8;
  width: 90%;
  margin: 0 auto; /* Centers the card horizontally */
  text-align: center; /* Centers the text content inside the card */
  margin-top: 20px;
}
h1 {
  color: white;
  margin: 0;
}
h2 {
  color: black;
  margin: 0;
}

.subjectMainCard {
  background: #f9f9fb;
  width: 90%;
  margin: 0 auto; /* Centers the card horizontally */
  text-align: center;
  height: 100%;
}
form {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
}
.checkbox-round {
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 2px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.checkbox-round:checked {
  background-color: #ff576d;
}
label {
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 5px;
}
.SubjectTitle {
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  justify-content: space-between;
}
.SubjectsCard {
  background: white;
  width: 90%;
  margin: 0 auto;
  border-radius: 15px;
}
.subject {
  color: black;
  padding-top: 10px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
  justify-content: space-between;
}
</style>
