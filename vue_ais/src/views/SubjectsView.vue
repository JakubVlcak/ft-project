<template>
  <TheHeader />
  <div class="subjectsCardTitle">
    <h1>Predmety</h1>
  </div>
  <div class="subjectMainCard">
    <form>
      <label>Letný semester</label>
      <input
        type="radio"
        id="option3"
        name="semester"
        value="LS"
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

      <label>Celý rok</label>
      <input
        type="radio"
        id="option1"
        name="semester"
        value="all"
        class="checkbox-round"
        v-model="selectedSemester"
      />
    </form>
    <div class="SubjectsCard">
      <div class="SubjectTitle">
        <h2>Povinné predmety</h2>
        <h2>Kredity {{ totalCredits }}</h2>
      </div>
      <hr />
      <div v-for="(subject, index) in filteredPP" :key="index" class="subject">
        {{ subject.title }} - {{ subject.popis }}
        <div class="button-group">
          <button
            :disabled="!addedSubjects.has(subject.title)"
            @click="removeCredits(subject.title)"
          >
            Odobrať predmet
          </button>
          <button
            :disabled="addedSubjects.has(subject.title)"
            @click="addCredits(subject.title, subject.credity)"
          >
            Pridať predmet
          </button>
        </div>
      </div>
      <div class="SubjectTitle">
        <h2>Povinne voliteľné predmety</h2>
      </div>
      <hr />
      <div v-for="(subject, index) in filteredPV" :key="index" class="subject">
        {{ subject.title }} - {{ subject.popis }}
        <div class="button-group">
          <button
            :disabled="!addedSubjects.has(subject.title)"
            @click="removeCredits(subject.title)"
          >
            Odobrať predmet
          </button>
          <button
            :disabled="addedSubjects.has(subject.title)"
            @click="addCredits(subject.title, subject.credity)"
          >
            Pridať predmet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSubjectStore } from '@/stores/SubjectStore' // Import the store
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
  data() {
    // Use the Pinia store
    const subjectStore = useSubjectStore()
    return {
      subjectStore,
    }
  },
  computed: {
    selectedSemester: {
      get() {
        return this.subjectStore.selectedSemester
      },
      set(value) {
        this.subjectStore.selectedSemester = value
      },
    },
    totalCredits() {
      return this.subjectStore.totalCredits
    },
    addedSubjects() {
      return this.subjectStore.addedSubjects
    },
    filteredPP() {
      return this.subjectStore.filteredPP
    },
    filteredPV() {
      return this.subjectStore.filteredPV
    },
  },

  methods: {
    addCredits(subjectTitle, creditsToAdd) {
      this.subjectStore.addCredits(subjectTitle, creditsToAdd)
    },
    removeCredits(subjectTitle, creditsToAdd) {
      this.subjectStore.removeCredits(subjectTitle, creditsToAdd)
    },
  },
}
</script>

<style scoped>
.subjectsCardTitle {
  background: #0069c8;
  width: 90%;
  margin: 0 auto;
  text-align: center;
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
  margin: 0 auto;
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
.button-group {
  display: flex;
  gap: 10px; /* Adjust space between buttons */
}
</style>
