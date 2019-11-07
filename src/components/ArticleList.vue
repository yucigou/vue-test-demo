<template>
  <section>
    <h2 v-if="count">Results</h2>
    <div v-if="count">
      1 - {{ count > 25 ? 25 : count }} of {{ count }} results
    </div>
    <div>
      <div v-for="item in list" :key="item.id" class="item">
        <ArticleItem :item="item" />
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
import ArticleItem from "./ArticleItem";

export default {
  props: {
    item: Object
  },
  components: {
    ArticleItem
  },
  computed: mapState("article", {
    list: state => {
      if (
        state.searchResult &&
        state.searchResult.data &&
        state.searchResult.data.resultList &&
        state.searchResult.data.resultList.result
      ) {
        return state.searchResult.data.resultList.result;
      } else {
        return [];
      }
    },
    count: state => {
      if (state.searchResult && state.searchResult.data) {
        return state.searchResult.data.hitCount;
      } else {
        return "";
      }
    }
  })
};
</script>

<style scoped>
section {
  text-align: left;
}
</style>
