import { defineStore } from 'pinia'
import sheadule from '@/data/sheadule.json'

export const useSheaduleStore = defineStore('sheaduleStore', {
    // states
    state: () =>  {
        return {
            sheadule
        }
    },
    
    // actions
    actions: {
       
    }
})