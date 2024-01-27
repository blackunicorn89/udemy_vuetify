const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: "",
      //fullname: ''
    };
  },
  computed: {
    fullname() {
      console.log("Running again and again...")
      if(this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    } 
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
        //this.counter = 0;
      }
    }
   /*  name(value) {
      if (value === "") {
        this.value = "";
      }
      else {
        this.fullname = value + " " + this.lastname;
      }
    },
    lastname(value) {
      if (value === "") {
        this.value = "";
      }
      else {
        this.fullname = this.name + " " + value;
      }
    } */
      
  },
  methods: {
    outputFullname() {
      console.log("Running again and again...")
      if(this.name === "") {
        return "";
      }
      return this.name + " " + "Kavio";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num; 
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    }
    
  }
});

app.mount('#events');
