<template>
<div>
    <b-navbar toggleable="lg" type="dark" >
        <b-navbar-brand href="#">
            <img src="img/brand/logo.png" style="width:100px; height:100px;" alt="Logo"><strong> CSMB </strong>Cachan</br> Club athlétisme
        </b-navbar-brand>

        <b-navbar-toggle  style="color:black;" target="nav-collapse">☰</b-navbar-toggle>

        <b-collapse id="nav-collapse"  class="nav justify-content-end text-white" style="background-color : #E94D14;" is-nav>
           <b-nav-item>     
                <router-link to="/" class="mx-auto"> Accueil </router-link> 
            </b-nav-item>
            <b-nav-item-dropdown text="Activités" right>
                <router-link to="/activités" class="dropdown-item">Course à pied</router-link>
                <router-link to="/activités" class="dropdown-item">Relais</router-link>
                <router-link to="/activités" class="dropdown-item">Sauts à la perche</router-link>
                <router-link to="/activités" class="dropdown-item">Lancer de poids</router-link>
                <router-link to="/activités" class="dropdown-item">Décathlon</router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Nos Formateurs" right>
                <router-link to="/formateur" class="dropdown-item">Belkacem CHERIKH<br><small>Course a pied</small></router-link>
                <router-link to="/formateur" class="dropdown-item">Juliette BACON<br><small>Coordinatrice</small></router-link>
                <router-link to="/formateur" class="dropdown-item">Tristan FOUILLEN<br><small>Saut à la perche</small></router-link>
                <router-link to="/formateur" class="dropdown-item">Aleksy ROXLAU<br><small>Lancer de poids</small></router-link>
                <router-link to="/formateur" class="dropdown-item">Nia SISSOKO<br><small>Entraîneur principal</small></router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Contact" right>
                <router-link to="/contact" class="dropdown-item">Nous contacter</router-link>
                <router-link to="/contact" class="dropdown-item">Formulaire question/réponse</router-link>
            </b-nav-item-dropdown>

        
        
        </b-collapse>
    </b-navbar>
</div>    
</template>
<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav } from "bootstrap-vue/esm/components/navbar";
import { BCollapse } from "bootstrap-vue/esm/components/collapse";
import { BNavItem, BNavItemDropdown, BNavForm } from "bootstrap-vue/esm/components/nav";  
import { BDropdownItem } from "bootstrap-vue/esm/components/dropdown";
import { BFormInput } from "bootstrap-vue/esm/components/form-input";
import { BButton } from "bootstrap-vue/esm/components/button";

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,        
    BCollapse,
    BNavbarNav,    
    BNavItem,
    BNavItemDropdown,        
    BDropdownItem,
    BNavForm,
    BFormInput,
    BButton 
  }
};
</script>
<style>
</style>
