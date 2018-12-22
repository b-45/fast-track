<template>
  <div>

    <v-layout class="justify-end">
      <v-flex
        lg2
        class="py-2"
      >
        <v-btn-toggle>

          <!-- sort -->
          <v-btn
            flat
            @click="sortBy"
          >
            <v-icon>sort</v-icon>

          </v-btn>

          <!-- sort -->
          <v-btn
            @click="sortPrice"
            flat
          >
            <v-icon>format_align_right</v-icon>
          </v-btn>

          <v-btn
            @click.native.stop="drawNavigation"
            flat
          >
            <v-icon>dashboard</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>

    <!-- cards -->
    <v-card
      flat
      v-for="order in orders"
      :key="order.rowId"
    >
      <v-layout
        row
        wrap
        :class="`pa-2 order ${order.status}`"
      >
        <!-- orderId -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text">Order ID</div>
          <div>{{order.orderId}}</div>
        </v-flex>
        <!-- customer name -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text">Customer</div>
          <div>{{order.customerName}}</div>
        </v-flex>
        <!-- order date -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text">Order Date</div>
          <div>{{order.orderDate}}</div>
        </v-flex>
        <!-- Total -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text"> Total</div>
          <div>{{order.sales}}</div>
        </v-flex>
        <!-- discount -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text"> Discount</div>
          <div>{{order.discount}}</div>
        </v-flex>
        <!-- status -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text"> Status</div>
          <div>
            <v-chip
              small
              :class="`${order.status} white--text caption my-2`"
              white--text
              caption
              my-2
            > {{order.status}}</v-chip>
          </div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>

  </div>
</template>

<script>
import { orders } from "../../../data.js";
export default {
  name: "OrderCards",
  props: ["drawer"],
  data() {
    return {
      orders
    };
  },
  methods: {
    sortBy() {
      this.orders.sort((a, b) => (a.customerName < b.customerName ? -1 : 1));
    },
    sortPrice() {
      this.orders.sort((a, b) => a.sales - b.sales);
    },
    drawNavigation() {
      this.$emit("drawNav", true);
    }
  }
};
</script>

<style scoped>
.order.Complete {
  border-left: 4px solid #3abf94;
}
.order.Pending {
  border-left: 4px solid #9964e3;
}

.v-chip.Complete {
  background: #3abf94;
}
.v-chip.Pending {
  background: #9964e3;
}
</style>