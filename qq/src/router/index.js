import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contact from '@/components/contact/Contact'
import ContactNav from '@/components/contact/ContactNav'
import Message from '@/components/message/Message'
import Action from '@/components/action/Action'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/contact'
    },
    {
      path: '/contact',
      //name: 'Contact',
      component: Contact,
      children:[
        {
          path:'/contact',
          component:  ContactNav
        }
      ]
    },
    {
      path: '/message',
      component: Message
    },
    {
      path:'/action',
      component: Action
    }

  ]
})
