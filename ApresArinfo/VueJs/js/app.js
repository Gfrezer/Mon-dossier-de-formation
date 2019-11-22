new Vue({
    el: "#app",
    data: {
        message: "ok c'est cool",
        link: "http://grifkart.fr",
        booleen: true,
        personnes: ["Jacky", "Paul", "Cécile", "Florent", "lucie"],


    },

    methods: {
        close: function () {
            this.booleen = false;
        }
    }


})