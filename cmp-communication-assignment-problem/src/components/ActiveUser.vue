<template>
  <h2>Username: {{ user }}</h2>
  <h3>Age: {{ age }}</h3>
</template>

<script>
export default {
  props: ["user", "age"],
  data() {
    return {};
  },
};
</script>

<style></style>
