<template>
 <section id="competences">
    <v-parallax
    src="https://www.frameip.fr/assets/images/visuels/accueil_abstrait_1500_844.jpg"
    height="480"
    >
    <div class="filtre-transparent">
      <div class="orange--text headline pt-11 mt-2 col-12">
        <span>
          Nos compétences
        </span>
        <v-divider class="divider-orange col-xl my-2"></v-divider>
      </div>
        <v-container grid-list-xl>
          <v-layout
            row
            wrap
            align-center
          >
          <v-flex xs12>
              <v-layout row wrap align-top>
                <v-flex xs12 sm5 class="text-center">
                  <div class="competences--btn text-right">
                    <router-link to="competences#reseaux">
                     <span class="competences--btn-text">
                       Réseaux et télécoms
                       <v-icon color="white" size="50">mdi-lan</v-icon>
                      </span>
                    </router-link>
                  </div>
                </v-flex>
                <v-flex xs12 sm2></v-flex>
                <v-flex xs12 sm5 class="text-center">
                  <div class="competences--btn text-left">
                  <router-link to="competences#securite">
                     <span class="competences--btn-text">
                        <v-icon color="white" size="50">mdi-security</v-icon>
                        Sécurité
                      </span>
                    </router-link>
                  </div>
                </v-flex>
                <v-flex xs12 sm5 class="text-center">
                  <div class="competences--btn text-right">
                    <router-link to="competences#gouvernance">
                     <span class="competences--btn-text">
                       Gouvernance des S.I
                      <v-icon color="white" size="50">mdi-directions-fork</v-icon>
                    </span>
                    </router-link>
                  </div>
                </v-flex>
                <v-flex xs12 sm2></v-flex>
                <v-flex xs12 sm5 class="text-center">
                  <div class="competences--btn text-left">
                    <router-link to="competences#communication">
                     <span class="competences--btn-text">
                       <v-icon color="white" size="50">mdi-phone</v-icon>
                        Communications unifiées
                    </span>
                    </router-link>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-parallax>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["sliders"]),
  },
};
</script>

<style>
.headline {
    text-align: center;
    text-transform: uppercase;
}
.competences--btn a, .services--btn a {
    text-decoration: none;
}
.competences--btn .v-image, .services--btn .v-image {
/*     -webkit-box-shadow: 4px 4px 4px 0px rgba(255,152,0,.75);
    -moz-box-shadow: 4px 4px 4px 0px rgba(255,152,0,.75);
    box-shadow: 4px 4px 4px 0px rgba(255,152,0,.75); */
    -webkit-box-shadow: 4px 4px 4px 0px rgba(255,255,255,.75);
    -moz-box-shadow: 4px 4px 4px 0px rgba(255,255,255,.75);
    box-shadow: 4px 4px 4px 0px rgba(255,255,255,.75);
    border: 1px solid #ffffff;
}
.competences--btn .v-image:hover, .services--btn .v-image:hover {
/*  -webkit-box-shadow: -4px -4px 4.0 0px rgba(255,152,0,.75);
    -moz-box-shadow: -4px -4px 4px 0px rgba(255,152,0,.75);
    box-shadow: -4px -4px 4px 0px rgba(255,152,0,.75); */
    -webkit-box-shadow: -4px -4px 4px 0px rgba(255,255,255,.75);
    -moz-box-shadow: -4px -4px 4px 0px rgba(255,255,255,.75);
    box-shadow: -4px -4px 4px 0px rgba(255,255,255,.75);
    border: 1px inset #ffffff;
}
.competences--btn .v-image .v-responsive__content, .services--btn .v-image .v-responsive__content, .competences--btn-text {
    font-weight: bolder;
    font-size:1.5rem;
    color:white;
}
.competences--btn-text {
    font-size:1.75rem;
}
.services--btn .v-image .v-responsive__content {
    margin-top: 35px;
}
.competences--btn .v-image .v-responsive__content {
    margin-top: 25px;
}
.filtre-transparent {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.40);
    overflow-y: auto;
}
.filtre-transparent--lighten-2 {
     background-color:rgba(0, 0, 0, 0.20);
}
.filtre-transparent--lighten-1 {
     background-color:rgba(0, 0, 0, 0.30);
}
.filtre-transparent--darken-1 {
     background-color:rgba(0, 0, 0, 0.50);
}
.filtre-transparent--darken-2 {
     background-color:rgba(0, 0, 0, 0.65);
}

</style>
