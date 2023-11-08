<template>
  <h1>Study Progress Tracker</h1>
  <add-topic-form @add-topic="addTopic"></add-topic-form>
  <ul>
    <topic
      v-for="topic of topics"
      :key="topic._id"
      :description="topic.description"
      :totalHours="topic.totalHours"
      :priority="topic.priority"
      :_id="topic._id"
      @edit-topic-event="updateTopic"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";

type Topic = {
  _id:Date,
  description:string,
  totalHours:number,
  priority:string,
}

export default defineComponent({
  data: function ():Record<any,any>{
    return {
      topics: [],
    };
  },
  methods: {
    addTopic: function (newTopic:Record<any,any>) {
      newTopic._id = new Date();
      this.topics.push(newTopic);
    },
    updateTopic: function(id:Date,updatedTopic:Record<any,any>){
      const newTopic = {
        ...updatedTopic,
        _id:id,
      }
      const currentIdx = this.topics.findIndex((el:Topic)=>
      el._id===id);


      this.topics[currentIdx] = newTopic;
      
    }
  },
});
</script>
