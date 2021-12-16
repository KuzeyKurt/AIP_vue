<template>
  <v-app>
  <v-navigation-drawer app v-model="drawer">
    <v-list-item>
      <v-list-item-content>
            <v-list-item-title class="title">
              <v-img
                src = "https://yt3.ggpht.com/ytc/AKedOLRCvhZh9AZaL_nN3a78Wqw7WUT9y_WYq2CN5fYV=s900-c-k-c0x00ffffff-no-rj"
                >
              </v-img>
              КИПУ
            </v-list-item-title>
            <v-list-item-subtitle>
              Учебный проект
            </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
        <v-list-item-group color="indigo lighten-1">
          <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
    </v-list>
  </v-navigation-drawer> 
  <v-app-bar app dark color="indigo lighten-1">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link 
      to="/" 
      tag="span" 
      class="pointer">
      Home
    </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
       <v-btn 
       v-for="link in links"
       :key="link.title"
       :to="link.url" 
       text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-main>
    <router-view></router-view> 
  </v-main>
  <template v-if="error">
    <v-snackbar
  :timeout="5000"
  :multi-line="true"
  color="error"
  @input="closeError"
  :value="true"
  >
    {{ error }}
    <v-btn text dark @click.native="closeError">Close</v-btn>
  </v-snackbar>
  </template>
 </v-app>
</template>

<script>
export default {
  data() {
    return {

computed: {
    error () {
      return this.$store.getters.error
   }
  },


      drawer: false,
      links:[
      {title:"Login", icon:"mdi-lock", url:"/login"},
      {title:"Registration",icon:"mdi-book-open-variant",url:"/registration"},
      {title:"Orders",icon:"mdi-bookmark-multiple-outline",
      url:"/orders"},
      {title:"New ad", icon:"mdi-math-compass", url:"/new"},
      {title:"My ads", icon:"mdi-account-group", url:"/list"}
      ]
    }
  },

  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>