Vue.component('CgAccueil', {
    components: {
        'vue-recaptcha' : VueRecaptcha
    },
    data () {
      return {
        isOuvertFormRH: false,
        rules: {
            required: value => !!value || 'Champ obligatoire.',
            maxiCP: value => value.length <= 5 || '5 caractères maximum',
            email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Adresse e-mail invalide.'
            },
        },
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
        aFormContact: [
            'sNom',
            'sPrenom',
            'sSociete',
            'sTelephone',
            'sCP',
            'sVille',
            'sEmail',
            'sMessage',
            'sCaptcha'
        ],
        isErreurFormContact: false,
        sErreurFormContact: '',
        isSuccessFormContact: false,
        sSuccessFormContact: '',
        isFormContactEnvoye: false,
        slides: [
          {sSrc: 'assets/images/visuels/accueil_cadenas_1500_657.jpg'},
          {sSrc: 'assets/images/visuels/accueil_dc_1500_969.jpg'},
          {sSrc: 'assets/images/visuels/accueil_abstrait_1500_844.jpg'},
          {sSrc: 'assets/images/visuels/accueil_graphs_1500_799.jpg'}
        ],
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

                  this.$http.post('https://www.frameip.fr/form/ajouterRH.php', params,{
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
                  .catch(function (error) {
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
                  .catch(function (error) {
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
    template: `<div>
    <section class="relative">
      <v-layout
      column
      align-center
      justify-center
      class="white--text card-carrousel"
      >
        <img src="assets/logos/frameip.png" class="card-carrousel-img" alt="FrameIP">
        <h1 class="white--text mb-2 text-center sousTitre">L'expert de votre infrastructure</h1>
        <v-btn
        class="mx-2"
        color="primary"
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
        v-for="(slide,i) in slides"
        :key="i"
        >
          <v-img :src="slide.sSrc" alt="FrameIP"></v-img>
          <div class="filtre-transparent filtre-transparent--lighten-1"></div>
        </v-carousel-item>
      </v-carousel>
    </section>

   <section id="societe">
    <div class="primary--text headline pt-11 col-12">
      <span>
        La société
      </span>
      <v-divider class="divider-orange col-xl my-2"></v-divider>
    </div>
    <v-layout
      column
      wrap
      class="my-6"
      align-center
    >
      <v-flex xs12 sm4 class="my-4">
        <div class="text-center">
          <p class="primary--text">
            Créée en 2007 par Sébastien Fontaine, FrameIP est le fruit d'une expertise acquise depuis de nombreuses années auprès de « grands comptes » publics et privés.
          </p>
          <v-row class="pa-2">
            <v-col class="col-12 col-md-6">
              <p class="text-justify">
                Issus du monde des opérateurs, notre vocation est de vous faire bénéficier de notre retour d’expérience et de nos conseils dans le but de bâtir vos infrastructures et solutions de demain en vous accompagnant dans la conception et la réalisation de vos projets à fortes valeurs ajoutées.
              </p>
              <p class="text-justify">
                A l’écoute constante de vos besoins et du marché, nous vous proposons les solutions les plus adaptées à votre environnement. 
              </p>
            </v-col>
            <v-col class="col-12 col-md-6">
              <p class="text-justify">
                Rigueur, méthodologie et expertise technique permettent de répondre à des problématiques complexes. Ainsi, nous intervenons au quotidien sur des réseaux nationaux, bancaires, industriels, etc. mais également des établissements publics régionaux tels que des conseils généraux, des préfectures, des universités ou encore des OPH.
              </p>
              <p class="text-justify">
                Notre différence fait notre spécificité : en plaçant l'humain au cœur de notre activité nous nous attachons à allier expertise technique, résultat et satisfaction de tous les protagonistes de nos projets ! FrameIP reste encore après plus de 10 ans fidèle à ces valeurs qui la caractérisent !
              </p>
            </v-col>
          </v-row>
          <p class="primary--text">
            <i class="headline">
              Pourquoi choisir FrameIP ?
            </i>
          </p>
          <v-row class="pa-2">
            <v-col class="col-12 col-md-6 text-justify">
              <u>Notre expertise :</u>
              <div class="pl-1 py-0 mt-1 mb-3 text-justify">
                Elle se traduit par une grande connaissance théorique et pratique dans les milieux des réseaux, de la sécurité, de la visioconférence et de la ToIP. Nous cultivons cette expertise et faisons en sorte qu'elle s'accroisse en permanence.
              </div>
              <u>Notre motivation :</u>
              <div class="pl-1 py-0 mt-1 mb-3 text-justify">
                La passion des réseaux et de la sécurité des personnes composant notre pôle nous assure une motivation permanente.
              </div>
              <u>La qualité :</u>
              <div class="pl-1 py-0 mt-1 mb-3 text-justify">
                FrameIP se doit de par son niveau d'expertise de proposer des solutions de grande qualité.
              </div>
            </v-col>
            <v-col class="col-12 col-md-6 text-justify">
              <u>Une efficacité prouvée :</u>
              <div class="pl-1 py-0 mt-1 mb-3 text-justify">
                Notre connaissance des milieux du réseau et de la sécurité, nous permet de mettre en œuvre la réponse technique la plus adaptée au client.
              </div>
              <u>Notre expérience :</u>
              <div class="pl-1 py-0 mt-1 mb-3 text-justify">
                Notre grande expérience dans le monde de l'entreprise et des opérateurs nous permet de traiter des projets de toute envergure.
              </div>
              <u>La notion de partage :</u>
              <div class="pl-1 py-0 mt-1 mb-3 text-justify">
                Les membres du Cabinet d'Expertise sont par nature des personnes aimant échanger et exposer leurs connaissances.
              </div>
            </v-col>
          </v-row>
        </div>
      </v-flex>
    </v-layout>
  </section>

  <section id="references" class="bg-logo pb-12">
    <div class="black--text headline pt-11 col-12">
      <span>
      Nos références
      </span>
      <v-divider class="divider-grey col-xl my-2"></v-divider>
    </div>
    <v-layout
      column
      wrap
      class="my-2"
      align-center
    >
      <v-flex xs12 class="text-center flex-width">
        <v-row class="pa-1" class="text-center logo-align">
          <v-col class="col-3">
            <img src="assets/images/references/andros.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/bcp.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
          <img src="assets/images/references/cdc_habitat.png"  class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/challenge_international.png"  class="logo-reference">
          </v-col>
        </v-row>
        <v-row class="pa-1 logo-align">
          <v-col class="col-3">
            <img src="assets/images/references/cram.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/dept_eure2.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/ght_argenteuil.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/intertek.png" class="logo-reference">
          </v-col>
        </v-row>
        <v-row class="pa-1 logo-align">
          <v-col class="col-3">
            <img src="assets/images/references/ogf.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/rothschild.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/structis.png" class="logo-reference">
          </v-col>
          <v-col class="col-3 text-center">
            <img src="assets/images/references/unsa.png" class="logo-reference">
          </v-col>
        </v-row>
        <v-row class="pa-1 logo-align">
        <v-col class="col-3">
            <img src="assets/images/references/coop_france.png"  class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/metropole_rouen.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/natup.png" class="logo-reference">
          </v-col>
          <v-col class="col-3">
            <img src="assets/images/references/clinique_les_ormeaux.png"  class="logo-reference">
          </v-col>
        </v-row>
      </v-flex>
      </v-layout>
      <v-layout
      align-right
      class="text-right"
    >
      <v-btn
        class="ma-3"
        dark
        large
        right
        to="references"
      >
        <v-icon>mdi-chevron-double-right</v-icon>
        Voir toutes nos références
      </v-btn>
    </v-layout>
  </section>

  <section id="competences">
    <v-parallax
    src="assets/images/visuels/accueil_abstrait_1500_844.jpg"
    height="480"
    >
    <div class="filtre-transparent">
      <div class="primary--text headline pt-11 mt-2 col-12">
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

  <section  id="services">
      <div class="primary--text headline pt-11 mt-2">
        Nos services
        <v-divider class="divider-orange col-xl my-2"></v-divider>
      </div>
      <v-container grid-list-xl class="mb-12">
        <v-layout row wrap align-center>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="bureau_etude">
                <v-img src="assets/images/visuels/BE_btn_350.jpg">Le bureau d'études</v-img>
              </router-link>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="formations">
              <v-img src="assets/images/visuels/CF_btn_350.jpg" to="/">Centre de formations</v-img>
              </router-link>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="cabinet_expertise">
                <v-img src="assets/images/visuels/CE_btn_350.jpg" to="/">Cabinet d'expertise</v-img>
              </router-link>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div class="services--btn">
              <router-link to="infogerance">
                <v-img src="assets/images/visuels/infogerance_btn_350.jpg" to="/">Infogérance</v-img>
              </router-link>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
  </section>

  <section id="rh">
    <v-parallax
    src="assets/images/visuels/RH_1500.jpg"
    height="600"
    >
    <div class="filtre-transparent">
      <div class="primary--text headline pt-11 mt-2">
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
                color="primary"
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
                                  sitekey="6Lcg0oUUAAAAAD8_sRflQhuRhe541opA00XgarAH">
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

  <section id="contact">
    <div class="primary--text headline pt-11 mt-2 col-12">
      <span>
        Contact
      </span>
      <v-divider class="divider-orange col-xl my-1"></v-divider>
    </div>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-4">
        <v-flex xs12 sm6>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div id="company" class="headline">Contactez-nous</div>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap align-top>
                <v-snackbar
                  v-model="isFormContactEnvoye"
                  color="success"
                  :timeout="6000"
                  top
                >
                  Votre message a bien été enregistré.
                  <v-btn
                    dark
                    @click="isFormContactEnvoye = false"
                  >
                    Fermer
                  </v-btn>
                </v-snackbar>

                <v-alert v-if="isErreurFormContact" prominent type="error" class="mt-3 mx-4">
                  <v-row>
                    <v-col class="grow" v-html="sErreurFormContact"></v-col>
                    <v-col class="shrink">
                        <v-btn @click="isErreurFormContact = false">Fermer</v-btn>
                    </v-col>
                  </v-row>
                 </v-alert>
                 <v-alert v-if="isSuccessFormContact" prominent type="success" class="mt-3 mx-4">
                 <v-row>
                   <v-col class="grow" v-html="sSuccessFormContact"></v-col>
                   <v-col class="shrink">
                       <v-btn @click="isSuccessFormContact = false">Fermer</v-btn>
                   </v-col>
                 </v-row>
                </v-alert>
                <v-form ref="formContact">
                  <v-row>
                    <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                      <v-text-field dense v-model="aFormContact.sNom" label="Nom*" :rules="[rules.required]" :clearable="true"></v-text-field>
                    </v-col>

                  <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                    <v-text-field dense v-model="aFormContact.sPrenom" label="Prénom*" :rules="[rules.required]" :clearable="true"></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                    <v-text-field dense v-model="aFormContact.sSociete" label="Société*" :rules="[rules.required]" :clearable="true"></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                    <v-text-field dense v-model="aFormContact.sTelephone" label="Téléphone*" :rules="[rules.required]" :clearable="true"></v-text-field>
                  </v-col>

                  <v-col cols="4" class="pa-1 flex-formulaire">
                    <v-text-field dense v-model="aFormContact.sCP" label="CP*" :rules="[rules.required]" :clearable="true"></v-text-field>
                  </v-col>

                  <v-col cols="8" class="pa-1 flex-formulaire">
                    <v-text-field dense v-model="aFormContact.sVille" label="Ville*" :rules="[rules.required]" :clearable="true"></v-text-field>
                  </v-col>

                  <v-col cols="12" class="pa-1 flex-formulaire">
                    <v-text-field dense v-model="aFormContact.sEmail" label="Email*" :rules="[rules.required, rules.email]" :clearable="true"></v-text-field>
                  </v-col>

                  <v-col cols="12" class="pa-1">
                    <v-textarea dense v-model="aFormContact.sMessage" label="Message*" :rules="[rules.required]" :clearable="true"></v-text-field>
                  </v-col>

                  <v-col cols="8">
                    <vue-recaptcha
                        ref="recaptchaContact"
                        @verify="onCaptchaVerifiedContact"
                        @expired="onCaptchaExpiredContact"
                        sitekey="6Lcg0oUUAAAAAD8_sRflQhuRhe541opA00XgarAH">
                    </vue-recaptcha>
                  </v-col>

                  <v-col cols="4" class="text-center">
                    <v-btn
                    class="mt-5"
                    color="primary"
                    dark
                    large
                    @click="validerFormulaireContact"
                    >
                      Envoyer
                    </v-btn>
                  </v-col>
                </v-row>
                <v-form>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Nos coordonnées</div>
            </v-card-title>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="primary--text">mdi-phone</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>0 805 280 022</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="primary--text">mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>contact@frameip.fr</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
  </div>`
})