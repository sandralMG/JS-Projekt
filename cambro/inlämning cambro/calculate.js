function addColumn() {

    var thead_tr = document.querySelector('table thead tr');
    var th = document.createElement('th');
    thead_tr.appendChild(th);


    var rubrik_element = document.querySelector('thead>tr>th:last-child');
    var colRubrik = document.createTextNode('Summa');
    rubrik_element.appendChild(colRubrik);

    var tbody_tr = document.querySelectorAll('table tbody tr');

    for (var i = 0; i < tbody_tr.length; i++) {
        var td = document.createElement('td');
        tbody_tr[i].appendChild(td);
    }


}

function addRow() {

    var tr = document.createElement('tr');
    var tbody = document.querySelector('tbody');
    tbody.appendChild(tr);


    var last_row = document.querySelector('tbody tr:last-child');
    for (var i = 0; i < 6; i++) {
        var td = document.createElement('td');
        last_row.appendChild(td);
    }

    var last_row_last_col = last_row.querySelector('td:last-child');
    last_row_last_col.setAttribute('id', 'sumrow')

}

function createButton() {
    var content = document.getElementById('content');
    var button = document.createElement('button');
    content.appendChild(button);
    button.setAttribute('class', 'btn btn-primary');
    var text_button = document.createTextNode('Beräkna pris');
    button.appendChild(text_button);
}


function sumPrices() {

    var tr_all = document.querySelectorAll('table tbody tr');
    var input = document.querySelectorAll('table tbody input');
    var sum_col = document.querySelectorAll('table tbody tr td:last-child');
    var total_price_element = document.getElementById('sumrow');
    var sum_prices = 0;
    var total = 0;

    for (var i = 0; i < input.length; i++) {
        var td_all = tr_all[i].querySelectorAll('td');
        var total_price = parseInt(input[i].value) * parseInt(td_all[td_all.length - 3].textContent);
        sum_prices = sum_prices + total_price;
        sum_col[i].textContent = total_price;
        total = total + parseInt(input[i].value);
    }

    total_price_element.textContent = sum_prices;

    var total_element_td = document.querySelectorAll('table tbody td');
    total_element_td[total_element_td.length - 2].textContent = total;;
}

addColumn();
addRow();
createButton();
sumPrices();

var btn = document.querySelector('.btn-primary');

btn.addEventListener('click', function () {
    console.log('btn click');
    sumPrices();
});