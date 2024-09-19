<template>
  <div id="app">
    <NavbarComponent />
    <div class="container-fluid">
      <div class="row">
        <SidebarComponent />
        <div class="main-content">
          <router-view />
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// import VueRouter from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  border: 2px solid black;
  /* Set minimum height to fill the viewport */
}



.main-content {
  height: 1200px;
  margin-left: 20%;
  /* Offset for sidebar */
  padding-top: 70px;
  /* Space for navbar */
  height: calc(100vh - 70px - 100px);
  /* Adjust for navbar and footer height */
}
</style>
