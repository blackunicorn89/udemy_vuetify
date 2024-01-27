const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: ""
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue !== "") {
        this.goals.push(this.enteredGoalValue)
      }
    },
    removeGoal(inx) {
      this.goals.splice(inx, 1)
    }
  }

});
app.mount('#user-goals');
