(function () {
    'use strict';
    let gameArea;
    let cars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let clickable = true;
    let openCard;

    addEventListener('load', init);

    function init() {
        removeEventListener('load', init);
        gameArea = document.querySelector("#game-area");
        createGameArea();

        gameArea.addEventListener('click', cardClick);

    }


    function cardClick(event) {

        let target = event.target;
        if (target.tagName.toLowerCase() != 'img' || !clickable) return;
        target.setAttribute('class', '');

        if (openCard == undefined) {
            openCard = target;
        } else if (target.src != openCard.src) {

            setTimeout(function () {
                openCard.setAttribute('class', 'hidden');
                target.setAttribute('class', 'hidden');
                openCard = undefined;
            }, 1000);


        }


    }

    function createGameArea() {
        cars = cars.concat(cars);




        for (let i = 0, length = cars.length; i < length; i++) {

            let carsNumber = cars.splice(Math.floor(Math.random() * cars.length), 1);

            let div = document.createElement("div");
            div.setAttribute("class", "card");
            let img = document.createElement("img");
            img.setAttribute("src", "assets/img/car-" + carsNumber + ".jpg");
            img.setAttribute("class", "hidden");

            div.appendChild(img);
            gameArea.appendChild(div);


        }

    }

    createGameArea();

}());