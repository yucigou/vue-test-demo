<template>
  <div>
    <input type="text" name="query" id="query" v-model="query" />
    <button @click="emitQuery">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    emitQuery() {
      this.$emit("search", this.query);
    }
  }
};
</script>
