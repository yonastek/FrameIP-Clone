<template>
  <section id="references" class="bg-logo pb-12">
    <div class="orange--text headline pt-11 col-12">
      <span>
        Nos références
      </span>
      <v-divider class="divider-grey col-xl my-2"></v-divider>
    </div>
    <v-layout column wrap class="my-2" align-center>
      <v-flex xs12 class="text-center flex-width">
        <v-row class="pa-1 text-center logo-align">
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/clinique_les_ormeaux.png"
              class="logo-reference"
            />
          </v-col>

          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/coop_france.png"
              class="logo-reference"
            />
          </v-col>
        </v-row>
        <v-row class="pa-1 logo-align">
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/ogf.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/rothschild.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/dept_eure2.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3 text-center">
            <img
              src="https://www.frameip.fr/assets/images/references/intertek.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/rothschild.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/dept_eure2.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3 text-center">
            <img
              src="https://www.frameip.fr/assets/images/references/intertek.png"
              class="logo-reference"
            />
          </v-col>
        </v-row>
        <v-row class="pa-1 logo-align">
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/natup.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/metropole_rouen.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/natup.png"
              class="logo-reference"
            />
          </v-col>
          <v-col class="col-3">
            <img
              src="https://www.frameip.fr/assets/images/references/metropole_rouen.png"
              class="logo-reference"
            />
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
    <v-layout align-right class="text-right">
      <v-btn class="ma-3" dark large right to="references">
        <v-icon>mdi-chevron-double-right</v-icon>
        Voir toutes nos références
      </v-btn>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({}),
  computed: {},
};
</script>

<style>
.logo-align {
  align-items: center;
}
.logo-reference {
  max-height: 65px !important;
  max-width: 120px !important;
}
.relative {
  position: relative;
  height: 80vh !important;
  max-height: 650px !important;
}
.divider-orange {
  border-color: rgba(255, 152, 0, 0.4) !important;
}
.divider-grey {
  border-color: rgba(48, 48, 48, 0.4) !important;
}
.headline {
  text-align: center;
  text-transform: uppercase;
}
.bg-orange {
  background-color: #ff9800;
}
.bg-logo {
  background-color: rgba(255, 255, 255, 0.35);
}
.bg-blanc {
  background-color: #ffffff;
}
</style>
