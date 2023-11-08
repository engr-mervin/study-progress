<template>
  <form @submit.prevent="submit">
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
    <button>{{formType}}</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props:{
    formType:{
      type: String,
      required:false,
      default: 'Add'
    },
    propDesc:{
      type:String,
      required:false,
      default:'',
    },
    propTotalHours:{
      type:Number,
      required:false,
      default:0,
    },
    propPriority:{
      type:String,
      required:false,
      default:''
    }

  },
  emits: {
    "add-topic": function (newTopic: any) {
      return typeof newTopic === "object";
    },
  },
  data: function () {
    return {
      description:this.propDesc,
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
