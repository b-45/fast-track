<template>
  <v-container class="my-5">
    <!-- title header -->
    <h1 class="subheading grey--text mb-4 font-weight-medium">Orders</h1>

    <!-- order cards -->
    <OrderCards
      :drawer='drawer'
      @drawNav='drawer=$event'
    ></OrderCards>

    <!-- metrics -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      right
    >
      <v-list class="pa-1">

        <v-list-tile
          avatar
          tag="div"
        >
          <v-list-tile-avatar>
            <img src="https://avatars0.githubusercontent.com/u/27720835?s=460&v=4">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Bernard Ade</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop=" drawer = !drawer"
            >
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list
        class="pt-0"
        dense
      >
        <v-divider light></v-divider>
      </v-list>

      <!-- metrics -->

      <v-layout row>
        <v-flex>
          <v-card flat>
            <v-list two-line>
              <v-subheader class="subheading mb-3"> Statistics</v-subheader>
              <!-- orders stats -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title class="body-1">Total Orders</v-list-tile-title>
                  <v-list-tile-sub-title class="display-1">450</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider class="mb-2"></v-divider>

              <!-- other stat -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title class="body-1">Orders Today</v-list-tile-title>
                  <v-list-tile-sub-title class="display-1">57</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider class="mb-2"></v-divider>

              <!-- other stat -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title class="body-1">Pending Orders</v-list-tile-title>
                  <v-list-tile-sub-title class="display-1">17</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider class="mb-2"></v-divider>

              <!-- other stat -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title class="body-1">Cancelled Orders</v-list-tile-title>
                  <v-list-tile-sub-title class="display-1">4</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider class="mb-2"></v-divider>

              <!-- other stat -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-progress-linear
                    color="myyellow"
                    v-model="weeklySales"
                  ></v-progress-linear>
                  <v-list-tile-sub-title class="body-1">
                    55% sales increase since last week</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider class="mb-2"></v-divider>
              <!-- other stat -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-progress-linear
                    color="myyellow"
                    v-model="targetSales"
                  ></v-progress-linear>
                  <v-list-tile-sub-title class="body-1">Target 60 daily sales is 96% reached</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider class="mb-2"></v-divider>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </v-container>

  </v-container>
</template>

<script>
const OrderCards = () => import("@/components/ordersComponents/OrderCards.vue");
export default {
  name: "Orders",
  components: { OrderCards },
  data() {
    return {
      targetSales: 96,
      weeklySales: 55,
      drawer: false
    };
  }
};
</script>
