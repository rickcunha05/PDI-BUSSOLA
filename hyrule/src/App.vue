<template>
  <div class="app">
    <button @click="handleClick('title')">order by title</button>
    <button @click="handleClick('salary')">order by salary</button>
    <button @click="handleClick('location')">order by location</button>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "./types/Jobs";
import OrderTerm from "./types/OrderTerm";
import Freelancer from "./types/Freelancer";
import JobsList from "./components/JobsList.vue";

export default defineComponent({
  name: "App",
  components: { JobsList },
  setup() { 
    const jobs = ref<Job[]>([
      new Freelancer( "farm worker","lon lon ranch",30000,"1"),
      {
        title: "quarryman",
        location: "death mountain",
        salary: 40000,
        id: "2",
      },
      {
        title: "flute player",
        location: "the lost woods",
        salary: 35000,
        id: "3",
      },
      { title: "fisherman", location: "lake hylia", salary: 21000, id: "4" },
      {
        title: "prison guard",
        location: "gerudo valley",
        salary: 32000,
        id: "5",
      },
    ]);
    const order = ref<OrderTerm>("title");
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return { jobs, handleClick, order };
  },
});
</script>
<style scoped>
</style>
