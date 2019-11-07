<template>
  <section class="item">
    <div>
      {{ item.title }}
    </div>
    <div class="author">
      {{ item.authorString }}
    </div>
  </section>
</template>
<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style scoped>
section.item {
  margin: 20px;
}
.author {
  font-size: smaller;
}
</style>
