
window.onload = function () {

    document.getElementById('cardholderNameDisplay').innerText = 'Jane AppleSeed';
    document.getElementById('cardNumberDisplay').innerText = '0000 0000 0000 0000';
    document.getElementById('expMMDisplay').innerText = '00';
    document.getElementById('expYYDisplay').innerText = '00';
    document.getElementById('cvcDisplay').innerText = '000';

    document.getElementById('cardholderName').addEventListener('input', function (e) {
        document.getElementById('cardholderNameDisplay').innerText = e.target.value;
    });

    document.getElementById('cardNumber').addEventListener('input', function (e) {
        document.getElementById('cardNumberDisplay').innerText = e.target.value;
    });

    document.getElementById('MM').addEventListener('input', function (e) {
        document.getElementById('expMMDisplay').innerText = e.target.value;
    });

    document.getElementById('YY').addEventListener('input', function (e) {
        document.getElementById('expYYDisplay').innerText = e.target.value;
    });

    document.getElementById('cvcInput').addEventListener('input', function (e) {
        document.getElementById('cvcDisplay').innerText = e.target.value;
    });

    let oldValue = '';
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        if (oldValue.length > e.target.value.length) {
            oldValue = e.target.value;
            return;
        }
        let value = e.target.value.replace(/\s/g, '');
        value = value.replace(/(.{4})/g, '$1 ');
        value = value.trim();
        e.target.value = value;
        oldValue = value;
    });

    var cardholderName = document.getElementById('cardholderName');

    cardholderName.addEventListener('input', function (e) {

        if (!/^[a-zA-Z\s]*$/.test(e.target.value)) {

            cardholderName.style.borderColor = 'hsl(0, 100%, 66%)';
            if (!document.getElementById('errorMessage')) {
                var errorMessage = document.createElement('p');
                errorMessage.id = 'errorMessage';
                errorMessage.textContent = 'Wrong format, letters only';
                errorMessage.style.color = 'hsl(0, 100%, 66%)';
                errorMessage.style.fontSize = '14px';
                cardholderName.parentNode.appendChild(errorMessage);
            }
        } else {

            cardholderName.style.borderColor = '';
            var errorMessage = document.getElementById('errorMessage');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    });

    var cardNumber = document.getElementById('cardNumber');


    cardNumber.addEventListener('input', function (e) {

        if (!/^[0-9\s]*$/.test(e.target.value)) {

            cardNumber.style.borderColor = 'hsl(0, 100%, 66%)';
            if (!document.getElementById('errorMessage')) {
                var errorMessage = document.createElement('p');
                errorMessage.id = 'errorMessage';
                errorMessage.textContent = 'Wrong format, numbers only';
                errorMessage.style.color = 'hsl(0, 100%, 66%)';
                errorMessage.style.fontSize = '14px';
                cardNumber.parentNode.appendChild(errorMessage);
            }
        } else {

            cardNumber.style.borderColor = '';
            var errorMessage = document.getElementById('errorMessage');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    });


    var formContainer = document.getElementById('formContainer');


    var form = formContainer.querySelector('form');


    form.addEventListener('submit', function (e) {

        e.preventDefault();

        var inputs = form.querySelectorAll('input');
        var allFieldsFilled = true;

        for (var i = 0; i < inputs.length; i++) {

            if (inputs[i].value === '') {

                inputs[i].style.borderColor = 'hsl(0, 100%, 66%)';
                var errorMessage = inputs[i].parentNode.querySelector('.errorMessage');
                if (!errorMessage) {
                    errorMessage = document.createElement('p');
                    errorMessage.className = 'errorMessage';
                    errorMessage.textContent = "Can't be blank";
                    errorMessage.style.color = 'hsl(0, 100%, 66%)';
                    errorMessage.style.fontSize = '14px';
                    inputs[i].parentNode.appendChild(errorMessage);
                }
                allFieldsFilled = false;
            } else {

                inputs[i].style.borderColor = '';
                var errorMessage = inputs[i].parentNode.querySelector('.errorMessage');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        }


        if (allFieldsFilled) {

            e.preventDefault();

            form.remove();

            var confirmationContainer = document.createElement('div');
            confirmationContainer.style.display = 'flex';
            confirmationContainer.style.flexDirection = 'column';
            confirmationContainer.style.alignItems = 'center';
            confirmationContainer.style.justifyContent = 'center';

            var checkboxImage = document.createElement('img');
            checkboxImage.src = 'icon-complete.svg';
            checkboxImage.style.width = '100px';
            checkboxImage.style.height = '100px';

            var thankYouMessage = document.createElement('p');
            thankYouMessage.textContent = 'THANK YOU!';
            thankYouMessage.style.fontSize = '36px';
            thankYouMessage.style.fontWeight = 'bold';
            thankYouMessage.style.color = 'hsl(278, 68%, 11%)';

            var cardDetailsMessage = document.createElement('p');
            cardDetailsMessage.textContent = 'We have added your card details.';
            cardDetailsMessage.style.fontSize = '18px';
            cardDetailsMessage.style.color = 'hsl(279, 6%, 55%)';
            cardDetailsMessage.style.margin = '0px 0px 20px 0px'

            var continueButton = document.createElement('button');
            continueButton.textContent = 'Continue';
            continueButton.style.fontSize = '18px';

            confirmationContainer.appendChild(checkboxImage);
            confirmationContainer.appendChild(thankYouMessage);
            confirmationContainer.appendChild(cardDetailsMessage);
            confirmationContainer.appendChild(continueButton);

            formContainer.appendChild(confirmationContainer);
        }

    });




}
