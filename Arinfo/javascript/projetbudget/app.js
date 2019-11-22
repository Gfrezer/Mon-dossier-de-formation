//=======BUDGET CONTROLLER ======================================================
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum = sum + cur.value;

        });
        data.totals[type] = sum;

    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },

        budget: 0,
        percentage: -1
    };
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === "exp") {
                newItem = new Expense(ID, des, val);
            } else if (type === "inc") {
                newItem = new Income(ID, des, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },


        calculatebudget: function () {
            calculateTotal("exp");
            calculateTotal("inc");
            data.budget = data.totals.inc - data.totals.exp;
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {

            }
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function () {
            console.log(data);
        }
    };

})();



//======UI CONTROLLER===========================================================================================
let UIController = (function () {

    var DOMstrings = {
        inputTYpe: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        inputBtn1: ".add__btn1",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expensesLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputTYpe).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };

        },

        addListItem: function (obj, type) {
            var html, newhtml;
            if (type === "inc") {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"> <i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            } else if (type === "exp") {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div ="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div>  <div class="item__percentage">%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div>  </div> </div>'
            }

            newhtml = html.replace("%id%", obj.id);
            newhtml = newhtml.replace("%description%", obj.description);
            newhtml = newhtml.replace("%value%", obj.value);
            document.querySelector(element).insertAdjacentHTML("beforeend", newhtml);


        },
        clearFields: function () {
            fields = document.querySelectorAll(DOMstrings.inputDescription + ", " +
                DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
                fieldsArr[0].focus();


            });
        },

        displayBudget: function (obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "___";
            }


        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();





// GLOBAL AAP CONTROLLER=============================================================================
var controller = (function (budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMstrings();
    var setupEventlisteners = function () {
        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    var updateBudget = function () {
        budgetCtrl.calculatebudget();

        var budget = budgetCtrl.getBudget();
        UICtrl.displayBudget(budget);
    }
    var ctrlAddItem = function () {
        var input, newItem;
        input = UICtrl.getInput();
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();
            updateBudget();
        }


    };
    
    
    document.querySelector(DOM.inputBtn1).addEventListener("click", function () { 
        if (UICtrl.getInput.description !== "") {
            document.querySelector(DOM.inputDescription).value = " ";
            
        }

    });
    
    
    

//    document.querySelector(DOM.inputBtn1).addEventListener("click", function () {
//        input = UICtrl.getInput();
//        if (input.description !== "") {
//            document.querySelector(".add__description").value = " ";
//            console.log("essaaaaaa");
//        }
//
//    });



    return {
        init: function () {
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1

            });
            setupEventlisteners();
        }
    };


})(budgetController, UIController);

controller.init();
