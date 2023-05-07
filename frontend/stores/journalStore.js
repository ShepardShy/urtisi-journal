import { defineStore } from 'pinia'
import journal from '@/data/journal.json'

export const useJournalStore = defineStore('journalStore', {
    // states
    state: () =>  {
        return {
            journal
        }
    },
    
    // actions
    actions: {
       
    }
})