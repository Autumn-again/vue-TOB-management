import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userInfo: {}
        }
    },
    getters: {

    },
    actions: {
        async getUserDate() {
            this.userInfo = {
                name: '林大咩',
                age: '38'
            }
        }
    }
})