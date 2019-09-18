<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  background-color: #616161;
  color: white;
}
</style>
