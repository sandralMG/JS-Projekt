window.onload = function () {
    var form = document.getElementsByTagName("form")[0];


    form.onsubmit = validate;




    function validate() {

        //DOMstrings
        var firstName = document.getElementById('field_firstname');
        var lastName = document.getElementById('field_lastname');
        var email = document.getElementById('field_email');
        var organisation = document.getElementById('field_organisation');
        var message = document.getElementById('field_message');
        var checkedRadio1 = document.getElementById('pres_type_1').checked;
        var checkedRadio2 = document.getElementById('pres_type_2').checked;
        var presTitle = document.getElementById('field_pres_title');
        var isFirstName = false;
        var isLastName = false;
        var isEmail = false;
        var isOrganisation = false;


        function isEmptyField() {

            if (firstName.value.length == 0) {
                console.log('No firstname');
                firstName.style.border = "2px solid #e52213";
                firstName.value = 'Du måste fylla i ett förnamn';
                firstName.style.backgroundColor = "#efefef";
                isFirstName = false;
            } else {
                isFirstName = true;
            }

            if (lastName.value.length == 0) {
                console.log('No lastname');
                lastName.style.border = "2px solid #e52213";
                lastName.value = 'Du måste fylla i ett efternamn';
                lastName.style.backgroundColor = "#efefef";
                isLastName = false;
            } else {
                isLastName = true;
            }


            if (email.value.length == 0) {
                console.log('No email');
                email.style.border = "2px solid #e52213";
                email.value = 'Du måste fylla i en e-postadress';
                email.style.backgroundColor = "#efefef";
                isEmail = false;
            } else {
                isEmail = true;
            }

            if (organisation.value.length == 0) {
                console.log('No organisation');
                organisation.style.border = "2px solid #e52213";
                organisation.value = 'Du måste fylla i organisation';
                organisation.style.backgroundColor = "#efefef";
                isOrganisation = false;
            } else {
                isOrganisation = true;
            }

            if (isFirstName && isLastName && isEmail && isOrganisation) {
                console.log('No empty fields');
                isEmptyField = true;
            } else {
                console.log('At least one empty fields');
                isEmptyField = false;
            }


        }

        function isCorrectEmail() {

            var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

            var isValid = pattern.test(email.value);

            console.log(email.value);

            if (isValid) {
                console.log('Email is valid');
                isCorrectEmail = true;
            } else {
                console.log('Email is not valid');
                email.style.border = "2px solid #e52213";
                email.value = 'Du måste fylla i korrekt e-post adress';
                email.style.backgroundColor = "#efefef";
                isCorrectEmail = false;

            }


        }

        function messageLength() {

            var text = message.value;

            if (text.length > 200) {
                console.log(text.length);
                console.log('Too long message');
                message.style.border = "2px solid #e52213";
                message.value = 'Ange ett meddelande under 200 tecken';
                message.style.backgroundColor = "#efefef";
                messageLength = false;
            } else {
                console.log(text.length);
                console.log('Message is valid');
                messageLength = true;

            }

        }

        function isTitle() {

            if (checkedRadio1 === true || checkedRadio2 === true) {
                var chars = presTitle.value;
                if (chars.length === 0) {
                    console.log('Empty title');
                    presTitle.style.border = "2px solid #e52213";
                    presTitle.value = 'Du måste ange en titel';
                    presTitle.style.backgroundColor = "#efefef";
                    isTitle = false;
                } else {
                    console.log('Title is valid');
                    isTitle = true;
                }

            }
        }

        isEmptyField();
        isCorrectEmail();
        messageLength();
        isTitle();

        console.log(isCorrectEmail);
        console.log(isEmptyField);
        console.log(messageLength);
        console.log(isTitle);



        if (isCorrectEmail && isEmptyField && messageLength && isTitle) {
            console.log('Form is valid!');

            if (confirm("Vill du skicka registreringen?")) {
                return true;
            } else {
                alert("Registreringen avbröts.");
                return false;
            }

        } else {
            console.log('Form not valid!');
            return false;

        }




    }



}