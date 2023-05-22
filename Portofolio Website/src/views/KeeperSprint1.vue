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
            <h2>Sprint 1</h2>

            <h3>Moodboard:</h3>
            Voor dat ik begon met designen heb ik eerst een moodboard gemaakt in figma. Hier voor heb ik inspiratie opgedaan in keeperwebshops en hier passende afbeeldingen voor gezocht.

            <h3>Stylescape:</h3>
            Na het maken van mijn moodboard ben ik begonnen met het filteren van mijn moodboard. Dit resultaat werd mijn Stylescape.

            <h3>Website design:</h3>
            Eerst heb ik onderzoek gedaan naar bestaande webshops voor keepers hier bleek dat er weinig website waren voor keepers. Daarom heb ik ook naar andere webshops gezocht die voor voetbal of voor hockey waren. Na dit onderzoek ben ik begonnen met mijn eerste paar versie’s.
            <div class="container_images">
                <img src="@/assets/BlueBGLogoV2.png" width="100%" />
                <img src="@/assets/goalKeeperLogo_MaxV2.png" width="100%"/>
              <img src="@/assets/YellowBGLogoV2.png" width="100%" />
            </div>
            <h3>Logo:</h3>
            Voor dit logo heb ik eerst een keeper gemaakt die duikt. Hierna heb ik gestest op wat voor kleur dit logo het beste gaat. Hier heb ik feedback over gevraagd en kreeg ik te horen dat er tekst miste van de naam de webshop. Nadat ik dit had toegevoegd had ik een logo.

            <h1>Leeruitkomsten die ik aan toon in dit project:</h1>
            <div class="container_buttons">
                <button><RouterLink to="/leeruitkomsten">Research</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">INTERACTIVE MEDIA</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Design</RouterLink></button>
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
    height: 120px;
    margin: 10px;
}
.container_images img {
  height: 120px;
  width: 168px !important;
}
.container_buttons, .container_images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 10px;
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
