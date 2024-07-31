<script setup>
import { RouterLink } from 'vue-router'


</script>


<template>
<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Mon CV en HTML et CSS </title>
        <link rel="stylesheet" href="./Assets/css/style.css">
        <link rel="icon" type="image/png" href="../Assets/images/cv.png">
    </head>

    <body>
        <header>
                    <figure>
                        <img src="../Assets/images/Photo-CV.jpg" alt="Photo de profil" id="profil">
                        <a href="../Devoir 1 CV en HTML et CSS/Assets/images/Photo CV.jpg" target="_blank" id="profil"></a>
                    </figure>    
                    <h1 class="p-1"> Quentin HOARAU</h1>
                    <h2 class="p-1">Développeur web junior</h2>

                    <nav> 
                        <a href="https://www.google.fr/maps/place/%C3%8Ele+aux+Ours/@74.4249528,18.6752979,10z/data=!3m1!4b1!4m6!3m5!1s0x45bdf181870a1d07:0x927c85745dee2378!8m2!3d74.4522484!4d19.1151973!16zL20vMDE4dnJj?entry=ttu" target="_blank"> 01 Rue de la liberté 00000 îles aux ours</a>
                        <a href="mailto:quentin.hoarau1995@outlook.fr"> quentin.hoarau1995@outlook.fr </a>
                        <a href="tel:0606060606"> 0606060606 </a>
                    </nav>
        </header>

        <main>  
            <section>
                 
                <div id="bloc-2">
                    <h3> A propos </h3>
                        <article> Je suis un homme passionné, curieux, minutieux. Ce qui me rend prêt
                                à relever des défis et à résoudre toutes sortes de problématique. 
                                Voulant me perfectionner dans le mon du jeu vidéo, détermination
                                sans faille. Mon expertise technique, couplée à ma soif de perfection,
                                font de moi un acteur incontournable dans le monde numérique en perpétuelle évolution.</article>
                    <h3> Langues parlées </h3>
                        
                            <ul id="liste"> Français - Parfaitement </ul>
                            <ul id="liste-2"> Anglais - intermédiaire </ul>
                            <ul id="liste-3"> Japonais - Débutant </ul>
                            <ul id="liste-4"> Créole Réunionnais - Langue maternelle </ul>
                        
                    <h3> Centres d'intérêts </h3>
                     
                            <ul id="liste-5"> Jeux vidéos </ul>
                            <ul id="liste-6"> Voyages </ul>
                            <ul id="liste-7"> Animaux </ul>
                    
                </div>
               
                <div id="bloc-3">
                    <h3> Expériences professionnelles </h3>
                        <p><b>Chauffeur PL chez diverses entreprises</b></p>
                        <p> De Mai 2017 à Octobre 2022 : <br>
                            J'ai effectué des livraisons de colis, livraisons en vrac, livraisons d'arbres et d'animaux vivants </p>
                        <p><b>Écrivain chez Atypique Studio</b></p>
                        <p> De Avril 2023 à Octobre 2023 : </p> <br>
                            <p> J'ai écrit des fiches de personnages pour des jeux vidéos et des livres </p>
                    <h3> Diplômes/Formations </h3>
                        <p> Je possède : <br> </p>
                            <ul> <b>Le bac STAV</b> <br>
                            de l'année 2013 <br>
                            Du LEGTA de Saint-Paul </ul>
                            <ul> <b>Permis C / FIMO / Matières dangeureuses / Caces grue et Manitou</b> <br>
                            Obtenu en 2017 <br>
                            RSMA de Saint-Pierre      
                            </ul>
                          
                    <h3> Compétences </h3>
                        <ul> HTML 5 - Débutant </ul>
                        <ul> CSS - Débutant </ul>
                        <ul> Git et Github - Débutant </ul>
                </div> 
            </section> 
        </main>

        <footer>
                    <a href="https://www.facebook.com/quentin.legros.18" target="_blank">  <img src="../Assets/images/facebook.png" alt="icône Facebook" id="img-2"></a>
                    <a href="https://www.linkedin.com/in/quentin-hoarau-7051a326a/ " target="_blank">  <img src="../Assets/images/linkedin.png" alt="icône Linkedin" id="img-3"></a>
                    <a href="https://github.com/Archeros974" target="_blank">  <img src="../Assets/images/github.png" alt="icône Github" id="img-4"></a>
                    <small>Dernière Mise à jour le 22 Décembre 2023 </small>  
        </footer>
    </body>
</html>

</template>

<style scoped>
@font-face {
    font-family: 'Lato', sans-serif;
    src: url(../fonts/Lato-Bold.ttf) format('truetype');
}

@font-face {
    font-family: 'Raleway', sans-serif;
    src: url(../fonts/Raleway-Light.ttf) format('truetype');
}

*{
    box-sizing: content-box;
}

body{
    max-width: 1160px;
    margin: 0 auto;
}

header{
    background-color: #782221;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
}

.p-1{
    color: white;
}

#profil:hover{
    cursor: zoom-in;
}


section{
    width: 1216px;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

nav{
    background-color: #2c1d27;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#bloc-1{
    background-color: #782221;
    grid-row: 1;
    grid-column: 1 / 5;
    
}

main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#bloc-2{
    background-color: #782221;
    display: flex;
    flex-direction: column;
    width: 30%;
    /* padding-right: 20px; */
}

#bloc-3{
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 70%;
}


#bloc-4{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
}


figure{ 
    width: 110px;
    height: 110px;
}

img{ 
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 20px rgb(129, 93, 16);
}

#img-2{
    width: 32px;
    height: 32px;
}

#img-2:hover{
    opacity: 50%;
}

#img-3{
    width: 32px;
    height: 32px;

}

#img-3:hover{
    opacity: 50%;
}

#img-4{
    width: 32px;
    height: 32px;
  
}

#img-4:hover{
    opacity: 50%;
}

h3{
    background-color: #dbc2a4;
    display: flex;
    padding-right: 20px;
    text-indent: 20px;
    font-family: 'Lato', sans-serif;
}


nav{ 
    flex-direction: row;
}

footer{
    background-color: #782221;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
}

article{
    text-indent: 50px;
    text-align: justify;
    width: 300px;                    
    padding: 10px;
    margin: 20px;
    color: white;
}

#liste{
    color: white;
}
#liste-2{
    color: white;
}#liste-3{
    color: white;
}#liste-4{
    color: white;
}#liste-5{
    color: white;
}#liste-6{
    color: white;
}#liste-7{
    color: white;
}#liste-8{
    color: white;
}

p{
    text-indent: 20px;
}

#p:hover{
    column-rule-color: #782221;
}

#p-1{
    color: white;
}

a{
    color: white;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
    color: white;
}

small{
    color: white;
}
</style>
