import home from './components/home.vue';
import menu from './components/menu.vue';
import special from './components/special.vue';
import about from './components/about.vue';
import contact from './components/contact.vue';

const routes=[
{path:'/home',component:home},
{path:'/menu',component:menu},
{path:'/special',component:special},
{path:'/about',component:about},
{path:'/contact',component:contact},
{path:'/',redirect:'/home'}
]

export default routes;