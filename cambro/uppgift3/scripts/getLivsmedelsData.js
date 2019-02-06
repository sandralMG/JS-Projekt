$("#tabell").hide();

var search_element = document.getElementById('livsmedelsSokOrd');
var btn = document.getElementById('sok-button');
var tbody = document.querySelector('tbody');

btn.addEventListener('click', function () {

    tbody.innerHTML = ' ';

    var search = search_element.value;
    console.log(search);
    var url = `https://cors-anywhere.herokuapp.com/https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php?namn=${search}`;

    console.log(url);

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (parsedData) {
            return parsedData.livsmedel;
        })
        .then(renderResults)
        .catch(function (error) {
            console.log(error);
        });

    /*   fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(update)
        .catch(displayErrors);
 */
});

/* function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}
*/


function renderResults(data) {

    if (data.length > 0) {
        $("#tabell").show();


        for (var i = 0; i < data.length; i++) {

            var tr = document.createElement('tr');

            tbody.appendChild(tr);
            var td = document.createElement('td');
            tr.appendChild(td);
            var name = document.createTextNode(data[i].namn);
            td.appendChild(name);

            tbody.appendChild(tr);
            var td = document.createElement('td');
            tr.appendChild(td);
            var name = document.createTextNode(data[i].kolhydrater);
            td.appendChild(name);

            tbody.appendChild(tr);
            var td = document.createElement('td');
            tr.appendChild(td);
            var name = document.createTextNode(data[i].energi);
            td.appendChild(name);

            tbody.appendChild(tr);
            var td = document.createElement('td');
            tr.appendChild(td);
            var name = document.createTextNode(data[i].protein);
            td.appendChild(name);


            tbody.appendChild(tr);
            var td = document.createElement('td');
            tr.appendChild(td);
            var name = document.createTextNode(data[i].fett);
            td.appendChild(name);


        }
    } else {
        $("#tabell").hide();

    }

}
/*

function displayErrors(err) {
    console.log("INSIDE displayErrors!");
    console.log(err);
} */