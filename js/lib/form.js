$(function () {

    var $msgInput = $('#messageInput');


    var phoneValue;
    var nameValue;
    var messageValue;

    $('#form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);


        function print() {

            console.log(nameValue);
            console.log(phoneValue);
            console.log(messageValue);

            var newData = {
                name: nameValue,
                email: phoneValue,
                message: messageValue,
            };

            $.ajax({
                url: 'example.php',
                type: 'POST',
                data: JSON.stringify(newData)

            }).done(function (response) {
                console.log('🙂 wiadomość wysłana');
                console.log(response);


            }).fail(function (error) {
                console.log('😎 wiadomość nie wysłana');
            })


        }

        function name(name) {
            name = $msgInput.val();
            return name;
        }

        function phone(number) {
            number = $msgInput.val();

            return number;
        }

        function message(msg) {
            msg = $msgInput.val();
            return msg;
        }


        if ($this.data('clicked') == 1) {
            console.log('2-gi klik');
            phoneValue = phone();
            $msgInput.attr('placeholder', 'Whats your message?')
            $msgInput.val('');
            $this.data('clicked', 2)
        }
        else if ($this.data('clicked') == 2) {

            messageValue = message();
            print();
            console.log(messageValue);
            $('#messageInput').slideUp();
            $('#messageNextButton').css('background-color', '#B3C95A').text('Message sent').css('font-size', '1em').css('color', 'black');
        }


        else {
            $this.data('clicked', 1);
            console.log('1-szy klik');
            nameValue = name();
            $msgInput.attr('placeholder', 'Whats your email?')
            $msgInput.val('');
        }


    });


})