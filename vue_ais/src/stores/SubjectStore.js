import { defineStore } from 'pinia'
import subjectsData from '../data.json'
export const useSubjectStore = defineStore('subjectStore', {
  state: () => ({
    subjects: subjectsData.subjects,
    selectedSemester: 'all',
    totalCredits: 0,
    addedSubjects: new Set(),
    addedSubjectDetails: [],
    
  }),
  getters: {
    filteredSubjects(state) {
      return state.subjects.filter(
        subject =>
          state.selectedSemester === 'all' ||
          subject.semester === state.selectedSemester,
      )
    },
    filteredPP() {
      return this.filteredSubjects.filter(
        subject => subject.subjectValue === 'pp',
      )
    },
    filteredPV() {
      return this.filteredSubjects.filter(
        subject => subject.subjectValue === 'pv',
      )
    },
  },
  actions: {
    addCredits(subjectTitle, creditsToAdd) {
      if (!this.addedSubjects.has(subjectTitle)) {
        const subject = this.subjects.find(sub => sub.title === subjectTitle)
        if (subject) {
          this.totalCredits += creditsToAdd
          this.addedSubjects.add(subjectTitle)
          this.addedSubjectDetails.push(subject)
        }
      }
    },
    removeCredits(subjectTitle) {
      if (this.addedSubjects.has(subjectTitle)) {
        const subject = this.subjects.find(sub => sub.title === subjectTitle)
        if (subject) {
          this.totalCredits -= subject.credity
          this.addedSubjects.delete(subjectTitle)
          this.addedSubjectDetails = this.addedSubjectDetails.filter(
            sub => sub.title !== subjectTitle,
          )
        }
      }
    },
  },
})
