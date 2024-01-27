const app = Vue.createApp({
    data() {
        return {
            myName: "Antti Helander",
            myAge: 34,
            randomNumber: 0,
            imageUrl: "https://vet.tufts.edu/sites/g/files/lrezom951/files/styles/large/public/2023-01/iStock-1086631812.jpg?itok=74lyCyA1"
        };
    },
    methods: {
        favoriteNumber() {
            this.randomNumber = Math.random()
            return this.randomNumber;
        },
        calculateAge() {
            return this.myAge + 5
        }
    }
})
app.mount("#assignment")