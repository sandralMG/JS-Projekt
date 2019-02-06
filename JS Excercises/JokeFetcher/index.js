import { retriveJoke } from './jokeFetcher.js';

    document.querySelector('button').addEventListener('click', getJoke);

    function getJoke() {
        retriveJoke()
            .then(log)
            .then(addToBody);
    }

    function log(obj) {
        console.dir(obj);

        return obj.value.joke;
    }

    function addToBody(joke) {
        const P = document.createElement('p');
              P.innerHTML = joke;

        document.querySelector('body').appendChild(P);
    }

