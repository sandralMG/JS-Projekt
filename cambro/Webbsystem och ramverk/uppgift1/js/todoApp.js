/**
 * App for making a simple todo list
 * Author: Sandra Larsson
 *
 * @requires jQuery
 * @version 0.0.1
 */
$(document).ready(function() {
  var TodoApp = (function() {
    // Properties
    var Todo = function(id, name, completeted) {
      this.id = id;
      this.name = name;
      this.completeted = completeted;
    };

    var todos = [];

    var increment = 0;

    var addTodo = function(todo) {
      var newTodo = $("<li>" + todo.name + "<span>X</span></li>");

      newTodo.data("id", todo.id);
      newTodo.data("name", todo.name);
      newTodo.data("completed", todo.completed);
      /*  if (todo.completed) {
                 newTodo.addClass("done");
             } */
      $(".list").append(newTodo);
      todos.push(todo);
    };

    var addTodos = function(todos) {
      //add todos to page here
      todos.forEach(function(todo) {
        addTodo(todo);
      });
    };

    var createTodo = function() {
      if (!$("#todoInput").is(":empty")) {
        console.log("hit");
        var userInput = $("#todoInput").val();
        var newItem = new Todo(increment, userInput, false);
        addTodo(newItem);
        increment++;
      } else {
        console.log("miss");
        $("#todoInput")
          .attr("placeholder", "Du måste fylla i")
          .placeholder();
      }
    };

    var updateTodo = function(todo) {
      var isDone = !todo.data("completed");
      todo.toggleClass("done");
      todo.data("completed", isDone);
    };

    var saveTodos = function(todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    var initTodos = function() {
      var storedTodos = JSON.parse(localStorage.getItem("todos"));

      if (storedTodos) {
        storedTodos.forEach(function(todo) {
          addTodo(todo);
        });
      }
    };

    var clearTodos = function(todos) {
      //Radera array
      while (todos.length) {
        todos.pop();
        console.log("deleted");
      }
      //Radera localstorage
      localStorage.clear();
    };

    var removeTodo = function(todo) {
      //remove from array
      var clickedId = todo.data("id");
      console.log(clickedId);
      todo.splice(clickedId, 1);
      //remove from DOM
      todo.remove();
      console.log(todo);
    };

    var clearUI = function() {
      $(".list").empty();
    };

    return {
      init: function() {
        initTodos();

        $("#btnAdd").on("click", function() {
          createTodo();
          console.log(todos);
        });

        $("#btnSave").on("click", function() {
          //addTodos(todos);
          saveTodos(todos);
        });

        $("#btnClear").on("click", function() {
          //addTodos(todos);
          clearTodos(todos);
          clearUI();
        });

        $(".list").on("click", "li", function() {
          updateTodo($(this));
        });

        $(".list").on("click", "span", function(e) {
          e.stopPropagation();
          console.log("span clicked");
          removeTodo($(this).parent());
        });
      }
    };
  })();
  TodoApp.init(); // Run application
});
