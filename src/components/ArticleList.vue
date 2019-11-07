<template>
  <section>
    <h2>Results</h2>
    <div>1 - 25 of {{ count }} results</div>
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
  computed: mapState({
    list: state => {
      if (
        state.searchResult &&
        state.searchResult.resultList &&
        state.searchResult.resultList.result
      ) {
        return state.searchResult.resultList.result;
      } else {
        return [];
      }
    },
    count: state => {
      if (state.searchResult) {
        return state.searchResult.hitCount;
      } else {
        return "";
      }
    }
  })
};
</script>
