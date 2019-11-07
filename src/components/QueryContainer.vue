<template>
  <div>
    <QueryBox @search="search" />
  </div>
</template>

<script>
import QueryBox from "./QueryBox";

export default {
  components: { QueryBox },
  methods: {
    search(query) {
      this.$store.dispatch("search", { query });
    }
  }
};
</script>
