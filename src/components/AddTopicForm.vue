<template>
  <form @submit.prevent="submit">
    <h2>{{ formType }} Topic</h2>
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
    <button>{{ formType }}</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    formType: {
      type: String,
      required: false,
      default: "Add",
    },
    propDesc: {
      type: String,
      required: false,
      default: "",
    },
    propTotalHours: {
      type: Number,
      required: false,
      default: 0,
    },
    propPriority: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: {
    "add-topic": function (newTopic: any) {
      return typeof newTopic === "object";
    },
  },
  data: function () {
    return {
      description: this.propDesc,
      totalHours: this.propTotalHours,
      priority: this.propPriority,
    };
  },
  methods: {
    submit: function () {
      this.$emit("add-topic", {
        description: this.description,
        totalHours: this.totalHours,
        priority: this.priority,
      });
    },
  },
});
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid #333;
  padding: 1rem 2rem;
  border-radius: 8px;
}

form label {
  font-size: 1rem;
}
form div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form input,
form select {
  border: 1px solid #333;
  border-radius: 3px;
  height: 1.6rem;
  font-size: 1rem;
}

form button {
  margin-top: 1rem;
}
</style>
