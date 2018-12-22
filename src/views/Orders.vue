<template>
  <v-container class="my-5">
    <!-- title header -->
    <h1 class="subheading grey--text mb-4 font-weight-medium">Orders</h1>

    <!-- order cards -->
    <OrderCards
      :drawer='drawer'
      @drawNav='drawer=$event'
    ></OrderCards>

  </v-container>
</template>

<script>
const OrderCards = () => import("@/components/ordersComponents/OrderCards.vue");
export default {
  name: "Orders",
  components: { OrderCards },
  data() {
    return {
      //
    };
  }
};
</script>
