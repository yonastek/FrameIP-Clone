<template>
  <v-main>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="orange"
      @click="toTop"
    >
      <v-icon>mdi-chevron-double-up</v-icon>
    </v-btn>
    <top-menu></top-menu>
    <div>
      <categories></categories>
      <societe></societe>
      <reference></reference>
      <competence></competence>
      <service></service>
      <recrutement></recrutement>

      <Footer></Footer>
    </div>
  </v-main>
</template>

<script>
import TopMenu from "./shared/TopMenu.vue";
import Categories from "./shared/Categories.vue";
import Reference from "./shared/Reference.vue";
import Competence from "./shared/Competence.vue";
import Service from "./shared/Service.vue";
import Recrutement from "./shared/Recrutement.vue";
import Footer from "./shared/Footer.vue";
import Societe from "./shared/Societe.vue";

export default {
  components: {
    TopMenu,
    Categories,
    Reference,
    Competence,
    Service,
    Recrutement,
    Footer,
    Societe,
  },
  name: "App",
    data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  
  },
};
</script>
<style>
.v-tab.active-tab {
  color: #e91e63;
}
.v-tab.active-tab::before {
  background-color: #eb1b1b;
}
</style>
