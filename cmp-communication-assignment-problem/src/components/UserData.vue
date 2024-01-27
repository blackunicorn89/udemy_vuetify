<template>
  <form @submit.prevent="submitData">
    <label>Name:</label>
    <input type="text" v-model="name" />
    <br />
    <label>Age</label>
    <input type="number" v-model="age" />
    <br />
    <button type="submit">Add user data</button>
  </form>
</template>

<script>
export default {
  emits: ["add-data"],
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods: {
    submitData() {
      this.$emit("add-data", this.name, this.age);
    },
  },
};
</script>

<style></style>
