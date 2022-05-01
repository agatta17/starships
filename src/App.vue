<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: $primary;
}

.container {
  max-width: 520px;
  margin: 0 auto;
  padding: 15px;
}

[data-tooltip] {
  position: relative;

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    opacity: 0;
    transition: .3s;
    pointer-events: none;
    width: 300px;
    left: 0; 
    top: 100%;
    background: #FFF;
    font-size: 12px;
    font-weight: 400;
    padding: 4px 8px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 1;

    @media (max-width: 520px) {
      & {
        width: 200px;
      }
    }
  }

  &:hover::after {
    opacity: 1;
  }
}
</style>