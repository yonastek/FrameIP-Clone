<template>
   <section id="rh">
    <v-parallax
    src="https://www.frameip.fr/assets/images/visuels/RH_1500.jpg"
    height="600"
    >
    <div class="filtre-transparent">
      <div class="orange--text headline pt-11 mt-2">
          Recrutement
        <v-divider class="divider-orange col-xl my-2"></v-divider>
      </div>
      <div class="text-center">
        <p class="primary-text pa-1" >
          Rejoindre FrameIP, c'est la garantie de voir vos talents s'exprimer pleinement et progresser sans que votre potentiel ne soit limité par l'entreprise ou son organisation.
          <br><br>C'est aussi l'assurance de travailler au quotidien avec des femmes et des hommes passionnés, animés par des valeurs essentielles telles que le respect, l'engagement, le partage, dans un environnement où l'autonomie et le fonctionnement en réseau sont préférés à la hiérarchie classique, c'est aussi l'assurance d'avoir des missions variées tant sur le plan de leur technicité, que par la diversité des produits.
          <br><br>
          Si vous partagez ces valeurs, bienvenue chez FrameIP !
        </p>
        <div>
        <v-snackbar
          v-model="isFormRHEnvoye"
          color="success"
          :timeout="6000"
          top
          class="sp-snackbar"
        >
        Votre candidature a bien été enregistrée.
          <v-btn
            dark
            @click="isFormRHEnvoye = false"
          >
            Fermer
          </v-btn>
        </v-snackbar>
          <v-dialog v-model="isOuvertFormRH" persistent class="recrutement-formulaire">
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                class="mt-12 headline"
                color="orange"
                dark
                large>
                <v-icon size="25">mdi-send</v-icon>Postulez !</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline primary--text">Postulez en ligne</span>
              </v-card-title>
              <v-alert v-if="isErreurFormRH" prominent type="error" class="mt-3 mx-4">
                  <v-row>
                      <v-col class="grow" v-html="sErreurFormRH"></v-col>
                      <v-col class="shrink">
                          <v-btn @click="isErreurFormRH = false">Fermer</v-btn>
                      </v-col>
                  </v-row>
              </v-alert>
              <v-alert v-if="isSuccessFormRH" prominent type="success" class="mt-3 mx-4">
                  <v-row>
                      <v-col class="grow" v-html="sSuccessFormRH"></v-col>
                      <v-col class="shrink">
                          <v-btn @click="isSuccessFormRH = false">Fermer</v-btn>
                      </v-col>
                  </v-row>
              </v-alert>
              <v-form ref="formRH">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Nom*" v-model="aFormRH.sNom" :rules="[rules.required]"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Prénom*" v-model="aFormRH.sPrenom" :rules="[rules.required]"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Email*" v-model="aFormRH.sEmail" :rules="[rules.required, rules.email]"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="CP" v-model="aFormRH.sCP"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Ville*" v-model="aFormRH.sVille" :rules="[rules.required]"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Téléphone" v-model="aFormRH.sTelephone"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-file-input accept=".pdf" v-model="aFormRH.CV" :rules="[rules.required]" label="CV*"></v-file-input>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-file-input accept=".pdf" v-model="aFormRH.lettre" :rules="[rules.required]" label="Lettre de motivation*"></v-file-input>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                          Validation du captcha :
                          <div class="ml-5 pt-2">
                              <vue-recaptcha
                                  ref="recaptcha"
                                  @verify="onCaptchaVerified"
                                  @expired="onCaptchaExpired"
                                  sitekey="6LdGsz8eAAAAAL8xr8K4TxjF0bBNrVx7EuiGS9Gg">
                              </vue-recaptcha>
                          </div>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*Champs obligatoires</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1 error" @click="resetFormRH()">Annuler</v-btn>
                  <v-btn color="blue darken-1 primary" @click="validerFormulaireRH">Envoyer</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
    </v-parallax>
  </section>
</template>

<script>
 import { VueRecaptcha } from 'vue-recaptcha';
export default {
    components: { 'vue-recaptcha' : VueRecaptcha},
  data(){
    return{
       isOuvertFormRH: false,
       aFormRH: [
            'sPrenom',
            'sNom',
            'sEmail',
            'sCP',
            'sVille',
            'sTelephone',
            'CV',
            'lettre',
            'sCaptcha'
        ],
        isErreurFormRH: false,
        sErreurFormRH: '',
        isSuccessFormRH: false,
        sSuccessFormRH: '',
        isFormRHEnvoye: false,
        rules: {
        required: (value) => !!value || "Champ obligatoire.",
        maxiCP: (value) => value.length <= 5 || "5 caractères maximum",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Adresse e-mail invalide.";
        },
      },
    }
  },
   methods: {
      resetFormRH() {
        this.isOuvertFormRH = false
        this.$refs.formRH.reset()
      },
      async validerFormulaireRH () {
          if (this.$refs.formRH.validate()) {
              if(this.aFormRH.sCaptcha.length > 0){
                  let _this = this;
                  let params = new FormData();
                  params.append('sNom', this.aFormRH.sNom);
                  params.append('sPrenom', this.aFormRH.sPrenom);
                  params.append('sEmail', this.aFormRH.sEmail);
                  params.append('sCP', this.aFormRH.sCP);
                  params.append('sVille', this.aFormRH.sVille);
                  params.append('sTelephone', this.aFormRH.sTelephone);
                  params.append('fCV', this.aFormRH.CV);
                  params.append('fLettre', this.aFormRH.lettre);
                  params.append('sCaptcha', this.aFormRH.sCaptcha);

                  this.$http.post('', params,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                  .then(function (response) {
                      if( response.data.status == 'erreur' ) {
                          _this.sErreurFormRH = response.data.message;
                          _this.isErreurFormRH = true;
                      }else if( response.data.status == 'success' ) {
                          _this.sSuccessFormRH = 'Candidature envoyée.';
                          _this.isSuccessFormRH = true;
                          _this.$refs.formRH.reset()
                      }else{
                          _this.sErreurFormRH = 'Une erreur inconnue est survenue lors de l\'envoi de votre candidature.';
                          _this.isErreurFormRH = true;
                      }
                  })
                  .catch(function () {
                      _this.sErreurFormRH = 'Une erreur est survenue lors de l\'envoi de votre candidature.';
                      _this.isErreurFormRH = true;
                  });
              }else{
                  this.sErreurFormRH = 'La validation du captcha est obligatoire.';
                  this.isErreurFormRH = true;
              }
          }

          this.$refs.recaptcha.reset();
          this.aFormRH.sCaptcha = '';
        },
        onCaptchaVerified: function ( recaptchaToken ) {
          this.aFormRH.sCaptcha = recaptchaToken;
        },
        onCaptchaExpired: function(){
          this.$refs.recaptcha.reset();
          this.aFormRH.sCaptcha = '';
        },
        async validerFormulaireContact () {
          if (this.$refs.formContact.validate()) {
              if(this.aFormContact.sCaptcha.length > 0){
                  let _this = this;
                  let params = new URLSearchParams();
                  params.append('sNom', this.aFormContact.sNom);
                  params.append('sPrenom', this.aFormContact.sPrenom);
                  params.append('sEmail', this.aFormContact.sEmail);
                  params.append('sCP', this.aFormContact.sCP);
                  params.append('sVille', this.aFormContact.sVille);
                  params.append('sTelephone', this.aFormContact.sTelephone);
                  params.append('sSociete', this.aFormContact.sSociete);
                  params.append('sMessage', this.aFormContact.sMessage);
                  params.append('sCaptcha', this.aFormContact.sCaptcha);

                  this.$http.post('https://www.frameip.fr/form/ajouterContact.php', params,{
                  })
                  .then(function (response) {
                      if( response.data.status == 'erreur' ) {
                          _this.sErreurFormContact = response.data.message;
                          _this.isErreurFormContact = true;
                      }else if( response.data.status == 'success' ) {
                          _this.sSuccessFormContact = 'Votre message a bien été enregistré.';
                          _this.isSuccessFormContact = true;
                          _this.$refs.formContact.reset()
                      }else{
                          _this.sErreurFormContact = 'Une erreur inconnue est survenue lors de l\'envoi de votre message.';
                          _this.isErreurFormContact = true;
                      }
                  })
                  .catch(function () {
                      _this.sErreurFormContact = 'Une erreur est survenue lors de l\'envoi de votre message.';
                      _this.isErreurFormContact = true;
                  });
              }else{
                  this.sErreurFormContact = 'La validation du captcha est obligatoire.';
                  this.isErreurFormContact = true;
              }
          }
          this.$refs.recaptcha.reset();
          this.aFormContact.sCaptcha = '';
        },
        onCaptchaVerifiedContact: function ( recaptchaToken ) {
          this.aFormContact.sCaptcha = recaptchaToken;
        },
        onCaptchaExpiredContact: function(){
          this.$refs.recaptcha.reset();
          this.aFormContact.sCaptcha = '';
        },
    },
};
</script>

<style>

</style>
