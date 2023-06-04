import { defineStore } from 'pinia'
import journal from '@/data/journal.json'
import journalTableKeys from '@/data/journalTableKeys.json'

export const useJournalStore = defineStore('journalStore', {
    // states
    state: () =>  {
        return {
            journal,
            activeGroup: 982,
            activeSubject: 'mathematic',
            journalTableKeys
        }
    },
    
    // actions
    actions: {
       
    }
})