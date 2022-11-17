<template>
<v-app-bar app dense fixed>
  <v-toolbar height="50px">
     <v-navigation-drawer v-model="sidebar" app  class="hidden-md-and-up" >
      <v-list>
        <v-list-item-title
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item-title>
      </v-list>
    </v-navigation-drawer>
    
        <v-toolbar-title>
          <v-img
            style=" cursor:pointer;"
            src="../../../assets/logo.png"
            max-height="50px"
            to="/"
          ></v-img>
        </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" >
        <v-btn
          text
          class="orange--text title"
          v-for="item in menuItems"
          :key="item.title"
          :href="item.path">
          {{ item.title }}
         
        </v-btn>
      </v-toolbar-items>
   
  </v-toolbar>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
       sidebar: false,
      menuItems: [
        { title: "La société", path: "#societe" },
        { title: "Nos Références", path: "#references" },
        { title: "Nos Compétences", path: "#competences" },
        { title: "Nos Services", path: "#services" },
        { title: "Recrutement", path: "#rh" },
        { title: "Contact", path: "#contact" },
      ],
    };
  },
};
//the text transform is to avoid capitalising the names or menu items 
</script>

<style scoped>

* {
  text-transform: none !important;
  
}
</style>
