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

        var todos = [];

        var increment = 0;

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
            todos.push(todo);

        }

        var addTodos = function (todos) {
            //add todos to page here
            todos.forEach(function (todo) {
                addTodo(todo);
            });
        }



        var createTodo = function () {
            //send request to create new todo
            var userInput = $('#todoInput').val();
            var newItem = new Todo(increment, userInput, false);
            addTodo(newItem);
            increment++;

            /* 
                        $.post('/api/todos', {
                                name: usrInput
                            })
                            .then(function (newTodo) {
                                $('#todoInput').val('');
                                addTodo(newTodo);
                            })
                            .catch(function (err) {
                                console.log(err);
                            }) */
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

        var saveTodos = function (todos) {
            localStorage.setItem("todos", JSON.stringify(todos));

        }

        var initTodos = function () {
            var storedTodos = JSON.parse(localStorage.getItem("todos"));
            storedTodos.forEach(function (todo) {
                addTodo(todo);
            });
        }

        var clearTodos = function (todos) {
            while (todos.length) {
                todos.pop();
            }
        }

        return {
            init: function () {
                initTodos();

                $('#btnAdd').on('click', function () {
                    createTodo();
                    console.log(todos);
                });


                $('#btnSave').on('click', function () {
                    //addTodos(todos);
                    saveTodos(todos);

                });

                $('#btnClear').on('click', function () {
                    //addTodos(todos);
                    clearTodos(todos);

                });
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