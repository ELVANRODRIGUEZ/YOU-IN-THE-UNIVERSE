// ============================================== FIREBASE

var config = {
    apiKey: "AIzaSyAjK9xPYrdJ3mM_ou2ZYVNAbTV3aAfwKvo",
    authDomain: "you-in-the-universe.firebaseapp.com",
    databaseURL: "https://you-in-the-universe.firebaseio.com",
    projectId: "you-in-the-universe",
    storageBucket: "you-in-the-universe.appspot.com",
    messagingSenderId: "623655650886"
};
firebase.initializeApp(config);


// ============================================== GLOBAL VARIABLES

var database = firebase.database();
var nasaKey = "6rXbj632uYc9OI6eFA9OERlhwIJKTAuMjM7khNVl";
var dateEntered = "2000-01-01";
// console.log(moment(dateEntered).format("L"));
var zodiacSign = "";

// var str = "Hello TecAdmin!";
// var newStr = str.slice(0, -1);
// var newStr2 = str.substring(0, 5);
// console.log(newStr, newStr2);


enterChinesHoroData();

function enterChinesHoroData() {
    var chineseHoro = {
        One: {
            chineseSign: "Rat",
            chineseStartYear: "1900",
            chineseLuck: {
                chineseLuckyNumbers: "2, 3 and numbers containing them (like 23 and 32).",
                chineseLuckyDays: "The 4th and 13th of every Chinese lunar month.",
                chineseLuckyColors: "Blue, gold, green.",
                chineseLuckyFlowers: "Lily, African violet.",
                chineseLuckyDirection: "West, northwest and southwest.",
                chineseLuckyMonths: "The 2nd, 5th and 9th Chinese lunar months."
            }
        },
        Two: {
            chineseSign: "Ox",
            chineseStartYear: "1901",
            chineseLuck: {
                chineseLuckyNumbers: "1, 4 and numbers containing 1 and 4 (like 14 and 41).",
                chineseLuckyDays: "The 13th and 27th of every Chinese lunar months.",
                chineseLuckyColors: "White, yellow and green.",
                chineseLuckyFlowers: "Tulip, morning glory and peach blossom.",
                chineseLuckyDirection: "North and south.",
                chineseLuckyMonths: "The 7th and 9th Chinese lunar months."
            }
        },
        Three: {
            chineseSign: "Tigger",
            chineseStartYear: "1902",
            chineseLuck: {
                chineseLuckyNumbers: "1, 3, 4 and numbers containing them (like 13 and 43).",
                chineseLuckyDays: "The 16th and 27th of any Chinese lunar month.",
                chineseLuckyColors: "Blue, gray, orange.",
                chineseLuckyFlowers: "Yellow lily, cineraria.",
                chineseLuckyDirection: "East, north, south.",
                chineseLuckyMonths: "The 3rd, 7th and 10th Chinese lunar months."
            }
        },
        Four: {
            chineseSign: "Rabbit",
            chineseStartYear: "1903",
            chineseLuck: {
                chineseLuckyNumbers: "3, 4, 6 and numbers containing them (like 34 and 46).",
                chineseLuckyDays: "The 26th, 27th, and 29th of every Chinese lunar month.",
                chineseLuckyColors: "Red, pink, purple, blue.",
                chineseLuckyFlowers: "Plantain lily, jasmine.",
                chineseLuckyDirection: "East, south and northwest.",
                chineseLuckyMonths: "The 1st, 4th, 8th and 11th Chinese lunar months."
            }
        },
        Five: {
            chineseSign: "Dragon",
            chineseStartYear: "1904",
            chineseLuck: {
                chineseLuckyNumbers: "1, 6 and 7.",
                chineseLuckyDays: "The 1st and 16th of any Chinese lunar calendar month.",
                chineseLuckyColors: "Gold, silver, grayish white.",
                chineseLuckyFlowers: "Bleeding-heart glory bower, dragon flowers.",
                chineseLuckyDirection: "East, north, west.",
                chineseLuckyMonths: "The 3rd, 4th and 7th Chinese lunar months."
            }
        },
        Six: {
            chineseSign: "Snake",
            chineseStartYear: "1905",
            chineseLuck: {
                chineseLuckyNumbers: "2, 8, 9 and numbers containing them (like 28 and 89).",
                chineseLuckyDays: "The 1st and 23rd of Chinese lunar months.",
                chineseLuckyColors: "Black, red, and yellow.",
                chineseLuckyFlowers: "Orchid and cactus.",
                chineseLuckyDirection: "East, west and southwest.",
                chineseLuckyMonths: "The 1st, 8th and 11th lunar months."
            }
        },
        Seven: {
            chineseSign: "Horse",
            chineseStartYear: "1906",
            chineseLuck: {
                chineseLuckyNumbers: "2, 3, 7 and numbers containing them (like 23 and 37).",
                chineseLuckyDays: "The 5th and 20th of Chinese lunar months.",
                chineseLuckyColors: "Yellow and green.",
                chineseLuckyFlowers: "Calla lily and jasmine.",
                chineseLuckyDirection: "East, west, and south.",
                chineseLuckyMonths: "The 4th, 9th and 12th Chinese lunar months."
            }
        },
        Eight: {
            chineseSign: "Goat",
            chineseStartYear: "1907",
            chineseLuck: {
                chineseLuckyNumbers: "2, 7 or numbers containing 2 and 7 (like 27 and 72).",
                chineseLuckyDays: "The 7th and 30th of any month according to the Chinese lunar calendar.",
                chineseLuckyColors: "Brown, red, and purple.",
                chineseLuckyFlowers: "Carnations and primroses.",
                chineseLuckyDirection: "North.",
                chineseLuckyMonths: "The 6th and 11th Chinese lunar months."
            }
        },
        Nine: {
            chineseSign: "Monkey",
            chineseStartYear: "1908",
            chineseLuck: {
                chineseLuckyNumbers: "4 and 9.",
                chineseLuckyDays: "The 14th and 28th of any Chinese lunar calendar month.",
                chineseLuckyColors: "White, blue, gold.",
                chineseLuckyFlowers: "Chrysanthemum, crape myrtle.",
                chineseLuckyDirection: "North, northwest, west.",
                chineseLuckyMonths: "The 8th and 12th Chinese lunar months."
            }
        },
        Ten: {
            chineseSign: "Rooster",
            chineseStartYear: "1909",
            chineseLuck: {
                chineseLuckyNumbers: "5, 7, and 8.",
                chineseLuckyDays: "The 4th and 26th of any Chinese lunar month.",
                chineseLuckyColors: "Gold, brown and yellow.",
                chineseLuckyFlowers: "Gladiola, cockscomb.",
                chineseLuckyDirection: "South, southeast.",
                chineseLuckyMonths: "The 2nd, 5th and 11th Chinese lunar months."
            }
        },
        Eleven: {
            chineseSign: "Dog",
            chineseStartYear: "1910",
            chineseLuck: {
                chineseLuckyNumbers: "3, 4, 9 and numbers containing them (like 34 and 49).",
                chineseLuckyDays: "The 7th and 28th of every Chinese lunar month.",
                chineseLuckyColors: "Red, green, and purple.",
                chineseLuckyFlowers: "Rose, cymbidium orchids.",
                chineseLuckyDirection: "East, south, and northeast.",
                chineseLuckyMonths: "The 6th, 10th and 12th Chinese lunar months."
            }
        },
        Twelve: {
            chineseSign: "Pig",
            chineseStartYear: "1911",
            chineseLuck: {
                chineseLuckyNumbers: "2, 5, 8 and numbers containing them (like 25 and 58).",
                chineseLuckyDays: "The 17th and 24th of every Chinese lunar month.",
                chineseLuckyColors: "Yellow, gray, brown, gold.",
                chineseLuckyFlowers: "Hydrangea and daisy.",
                chineseLuckyDirection: "East and southwest.",
                chineseLuckyMonths: "The 2nd, 7th, 10th and 11th Chinese lunar months."
            }
        },
    }

    Object.keys(chineseHoro).forEach(function (item) {
        console.log(chineseHoro[item].chineseLuck.chineseLuckyNumbers);
        database.ref("chineseHoro").push({
            chineseSign: chineseHoro[item].chineseSign,
            chineseStartYear: chineseHoro[item].chineseStartYear,
            chineseLuck: {
                chineseLuckyNumbers: chineseHoro[item].chineseLuck.chineseLuckyNumbers,
                chineseLuckyDays: chineseHoro[item].chineseLuck.chineseLuckyDays,
                chineseLuckyColors: chineseHoro[item].chineseLuck.chineseLuckyColors,
                chineseLuckyFlowers: chineseHoro[item].chineseLuck.chineseLuckyFlowers,
                chineseLuckyDirection: chineseHoro[item].chineseLuck.chineseLuckyDirection,
                chineseLuckyMonths: chineseHoro[item].chineseLuck.chineseLuckyMonths
            }
        })
    })

}





// ============================================== EVENTS

$("#Slide2, #Slide3, #Slide4, #Slide5, #Slide6").on("click", function () {
    $(".enterDate, .horosResp, .fondoSunMoon, .fondoEarthPic, .fondoOther").css("display", "none");
    $(".horosSelect").css("display", "block");
    zodiacSign = "";
    dateEntered = "";
})

$(".horoImg").on("click", function () {
    $(".horosSelect").css("display", "none");
    $(".enterDate").css("display", "block");
    zodiacSign = $(this).attr("alt");

    var $signSelected = $("#horoscopeInputImage");

    var signSeleImgRoute =
        "<img id='signSelImg' src='assets/images/Signos2/" +
        zodiacSign + ".png' alt='" + zodiacSign +
        "' height='139' width='140'></img>";

    $signSelected.html(signSeleImgRoute);

})

$("#enterDateGo").on("click", function (event) {
    event.preventDefault();

    $(".enterDate").css("display", "none");

    var day = "today";

    // Create an AJAX call to retrieve data Log the data in console
    $.ajax({
        url: "https://aztro.sameerkumar.website?sign=" + zodiacSign + "&day=" + day,
        type: "POST",
        date: "Sun, 14 Apr 2019 06:42:42 GMT"

    }).then(function (resp) {
        var $horoTextCont = $("#horoText")

        var horoscopeText =
            "<b class='horoscopeTextBold'>Color:</b>  " + resp.color + "<br>" +
            "<b class='horoscopeTextBold'>Lucky-Number:</b>  " + resp.lucky_number + "<br>" +
            "<b class='horoscopeTextBold'>Lucky-Time:</b>  " + resp.lucky_time + "<br>" +
            "<b class='horoscopeTextBold'>Mood:</b>  " + resp.mood + "<br>" +
            "<b class='horoscopeTextBold'>Compatibility:</b>  " + resp.compatibility + "<br><br>" +
            "   " + resp.description;

        $horoTextCont.html(horoscopeText);
        $(".horosResp").css("display", "block");

    })

    var $constelImgCont = $("#constelImgCont")

    var constelImg =
        "<img id='constellation' " +
        "src='assets/images/Constelaciones/" + zodiacSign +
        ".png' alt='" + zodiacSign +
        " constellation' height='443' width='437'>";

    $constelImgCont.html(constelImg);
    $("#horoSigno").text(zodSignFirstUpper());


})

$("#arrowRight").on("click", function () {
    var slideRef = $(this).attr("ref");
    var next = parseInt(slideRef.substring(slideRef.length, slideRef.length - 1)) + 1;
    var prev = parseInt(slideRef.substring(slideRef.length, slideRef.length - 1)) - 1;
    var $nextSlide = "#" + slideRef.substring(0, slideRef.length - 1) + next;
    var $thisSlide = "#" + slideRef;
    $($thisSlide).parent().css("display", "none");
    $($nextSlide).parent().css("display", "block");
})

$("#arrowLeft").on("click", function () {
    var slideRef = $(this).attr("ref");
    var prev = parseInt(slideRef.substring(slideRef.length, slideRef.length - 1)) - 1;
    var $prevSlide = "#" + slideRef.substring(0, slideRef.length - 1) + prev;
    var $thisSlide = "#" + slideRef;
    $($thisSlide).parent().css("display", "none");
    $($prevSlide).parent().css("display", "block");

})

// ============================================== FUNCTIONS

function sunPulse() {

    dateInit = "2001-09-28";
    dateEnd = "2011-09-28";
    queryURL = "https://api.nasa.gov/DONKI/FLR?startDate=" + dateInit + "&endDate=" + dateEnd + "&api_key=" + nasaKey;

    // Create an AJAX call to retrieve data Log the data in console
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (resp) {
        // console.log("SOLAR FLARE INFORMATION:");
        console.log(resp);
        resp.forEach(function (item) {
            // console.log("SOLAR FLARE INFORMATION");
            // console.log("   Intensity: " + item.classType);
            // console.log("   Class: " + flareClass);
            // console.log("   Peak Time: " + item.peakTime);
            var flareClass = item.classType.charAt(0);
            var flareDate = item.peakTime.substring(0, 10);
            var test = moment(flareDate, "YYYY-MM-DD");
            console.log(test);
        })
    })
}

function zodSignFirstUpper() {
    var zodiacSign2 = zodiacSign.toUpperCase();
    console.log(zodiacSign2);
    zodiacSign2 = zodiacSign2.substring(0, 1)
    zodiacSign2 = zodiacSign2 + zodiacSign.substring(1, zodiacSign.length);
    return zodiacSign2;
}