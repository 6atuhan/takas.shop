import { createRouter, createWebHashHistory} from "vue-router";    
import HomePage from "/src/router/views/HomePage.vue"             
const routes=[ {                                                               
        path:'/',                                                              
        name:'Home',                                                           
        component:HomePage,        
    },
    {                                                               
        path:'/deneme',                                                              
        name:'Deneme',                                                           
        component: ()=> import ("/src/router/views/DenemePage.vue")                    
    },
    {                                                               
        path:'/posts/:type',                                                              
        name:'Posts',                                                           
        component: ()=> import ("/src/router/views/PostsPage.vue")                    
    }
    ,
    {                                                               
        path:'/login',                                                              
        name:'Login',                                                           
        component: ()=> import ("/src/router/views/LoginPage.vue")                    
    }]                                                                         
const router =createRouter({                                                   
    history:createWebHashHistory(),                                            
    routes,                                                                    
})                                                                             
export default router;               