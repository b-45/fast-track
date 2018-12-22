<template>

  <!-- navigation drawer -->
  <v-navigation-drawer
    :mini-variant="mini"
    class="sidebar"
    app
    hide-overlay
    stateless
    dark
    permanent
  >
    <v-toolbar
      flat
      class="transparent"
    >

      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://avatars0.githubusercontent.com/u/27720835?s=460&v=4">
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <!-- icon links -->

    <v-list class="mt-5">
      <v-list-tile
        v-for="link in links"
        :key="link.icon"
        router
        :to="link.route"
      >
        <v-list-tile-action>
          <v-icon color="grey">{{link.icon}}</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      mini: true,
      right: null,
      links: [
        { icon: "dashboard", text: "dashboard", route: "/" },
        { icon: "business", text: "Orders", route: "/orders" },
        { icon: "store", text: "Inventory", route: "/inventory" }
      ]
    };
  }
};
</script>

<style scoped>
</style>