<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<link href='https://fonts.googleapis.com/css?family=Fjalla One' rel='stylesheet'>
  <header>
    <nav>
      <div class="navbar">
        <RouterLink to="/">Projecten</RouterLink>
        <RouterLink to="/leeruitkomsten">Leeruitkomsten</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
