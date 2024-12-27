
<template>
  <TheHeader />
  <div class="added-subjects">
    <h2>Rozvrh</h2>
    <form>
      <input
        type="radio"
        id="option2"
        name="semester"
        value="ZS"
        class="checkbox-round"
        v-model="selectedSemester"
      />
      <label>Zimný semester</label>
      <input
        type="radio"
        id="option3"
        name="semester"
        value="LS"
        class="checkbox-round"
        v-model="selectedSemester"
      />
      <label>Letný semester</label>
      
    </form>
    <div v-if="addedSubjectDetails.length === 0">
      <p>Nemáš pridané žiadne predmety.</p>
    </div>
    <ul v-else>
      <li v-for="(subject, index) in filteredAddedSubjects" :key="index" @click="toggleSubject(subject.title)">
        <strong>{{ subject.title }}</strong> - {{ subject.popis }} ({{ subject.credity }} Kredity)
        
        <div v-if="expandedSubject === subject.title && subject.times">
          <ul class="time-list">
            <li v-for="(time, tIndex) in subject.times" :key="tIndex">
              {{ time.day }}: {{ time.startTime }} - {{ time.endTime }} {{ time.type}} ({{ time.roomNumber }})
              <button @click.stop="addToRozvrh(subject.title, time)">pridat do rozvrhu</button>
              <button @click.stop="removeFromRozvrh(subject.title, time.day)">odobrat</button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <div>
  <h3>Rozvrh</h3>
  <div v-for="(subjects, day) in rozvrh" :key="day">
    <h4>{{ day }}</h4>
    <ul>
      <li v-for="(subject, index) in subjects" :key="index">
        <strong>{{ subject.title }}</strong>
        <span>{{ subject.startTime }} - {{ subject.endTime }}</span>
        <span>{{ subject.type }}</span>
        <span>{{ subject.roomNumber }}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import { useSubjectStore } from '@/stores/SubjectStore'


export default {
  components: {
    TheHeader,
  },
  data() {
    const subjectStore = useSubjectStore()
    return {
      expandedSubject: null,
      subjectStore,
      rozvrh: {
      Po: [],
      Ut: [],
      St: [],
      Št: [],
      Pi: [],
    },
    };
    
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

    addedSubjectDetails() {
      const subjectStore = useSubjectStore();
      return subjectStore.addedSubjectDetails;
    },
    filteredAddedSubjects() {
      // Filter by semester
      if (this.selectedSemester === 'all') {
        return this.addedSubjectDetails
      }
      return this.addedSubjectDetails.filter(
        subject => subject.semester === this.selectedSemester
      )
    },
    
  },
  methods: {
  toggleSubject(subjectTitle) {
    this.expandedSubject = this.expandedSubject === subjectTitle ? null : subjectTitle;
  },
  addToRozvrh(subjectTitle, time) {

  if (time.type !== 'Prednáška') {
    const alreadyAdded = Object.values(this.rozvrh).some(day =>
      day.some(entry => entry.title === subjectTitle)
    );

    if (alreadyAdded) {
      return;
    };
  }

  if (this.rozvrh[time.day]) {
    // zabezpecenie duplicity 
    const existsOnDay = this.rozvrh[time.day].some(
      entry =>
        entry.title === subjectTitle &&
        entry.startTime === time.startTime &&
        entry.endTime === time.endTime &&
        entry.type === time.type
    );

    if (!existsOnDay) {
      this.rozvrh[time.day].push({
        title: subjectTitle,
        startTime: time.startTime,
        endTime: time.endTime,
        type: time.type,
        roomNumber: time.roomNumber,
      });
    }
    
  }
  
},
removeFromRozvrh(subjectTitle, day) {
    if (this.rozvrh[day]) {
      this.rozvrh[day] = this.rozvrh[day].filter(entry => entry.title !== subjectTitle)
    }
}
  }
}
</script>

<style scoped>
.added-subjects {
  margin: 20px auto;
  width: 90%;
  text-align: center;
}
h2 {
  color: #0069c8;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f9f9fb;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
li:hover {
  background: #e6f0ff;
}
.time-list {
  margin-top: 10px;
  list-style: none;
  padding: 0;
}
.time-list li {
  background: #fff;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 3px 0;
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
form {
  display: center;
  flex-direction: row-reverse;
  justify-content: flex-start;
}
</style>
