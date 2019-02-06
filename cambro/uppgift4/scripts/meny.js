//jQuery som kör funktionen generateMenu när sidan laddads klart
$(document).ready(generateMenu);

function generateMenu() {


    //DOM referense till menyn
    var meny = document.querySelector('#receptmeny .contentarea');

    //Skapa ett ul-element
    var ul = document.createElement('ul');
    //LÄgger till ul-listan till menyn
    meny.appendChild(ul);

    //DOM referens till alla divs som håller varje recept. Dessa har classe="post"
    var posts = document.querySelectorAll('.post');


    //Loopas igenom varje div
    for (var i = 0; i < posts.length; i++) {

        //Dölje alla recept förutom det första
        posts[i].style.display = 'none';

        //EN DOM ref för varje h4-rubrik  i varje div
        var h4 = posts[i].querySelector('h4');


        //Skapar ett li element
        var li = document.createElement('li');
        //LÄgger li-elementet til ul-listan
        ul.appendChild(li);

        //Skapa een dynamisk sträng utefter index för varje div
        var id = 'link' + i;
        //Sättet id-attribut till varje div-element
        posts[i].setAttribute('id', id);
        //Skapaer ett a-element
        var a = document.createElement('a');
        //Lägger till a-elementt till dess li
        li.appendChild(a);
        //Skapaer en dynamisk strän för bokmärke-länk
        var link = '#link' + i;
        //Sätter länkadressem med bokmärkeadressen #link + i
        a.setAttribute('href', link);

        //Slutligen, hämtar textinnehållet i varje h4 
        var text = document.createTextNode(h4.textContent);
        //Sätter in textinnehållet för varje recept i länken
        a.appendChild(text);


        //Hittar referens till alla li som genererats i sidomenyn
        var lis = document.querySelectorAll('.contentarea ul li');

        //Loopar genom varje li för att lägga på en lyssnare på varje element
        for (var i = 0; i < lis.length; i++) {

            //LÄgger till lyssnaren med en anonym callback-funktion
            lis[i].addEventListener('click', function () {
                //Hämtar a referensen i li
                var a = this.querySelector('a');
                //Hämtar länk attributet
                var link = a.getAttribute('href');

                //Tar bprt # innan matchning
                link = link.substr(1, link.length);

                //Hämtar alla divs med class=post
                var divs = document.querySelectorAll('.post');

                //Loopar genom varje div för att avgöra om recpetet ska visas eller inte
                for (var j = 0; j < divs.length; j++) {

                    //Hämta attributet id för varje .post-div
                    var id = divs[j].getAttribute('id');

                    //Om id i .posd-diven och den klickade li a -länken matchar
                    if (id == link) {

                        //Visa det elementet
                        divs[j].style.display = 'block';

                    } else {

                        //Gör övriga osynliga
                        divs[j].style.display = 'none';

                    }


                }


            });

        }

    }


}