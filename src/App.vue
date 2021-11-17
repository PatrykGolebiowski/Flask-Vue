<template>

  <sidebar-menu v-model:collapsed="collapsed" :menu="menu" @item-click="onItemClick" />
  <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = false" />
    <div :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
      <div class="row h-100">
        <div class="col-sm-12 my-auto">
          <div class="container">
            <router-view />
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'App',
  data() {
    return {
      menu: [
        {
          href: '/',
          title: 'Home',
          icon: 'fas fa-home',
        },
        {
          header: 'Powershell',
          hiddenOnCollapse: true,
        },
        {
          href: '/Powershell/Get-ADUser',
          title: 'Get-ADUser',
          icon: 'fas fa-laptop-code',
        },
        {
          href: '/Powershell/Get-ADGroup',
          title: 'Get-ADGroup',
          icon: 'fas fa-laptop-code',
        },
        {
          href: '/Powershell/CompareUsers',
          title: 'Compare users',
          icon: 'fas fa-equals',
        },
        {
          href: '/Powershell/CustomCommand',
          title: 'Custom command',
          icon: 'fas fa-brain',
        },
        {
          header: 'Non-Primary AD Account',
          hiddenOnCollapse: true,
        },
        {
          href: '/NonPrimaryADAccount/SecondaryAccount/',
          title: 'Secondary Account',
          icon: 'far fa-address-card',
        },
        {
          href: '/NonPrimaryADAccount/ServiceAccount/',
          title: 'Service Account',
          icon: 'far fa-address-card',
        },
        {
          header: 'Exchange',
          hiddenOnCollapse: true,
        },
        {
          href: '/Exchange/SharedMailbox/',
          title: 'Shared Mailbox - QVC',
          icon: 'fas fa-inbox',
        },
        {
          header: 'HSN',
          hiddenOnCollapse: true,
        },
        {
          href: '/HSN/PKMS/',
          title: 'PKMS',
          icon: 'fas fa-poo',
        },
        {
          href: '/HSN/WMI/',
          title: 'WMI',
          icon: 'fas fa-poo',
        },
        {
          header: 'Other',
          hiddenOnCollapse: true,
        },
        {
          href: '/Other/Centrify/',
          title: 'Centrify',
          icon: 'fas fa-server',
        },
        {
          href: '/Other/Dashboard/',
          title: 'Dashboard',
          icon: 'fas fa-chalkboard',
        },
      ],
      collapsed: true,
      isOnMobile: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onItemClick() {
      this.collapsed = true;
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
 body, html {
  margin: 0;
  padding: 0;
}
 body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}
 #demo {
  padding-left: 290px;
  transition: 0.3s ease;
}
 #demo.collapsed {
  padding-left: 65px;
}
 #demo.onmobile {
  padding-left: 65px;
}
 .sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
 .demo {
  padding: 50px;
}
 .container {
  max-width: 900px;
}

</style>
