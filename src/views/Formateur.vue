<template>
    <section>                  
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>Formateurs</h1>
                </div>
                <div class="col-md-2">
                        <p class="lead font-weight-bold"> Belkacem CHERIKH<br><small>Course a pied</small></p></div>
                <div class="m-3">        
                        <p class="lead font-weight-bold "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
            <hr class="featurette-divider">
        <div class="container-fluid">
        <div class="row featurette">
            <div class="col-md-2">
                    <p class="lead font-weight-bold">Juliette BACON<br><small>Coordinatrice</small></p></div>
            <div class="m-3">        
                    <p class="lead font-weight-bold "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        </div>
            <hr class="featurette-divider">
        <div class="container-fluid">
        <div class="row featurette">
            <div class="col-md-2">
                    <p class="lead font-weight-bold">Tristan FOUILLEN<br><small>Saut à la perche</small></p></div>
            <div class="m-3">        
                    <p class="lead font-weight-bold "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        </div>
            <hr class="featurette-divider">
        <div class="container-fluid">
        <div class="row featurette">
            <div class="col-md-2">
                    <p class="lead font-weight-bold">Aleksy ROXLAU<br><small>Lancer de poids</small></p></div>
            <div class="m-3">        
                    <p class="lead font-weight-bold "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        </div>
            <hr class="featurette-divider">
        <div class="container-fluid">
        <div class="row featurette">
            <div class="col-md-2">
                    <p class="lead font-weight-bold">Nia SISSOKO<br><small>Entraîneur principal</small></p></div>
            <div class="m-3">        
                    <p class="lead font-weight-bold "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>  
        </div>
        <h1 class="text-center">Horaires</h1>     
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Equipes</th>
                        <th scope="col">Jours</th>
                        <th scope="col">Horaires</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Jeunes</th>
                        <td>Mardi<br/>Vendredi</td>
                        <td>20h00-21h00<br/>21h00-22h00</td>
                    </tr>
                    <tr>
                        <th scope="row">Féminines</th>
                        <td>Lundi<br/>Vendredi</td>
                        <td>21h00-22h30<br/>21h00-22h00</td>
                    </tr>
                    <tr>
                        <th scope="row">Séniors</th>
                        <td>Lundi<br/>Vendredi</td>
                        <td>21h00-22h30<br/>22h00-23h00</td>                    
                    </tr>
                    <tr>
                        <th scope="row">Loisir</th>
                        <td>Vendredi</td>
                        <td>21h00-22h00</td>                    
                    </tr>
                </tbody>
            </table>            
        
            <hr class="featurette-divider">
        

        
            <!-- /.container -->

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
