import { defineStore } from 'pinia'
import user from '~/data/user.json'

export const useUserStore = defineStore('userStore', {
    // states
    state: () =>  {
        return {
            user
        }
    },
    
    // actions
    actions: {
       
    }
})