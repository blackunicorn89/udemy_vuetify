const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            output: "",
            outputEnter: ""
        };
    },
    methods: {
        showAlert() {
            alert("Yay");
        },
        saveUserInput(event) {
            this.userInput = event.target.value;

        },
        updateOutput() {
            this.output = this.userInput
        },
        updateOutputEnter() {
            this.outputEnter = this.userInput
        }

    } 
})
app.mount("#assignment")