<template>
  <div class="search">
    <QueryContainer />
    <ArticleList />
  </div>
</template>

<script>
// @ is an alias to /src
import QueryContainer from "@/components/QueryContainer.vue";
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "search",
  components: {
    QueryContainer,
    ArticleList
  },
  created() {
    this.$store.dispatch("article/search", { query: this.$route.query.query });
  }
};
</script>
