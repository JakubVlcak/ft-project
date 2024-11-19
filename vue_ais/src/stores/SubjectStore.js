// src/stores/subjectStore.js
import { defineStore } from 'pinia'

// Create a store using Pinia
export const useSubjectStore = defineStore('subjectStore', {
  state: () => ({
    selectedSemester: 'all',
    totalCredits: 0,
    addedSubjects: new Set(),
    subjects: {
      pp: [
        {
          title: 'Formálne jazyky a automaty',
          credity: 6,
          popis: '6K, ZS',
          semester: 'ZS',
        },
        {
          title: 'Internet vecí',
          credity: 6,
          popis: '6K, LS',
          semester: 'LS',
        },
        {
          title: 'Koncepty počítačovej bezpečnosti',
          credity: 6,
          popis: '6K, ZS',
          semester: 'ZS',
        },
        {
          title: 'Odborná prax',
          credity: 5,
          popis: '5K, ZS',
          semester: 'ZS',
        },
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
    },
  }),
  getters: {
    filteredPP(state) {
      if (state.selectedSemester === 'all') {
        return state.subjects.pp
      }
      return state.subjects.pp.filter(
        subject => subject.semester === state.selectedSemester,
      )
    },
    filteredPV(state) {
      if (state.selectedSemester === 'all') {
        return state.subjects.pv
      }
      return state.subjects.pv.filter(
        subject => subject.semester === state.selectedSemester,
      )
    },
  },
  actions: {
    addCredits(subjectTitle, creditsToAdd) {
      if (!this.addedSubjects.has(subjectTitle)) {
        this.totalCredits += creditsToAdd
        this.addedSubjects.add(subjectTitle)
      }
    },
  },
})
