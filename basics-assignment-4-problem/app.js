const vueApp = Vue.createApp({
    data() {
        return {
            style: "",
            visibility: "visible",
            inputColor: ""
        }
    },
    methods: {
        userInput(event) {
            if (event.target.value === "user1" || event.target.value === "user2") {
                this.style = event.target.value;
            }
            else {
                alert(event.target.value)
            }
            
        },
        changeVisibility() {
            if(this.visibility === "visible") {
                this.visibility = "hidden"
            }
            else {
                this.visibility = "visible"
            }
        },
        changeBackgroundColor(event) {
            this.inputColor = event.target.value
        }
    }

})
vueApp.mount("#assignment")