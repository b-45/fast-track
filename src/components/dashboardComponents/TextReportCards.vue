<template>
  <div>

    <v-layout
      row
      wrap
    >
      <v-flex
        xs6
        md4
        lg2
        v-for="item in numbers"
        :key="item.id"
      >
        <v-card
          flat
          class="py-4 px-2"
        >

          <v-layout justify-end>
            <div class="caption green--text mr-2">{{item.change}}%</div>
          </v-layout>

          <v-layout
            column
            align-center
            justify-center
          >
            <div class="display-1 mytext--text font-weight-medium">{{item.count}}</div>
            <div class="subheading grey--text"> {{item.title}}</div>
          </v-layout>

        </v-card>
      </v-flex>

    </v-layout>
  </div>
</template>
<script>
export default {
  name: "Report",
  data() {
    return {
      numbers: [
        {
          change: 10,
          count: 45,
          title: "Sales"
        },
        {
          change: 50,
          count: 78,
          title: "Orders"
        },
        {
          change: 2,
          count: 8,
          title: "New customers"
        },
        {
          change: 3,
          count: 670,
          title: "Todays orders"
        },
        {
          change: 10,
          count: 19,
          title: "Sales orders"
        },
        {
          change: 10,
          count: 152,
          title: "Sales orders"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>

