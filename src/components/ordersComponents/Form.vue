<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="800"
    >
      <v-btn
        flat
        slot="activator"
      >
        <v-tooltip bottom>
          <v-icon slot="activator">add</v-icon>
          <span>Add an order</span>
        </v-tooltip>
      </v-btn>
      <v-card>
        <!-- <v-card-title>
          Add a new project.
        </v-card-title> -->

        <v-toolbar
          color="sidebar"
          dark
          flat
        >
          <v-toolbar-title class="subheading">Add an order</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-form class="px-3">
            <!-- customer -->
            <v-text-field
              v-model="customer"
              label="Customer"
              box
              color="primary"
              flat
              prepend-icon="person"
            ></v-text-field>
            <!-- notes -->
            <v-textarea
              v-model="information"
              label="Information"
              box
              color="primary"
              flat
              prepend-icon="edit"
            ></v-textarea>
            <!-- date -->
            <v-menu>
              <v-text-field
                :value="formattedDate"
                slot="activator"
                label="Date"
                prepend-icon="date_range"
                box
                color="primary"
                flat
              ></v-text-field>
              <v-date-picker v-model="date"></v-date-picker>
            </v-menu>

            <v-layout justify-end>
              <v-btn
                flat
                class="mx-0 mr-3 mt-3"
                @click="dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                flat
                class="
                primary
                text--white
                mx-0
                mt-3"
                @click="submit"
              >
                Submit
              </v-btn>

            </v-layout>
          </v-form>
        </v-card-text>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format";
export default {
  name: "Form",
  data() {
    return {
      customer: "",
      information: "",
      date: null,
      dialog: false
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.information);
    }
  },
  computed: {
    formattedDate() {
      return this.date ? format(this.date, "Do MMM YYYY") : "";
    }
  }
};
</script>

<style scoped>
</style>