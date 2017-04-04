





    $(function() {

    // variables for DOM
    var $select = $("select");
    var $h1 = $("h1");

    //variables for url
    var nasaUrl = 'https://api.nasa.gov/planetary/apod?date=';

    var key = '&api_key=rKSgrU4luhv1yjxc0oZqDLCl5qPstsqIAPMvssVT';
    function getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var year = getRandomInt(2010, 2016);
    var month = getRandomInt(1, 12);
    var day = getRandomInt(1, 28);
    var newDate = year+ '-' +month+ '-' +day;
    var apiURL = nasaUrl+newDate+key;
    console.log(newDate);
    function insertPhoto(image) {
        var imageHd = $('.photo').css({'background-image':'url('+image+')', 'background-size': 'cover', 'background-repeat': 'no-repeat' });
        imageHd.append(image);
    }
    function getApiUrl(url){
        var urlOfApi = $('.text-center');
        urlOfApi.append(url);

    }
    function getTitle(text){
        var gettingTitle = $('.title');
        gettingTitle.append(text);
    }
    function getDesc(text){
        var gettingDesc = $('.description');
        gettingDesc.append(text);
    }


        $.ajax({
        url: nasaUrl+newDate+key,
    }).done(function(response){
        insertPhoto(response.hdurl);
        getApiUrl(response.url);
        getTitle(response.title);
        getDesc(response.explanation);
        console.log(response);


    }).fail(function(error) {
        console.log(error);
    });

});


