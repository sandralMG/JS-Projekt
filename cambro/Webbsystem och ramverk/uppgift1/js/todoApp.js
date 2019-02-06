/**
 * App for making a simple todo list
 * Author: 
 *
 * @requires jQuery
 * @version 0.0.1
 */
$(document).ready(function () {

    var TodoApp = (function () {
        // Properties
        var Todo = function (id, name, completeted) {
            this.id = id;
            this.name = name;
            this.completeted = completeted;
        };

        var data = [];


        var createTodo = function () {
            //send request to create new todo
            var usrInput = $('#todoInput').val();
            $.post('/api/todos', {
                    name: usrInput
                })
                .then(function (newTodo) {
                    $('#todoInput').val('');
                    addTodo(newTodo);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }

        var addTodo = function (todo) {
            console.log(todo.name);

            var newTodo = $('<li>' + todo.name + '</li>');
            console.log(newTodo);
            newTodo.data('id', todo.id);
            newTodo.data('name', todo.name);
            newTodo.data('completed', todo.completed);
            /*  if (todo.completed) {
                 newTodo.addClass("done");
             } */
            $('.list').append(newTodo);

        }

        var addTodos = function (todos) {
            //add todos to page here
            todos.forEach(function (todo) {
                addTodo(todo);
            });
        }


        /*   var editItem = function (id, description) {
              for (var i = 0; i < data.length; i++) {
                  if (data[i].id == id) {
                      data[i].description = description;
                  }
              }
          } */

        var deleteItem = function (id) {

        }

        return {
            init: function () {
                var newItem = new Todo(3, "bajs", false);
                addTodo(newItem);

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

});

/*
function addTodos(todos) {
    //add todos to page here
    todos.forEach(function(todo){
      addTodo(todo);
    });
  }
  
  function addTodo(todo){
    var newTodo = $('<li class="task">'+todo.name +' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
      newTodo.addClass("done");
    }
    $('.list').append(newTodo);
  }
  */