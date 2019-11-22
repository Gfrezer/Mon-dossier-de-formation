"use strict"

let url = "http://data.fixer.io/api/latest?access_key=b0aeba8adf4126c6fea246449480728e&base=EUR&symbols=USD,GPB,JPY,EUR"


function recupvaleur() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (res, status, rep) {
            var rates = res.rates;
            var amout = document.getElementById("fromAmount").value;
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value;
            var result = amout * rates[to] / rates[from];
            document.getElementById("toAmount").value = result;
        }
    })
}
