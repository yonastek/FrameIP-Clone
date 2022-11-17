<template>
  <section  id="services">
      <div class="orange--text headline pt-11 mt-2">
        Nos services
        <v-divider class="divider-orange col-xl my-2"></v-divider>
      </div>
      <v-container grid-list-xl class="mb-12">
        <v-layout row wrap align-center>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="bureau_etude">
                <v-img src="https://www.frameip.fr/assets/images/visuels/BE_btn_350.jpg">Le bureau d'études</v-img>
              </router-link>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="formations">
              <v-img src="https://www.frameip.fr/assets/images/visuels/CE_btn_350.jpg" to="/">Centre de formations</v-img>
              </router-link>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="cabinet_expertise">
                <v-img src="https://www.frameip.fr/assets/images/visuels/CF_btn_350.jpg" to="/">Cabinet d'expertise</v-img>
              </router-link>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="infogerance">
                <v-img src="https://www.frameip.fr/assets/images/visuels/infogerance_btn_350.jpg" to="/">Infogérance</v-img>
              </router-link>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.competences--btn .v-image .v-responsive__content, .services--btn .v-image .v-responsive__content, .competences--btn-text {
    font-weight: bolder;
    font-size:1.5rem;
    color:white;
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
/*     -webkit-box-shadow: -4px -4px 4px 0px rgba(255,152,0,.75);
    -moz-box-shadow: -4px -4px 4px 0px rgba(255,152,0,.75);
    box-shadow: -4px -4px 4px 0px rgba(255,152,0,.75); */
    -webkit-box-shadow: -4px -4px 4px 0px rgba(255,255,255,.75);
    -moz-box-shadow: -4px -4px 4px 0px rgba(255,255,255,.75);
    box-shadow: -4px -4px 4px 0px rgba(255,255,255,.75);
    border: 1px inset #ffffff;
}
.services--btn .v-image .v-responsive__content {
    margin-top: 35px;
}
 .services--btn a {
    text-decoration: none;
}
</style>