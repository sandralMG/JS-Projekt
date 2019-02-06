(function () {
    'use strict';


    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            query(addToBody);
            query(log);
        }



    });

    function log(res) {
        console.dir(res[0].show.url);
        console.dir(res[0].show.name);
        console.dir(res[0].score);
        console.dir(res[0].show.image);
        console.dir(res[0].show.image.medium);

    }

    function search(val) {
        fetchData(val);
    }

    function fetchData(q) {
        fetch(`http://api.tvmaze.com/search/shows?q=${q}`)
            .then((res) => res.json())
            .then(addToBody)
    }

    function addToBody(res) {

        res.forEach(function (obj, i) {

            var a = document.createElement('a');
            a.setAttribute('class', 'card');
            a.setAttribute('href', obj.show.url);
            var img = obj.show.image != null ? obj.show.image.medium : '';
            console.log("img", img)

            //style="background-image: url(${(obj.show.image != null ? obj.show.image.medium : '')});"
            a.innerHTML = (`<span class="card-header" style="background-image: url( ${img} );">
                            <span class = "card-title">
                            <h3> ${obj.show.name} </h3> 
                            </span> 
                        </span> 
                        <span class = "card-summary">
                            ${obj.score.toFixed(2)} 
                        </span> 
                        <span class = "card-meta">
                            Click for more info 
                        </span>`);


            document.querySelector('.cards').appendChild(a);

            setTimeout(function () {
                a.className += ' card-show';
            }, i * 100);
            document.querySelector('.card').classList.add('card-show');
        });

    }


    function query(callback) {

        var xhr = new XMLHttpRequest();

        xhr.addEventListener('load', function (event) {
            console.dir(event);
            if (event.target.status == 200) {
                var obj = JSON.parse(event.target.response);
                callback(obj);
            }
        });

        var search = document.querySelector('#search_input').value;

        xhr.open('GET', 'http://api.tvmaze.com/search/shows?q=' + search);
        xhr.send();

    }

}());


/*

   <!--    TEMPLATE:
            <a class="card" href="#preview_url">
                <span class="card-header" style="background-image: url(http://placeimg.com/200/175/any);">
                    <span class="card-title">
                        <h3>Show title</h3>
                    </span>
                </span>
                <span class="card-summary">
                    Score
                </span>
                <span class="card-meta">
                    Click for more info
                </span>
            </a> -->

            */




/*
        var span_header = document.createElement('span');
        span_header.setAttribute('class', 'card-header');
        document.querySelector('.card').appendChild(span_header);

        var span_title = document.createElement('span');
        span_title.setAttribute('class', 'card-title');
        document.querySelector('.card-header').appendChild(span_title);

        var h3 = document.createElement('h3');
        var content = document.createTextNode(txt[0].show.name);
        h3.appendChild(content);
        document.querySelector('.card-title').appendChild(h3);


        var span_summary = document.createElement('span');
        var content = document.createTextNode(txt[0].score);
        span_summary.appendChild(content);
        span_summary.setAttribute('class', 'card-summary');
        document.querySelector('.card').appendChild(span_summary);

        var span_meta = document.createElement('span');
        var content = document.createTextNode('Click here for more info');
        span_meta.appendChild(content);
        span_meta.setAttribute('class', 'card-meta');
        document.querySelector('.card').appendChild(span_meta);
*/