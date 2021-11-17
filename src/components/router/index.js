import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import SecondaryAccount from '../secondaryAccount/SecondaryAccount.vue';
import SharedMailbox from '../exchange/SharedMailbox.vue';
import PKMS from '../hsn/PKMS.vue';
import Centrify from '../centrify/Centrify.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/NonPrimaryADAccount/SecondaryAccount/',
      name: 'SecondaryAccount',
      component: SecondaryAccount,
    },
    {
      path: '/Exchange/SharedMailbox/',
      name: 'SharedMailbox',
      component: SharedMailbox,
    },
    {
      path: '/HSN/PKMS/',
      name: 'PKMS',
      component: PKMS,
    },
    {
      path: '/Other/Centrify',
      name: 'Centrify',
      component: Centrify,
    },
  ],
});
