const assignment = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTaskValue: "",
            showList: true,
            buttonValue: "Hide List"
        };
    },
    computed: {
      buttonCaption() {
        /*if (this.showList === false) {
            this.buttonValue = "Show list";
        }
        else {
            this.buttonValue = "Hide list"
        }*/
          return this.showList ? "Hide List" : "Show List"
      }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        },
        showHideList() {
            this.showList = !this.showList;
        }
    }
});
assignment.mount('#assignment');
