/**
 * App for making a simple todo list
 * Author: 
 *
 * @requires jQuery
 * @version 0.0.1
 */
var TodoApp = (function () {
    // Properties
    var Todo = function (id, description, completeted) {
        this.id = id;
        this.description = description;
        this.completeted = false;
    };

    var data = [];

    var increment = 0;

    var addItem = function (description, completeted) {

        id = increment;
        //Add item to the list
        var newItem = new Todo(id, description, completeted);

        // Push it into our data structure
        data.push(newItem);

        increment++;

        // Return the new element
        return newItem;

    }
    var getTodos = function () {
        return id;
    }

    var editItem = function (id, description) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == i) {
                data[i].description = description;
            }
        }
    }

    var deleteItem = function (id) {

    }

    return {
        init: function () {
            console.log('Application has started.');
            addItem("dsjfkfjdl", false);
            console.log(data);
            addItem("dsjfkfjdl", false);
            console.log(data);
            addItem("dsjfkfjdl", false);
            console.log(data);
            editItem(2, "bajs");

            //addItem(1, "köpa glass", false);
            /*UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();*/
        }
    };

})();

TodoApp.init(); // Run application