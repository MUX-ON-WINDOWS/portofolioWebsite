<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
            <img  class="logo" src="@/assets/logo_wit.png" width="246" height="125" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
    </div>
      <div class="container_MacSprint2_content">
        <h1>Naakt</h1>

        <h2>Over het project:</h2>

        <h3>Dashboard design</h3>

        <h3>Login systeem</h3>

        <!-- <div class="containerPenaltyShooterImages">
            <img src="@/assets/penaltyShooter.png" width="100%" />
            <img src="@/assets/animation.png" width="100%" />
        </div> -->
        <h1>Leeruitkomsten die ik aan toon in dit project:</h1>
            <div class="container_buttons_sprint2_macdonalds">
                <button><RouterLink to="/leeruitkomsten">Design</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Development</RouterLink></button>
            </div>
      </div>
    </div>
</template>
<style>
button {
    background-color: black;
    border: none;
    color: #D3AE87;
    width: 30%;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
}

.button:hover {
    background-color: #D3AE87;
    color: black;
}
.container_buttons_sprint2_macdonalds {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.container_background {
    background-color: #D3AE87;
}
.container_MacSprint2_content {
    display: flex;
    flex-direction: column;
    height: 135vh;
    margin-left: 10%;
    margin-right: 10%;
}
.container_MacSprint2_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}
.container_MacSprint2_content img {
    height: 667px !important;
    width: 377px !important;
}
.containerPenaltyShooterImages{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
}
</style>
