<template>
  <section class="relative">
      <v-layout
      column
      align-center
      justify-center
      class="white--text card-carrousel"
      >
        <img src="https://www.frameip.fr/assets/logos/frameip.png" class="card-carrousel-img" alt="FrameIP">
        <h1 class="white--text mb-2 text-center sousTitre">L'expert de votre infrastructure</h1>
        <v-btn
        class="mx-2"
        color="orange"
        fab
        href="#societe"
        >
          <v-icon color="white">mdi-chevron-double-down</v-icon>
        </v-btn>
      </v-layout>
      <v-carousel
        cycle
        class="carousel"
        continuous
        interval="2500"
        :hide-delimiter-background="true"
        :hide-delimiters="true"
        :show-arrows="false"
        height="100%"
        >
        <v-carousel-item
       v-for="(item, i) in items" :key="i" :src="item.src"
        >
          <v-img :src="item" alt="FrameIP"></v-img>
          <div class="filtre-transparent filtre-transparent--lighten-1"></div>
        </v-carousel-item>
      </v-carousel>
    </section>
 
 
</template>

<script>


export default {
  
    
    data: () => ({
      drawer: null,
      items: [
        {
          src: "https://www.frameip.fr/assets/images/visuels/accueil_cadenas_1500_657.jpg",
        },
        {
          src: "https://www.frameip.fr/assets/images/visuels/accueil_abstrait_1500_844.jpg",
        },
        {
          src: "https://www.frameip.fr/assets/images/visuels/accueil_dc_1500_969.jpg",
        },
        {
          src: "https://www.frameip.fr/assets/images/visuels/accueil_graphs_1500_799.jpg",
        },
      ],
    }),
  
};
</script>

<style scoped>
.relative {
    position: relative;
    height:80vh !important;
    max-height:650px !important;
}
.card-carrousel {
    position:absolute;
    z-index:100;
    left: 50%;
    top: 50%;
    margin-left: -250px; /* Negative half of width. */
    margin-top: -100px; /* Negative half of width. */
}
.carousel {
    height:100%;
    box-sizing: border-box;
}
.carousel .v-image > .v-responsive__content {
    width: auto !important;
}

</style>
