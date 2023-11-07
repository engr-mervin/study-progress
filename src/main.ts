import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AddTopicForm from "./components/AddTopicForm.vue";
import Topic from "./components/Topic.vue";
const app = createApp(App);

app.component("add-topic-form", AddTopicForm);
app.component("topic", Topic);
app.mount("#app");
