<script>
import TheHeader from '@/components/TheHeader.vue'
import { useSubjectStore } from '@/stores/SubjectStore'

export default {
  components: {
    TheHeader,
  },
  computed: {
    addedSubjectDetails() {
      const subjectStore = useSubjectStore()
      return subjectStore.addedSubjectDetails
    },
  },
}
</script>

<template>
  <TheHeader />
  <div class="added-subjects">
    <h2>Rozvrh</h2>
    <div v-if="addedSubjectDetails.length === 0">
      <p>Nemas pridané žiadne predmety.</p>
    </div>
    <ul v-else>
      <li v-for="(subject, index) in addedSubjectDetails" :key="index">
        <strong>{{ subject.title }}</strong> - {{ subject.popis }} ({{
          subject.credity
        }}
        Kredity)
      </li>
    </ul>
  </div>
</template>

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
</style>
