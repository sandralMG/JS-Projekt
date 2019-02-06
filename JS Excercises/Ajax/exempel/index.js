(function () {
    'use strict';
    document.querySelector('button').addEventListener('click', function () {
        getJoke(addToBody);
    });

    function log(res) {

        console.dir(res);
    }

    function addToBody(txt) {
        var p = document.createElement('p');
        p.innerHTML = txt.value.joke;
        document.querySelector('body').appendChild(p);
    }

    function getJoke(callback) {

        var xhr = new XMLHttpRequest();


        xhr.addEventListener('load', function (event) {
            console.dir(event);
            if (event.target.status == 200) {
                var obj = JSON.parse(event.target.response);
                callback(obj);
            }
        });

        xhr.open('GET', 'http://api.icndb.com/jokes/random');
        xhr.send();

    }



}());