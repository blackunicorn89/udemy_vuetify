const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "yaruno",
                    name: "Yaruno Hujanen",
                    phone: "0121288",
                    email: "yaruno@localhost.com"
                },
                {
                    id: "lahna",
                    name: "Lahna Kala",
                    phone: "0121299",
                    email: "lahna@localhost.com"
                }
            ]
        }
    },
});

app.component("friend-contact", {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
            {{ detailsAreVisible ? "Hide" : "Show" }} details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    
    `,
    data() {
        return {
            friend: {
                id: "yaruno",
                name: "Yaruno Hujanen",
                phone: "0121288",
                email: "yaruno@localhost.com"
            },
            detailsAreVisible: false
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible =! this.detailsAreVisible
        }
    }
});

app.mount("#app");