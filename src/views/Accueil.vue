<template >
    <section>
      <b-container-fluid>
        <br>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading text-muted ml-1">
              L'histoire du Club
            </h2>
            <p class="lead font-weight-bold ml-2">
              Le Club d'Athlétisme de Cachan est une association qui a été créé en 1983 par Henry Veysset.
              Le Paris Avenir Athletic est un club de quartier, proche des jeunes et des féminines, ouvert à tous dès 8 ans !
              Pour les catégories école d’athlétisme, poussins et benjamins (enfants de moins de 12 ans), nous vous proposons la découverte de l’athlétisme de façon ludique. A partir de 12 ans, c’est la formation, l’entraînement, la compétition et au delà de 15, c'est le début des spécialisations.
              Nous proposons également une section athlé-loisir, le jogging et la course sur route.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src="img/theme/img1.jpg"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-6 ">
            <h2 class="featurette-heading text-muted ml-1">Nos partenaires</h2>
            <p class="lead font-weight-bold ml-2">
              Le Club de Fontenay Trésigny remercie ses partenaires qui le soutient financièrement:
              <br />-Mairie de Cachan
              <br />-Direction départementale de la Jeunesse et des Sports
              <br />-Conseil Général du Val-de-Marne
              <br />-Mairie de l'Hay-les-roses
              <br />-Mairie de Arcueil
            </p>
            <br/>
          </div>
        
          <div class="col-md-6">
            <h2 class="featurette-heading text-muted ml-1">
              La fédération
            </h2>
            <p class="lead font-weight-bold ml-2">
              Le Club d'athlétisme est lié à la Fédération Française d'Athlétisme .
              La FFESSM, regroupe :
              <br />-Les courses
              <br />-Les lancers
              <br />-Les sauts
              <br />-La marche athlétique 
              <br />-etc...
              <br />retrouvez tous les sports de la fédération sur leur
              <a href="https://www.athle.fr/asp.net/main.html/html.aspx?htmlid=49" title="fédération athlétisme " style="color:black">site</a>
            </p>
          </div>
        </div>
      </b-container-fluid>
    </section>
  
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import { BCard } from "bootstrap-vue/esm/components/card";
import { BContainer, BCol, BRow } from "bootstrap-vue/esm/components/layout";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BCard,
    BContainer,
    BCol,
    BRow
  }
};
</script>
