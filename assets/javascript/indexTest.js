$(document).ready(function () {


    // ================================= FIREBASE LINK

    // Initialize Firebase

    var config = {
        apiKey: "AIzaSyBkQ8n84DzblncB49K7j1My3rjueZLqXLk",
        authDomain: "elvan-first-project.firebaseapp.com",
        databaseURL: "https://elvan-first-project.firebaseio.com/",
        projectId: "elvan-first-project",
        storageBucket: "elvan-first-project.appspot.com",
        messagingSenderId: "36237204810"
    };

    firebase.initializeApp(config);



    // ================================= ASTEROID - (NeoWs)
    // Shows closets asteroids at the given date

    var nasaKey = "6rXbj632uYc9OI6eFA9OERlhwIJKTAuMjM7khNVl";
    // var dateInit = "1981-09-28";
    // var dateEnd = "1981-09-28";
    // var queryURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + dateInit + "&end_date=" + dateEnd + "&api_key=" + nasaKey;

    // // Create an AJAX call to retrieve data Log the data in console
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (resp) {
    //     console.log("CLOSESTS ASTEROIDS INFORMATION:");
    //     console.log(resp);

    // })



    // ================================= DOCUMENT FO NOTIFICATIONS, KNOWLEDGE, INFORMATION DONKI - (Solar Flare (FLR))
    // Shows closets asteroids at the given date

    // dateInit = "2010-01-01";
    // dateEnd = "2019-09-28";
    // queryURL = "https://api.nasa.gov/DONKI/FLR?startDate=" + dateInit + "&endDate=" + dateEnd + "&api_key=" + nasaKey;
    // console.log(queryURL);

    // // Create an AJAX call to retrieve data Log the data in console
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (resp) {
    //     console.log("SOLAR FLARE INFORMATION:");
    //     console.log(resp);

    // })



    // ================================= EARTH POLYCHROMMATIC IMAGING CAMERA EPIC 
    // Shows closets asteroids at the given date

    // dateInit = "2018-12-02";
    // var dateForEarthImg = "2018/12/02";
    // queryURL = "https://api.nasa.gov/EPIC/api/natural/date/" + dateInit + "?api_key=" + nasaKey;
    // console.log(queryURL);

    // // Create an AJAX call to retrieve data Log the data in console
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (resp) {
    //     console.log("EARTH PORTRAIT:");
    //     console.log(resp);
    //     console.log(resp[0].image);
    //     var earthImgAddress = "https://epic.gsfc.nasa.gov/archive/natural/" + dateForEarthImg + "/png/" + resp[0].image + ".png";
    //     console.log(earthImgAddress);
    // })



    // ================================= WORLD WEATHER ONLINE ASTRONOMY API 
    // Shows sun and moon set and rise times for a specified location

    var wwoKey = "f3c0e6294ea74179b6845818191104";
    dateInit = "2018-12-02";
    var dateForEarthImg = "2018/12/02";
    queryURL = "https://api.worldweatheronline.com/premium/v1/astronomy.ashx?key=" + wwoKey + "&q=19.432608,-99.133209&date=1981-09-28&format=json"
    console.log(queryURL);

    // Create an AJAX call to retrieve data Log the data in console
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (resp) {
        console.log("SUN AND MOON INFO:");
        console.log(resp);

    })

    // ================================= CONTENT STICKY 
    // Shows a dynamic horoscope

    // var contentStickyKey = "E4TRCCQ56Z9KY";
    // dateInit = "2018-12-02";
    // var username = "I-PCFYHHKXFJG5";
    // var password = "E4TRCCQ56Z9KY";
    // var app_id = "";
    // var timezone = "America/Mexico_City";
    // var dateForEarthImg = "2018/12/02";
    // queryURL = "https://www.contentsticky.com/api/auth";
    // console.log(queryURL);

    // // Create an AJAX call to retrieve data Log the data in console
    // $.ajax({
    //     url: queryURL,
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer Access-Token"
    //     },
    //     data: {
    //     username: "I-PCFYHHKXFJG5",
    //         password: "E4TRCCQ56Z9KY",
    //         domain_name: null,
    //         timezone: "America/Mexico_City"
    //     }
    // }).then(function (resp) {
    //     console.log("HOROSCOPE:");
    //     console.log(resp);

    // })





})