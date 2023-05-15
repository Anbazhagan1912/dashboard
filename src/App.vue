/* eslint-disable */

<script setup>
import SideBar from './components/SideBar.vue';
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <v-app>
    <v-main style="height: 800px;">
      <SideBar />
      <div class="d-flex">
        <Dashboard></Dashboard>
        <!-- <Events></Events> -->
      </div>

    </v-main>
  </v-app>
</template>



