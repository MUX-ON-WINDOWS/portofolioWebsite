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
            <p>In dit project ga ik een keeperswebshop realiseren. Hierbij begin ik met helemaal niks en ga ik alles zelf maken. Denk aan een website, logo, design en etc. Deze webshop word bedoeld voor keepers om keepersspullen te kopen.</p>
            <h2>Sprint 2</h2>

            <h3>Onderzoek Vue.js en React.js</h3>
            <p>Ik ben begonnen met een onderzoek tussen 2 frameworks, deze waren Vue.js en React.js. In dit onderzoek heb ik gekeken welk framework het beste was voor mijn project. Uiteindelijk heb ik gekozen voor Vue.js omdat Vue.js veel makkelijker is te leren dan React.js in de korte tijd die ik heb voor dit project.</p>

            <h3>Development website:</h3>
            <p>In deze sprint heb ik vooral gefocust op het maken van de functionaliteit van de webshop denk hierbij aan het toevoegen van items in je shopping cart. Dit heb gedaan met behulp van een store. Dit houd in dat lokaal je je data aangeroepen kan worden over verschillende components. </p>

            <h1>Leeruitkomsten die ik aan toon in dit project:</h1>
            <div class="container_buttons">
                <button><RouterLink to="/leeruitkomsten">Research</RouterLink></button>
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
