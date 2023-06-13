<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
        <img  class="logo" src="@/assets/KathleenLogoFlatRed2.png" width="246" height="125" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
    </div>
    <div class="container_Kathleen_content">
        <h1>Kathleen Willems</h1>
        <h2>Over het project</h2>
            <p>
                <!-- anders maken -->
                In dit project hebben we een brand gemaakt voor Kathleen Willems.
                Hieronder leg ik uit wat ik heb gemaakt in dit project en hoe ik mijn leerdoelen heb gerealiseerd.
            </p>

        <h3>Moodboard:</h3>
        <p>
            Voor het maken van het <a href="https://i507258.hera.fhict.nl/Kathleen/Moodboard_KathleenWillems_Max.png">moodboard</a>
            heb ik inspiratie opgedaan door onderzoek te doen wat voor persoon Kathleen is.
            Hierna heb ik passende afbeeldingen gezocht voor mijn moodboard.
        </p>

        <h3>Stylescape:</h3>
        <p>In deze <a href="https://i507258.hera.fhict.nl/Kathleen/styleScape_Max.png">Stylescape</a> heb ik alle data die ik heb verzameld in het
            moodboard opgenomen.
        </p>
        <img src="@/assets/styleScape_Max.png" width="100%" />

        <h3> Instagram pagina:</h3>
        <p>
            Voordat ik begon met het maken van mijn <a href="https://i507258.hera.fhict.nl/Kathleen/Brand%20guide%20kathleen.pdf">Instagram-pagina</a>
            heb ik eerst onderzoek gedaan hoe andere Instagram-pagina's er uitzien.
            Vervolgens heb ik de Instagram-pagina in Illustrator gemaakt.
        </p>
        <img src="@/assets/KathleenWillemsInsta_Max.png" width="60%"/>

        <h3>Brandguide:</h3>
        <p>
            De <a href="https://i507258.hera.fhict.nl/Kathleen/Brand%20guide%20kathleen.pdf">brandguide</a> hebben we als groep gemaakt door
            alle stylescapes te combineren.
        </p>

        <h3>Content strategie (planning):</h3>
        <p>
            Bij het maken van de <a href="https://i507258.hera.fhict.nl/research/onderzoekPlanning_TikTok%26Instagram.pdf">content strategie</a> heb ik eerst onderzoek
            gedaan naar de beste tijden wanneer je iets kan posten op Instagram en TikTok.
            Hierna heb ik een weekplanning uitgeschreven. Hier heb ik ook tijden aangeven wanneer je het beste op comments kan reageren.
        </p>

        <h3>Website design:</h3>
        <p>
            Eerst ben ik gaan kijken wat Kathleen allemaal op haar huidige website heeft staan. De bestaande data heb ik overgenomen.
            Bij het maken van de website heb ik het per sectie opgebouwd (Denk aan opbouw homescreen en about sectie).
            Bij elke afgeronde versie heb ik om feedback gevraagd. Deze feedback heb ik ook steeds verwerkt in de nieuwe versie.
        </p>

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
.container_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.container_background {
    background-color: #D3AE87;
}
.container_Kathleen_content {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 10%;
    margin-right: 10%;
}
.container_Kathleen_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
