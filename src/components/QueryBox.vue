<template>
  <div>
    <input
      type="text"
      name="query"
      id="query"
      v-model="query"
      size="40"
      @keyup.enter="emitQuery"
    />
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

<style scoped>
input {
  margin-right: 10px;
}
</style>
