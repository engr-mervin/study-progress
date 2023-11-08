<template>
<li>
    <p>Description: {{ description }}</p>
    <p>Total Hours: {{ totalHours }}</p>
    <div>
        <p>Progress: </p>
        <div id="bar">
            <div id="bar-progress"></div>
        </div>
        <button @click="openForm">Update</button>
        <button>Done</button>
    </div>
    <p>Priority: {{ priority }}</p>
    <add-topic-form formType="Update" @add-topic="editTopic" v-if="formShown" :propDesc="description" :propTotalHours="totalHours" :propPriority="priority"></add-topic-form>

</li>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";

export default defineComponent({
    data:function(){
        return {
            formShown:false,
        }
    },
    methods: {
        openForm: function(){
            this.formShown = !this.formShown;
        },
        editTopic: function (updatedTopic:Record<any,any>) {
            this.$emit('edit-topic-event', this._id,updatedTopic);
            this.formShown=false;
        },
    },
    emits: {
        'edit-topic-event': function (id: Date,updatedTopic:Record<any,any>) {
            id ?? console.warn('Missing ID');
            updatedTopic??console.warn("Missing updated topic object")
            return !!id&&!!updatedTopic;
        }
    },
    props: {
        _id: {
            type: Date,
            required: true,
        },
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
