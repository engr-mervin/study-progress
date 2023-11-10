<template>
  <form @submit.prevent="submit">
    <h2 id="form-title" v-if="formType !== 'Update'">{{ formType }} Topic</h2>
    <div id="form-box">
      <div id="inp-box">
        <label for="inp-title">Title:</label>
        <input id="inp-title" v-model="title" type="text" />
      </div>
      <div id="inp-box">
        <label for="inp-hours">Total Hours:</label>
        <input id="inp-hours" v-model="totalHours" type="number" />
      </div>
      <div id="inp-box">
        <label for="inp-prio">Priority:</label>
        <select id="inp-prio" v-model="priority">
          <option>Low</option>
          <option selected>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div id="inp-box">
        <label for="inp-desc">Description:</label>
        <textarea id="inp-desc" v-model="description" type="text" />
      </div>
    </div>

    <div id="control-box">
      <button>{{ formType }}</button>
      <button type="button" @click="clearInput">Clear</button>
      <p id="error">{{ error }}</p>
    </div>
  </form>
</template>
<script lang="ts">
import { createValidate } from "../utils/validator";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    formType: {
      type: String,
      required: false,
      default: "Add",
    },
    propTitle: {
      type: String,
      required: false,
      default: "",
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
      title: this.propTitle,
      error: "",
    };
  },
  methods: {
    clearInput: function () {
      this.description = "";
      this.totalHours = 0;
      this.priority = "";
      this.title = "";
      this.error = "";
    },
    validate: function () {
      const textValidator = createValidate(/^[a-zA-Z0-9\!\?\.\,\-\ ]+$/);
      const numberValidator = createValidate(/^[0-9\!]+$/);

      return (
        textValidator(this.description) &&
        textValidator(this.priority) &&
        textValidator(this.title) &&
        numberValidator(this.totalHours)
      );
    },
    submit: function () {
      this.error = "";
      if (!this.validate()) {
        this.error = "Invalid input on some fields.";
        return;
      }

      this.$emit("add-topic", {
        title: this.title,
        description: this.description,
        totalHours: this.totalHours,
        priority: this.priority,
      });
    },
  },
});
</script>

<style>
#form-title {
  text-align: center;
  width: 100%;
  grid-column: 1/-1;
}
#error {
  color: red;
  width: 16rem;
}

#control-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
form {
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 2rem;
  border: 1px solid #333;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  font-size: 1.6rem;
  margin-top: 2rem;
}

#form-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

#inp-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
}

form input,
form select,
form textarea,
form option {
  border: 1px solid #333;
  border-radius: 3px;
  height: 3rem;
  width: 30rem;
  padding: 0.5rem;
  text-align: end;
}
form option {
  padding: 0.5rem;
}

form textarea {
  height: 8rem;
}

form button {
  width: 16rem;
}
</style>
