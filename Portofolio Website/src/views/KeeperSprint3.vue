<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
        <img  class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="246" height="125" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
    </div>
    <div class="container_KeeperSprint1_content">
            <h1>Over het project</h1>
            <p>
                Tijdens dit project heb ik een keeperwebshop gemaakt. Mijn doel is om een webshop te maken waar keepers spullen kunnen kopen.
                (Denk hierbij aan keepershandschoenen en keeperskleding). Verder maak ik een website design, logo en een website.
            </p>
            <h2>Sprint 3</h2>

            <h3>Redesign webshop</h3>
            <p>
            </p>

            <div class="container_buttons">
                <button><RouterLink to="/leeruitkomsten">Design</RouterLink></button>
            </div>
        </div>
    </div>
</template>
<style>
.containerPenaltyShooterImages{
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.containerPenaltyShooterImages img {
    height: 300px;
}
button {
    background-color: black;
    border: none;
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
.container_images {
  height: 200px;
}
.container_buttons, .container_images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.container_background {
    background-color: #D3AE87;
}
.container_KeeperSprint1_content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-left: 10%;
    margin-right: 10%;
}
.container_KeeperSprint1_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
