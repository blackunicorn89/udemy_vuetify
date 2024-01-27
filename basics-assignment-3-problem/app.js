const assignmentApp = Vue.createApp({
    data() {
        return {
            sum: 0
        }
    },
    computed: {
        result() {
            if (this.sum < 37) {
                return "Not there yet";
            }
            else if (this.sum > 37) {
                return "Too much";
            }
            else {
                return this.sum
            }
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
            that.sum = 0;
            }, 5000);
        }
    },
    methods: {
        calculate(num) {
            this.sum = this.sum + num;
            console.log(this.sum)
        }
    }
})
assignmentApp.mount("#assignment")