
import { createRouter, createWebHistory} from 'vue-router'
import About from "@/components/About";
import taskHistory from "@/components/TaskHistory";
import mainTasks from "@/components/MainTasks";

const routes = [
    { path: '/taskHistory', component: taskHistory },
    { path: '/about', component: About },
    { path: '/mainTasks', component: mainTasks },
]
const router = createRouter({
        history : createWebHistory(),
        routes


    }

)

export default router
