const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
    },
    submitForm() {
      alert("Submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  },
    
});

app.mount('#events');
