<template>
  <div class="container">
    <QueryBox @search="search" />
  </div>
</template>

<script>
import QueryBox from "./QueryBox";

export default {
  components: { QueryBox },
  methods: {
    search(query) {
      this.$store.dispatch("article/search", { query });
      history.pushState(
        {},
        null,
        this.$route.path + "?query=" + encodeURIComponent(query)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
div.container {
  text-align: center;
}
</style>
