import {createRouter, createWebHistory} from 'vue-router'
import markDown from '@/pages/markDown'

const routes = [
    { path: '/', component: markDown },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router