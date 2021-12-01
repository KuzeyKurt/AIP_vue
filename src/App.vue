<template>
  <v-app>
      <v-navigation-drawer app v-model="drawer">
          <v-list-item
                       v-for="link in links"
 :key="link.title"
 :to="link.url"
>

              <v-list-item-content>
                  <v-list-title class="title">
                      КИПУ
                  </v-list-title>
                  <v-list-item-subtitle>
                      Study project
                      <v-list-item-icon>
                          <img width="24" height="24" src="assets/cepu_logo_hd.svg">
                      </v-list-item-icon>
                  </v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
              <v-list-item-group color="primary">
                  <v-list-item v-for="link in links"
                               :key="link.title">

                      <v-list-item-icon>
                          <v-icon>{{link.icon}}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                          <v-list-item-title>{{link.title}}</v-list-item-title>

                      </v-list-item-content>
                  </v-list-item>
              </v-list-item-group>
          </v-list>

        

         

      </v-navigation-drawer> 
      <v-app-bar app dark color="indigo lighten-1">
          <v-btn v-for="link in links"
                 :key="link.title"
                 :to="link.url"
                 text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>

          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          
      </v-app-bar>

  <v-content>
    <router-view></router-view> 
  </v-content>
  </v-app>  
</template>

<script>
    
export default {
  data() {
    return {
        drawer: false,

        links: [
            { title: "Login", icon: "mdi-lock", url: "/login" },
            { title: "Registration", icon: "mdi-book-open-variant", url: "/registration" },
            { title: "Orders", icon: "mdi-bookmark-multiple-outline", url: "/orders" },
            { title: "New", icon: "mdi-math-compass", url: "/new" },
            { title: "List", icon: "mdi-account-group", url: "/list" },
        ]

    }
  }
}
</script>

