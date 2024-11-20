import { defineStore } from 'pinia'

export const useSubjectStore = defineStore('subjectStore', {
  state: () => ({
    selectedSemester: 'all',
    totalCredits: 0,
    addedSubjects: new Set(),
    addedSubjectDetails: [],
    subjects: [
      {
        title: 'Formálne jazyky a automaty',
        credity: 6,
        popis: '6K, ZS',
        semester: 'ZS',
        subjectValue: 'pp',
      },
      {
        title: 'Internet vecí',
        credity: 6,
        popis: '6K, LS',
        semester: 'LS',
        subjectValue: 'pp',
      },
      {
        title: 'Koncepty počítačovej bezpečnosti',
        credity: 6,
        popis: '6K, ZS',
        semester: 'ZS',
        subjectValue: 'pp',
      },
      {
        title: 'Odborná prax',
        credity: 5,
        popis: '5K, ZS',
        semester: 'ZS',
        subjectValue: 'pp',
      },
      {
        title: 'Počítačová analýza dát',
        credity: 6,
        popis: '6K, ZS',
        semester: 'ZS',
        subjectValue: 'pp',
      },
      {
        title: 'Seminár k bakalárskej práci I.',
        credity: 2,
        popis: '2K, ZS',
        semester: 'ZS',
        subjectValue: 'pp',
      },
      {
        title: 'Seminár k bakalárskej práci II.',
        credity: 2,
        popis: '2K, LS',
        semester: 'LS',
        subjectValue: 'pp',
      },
      {
        title: 'Umelá inteligencia',
        credity: 6,
        popis: '6K, LS',
        semester: 'LS',
        subjectValue: 'pp',
      },
      {
        title: 'Aplikácie počítačových sietí',
        credity: 3,
        popis: '3K, ZS',
        semester: 'ZS',
        subjectValue: 'pv',
      },
      {
        title: 'Aplikácie priemyselných riadiacich systémov',
        credity: 5,
        popis: '5K, ZS',
        semester: 'ZS',
        subjectValue: 'pv',
      },
      {
        title: 'Backendové technológie',
        credity: 5,
        popis: '5K, LS',
        semester: 'LS',
        subjectValue: 'pv',
      },
      {
        title: 'Frontendové technológie',
        credity: 5,
        popis: '5K, ZS',
        semester: 'ZS',
        subjectValue: 'pv',
      },
      {
        title: 'IT projektový manažment',
        credity: 3,
        popis: '3K, LS',
        semester: 'LS',
        subjectValue: 'pv',
      },
      {
        title: 'Modelovanie a simulácia',
        credity: 6,
        popis: '6K, ZS',
        semester: 'ZS',
        subjectValue: 'pv',
      },
      {
        title: 'Programovanie mikroprocesorových systémov',
        credity: 5,
        popis: '5K, LS',
        semester: 'LS',
        subjectValue: 'pv',
      },
      {
        title: 'Testovanie softvéru',
        credity: 3,
        popis: '3K, LS',
        semester: 'LS',
        subjectValue: 'pv',
      },
      {
        title: 'Vývoj 3D aplikácií',
        credity: 3,
        popis: '3K, ZS',
        semester: 'ZS',
        subjectValue: 'pv',
      },
    ],
  }),
  getters: {
    filteredSubjects(state) {
      return state.subjects.filter(
        subject =>
          state.selectedSemester === 'all' ||
          subject.semester === state.selectedSemester,
      )
    },
    filteredPP(state) {
      return this.filteredSubjects.filter(
        subject => subject.subjectValue === 'pp',
      )
    },
    filteredPV(state) {
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
