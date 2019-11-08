<template>
  <div class="home">
    <QueryBox @search="search" />
  </div>
</template>

<script>
// @ is an alias to /src
import QueryBox from "@/components/QueryBox.vue";

export default {
  name: "home",
  components: {
    QueryBox
  },
  methods: {
    search(query) {
      this.$router.push({ name: "search", query: { query } });
    }
  }
};
</script>

<style scoped>
div.home {
  text-align: center;
  margin-top: 200px;
}
</style>
