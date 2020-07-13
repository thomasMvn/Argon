import Vue from "vue";
 import Router from "vue-router";
 import AppHeader from "./layout/AppHeader";
 import AppFooter from "./layout/AppFooter";
 import Accueil from "./views/Accueil.vue";
 import activités from "./views/activités.vue";
 import Contact from "./views/Contact.vue";
 import Formateur from "./views/Formateur.vue";

 Vue.use(Router);

 export default new Router({
     linkExactActiveClass: "active",
     routes: [
         {
             path: "/",
             name: "accueil",
             components: {
                 header: AppHeader,
                 default: Accueil,
                 footer: AppFooter
             }
         },
         {
             path: "/activités",
             name: "activités",
             components: {
                 header: AppHeader,
                 default: activités,
                 footer: AppFooter
             }
         },
         {
             path: "/contact",
             name: "contact",
             components: {
                 header: AppHeader,
                 default: Contact,
                 footer: AppFooter
             }
         },
         {
             path: "/formateur",
             name: "formateur",
             components: {
                 header: AppHeader,
                 default: Formateur,
                 footer: AppFooter
             }
         }
     ],
     scrollBehavior: to => {
         if (to.hash) {
             return { selector: to.hash };
         } else {
             return { x: 0, y: 0 };
         }
     }
 });