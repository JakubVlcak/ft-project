<template>
  <TheHeader />
  <div class="container-subjects">
    <div class="added-subjects">
      <h2>Predmety</h2>
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
        <p>Nemáš pridané žiaden predmet.</p>
      </div>
      <ul v-else>
        <li
          v-for="(subject, index) in filteredAddedSubjects"
          :key="index"
          @click="toggleSubject(subject.title)"
        >
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
    <div></div>
    <div class="container-schedule">
      <div v-for="(subjects, day) in rozvrh" :key="day">
        <h4>{{ day }}</h4>
        <ul>
          <li v-for="(subject, index) in subjects" :key="index" class="schedule-subjects">
            {{ subject.startTime }} - {{ subject.endTime }} <br />
            <strong>{{ subject.title }}</strong> <br />
            {{ subject.type }} <br />
            {{ subject.roomNumber }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import { useSubjectStore } from '@/stores/SubjectStore';

export default {
  components: {
    TheHeader,
  },
  data() {
    const subjectStore = useSubjectStore();
    return {
      expandedSubject: null,
      subjectStore,
      rozvrhZS: {
        Po: [],
        Ut: [],
        St: [],
        Št: [],
        Pi: [],
      },
      rozvrhLS: {
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
        return this.subjectStore.selectedSemester;
      },
      set(value) {
        this.subjectStore.selectedSemester = value;
      },
    },

    addedSubjectDetails() {
      const subjectStore = useSubjectStore();
      return subjectStore.addedSubjectDetails;
    },
    filteredAddedSubjects() {
      // filter podla semestra
      if (this.selectedSemester === 'all') {
        return this.addedSubjectDetails;
      }
      return this.addedSubjectDetails.filter(
        subject => subject.semester === this.selectedSemester
      );
    },
    rozvrh() {
      return this.selectedSemester === 'ZS' ? this.rozvrhZS : this.rozvrhLS;
    },
  },
  methods: {
    toggleSubject(subjectTitle) {
      this.expandedSubject = this.expandedSubject === subjectTitle ? null : subjectTitle;
    },
    addToRozvrh(subjectTitle, time) {
      const targetRozvrh = this.selectedSemester === 'ZS' ? this.rozvrhZS : this.rozvrhLS;

      if (time.type !== 'Prednáška') {
        const alreadyAdded = Object.values(targetRozvrh).some(day =>
          day.some(entry => entry.title === subjectTitle)
        );

        if (alreadyAdded) {
          return;
        }
      }

      if (targetRozvrh[time.day]) {
        // zabezpecenie redundanci
        const existsOnDay = targetRozvrh[time.day].some(
          entry =>
            entry.title === subjectTitle &&
            entry.startTime === time.startTime &&
            entry.endTime === time.endTime &&
            entry.type === time.type
        );

        if (!existsOnDay) {
          targetRozvrh[time.day].push({
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
      const targetRozvrh = this.selectedSemester === 'ZS' ? this.rozvrhZS : this.rozvrhLS;
      if (targetRozvrh[day]) {
        targetRozvrh[day] = targetRozvrh[day].filter(entry => entry.title !== subjectTitle);
      }
    },
  },
};
</script>

<style scoped>
.schedule-subjects {
  background-color: #ddffdd;
  border-color: black;
  cursor: pointer;
}
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
.container-subjects {
  display: flex;
  width: 80%;
  padding-left: 20px;
  padding-right: 20px;
}
.container-schedule {
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
}
h4 {
  padding-left: 10px;
}
</style>