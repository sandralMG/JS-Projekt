/**
 * App for making a simple todo list
 * Author: Sandra Larsson
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
      var newTodo = $("<li><span>" + todo.name + "</span><input type='text' hidden id='editInput'></input><button class='btn-small' id='btn-edit'>Redigera</button><button class='btn-small' id='btn-remove'>Ta bort</button></li>");

      newTodo.data("id", todo.id);
      newTodo.data("name", todo.name);
      newTodo.data("completed", todo.completed);

      $(".list").append(newTodo);
      todos.push(todo);
    };

    var addTodos = function (todos) {
      //add todos to page here
      todos.forEach(function (todo) {
        addTodo(todo);
      });
    };

    var createTodo = function () {
      if ($('#todoInput').val() == '') {
        $('#todoInput').attr("placeholder", "Du måste fylla i").placeholder();
      } else {
        var userInput = $("#todoInput").val();
        var newItem = new Todo(increment, userInput, false);
        addTodo(newItem);
        increment++;
      }
    };

    var completetedTodo = function (todo) {
      var isDone = !todo.data("completed");
      todo.toggleClass("done");
      todo.data("completed", isDone);
    };

    var saveTodos = function (todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    var initTodos = function () {
      var storedTodos = JSON.parse(localStorage.getItem("todos"));

      if (storedTodos) {
        storedTodos.forEach(function (todo) {
          addTodo(todo);
        });
      }
    };

    var clearTodos = function (todos) {
      //Radera array
      while (todos.length) {
        todos.pop();
        console.log("deleted");
      }
      //Radera localstorage
      localStorage.clear();
    };

    var removeTodo = function (todo) {
      //remove from array
      var clickedId = todo.data("id");
      todo.splice(clickedId, 1);
      //remove from DOM
      todo.remove();
      console.log(todo);
    };

    var editTodo = function (clickedId, userInput) {

      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == clickedId) {
          todos[i].name = userInput;

        }
      }

    }

    var clearUI = function () {
      $(".list").empty();
    };

    return {
      init: function () {

        initTodos();

        $("#btnAdd").on("click", function () {

          createTodo();
          console.log(todos);

        });

        $("#btnSave").on("click", function () {
          saveTodos(todos);
        });

        $("#btnClear").on("click", function () {
          clearTodos(todos);
          clearUI();
        });

        $(".list").on("click", "li", function () {
          completetedTodo($(this));
        });

        $(".list").on("click", "#btn-remove", function (e) {
          e.stopPropagation();
          removeTodo($(this).parent());
        });

        $(".list").on("click", "#btn-edit", function (e) {
          e.stopPropagation();

          if ($(this).closest("li").find("span").is(':visible')) {

            var inputField = $(this).closest("li").find("span").html();
            $(this).closest("li").find("span").hide();
            $(this).closest("li").find("input").show();
            $(this).closest("li").find("input").val(inputField);
            $(this).html("Spara");

          } else {

            var userInput = $(this).closest("li").find("input").val();
            $(this).closest("li").find("input").hide();
            $(this).closest("li").find("span").show();
            $(this).closest("li").find("span").html(userInput);
            $(this).html("Redigera");

            //Save edited todo in array
            var clickedId = $(this).parent().data("id");
            editTodo(clickedId, userInput);

          }
          console.log(todos);

        });

      }
    };
  })();
  TodoApp.init(); // Run application
});