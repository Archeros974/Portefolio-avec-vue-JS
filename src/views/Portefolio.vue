<script setup>
import { RouterLink } from 'vue-router'

function readFile(){
     window.open('src/assets/PDF/CahierDesCharges.pdf', '_blank');
   }

</script>


<template>
 <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Assets/CSS/index.css">
    <title>Mon nouveau site</title>
</head>

<body>
  <header>
    <figure>
      <img src="../Assets/images/Photo-CV.jpg" alt=" photo de profil">
    </figure>

    <nav> 
        <a href="https://www.google.fr/maps/place/%C3%8Ele+aux+Ours/@74.4249528,18.6752979,10z/data=!3m1!4b1!4m6!3m5!1s0x45bdf181870a1d07:0x927c85745dee2378!8m2!3d74.4522484!4d19.1151973!16zL20vMDE4dnJj?entry=ttu" target="_blank"> 01 Rue de la liberté 00000 îles aux ours</a>
        <a href="mailto:quentin.hoarau1995@outlook.fr"> quentin.hoarau1995@outlook.fr </a>
        <a href="tel:0606060606"> 0606060606 </a>
      
    </nav>
  </header>
  
  <main>
    <section>
                 
      <div id="bloc-1">
        <h3> A propos </h3>
            <article> Je suis un homme passionné, curieux, minutieux. Ce qui me rend prêt
                    à relever des défis et à résoudre toutes sortes de problématique. 
                    Voulant me perfectionner dans le mon du jeu vidéo, détermination
                    sans faille. Mon expertise technique, couplée à ma soif de perfection,
                    fait de moi un acteur incontournable dans le monde numérique en perpétuelle évolution.</article>
      </div>

      <div id="bloc-2">
        <h3> Mes créations </h3>

            <p><b>Mon CV</b></p>
            <routerLink to="/cv"> <img src="../Assets/images/cv.png" id="img-1"> </routerLink>
            
            <p><b>Un cahier des charges</b></p>
            <a @click="readFile"> <img src="../Assets/images/illu_rediger-correctement-un-cahier-des-charges.png" id="img-2"> </a>

            <p><b>Dynamisation d'un espace commentaire</b></p>
              <routerLink to="/DEC"> <img src="../Assets/images/espace.png" id="img-3"> </routerLink>

            

        <h3> Compétences </h3>
            <ul> HTML 5 - Débutant </ul>
            <ul> CSS - Débutant </ul>
            <ul> Javascript - Débutant </ul>
            <ul> Git et Github - Débutant </ul>
    </div>
    </section>
  </main>
      

  <footer>
    <a href="https://www.facebook.com/quentin.legros.18" target="_blank">  <img src="../Assets/images/facebook.png" alt="icône Facebook" id="img-2"></a>
    <a href="https://www.linkedin.com/in/quentin-hoarau-7051a326a/ " target="_blank">  <img src="../Assets/images/linkedin.png" alt="icône Linkedin" id="img-3"></a>
    <a href="https://github.com/Archeros974" target="_blank">  <img src="../Assets/images/github.png" alt="icône Github" id="img-4"></a>
    <small>Dernière Mise à jour le 30 Janvier </small>  
  </footer>

</body>
</html>


  <RouterView />
</template>

<style scoped>

*{
    box-sizing: content-box;
}

body{
    max-width: 1160px;
    margin: 0 auto;
}


img{ 
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 20px rgb(129, 93, 16);
}

#img-1{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#img-2{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#img-3{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

figure{ 
  width: 130px;
  height: 130px;
}

header {
    border: 2px solid #ffd700;
    background-color: rgb(59, 33, 175);
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    color: #ffd700;
}

a{
  color:#ffd700;
}


    body {
      background-color: #ffffff; 
      color: #000000;
      max-width: 1160px;
      margin: 0 auto;
    }
    .container {
      border: 2px solid #ffd700;
      padding: 20px;
      margin: 20px;
    }

    nav{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

    main{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }

  section{
    width: 1160px;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

    #bloc-1{
      background-color: rgb(59, 33, 175);
      display: flex;
      flex-direction: column;
      border-left: 2px solid #ffd700;
      width: 30%;
      /* padding-right: 20px; */
  }

  #bloc-2{
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 70%;
}

  article{
    text-indent: 50px;
    text-align: justify;
    width: 300px;                    
    height: 160px;
    padding: 10px;
    margin: 20px;
    color: #ffd700;

}

    footer {
        border: 2px solid #ffd700;
        background-color: rgb(59, 33, 175);
        padding: 20px;
        margin: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 25px 0;
    }

    h3{
      color: #00aeff;
      text-indent: 35px;
    }

    small {
      color: #00aeff;
    }
</style>
