document.addEventListener('DOMContentLoaded', function () {
    console.log('Działa');
    var next = document.querySelector('#messageNextButton');
    var msgInput = document.querySelector('#messageInput');
    var form = document.querySelector('#form');

    console.log(next);
    console.log(msgInput);
    var emailValue;
    var nameValue;
    var messageValue;
    var clickCount = 0;

    next.addEventListener('click', function (e) {
        e.preventDefault();
        clickCount += 1;
        console.log("kliki:  " + clickCount);
        function name(name) {
            var name = msgInput;
            nameValue = document.querySelector('#messageInput').value;
            return name;
        }
        function email() {
            var email = msgInput;
            emailValue = document.querySelector('#messageInput').value;
            return email;
        }
        function message(message) {
            var message = msgInput;
            messageValue = document.querySelector('#messageInput').value;
            return message;
        }




        function print() {

            var newData = {
                "nameValue": nameValue,
                "emailValue": emailValue,
                "messageValue": messageValue
            };

            var xmlhttp= window.XMLHttpRequest ?
                new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    console.log("wysłano");
            }

            xmlhttp.open("POST","example.php",true);
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send(JSON.stringify(newData));

        }

                if (clickCount === 1){
                   name();
                    var clearText = function(){
                       msgInput.value = '';
                       msgInput.placeholder = "What is your email?";
                    };

                    clearText();
                }else if (clickCount === 2) {
                        email();
                        var clearText = function () {
                            msgInput.value = '';
                            msgInput.placeholder = "Write a message";
                        };
                        clearText();

                } else if (clickCount === 3) {
                    message();
                    print();
                    msgInput.style.visibility = "hidden";
                    next.style.backgroundColor = "#B3C95A";
                    next.textContent = "Message has been sent!";
                    next.classList.add("fade-in-bottom");
                    next.classList.add("newCenter");


                }
            })

    });