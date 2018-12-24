<template>
  <v-layout
    row
    wrap
  >

    <!-- SKU -->
    <v-flex
      xs12
      md6
      lg3
    >
      <v-card flat>
        <div class="caption grey--text pa-2 text-xs-center">Technology</div>
        <div class="text-xs-center">

          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :height="80"
            :value="value"
            color="myyellow"
          >
            {{ value }}
          </v-progress-circular>
        </div>
      </v-card>
    </v-flex>

    <v-flex
      xs12
      md6
      lg3
    >
      <v-card flat>
        <div class="caption grey--text pa-2 text-xs-center">Technology</div>
        <div class="text-xs-center">

          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :height="80"
            :value="value"
            color="myyellow"
          >
            {{ value }}
          </v-progress-circular>
        </div>
      </v-card>
    </v-flex>

    <v-flex
      xs12
      md6
      lg2
    >
      <v-card flat>

        <div class="caption grey--text pa-2">Furniture</div>
        <div>
          <trend
            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            smooth
          >
          </trend>
        </div>
      </v-card>
    </v-flex>

    <v-flex
      xs12
      md6
      lg2
    >
      <v-card flat>
        <div class="caption grey--text pa-2">Office</div>
        <div>
          <trend
            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            smooth
          >
          </trend>
        </div>
      </v-card>
    </v-flex>

    <v-flex
      xs12
      md6
      lg2
    >
      <v-card flat>
        <div class="caption grey--text pa-2">Technology</div>
        <div>
          <trend
            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            smooth
          >
          </trend>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "ReportThree",
  data() {
    return {
      interval: {},
      value: 0
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  }
};
</script>
<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

