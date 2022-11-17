<template>
  <section id="contact">
    <div class="orange--text headline pt-11 mt-2 col-12">
      <span>
        Contact
      </span>
      <v-divider class="divider-orange col-xl my-1"></v-divider>
    </div>
    <v-container grid-list-xl >
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
                  <v-btn dark @click="isFormContactEnvoye = false">
                    Fermer
                  </v-btn>
                </v-snackbar>

                <v-alert
                  v-if="isErreurFormContact"
                  prominent
                  type="error"
                  class="mt-3 mx-4"
                >
                  <v-row>
                    <v-col class="grow" v-html="sErreurFormContact"></v-col>
                    <v-col class="shrink">
                      <v-btn @click="isErreurFormContact = false">Fermer</v-btn>
                    </v-col>
                  </v-row>
                </v-alert>
                <v-alert
                  v-if="isSuccessFormContact"
                  prominent
                  type="success"
                  class="mt-3 mx-4"
                >
                  <v-row>
                    <v-col class="grow" v-html="sSuccessFormContact"></v-col>
                    <v-col class="shrink">
                      <v-btn @click="isSuccessFormContact = false"
                        >Fermer</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-alert>
                <v-form ref="formContact">
                  <v-row>
                    <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                      <v-text-field
                        dense
                        v-model="aFormContact.sNom"
                        label="Nom*"
                        :rules="[rules.required]"
                        :clearable="true"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                      <v-text-field
                        dense
                        v-model="aFormContact.sPrenom"
                        label="Prénom*"
                        :rules="[rules.required]"
                        :clearable="true"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                      <v-text-field
                        dense
                        v-model="aFormContact.sSociete"
                        label="Société*"
                        :rules="[rules.required]"
                        :clearable="true"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" class="pa-1 flex-formulaire">
                      <v-text-field
                        dense
                        v-model="aFormContact.sTelephone"
                        label="Téléphone*"
                        :rules="[rules.required]"
                        :clearable="true"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4" class="pa-1 flex-formulaire">
                      <v-text-field
                        dense
                        v-model="aFormContact.sCP"
                        label="CP*"
                        :rules="[rules.required]"
                        :clearable="true"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="8" class="pa-1 flex-formulaire">
                      <v-text-field
                        dense
                        v-model="aFormContact.sVille"
                        label="Ville*"
                        :rules="[rules.required]"
                        :clearable="true"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" class="pa-1 flex-formulaire">
                      <v-text-field
                        dense
                        v-model="aFormContact.sEmail"
                        label="Email*"
                        :rules="[rules.required, rules.email]"
                        :clearable="true"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" class="pa-1">
                      <v-textarea
                        dense
                        v-model="aFormContact.sMessage"
                        label="Message*"
                        :rules="[rules.required]"
                        :clearable="true"
                      ></v-textarea>
                    </v-col>

                    <v-col cols="8">
                      <vue-recaptcha
                        ref="recaptchaContact"
                        @verify="onCaptchaVerifiedContact"
                        @expired="onCaptchaExpiredContact"
                        sitekey="6Lcg0oUUAAAAAD8_sRflQhuRhe541opA00XgarAH"
                      >
                      </vue-recaptcha>
                    </v-col>

                    <v-col cols="4" class="text-center">
                      <v-btn
                        class="mt-5"
                        color="orange"
                        dark
                        large
                        @click="validerFormulaireContact"
                      >
                        Envoyer
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
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
                  <v-list-item-title>060 556 776</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="primary--text">mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>contact@technogo.fr</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isErreurFormContact: false,
      sErreurFormContact: "",
      isSuccessFormContact: false,
      sSuccessFormContact: "",
      isFormContactEnvoye: false,
      aFormContact: [
        "sNom",
        "sPrenom",
        "sSociete",
        "sTelephone",
        "sCP",
        "sVille",
        "sEmail",
        "sMessage",
        "sCaptcha",
      ],
      rules: {
        required: (value) => !!value || "Champ obligatoire.",
        maxiCP: (value) => value.length <= 5 || "5 caractères maximum",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Adresse e-mail invalide.";
        },
      },
    };
  },
  methods: {
    async validerFormulaireContact() {
      if (this.$refs.formContact.validate()) {
        if (this.aFormContact.sCaptcha.length > 0) {
          let _this = this;
          let params = new URLSearchParams();
          params.append("sNom", this.aFormContact.sNom);
          params.append("sPrenom", this.aFormContact.sPrenom);
          params.append("sEmail", this.aFormContact.sEmail);
          params.append("sCP", this.aFormContact.sCP);
          params.append("sVille", this.aFormContact.sVille);
          params.append("sTelephone", this.aFormContact.sTelephone);
          params.append("sSociete", this.aFormContact.sSociete);
          params.append("sMessage", this.aFormContact.sMessage);
          params.append("sCaptcha", this.aFormContact.sCaptcha);

          this.$http
            .post("", params, {})
            .then(function(response) {
              if (response.data.status == "erreur") {
                _this.sErreurFormContact = response.data.message;
                _this.isErreurFormContact = true;
              } else if (response.data.status == "success") {
                _this.sSuccessFormContact =
                  "Votre message a bien été enregistré.";
                _this.isSuccessFormContact = true;
                _this.$refs.formContact.reset();
              } else {
                _this.sErreurFormContact =
                  "Une erreur inconnue est survenue lors de l'envoi de votre message.";
                _this.isErreurFormContact = true;
              }
            })
            .catch(function() {
              _this.sErreurFormContact =
                "Une erreur est survenue lors de l'envoi de votre message.";
              _this.isErreurFormContact = true;
            });
        } else {
          this.sErreurFormContact = "La validation du captcha est obligatoire.";
          this.isErreurFormContact = true;
        }
      }
      this.$refs.recaptcha.reset();
      this.aFormContact.sCaptcha = "";
    },
    onCaptchaVerifiedContact: function(recaptchaToken) {
      this.aFormContact.sCaptcha = recaptchaToken;
    },
    onCaptchaExpiredContact: function() {
      this.$refs.recaptcha.reset();
      this.aFormContact.sCaptcha = "";
    },
  },
};
</script>

<style>


</style>
