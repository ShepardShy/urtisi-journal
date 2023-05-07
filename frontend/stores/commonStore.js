import { defineStore } from 'pinia'
import navigation from '~/data/navigation.json'

export const useCommonStore = defineStore('commonStore', {
    // states
    state: () =>  {
        return {
            logo: {
                src: '/logo.png',
                alt: 'Логотип УрТИСИ СибГУТИ'
            },
            navigation
        }
    },
    
    // actions
    actions: {
       
    }
})