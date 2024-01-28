<template>
  <h2>Add Resource</h2>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title: </label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description: </label>
        <textarea
          id="description"
          name="description"
          ref="descriptionInput"
          rows="3"
        />
      </div>
      <div class="form-control">
        <label for="link">Link: </label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInValid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInValid = false;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
