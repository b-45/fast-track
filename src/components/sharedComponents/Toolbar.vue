<template>

  <v-toolbar
    flat
    app
    dense
    absolute
  >
    <v-toolbar-title class="text-uppercase grey--text">
      <v-btn
        flat
        to="/"
        small
        color="#fafafa"
      ><span class="body-2 grey--text">Fast</span>
        <span class="body-2 font-weight-thin orange--text">Track</span></v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- dropdown menu -->
    <v-menu offset-y>
      <v-btn
        flat
        color="grey"
        slot="activator"
      >
        <span>Menu</span>
        <v-icon>expand_more</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-tile-title class="body-2">{{ link.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <!-- signout button -->

    <v-btn
      flat
      color="grey"
      icon
    >
      <!-- <span>Sign Out</span> -->
      <v-tooltip bottom>
        <v-icon slot="activator">exit_to_app</v-icon>
        <span>Sign out</span>
      </v-tooltip>
    </v-btn>
  </v-toolbar>

</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      links: [
        { icon: "folder", text: "Dashboard", route: "/" },
        { icon: "shopping_cart", text: "Orders", route: "/orders" },
        { icon: "store", text: "Inventory", route: "/inventory" }
      ]
    };
  }
};
</script>

