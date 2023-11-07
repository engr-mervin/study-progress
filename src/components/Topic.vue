<template>
  <li>
    <p>Description: {{ description }}</p>
    <p>Total Hours: {{ totalHours }}</p>
    <p>Priority: {{ priority }}</p>
  </li>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    description: {
      type: String,
      required: true,
    },
    totalHours: {
      type: Number,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
  },
});
</script>
