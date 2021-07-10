Vue.use(VueRouter)
const routes = [
    {
        path: '/login',
        name: 'Login',
        component:() => import('../pages/login/Login')
    },
    {
        path: '/register',
        name: 'Register',
        component:() => import('../pages/register/Register')
    },
    {
        path: '/profile',
        name: 'Profile',
        component:() => import('../pages/profile/Profile')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,from,next)=>{
    next()
})

export default router
