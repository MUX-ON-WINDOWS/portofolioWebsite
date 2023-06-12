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
            <p>In dit project hebben we een brand gemaakt voor Kathleen Willems.
                Verder ga ik in dit verslag uitleggen wat ik heb gedaan en hoe ik mijn leerdoelen heb gerealiseerd.
            </p>

        <h3>Producten</h3>

        <h3>Moodboard:</h3>
            <p>
                Voor het maken van de moodboard heb ik inspiratie opgedaan door onderzoek te doen wat voor persoon Kathleen is.
                Hierna heb ik passende afbeeldingen gezocht voor mijn moodboard.
            </p>
        <img src="@/assets/styleScape_Max.png" width="100%" />
        <h3>Stylescape:</h3>
            <p>In deze Stylescape heb ik alle data die ik heb verzameld in de moodboard deze heb gebruikt om een stylescape te maken. </p>

        <img src="@/assets/KathleenWillemsInsta_Max.png" width="60%"  />
        <h3> Instagram pagina:</h3>
            <p>
                Voordat ik begon met het maken van mijn versie van de Instagram pagina heb ik eerst onderzoek gedaan hoe andere pagina’s er uitzagen.
                Hierna ben ik begonnen met het realiseren van de pagina in Illustrator.
            </p>
        <h3>Brandguide:</h3>
            <p>Bij de brandguide hebben we als groep alle stylescapes gecombineerd. Hierover kreeg ik een paar de vraag online wat ik van hun keuzes vond en gaf ik hier feedback over. (bussen staakte hierdoor kon ik niet naar school komen).</p>
        <h3>Content strategie (planning):</h3>
            <p>Bij het maken van de planning heb ik eerst onderzoek gedaan wanneer de beste tijden waren om je post te posten. Hierna heb ik een week planning uitgeschreven. Hier heb ik ook tijden aangeven wanneer je het beste op comments kan reageren.</p>

        <h3>Website design:</h3>
            <p>Eerst heb ik onderzoek gedaan naar de bestaande website van Kathleen. Hier heb ik de bestaande data overgenomen. Bij het maken van de website heb ik het per sectie opgebouwd, denk aan eerst de home screen hierna de about sectie. Elke keer dat als ik een versie had afgerond heb ik om feedback gevraagd. Deze feedback heb ik ook steeds verwerkt in een nieuwe versie.</p>

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
    height: 230vh;
    margin-left: 10%;
    margin-right: 10%;
}
.container_Kathleen_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
