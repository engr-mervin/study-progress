<template>
  <h1>Study Progress</h1>
  <add-topic-form @add-topic="addTopic"></add-topic-form>
  <ul>
    <topic
      v-for="topic of topics"
      :key="topic._id"
      :description="topic.description"
      :totalHours="topic.totalHours"
      :priority="topic.priority"
    />
  </ul>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      topics: [],
    };
  },
  methods: {
    addTopic: function (newTopic) {
      newTopic._id = new Date();
      this.topics.push(newTopic);
    },
  },
});
</script>
