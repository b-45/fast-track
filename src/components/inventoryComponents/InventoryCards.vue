<template>
  <div>

    <v-layout class="justify-end">
      <v-flex
        lg2
        class="py-2"
      >
        <v-btn-toggle>
          <v-btn
            flat
            @click="sortProducts"
          >
            <v-icon>sort</v-icon>
          </v-btn>
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

    <v-card
      flat
      v-for="item in inventory"
      :key="item.rowId"
    >
      <v-layout
        row
        wrap
        :class="`pa-2 item ${item.stockLevel}`"
      >
        <!-- SKU -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text">SKU</div>
          <div>{{item.productId}}</div>
        </v-flex>
        <!-- productName  -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text">Product Name</div>
          <div>{{item.productName}}</div>
        </v-flex>
        <!--category -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text">Category</div>
          <div>{{item.category}}</div>
        </v-flex>
        <!-- subCategory -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text"> Sub-category</div>
          <div>{{item.subCategory}}</div>
        </v-flex>
        <!-- price -->
        <v-flex
          xs6
          md6
          lg1
        >
          <div class="caption grey--text"> Price</div>
          <div>{{item.price}}</div>
        </v-flex>
        <!-- inStock -->
        <v-flex
          xs12
          md6
          lg1
        >
          <div class="caption grey--text">Available</div>
          <div>{{item.inStock}}</div>
        </v-flex>
        <!-- Status -->
        <v-flex
          xs12
          md6
          lg2
        >
          <div class="caption grey--text">Stock-Level</div>
          <div>
            <v-chip
              small
              :class="`${item.stockLevel} white--text caption my-2`"
              white--text
              caption
              my-2
            > {{item.stockLevel}}</v-chip>
          </div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
import { inventory } from "../../../data.js";

export default {
  props: ["drawer"],
  data() {
    return {
      inventory
    };
  },

  methods: {
    sortProducts() {
      this.inventory.sort((a, b) => (a.productName < b.productName ? -1 : 1));
    },
    sortPrice() {
      this.inventory.sort((a, b) => a.price - b.price);
    },
    drawNavigation() {
      this.$emit("drawNav", true);
    }
  }
};
</script>

<style scoped>
.item.High {
  border-left: 4px solid #3abf94;
}
.item.Mid {
  border-left: 4px solid #ffc247;
}
.item.Low {
  border-left: 4px solid #f55d5d;
}

.v-chip.High {
  background: #3abf94;
}
.v-chip.Mid {
  background: #ffc247;
}
.v-chip.Low {
  background: #f55d5d;
}
</style>

 