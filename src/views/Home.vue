<template>
  <div class="home">
    <QueryContainer />
    <ArticleList />
  </div>
</template>

<script>
// @ is an alias to /src
import QueryContainer from "@/components/QueryContainer.vue";
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "home",
  components: {
    QueryContainer,
    ArticleList
  }
};
</script>
