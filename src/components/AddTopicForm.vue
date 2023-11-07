<template>
  <form @submit.prevent="add">
    <div>
      <label for="inp-desc">Description:</label>
      <input id="inp-desc" v-model="description" type="text" />
    </div>
    <div>
      <label for="inp-hours">Total Hours:</label>
      <input id="inp-hours" v-model="totalHours" type="number" />
    </div>
    <div>
      <label for="inp-prio">Priority:</label>
      <select v-model="priority">
        <option>Low</option>
        <option selected>Medium</option>
        <option>High</option>
      </select>
    </div>
    <button>Add</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: {
    "add-topic": function (newTopic: any) {
      return typeof newTopic === "object";
    },
  },
  data: function () {
    return {
      description: "",
      totalHours: 0,
      priority: "",
    };
  },
  methods: {
    add: function () {
      this.$emit("add-topic", {
        description: this.description,
        totalHours: this.totalHours,
        priority: this.priority,
      });
    },
  },
});
</script>
