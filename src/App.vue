<template>
  <div id="app">
    <div id="nav"><router-link to="/">Home</router-link></div>
    <h1>Article Finder</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      display: none;
    }
  }
}

h1 {
  text-align: center;
}
</style>
