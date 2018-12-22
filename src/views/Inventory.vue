<template>
  <v-container class="my-5">
    <!-- title header -->
    <h1 class="subheading grey--text mb-4 font-weight-medium">Inventory</h1>

    <!-- inventory card-->
    <InventoryCards
      :drawer='drawer'
      @drawNav='drawer=$event'
    ></InventoryCards>

  </v-container>
</template>

<script>
const InventoryCards = () =>
  import("@/components/inventoryComponents/InventoryCards.vue");

export default {
  name: "Inventory",
  components: { InventoryCards },

  data() {
    return {
      //
    };
  }
};
</script>

