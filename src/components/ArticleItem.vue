<template>
  <section>
    <div>
      {{ item.title }}
    </div>
    <div>
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
