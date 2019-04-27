$(document).ready(function () {


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

    var database = firebase.database();
    var chineseHoroRef = database.ref("chineseHoro");
    var egiptianHoroRef = database.ref("egiptianHoro");

    // ==================================== LOAD DATA TO FIREBASE

    // enterChinesHoroData();
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
            // console.log(chineseHoro[item].chineseLuck.chineseLuckyNumbers);
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

    // enterEgiptianHoroData();
    function enterEgiptianHoroData() {
        var egiptianHoro = {
            One: {
                egiptianSign: "Amun-Ra",
                egiptianSignPeriod: [
                    [1.08, 1.21],
                    [2.01, 2.11]
                ],
                egiptianDescription: "Amun-Ra is the creator of the universe and of mankind and is considered the king of the Gods. People born under this sign are strong, tough and hardworking, they also make great leaders because they are good listeners and are generally popular amongst their peers. Although, they tend to get angry quickly when faced with frustrating situations.",
                egiptianQualities: "Powerful and helpful.",
                egiptianNegativeTraits: "Secretive.",
                egiptianIdealJobs: "Financial based roles.",
                egiptianPlanets: "Saturn and the Sun.",
                egiptianAnimal: "The animal for Amon-Ra is the Ram.",
                egiptianZodiacCompatibility: "Amun-Ra is compatible with Horus."

            },
            Two: {
                egiptianSign: "Anubis",
                egiptianSignPeriod: [
                    [5.09, 5.27],
                    [6.29, 7.13]
                ],
                egiptianDescription: "Anubis is known as the guardian of the underworld, the God of death and the afterlife. Anubis’ role consists of finding lost souls and examining their hearts, if the heart is pure, the soul is allowed to pass through. Anubis people are very passionate and creative, yet they work best when they are alone. Their personalities are introverted, but nevertheless authoritative, they are no pushovers and take everything in their stride; nothing is too complicated for them.",
                egiptianQualities: "Truthful and sympathetic.",
                egiptianNegativeTraits: "Controlling, aggressive and overly competitive.",
                egiptianIdealJobs: "Counselor.",
                egiptianPlanets: "Mercury.",
                egiptianAnimal: "The animal for Anubis is the Jackal.",
                egiptianZodiacCompatibility: "Anubis is compatible with Bastet and Iris."

            },
            Three: {
                egiptianSign: "Bastet",
                egiptianSignPeriod: [
                    [7.14, 7.28],
                    [9.23, 9.27],
                    [10.03, 10.17]
                ],
                egiptianDescription: "Bastet is the Goddess of womankind and home life, she is also known as the cat goddess. Bastet stands out because she is pictured with a cat or lioness’ head with a human body. Bastet is also responsible for protecting women and ensuring their fertility. Bastet people are peaceful and crave balance in their lives, they are naturally shy and prefer quieter environments, to the point where they may even isolate themselves.",
                egiptianQualities: "Charming, zest for life and thoughtful.",
                egiptianNegativeTraits: "Possessive and clingy.",
                egiptianIdealJobs: "Writer.",
                egiptianPlanets: "Sun and Moon.",
                egiptianAnimal: "The animal for Bastet is the Cat.",
                egiptianZodiacCompatibility: "Bastet is compatible with Horus."

            },
            Four: {
                egiptianSign: "Geb",
                egiptianSignPeriod: [
                    [2.12, 2.29],
                    [8.20, 8.31]
                ],
                egiptianDescription: "Geb is the God of the Earth and played a hand in the examining of hearts of the deceased, in order to determine the kind of afterlife they would have. As tradition goes, Geb’s laughter would cause earthquakes. Geb people are reliable, honest and caring souls, especially towards their family and friends, yet they can also be sensitive and shy around people they don’t know very well.",
                egiptianQualities: "Modest, affectionate and fair.",
                egiptianNegativeTraits: "Vain and anxious.",
                egiptianIdealJobs: "Lawyer or judge.",
                egiptianPlanets: "Earth.",
                egiptianAnimal: "The animal for Geb is the Goose.",
                egiptianZodiacCompatibility: "Geb is compatible with Horus and Set."

            },
            Five: {
                egiptianSign: "Horus",
                egiptianSignPeriod: [
                    [4.20, 5.08],
                    [8.12, 8.19]
                ],
                egiptianDescription: "Horus is the God of the Sky and represents order and harmony, he was born after his father’s death and is the protector of the pharaoh. People born under the Horus sign are brave, daring and optimistic, they are very family orientated and are real rays of sunshine for their loved ones. Horus people are very focused, and will do their upmost to achieve their goals. However, at times they can be stubborn and unrealistic.",
                egiptianQualities: "Determination, strong-willed and charming.",
                egiptianNegativeTraits: "Stubbornness and inflexibility.",
                egiptianIdealJobs: "Politically based roles or PR.",
                egiptianPlanets: "The Moon and Sun.",
                egiptianAnimal: "The animal for Horus is the Snake.",
                egiptianZodiacCompatibility: "Horus is compatible with Bastet and Geb."

            },
            Six: {
                egiptianSign: "Isis",
                egiptianSignPeriod: [
                    [3.11, 3.31],
                    [10.18, 10.29],
                    [12.19, 12.31]
                ],
                egiptianDescription: "Isis is the Goddess of Pharaohs and of motherhood, she is the guardian of children, the poor and the deceased. Isis looks out for and protects women at the moment of giving birth. Isis people are straightforward and like to get directly to the point, they are very energetic and playful characters with great sense of humors.",
                egiptianQualities: "Generous, ambitious and passionate.",
                egiptianNegativeTraits: "Demanding and hyperactive.",
                egiptianIdealJobs: "Fashion or art based jobs.",
                egiptianPlanets: "Moon, Earth and Uranus.",
                egiptianAnimal: "The animal for Isis is the Ram.",
                egiptianZodiacCompatibility: "Isis is compatible with Osiris and Thoth."

            },
            Seven: {
                egiptianSign: "Hapi",
                egiptianSignPeriod: [
                    [1.01, 1.07],
                    [6.19, 6.28],
                    [9.01, 9.07],
                    [11.18, 11.26]
                ],
                egiptianDescription: "Hapi is the ancient God of the Nile and is responsible for fertilizing the land. The title Hapi comes from the former name for the Nile River. Hapi features in the form of a man, however, he is characterized by women’s breasts and a large, well fed stomach; characteristics which represent fertility. Hapi people are generally gentle and caring characters.",
                egiptianQualities: "Insightful and wise.",
                egiptianNegativeTraits: "Impulsive and domineering.",
                egiptianIdealJobs: "Teacher.",
                egiptianPlanets: "Venus",
                egiptianAnimal: "The animal for Hapi is the Antelope.",
                egiptianZodiacCompatibility: "Hapi is compatible with Amon-Ra and Set."

            },
            Eight: {
                egiptianSign: "Mut",
                egiptianSignPeriod: [
                    [1.22, 1.31],
                    [9.08, 9.22]
                ],
                egiptianDescription: "The word Mut means mother of the world, which is perfectly suitable given that Mut is the Goddess responsible for protecting mankind, if Mut is your Egyptian zodiac sign, you’ll likely be a very focused and goal orientated person, you know what you want and how you plan on getting it. Mut people are often sensitive and reserved, but they become more self-confident with time, they are also very generous, patient and charming.",
                egiptianQualities: "Determined, attentive and hardworking.",
                egiptianNegativeTraits: "Low moods and distant.",
                egiptianIdealJobs: "Accountant.",
                egiptianPlanets: "The Sun.",
                egiptianAnimal: "The animal for Mut is the Vulture.",
                egiptianZodiacCompatibility: "Mut is compatible with Amon-Ra and Thoth."

            },
            Nine: {
                egiptianSign: "Osiris",
                egiptianSignPeriod: [
                    [3.01, 3.10],
                    [11.27, 12.18]
                ],
                egiptianDescription: "Osiris is the God of death and eternal life, he symbolizes rebirth after death and resurrection. Those born with the Osiris sign often stand out for their intelligence and enterprising nature. Osiris people are natural born leaders and love taking on responsibilities in the work environment.",
                egiptianQualities: "Enthusiastic, dynamic and daring.",
                egiptianNegativeTraits: "Bossy and overbearing.",
                egiptianIdealJobs: "Teacher.",
                egiptianPlanets: "Pluto and the Sun.",
                egiptianAnimal: "The animal for Osiris is the Bull.",
                egiptianZodiacCompatibility: "Osiris is compatible with Isis and Thoth."

            },
            Ten: {
                egiptianSign: "Sekhmet",
                egiptianSignPeriod: [
                    [7.29, 8.11],
                    [10.30, 11.07]
                ],
                egiptianDescription: "Sekhmet is known as the Goddess of war, she is also known for ensuring that justice is served and decides whether or not people are guilty. Sekhmet has a woman’s body, but the head of a lion, like Bastet. Those born under the Sekhmet sign are typically jovial and talkative people, they are also honest and sensitive characters.",
                egiptianQualities: "Optimistic, welcoming and cheerful.",
                egiptianNegativeTraits: "Impatient and easily offended.",
                egiptianIdealJobs: "Entertainer.",
                egiptianPlanets: "The Sun.",
                egiptianAnimal: "The animal for Sekhmet is the Lion.",
                egiptianZodiacCompatibility: "Sekhmet is compatible with Geb and Bastet."

            },
            Eleven: {
                egiptianSign: "Seth",
                egiptianSignPeriod: [
                    [5.28, 6.18],
                    [9.28, 10.02]
                ],
                egiptianDescription: "According to Egyptian legend, Seth is the God of chaos and notably has an influence on the weather. He is known for killing his brother and chopping him up into pieces and leaving his body parts all over Egypt. If you were born under this sign, you are undoubtedly a free spirit, who craves new adventures and challenges, you’re likely to be a good communicator and love socializing.",
                egiptianQualities: "Perfectionist, persistent and determined.",
                egiptianNegativeTraits: "Explosive tempers and dominant personalities.",
                egiptianIdealJobs: "Recruitment or Teacher.",
                egiptianPlanets: "Mars.",
                egiptianAnimal: "The animal for Seth is the Seth, a canine body, slanting eyes, square-tipped ears, tufted tail, and a long, curved, pointed snout",
                egiptianZodiacCompatibility: "Seth is compatible with Geb."

            },
            Twelve: {
                egiptianSign: "Thot",
                egiptianSignPeriod: [
                    [4.01, 4.19],
                    [11.08, 11.17]
                ],
                egiptianDescription: "Thoth is the God of the afterlife, wisdom and knowledge. Typically, those with this particular sign are great at solving problems, organizing things and often have a real knack for writing, because Thoth invented writing and scribe. Thoth people like to take control and lead groups of people, they are generally loveable and respectful characters. On the other hand, Thoth astrology people can at times be impatient to finish tasks.",
                egiptianQualities: "Creativity, listening and leadership skills.",
                egiptianNegativeTraits: "Naïve and difficult to work with.",
                egiptianIdealJobs: "Teacher or Lawyer.",
                egiptianPlanets: "The Moon and Mercury.",
                egiptianAnimal: "The animal for Thoth is the Baboon.",
                egiptianZodiacCompatibility: "Thoth is compatible with Bastet and Isis."

            }
        }

        Object.keys(egiptianHoro).forEach(function (item) {
            // console.log(egiptianHoro[item].egiptianSign);
            database.ref("egiptianHoro").push({
                egiptianSign: egiptianHoro[item].egiptianSign,
                egiptianSignPeriod: egiptianHoro[item].egiptianSignPeriod,
                egiptianDescription: egiptianHoro[item].egiptianDescription,
                egiptianQualities: egiptianHoro[item].egiptianQualities,
                egiptianNegativeTraits: egiptianHoro[item].egiptianNegativeTraits,
                egiptianIdealJobs: egiptianHoro[item].egiptianIdealJobs,
                egiptianPlanets: egiptianHoro[item].egiptianPlanets,
                egiptianAnimal: egiptianHoro[item].egiptianAnimal,
                egiptianZodiacCompatibility: egiptianHoro[item].egiptianZodiacCompatibility
            })
        })

    }



    // ============================================== GLOBAL VARIABLES

    var nasaKey = "6rXbj632uYc9OI6eFA9OERlhwIJKTAuMjM7khNVl";
    var wwoKey = "f3c0e6294ea74179b6845818191104";

    var dateEntered;

    var cityEntered;
    var countryEntered;
    var qryCity;
    var locLat;
    var locLong;
    var locCoordinates;
    var locFormat;
    var locatSwitch = false;

    var zodiacSign = "";

    var imgUrl;
    var imgTitle;
    // ============================================== EVENTS

    $("#Slide1, #Slide2, #Slide3, #Slide4, #Slide5, #Slide6, #Slide7, #Slide8").on("click", function () {
        $(".enterDate, .horosResp, .chineseEgiptianHoro, .earthPic, .solarFlare, .sunMoon, .yourAsteroids, .pictures").css("display", "none");
        $(".horosSelect").css("display", "block");
        zodiacSign = "";
        dateEntered = "";
        $("#enterDateInput").val("");
        $("[aria-label=city]").val("");
        $("[aria-label=country]").val("");
        window.scrollTo(0, 0);
    })

    $(".horoImg").on("click", function () {
        $(".horosSelect").css("display", "none");
        $(".enterDate").css("display", "block");
        zodiacSign = $(this).attr("alt");

        var $signSelected = $("#horoscopeInputImage");

        $("#signSelImg").remove();

        var signSeleImgRoute =
            "<img id='signSelImg' src='assets/images/Signos2/" +
            zodiacSign + ".png' alt='" + zodiacSign +
            "' height='139' width='140'></img>";

        $signSelected.prepend(signSeleImgRoute);

        // $("#enterDateInput").val("1981-09-28T10:23");

        window.scrollTo(0, 3000);

    })

    $("#enterDateGo").on("click", function (event) {
        event.preventDefault();
        dateEntered = moment($("#enterDateInput").val());
        cityEntered = $("[aria-label=city]").val();
        countryEntered = $("[aria-label=country]").val();
        qryCity = cityEntered + "," + countryEntered;

        var futureDate = dateEntered.fromNow();
        futureDate = futureDate.substring(0, 2);

        var greater1900 = parseInt(dateEntered.format("YYYY"));

        if (
            dateEntered._d == "Invalid Date" ||
            cityEntered == "" ||
            countryEntered == ""
        ) {
            $("#dateErrMsg").find("*").removeClass("fas fa-times");
            $("#derr1").addClass("fas fa-times");
            $("#exampleModalCenter").modal();
            $("#enterDateInput").val("");
            $("[aria-label=city]").val("");
            $("[aria-label=country]").val("");

        } else if (futureDate == "in") {
            $("#dateErrMsg").find("*").removeClass("fas fa-times");
            $("#derr2").addClass("fas fa-times");
            $("#exampleModalCenter").modal();
            $("#enterDateInput").val("");

        } else if (zodiacSign != correspZodiacSign(dateEntered)) {
            $("#dateErrMsg").find("*").removeClass("fas fa-times");
            $("#derr3").addClass("fas fa-times");
            $("#exampleModalCenter").modal();
            $("#enterDateInput").val("");

        } else if (greater1900 < 1900) {
            $("#dateErrMsg").find("*").removeClass("fas fa-times");
            $("#derr4").addClass("fas fa-times");
            $("#exampleModalCenter").modal();
            $("#enterDateInput").val("");

        } else {
            var yearEntered = parseInt(dateEntered.format("YYYY"));

            knowChineseSign(yearEntered);
            var dateForEgiptianHoro = dateToDouble(dateEntered);

            function knowChineseSign(year) {
                var numOfCicles = Math.floor((year - 1900) / 12);
                var actualSignYear = (year - 1900) - (numOfCicles * 12);
                actualSignYear = 1900 + actualSignYear;
                actualSignYear = actualSignYear.toString();
                return actualSignYear;
            }

            chineseHoroRef.on("value", getChineseHoro);

            function getChineseHoro(data) {
                $("#chineseHoroInfo").empty();
                var chineseHoroArr = data.val();
                Object.keys(chineseHoroArr).forEach(function (item) {
                    if (knowChineseSign(yearEntered) == chineseHoroArr[item].chineseStartYear) {
                        var chineseHoroInfo =
                            "<h2 class='slideHeaders'>Chinese Zodiac</h2>" +
                            "<img id='chineseHoroIcon' src='" +
                            "assets/images/ZodiacoChino/" +
                            chineseHoroArr[item].chineseSign + ".png' " +
                            "alt='Smiley face' height='51' width='99'>" +
                            "<h2 id='matchingChineseSign'>" +
                            chineseHoroArr[item].chineseSign + ":</h2>" +
                            "<p id='chinaHeader'>Things that will bring fortune " +
                            "to people with " + chineseHoroArr[item].chineseSign +
                            " sign:</p>" +
                            "<ul>" +
                            "<li class='luck'><b " +
                            "class='textBoldItalic'>Lucky-colors: </b>" +
                            chineseHoroArr[item].chineseLuck.chineseLuckyColors +
                            "</li>" +
                            "<li class='luck'><b " +
                            "class='textBoldItalic'>Lucky-days: </b>" +
                            chineseHoroArr[item].chineseLuck.chineseLuckyDays +
                            "</li>" +
                            "<li class='luck'><b " +
                            "class='textBoldItalic'>Lucky-direction: </b>" +
                            chineseHoroArr[item].chineseLuck.chineseLuckyDirection +
                            "</li>" +
                            "<li class='luck'><b " +
                            "class='textBoldItalic'>Lucky-flowers: </b>" +
                            chineseHoroArr[item].chineseLuck.chineseLuckyFlowers +
                            "</li>" +
                            "<li class='luck'><b " +
                            "class='textBoldItalic'>Lucky-months: </b>" +
                            chineseHoroArr[item].chineseLuck.chineseLuckyMonths +
                            "</li>" +
                            "<li class='luck'><b " +
                            "class='textBoldItalic'>Lucky-numbers: </b>" +
                            chineseHoroArr[item].chineseLuck.chineseLuckyNumbers +
                            "</li>" +
                            "</ul>";

                        var chineseHoroImgSrc =
                            "assets/images/ZodiacoChino/" +
                            chineseHoroArr[item].chineseSign +
                            ".png";
                        $("#chineseHoroIcon").attr("src", chineseHoroImgSrc);
                        $("#chineseHoroInfo").html(chineseHoroInfo);
                    }

                })
            }

            egiptianHoroRef.on("value", getEgiptianHoro);

            function getEgiptianHoro(data) {
                $("#egiptianHoroInfo").empty();
                var egiptianHoroArr = data.val();
                var egiptianHoroIds = 0;
                var EgHoroDatePeriods = 0;
                var minDate;
                var maxDate;
                var check = true;
                var thisItem;
                var thisItemPeriods;
                var retrEgiptHoro;
                while (check) {
                    thisItem = Object.keys(egiptianHoroArr)[egiptianHoroIds];
                    thisItemPeriods = egiptianHoroArr[thisItem].egiptianSignPeriod;
                    for (EgHoroDatePeriods = 0; EgHoroDatePeriods < thisItemPeriods.length; EgHoroDatePeriods++) {
                        minDate = thisItemPeriods[EgHoroDatePeriods][0];
                        maxDate = thisItemPeriods[EgHoroDatePeriods][1];
                        if (dateForEgiptianHoro >= minDate && dateForEgiptianHoro <= maxDate) {

                            retrEgiptHoro = egiptianHoroArr[thisItem];
                            check = false;

                        }
                    }
                    egiptianHoroIds++;
                }

                var egiptianHoroInfo =
                    "<h2 class='slideHeaders'>Egyptian Zodiac</h2>" +
                    "<h2 id='matchingEgiptianSign'>" +
                    retrEgiptHoro.egiptianSign + ":</h2>" +
                    "<p id='egiptianHeader'>" +
                    retrEgiptHoro.egiptianDescription +
                    "</p>" +
                    "<ul>" +
                    "<li class='luck'>" +
                    "<b class='textBoldItalic'>Qualities: </b>" +
                    retrEgiptHoro.egiptianQualities +
                    "</li>" +
                    "<li class='luck'>" +
                    "<b class='textBoldItalic'>Negative traits: </b>" +
                    retrEgiptHoro.egiptianNegativeTraits +
                    "</li>" +
                    "<li class='luck'>" +
                    "<b class='textBoldItalic'>Ideal job: </b>" + retrEgiptHoro.egiptianIdealJobs +
                    "</li>" +
                    "<li class='luck'>" +
                    "<b class='textBoldItalic'>Planet: </b>" +
                    retrEgiptHoro.egiptianPlanets +
                    "</li>" +
                    "<li class='luck'>" +
                    "<b class='textBoldItalic'>Egyptian animal: </b>" +
                    retrEgiptHoro.egiptianAnimal +
                    "</li>" +
                    "<li class='luck'>" +
                    "<b class='textBoldItalic'>Egyptian zodiac compatibility: </b>" +
                    retrEgiptHoro.egiptianZodiacCompatibility +
                    "</li>" +
                    "</ul>";

                $("#egiptianHoroInfo").html(egiptianHoroInfo);
            }

            $(".enterDate").css("display", "none");

            getCoord(qryCity) // GET COORDINATES>> Retrieves in coordinates the entered Location.

            westernHoro(); // WESTERN HOROSCOPE>> Retrieves Western Horoscope through an Ajax call function.

            earthPic(); // EARTH PICTURE>> Retrieves Earth pictures of specified birthday through an Ajax call function.

            solarFlare(); // SOLAR FLARE>> Retrieves solar flares that occured the closest to your last decade transition through an Ajax call function.

            // sunMoon(); // SUN AND MOON INFO>> Retrieves information about the sunrise, sunsen, moonrise, moonset and lunar phase at the iput birthdate through an Ajax call function.

            birthAsteroids(); // BIRTH ASTEROIDS INFO>> Retrieves the 5 closest asteroids at the iput birthdate through an Ajax call function.

            var $constelImgCont = $("#constelImgCont")

            var constelImg =
                "<img id='constellation' " +
                "src='assets/images/Constelaciones/" + zodiacSign +
                ".png' alt='" + zodiacSign +
                " constellation' height='443' width='437'>";

            $constelImgCont.html(constelImg);
            $("#horoSigno").text(zodSignFirstUpper());

            window.scrollTo(0, 0);
        }
    })

    $(".arrowRight").on("click", function () {
        var slideRef = $(this).attr("ref");

        // ================= TEST TO AVOID WRONG EXTENSIONS

        // if (slideRef == "Slide7") {

        //     var imgUrlSplit = imgUrl.split(".");
        //     var imgUrlExt = imgUrlSplit[imgUrlSplit.length - 1];
        //     console.log(imgUrlSplit[imgUrlSplit.length - 1]);
        //     if (
        //         imgUrlExt != "jpg" ||
        //         imgUrlExt != "gif" ||
        //         imgUrlExt != "tiff" ||
        //         imgUrlExt != "bmp" ||
        //         imgUrlExt != "ico" ||
        //         imgUrlExt != "png"

        //     ) {
        //         rndmSlideNum = Math.floor(Math.random() * (10 - 1) + 1);
        //         rndmSlide =
        //             "assets/images/CosmicAlbum/" +
        //             rndmSlideNum + ".jpg";
        //         $img.attr("src", rndmSlide);
        //     }
        // }

        // ================= TEST TO AVOID WRONG EXTENSIONS


        var next = parseInt(slideRef.substring(slideRef.length, slideRef.length - 1)) + 1;
        var prev = parseInt(slideRef.substring(slideRef.length, slideRef.length - 1)) - 1;
        var $nextSlide = "#" + slideRef.substring(0, slideRef.length - 1) + next;
        var $thisSlide = "#" + slideRef;
        $($thisSlide).parent().css("display", "none");
        $($nextSlide).parent().css("display", "block");
        window.scrollTo(0, 0);
    })

    $(".arrowLeft").on("click", function () {
        var slideRef = $(this).attr("ref");
        var prev = parseInt(slideRef.substring(slideRef.length, slideRef.length - 1)) - 1;
        var $prevSlide = "#" + slideRef.substring(0, slideRef.length - 1) + prev;
        var $thisSlide = "#" + slideRef;
        $($thisSlide).parent().css("display", "none");
        $($prevSlide).parent().css("display", "block");
        window.scrollTo(0, 0);

    })


    // ============================================== FUNCTIONS

    function correspZodiacSign(dateAsMomObj) {

        decimalDate = dateAsMomObj.format("M.DD");
        decimalDate = parseFloat(decimalDate);

        var i = 0;

        var horoDates = [{
                sign: "aries",
                di: 3.21,
                de: 4.19
            },
            {
                sign: "taurus",
                di: 4.20,
                de: 5.20
            },
            {
                sign: "gemini",
                di: 5.21,
                de: 6.20
            },
            {
                sign: "cancer",
                di: 6.21,
                de: 7.22
            },
            {
                sign: "leo",
                di: 7.23,
                de: 8.22
            },
            {
                sign: "virgo",
                di: 8.23,
                de: 9.22
            },
            {
                sign: "libra",
                di: 9.23,
                de: 10.22
            },
            {
                sign: "scorpio",
                di: 10.23,
                de: 11.21
            },
            {
                sign: "sagittarius",
                di: 11.22,
                de: 12.21
            },
            {
                sign: "capricorn",
                di: 12.22,
                de: 12.31
            },
            {
                sign: "capricorn",
                di: 1.01,
                de: 1.19
            },
            {
                sign: "aquarius",
                di: 1.20,
                de: 2.18
            },
            {
                sign: "pisces",
                di: 2.19,
                de: 3.20
            }
        ]

        var correspZodiacSign;
        while (i < horoDates.length) {
            correspZodiacSign = horoDates[i].sign;

            if (
                decimalDate >= horoDates[i].di &&
                decimalDate <= horoDates[i].de
            ) {
                return correspZodiacSign;
            }
            i++;
        }

        return correspZodiacSign;

    }

    function westernHoro() {
        var day = "today"
        $.ajax({
            url: "https://aztro.sameerkumar.website?sign=" + zodiacSign + "&day=" + day,
            type: "POST",
            date: "Sun, 14 Apr 2019 06:42:42 GMT"

        }).then(function (resp) {
            var $horoTextCont = $("#horoText")

            var horoscopeText =
                "<b class='textBoldItalic'>Color:</b>  " + resp.color + "<br>" +
                "<b class='textBoldItalic'>Lucky-Number:</b>  " + resp.lucky_number + "<br>" +
                "<b class='textBoldItalic'>Lucky-Time:</b>  " + resp.lucky_time + "<br>" +
                "<b class='textBoldItalic'>Mood:</b>  " + resp.mood + "<br>" +
                "<b class='textBoldItalic'>Compatibility:</b>  " + resp.compatibility + "<br><br>" +
                "   " + resp.description;

            $horoTextCont.html(horoscopeText);
            $(".horosResp").css("display", "block");

        })
    }

    function earthPic() {
        var referenceYear;
        if (moment().format("MM") - dateEntered.format("MM") > 0) {
            referenceYear = moment().format("YYYY") - dateEntered.format("YYYY");
        } else if (
            moment().format("DD") - dateEntered.format("DD") > 0
        ) {
            referenceYear = moment().format("YYYY") - dateEntered.format("YYYY");
        } else {
            referenceYear = moment().format("YYYY") - dateEntered.format("YYYY");
            referenceYear = referenceYear - 1;
        }
        var referenceDate = dateEntered.add(referenceYear, "y");

        var dateForEarthImg = referenceDate.format("YYYY/MM/DD");
        var refDateFormatted = referenceDate.format("YYYY-MM-DD");

        erthPicQryURL = "https://api.nasa.gov/EPIC/api/natural/date/" + refDateFormatted + "?api_key=" + nasaKey;

        // Create an AJAX call to retrieve data Log the data in console
        $.ajax({
            url: erthPicQryURL,
            method: "GET"
        }).then(function (resp) {
            console.log(resp);
            var rndmImage = resp.length;
            rndmImage = Math.floor(Math.random() * rndmImage);
            console.log(rndmImage);

            var earthImgAddress;
            var earthCentLat;
            var earthCentLon;


            $("#earthPicInfo").text(
                "These are all around earth pictures taken by NASA's Deep Space Climate Observatory satellite on your last birthday (" +
                referenceDate.format("MMMM, DD YYYY") + ")."
            )

            for (var i = 0; i < resp.length; i++) {

                earthImgAddress =
                    "https://epic.gsfc.nasa.gov/archive/natural/" + dateForEarthImg +
                    "/png/" + resp[i].image +
                    ".png";

                earthCentLat = resp[i].centroid_coordinates.lat;
                earthCentLat = earthCentLat.toFixed(4);
                earthCentLon = resp[i].centroid_coordinates.lat;
                earthCentLon = earthCentLon.toFixed(4);

                if (i == 0) {

                    $("#earthPicCaroInd").append(
                        "<li data-target'#earthPicCarousel' data-slide-to='" +
                        i + "' class='active'></li>"
                    );
                    $("#earthPicCarImgSlots").append(
                        "<div class='carousel-item vh-70 active'>" +
                        "<img id='earthPic" + i + "' src='" + earthImgAddress +
                        "' class='earthImg' alt='earthPic" + i +
                        "' width='100%'> " +
                        "<div class='carousel-caption d-md-block'> " +
                        "<h4 class='noMargTitle' id='earthPicTitle" + i +
                        "'>Centroid Coord Lat: " +
                        earthCentLat +
                        "  Lon: " + earthCentLon +
                        "</h4>" +
                        "</div>" +
                        "</div>"
                    )

                } else {
                    $("#earthPicCaroInd").append(
                        "<li data-target'#earthPicCarousel' data-slide-to='" +
                        i + "'></li>"
                    );
                    $("#earthPicCarImgSlots").append(
                        "<div class='carousel-item vh-70'>" +
                        "<img id='earthPic" + i + "' src='" + earthImgAddress +
                        "' class='earthImg' alt='earthPic" + i +
                        "' width='100%'> " +
                        "<div class='carousel-caption d-md-block'> " +
                        "<h4 class='noMargTitle' id='earthPicTitle" + i +
                        "'>Centroid Coord Lat: " +
                        earthCentLat +
                        " Lon: " + earthCentLon +
                        "</h4>" +
                        "</div>" +
                        "</div>"
                    )
                }

                // var $EarthPic = $("#earthPic" + i);
                // $EarthPic.attr("src", earthImgAddress);

            }
        })


    }

    function solarFlare() {

        var yearsDiff = moment().diff(dateEntered, "years");

        var YearsAdded = moment(dateEntered).add(yearsDiff, "y");

        var monthsDiff = moment().diff(YearsAdded, "months");

        var monthsAdded = YearsAdded.add(monthsDiff, "M");

        var daysDiff = moment().diff(monthsAdded, "days");

        var daysAdded = monthsAdded.add(daysDiff, "d");

        var lastDecadeTrans = Math.floor(yearsDiff / 10) * 10;

        lastDecadeTrans = moment(dateEntered).add(lastDecadeTrans, "y");

        var solarFlareGenObj = {
            B: {
                intensity: "",
                duration: "",
                start: "",
                timeDiffMin: 100000000000000,
                timeDiffDays: ""

            },
            C: {
                intensity: "",
                duration: "",
                start: "",
                timeDiffMin: 100000000000000,
                timeDiffDays: ""

            },
            M: {
                intensity: "",
                duration: "",
                start: "",
                timeDiffMin: 100000000000000,
                timeDiffDays: ""
            },
            X: {
                intensity: "",
                duration: "",
                start: "",
                timeDiffMin: 100000000000000,
                timeDiffDays: ""
            }
        }

        function requestMore(i) {

            var dateInit = moment(lastDecadeTrans).subtract(i, "y");
            dateInit = dateInit.format("YYYY-MM-DD");
            var dateEnd = moment(lastDecadeTrans).add(i, "y");
            dateEnd = dateEnd.format("YYYY-MM-DD");
            SolFlareQryURL = "https://api.nasa.gov/DONKI/FLR?startDate=" + dateInit + "&endDate=" + dateEnd + "&api_key=" + nasaKey;

            $.ajax({
                url: SolFlareQryURL,
                method: "GET"
            }).then(function (resp) {

                resp.forEach(function (item) {

                    var solarFlareMag = item.classType.substring(0, 1);
                    var solarFlareStart = moment(item.beginTime);
                    var solFlStartVSlstDecTrDays =
                        Math.abs(solarFlareStart.diff(lastDecadeTrans, "days"));
                    var solFlStartVSlstDecTrMin =
                        Math.abs(solarFlareStart.diff(lastDecadeTrans, "minutes"));
                    var solarFlareEnd = moment(item.endTime);
                    var solarFlareDuration = solarFlareEnd.diff(solarFlareStart, "minutes");

                    if (solarFlareGenObj[solarFlareMag].timeDiffMin > solFlStartVSlstDecTrMin) {
                        solarFlareGenObj[solarFlareMag].intensity = item.classType;
                        solarFlareGenObj[solarFlareMag].duration = solarFlareDuration;
                        solarFlareGenObj[solarFlareMag].start = solarFlareStart.format("YYYY-MM-DD");
                        solarFlareGenObj[solarFlareMag].timeDiffMin = solFlStartVSlstDecTrMin;
                        solarFlareGenObj[solarFlareMag].timeDiffDays = solFlStartVSlstDecTrDays;
                    }
                })

                if (
                    solarFlareGenObj.B.intensity == "" ||
                    solarFlareGenObj.C.intensity == "" ||
                    solarFlareGenObj.M.intensity == "" ||
                    solarFlareGenObj.X.intensity == ""
                ) {
                    requestMore(i + .5);

                } else {

                    $("#solarFlareDiv").html(
                        "<h2 class='slideHeaders'>Solar Flares: your cake candles</h2>" +
                        "<p id='flareText'>" +
                        "(This informations relates you your last decade transition, which was on " +
                        lastDecadeTrans.format("MMMM DD") +
                        "th, " + lastDecadeTrans.format("YYYY") +
                        ").</p>" +
                        "<p id='flareText'>" +
                        "A Solar Flare is an explosion on the surface of the Sun that often releases enough energy to power the whole Planet Earth for several thousand years. The peaks of this explosions occur in cycles of a little bit more than a decade." +
                        "</p>" +
                        "<ol>" +
                        "<li class='luck'>Solar class B: " +
                        "Weak explosions with no appreciable effect on earth." +
                        "<ul>" +
                        "<li class='luck'> The closest B flare to your last decade transition was " + solarFlareGenObj.B.timeDiffDays + " days away. " +
                        "On " + solarFlareGenObj.B.start + " to be precise." +
                        "<li class='luck'> It lasted for " + solarFlareGenObj.B.duration + " minutes." +
                        "</ul>" +
                        "</li>" +
                        "<li class='luck'>Solar class C: " +
                        "This explosions cannot cause appreciable effects on earth either." +
                        "<ul>" +
                        "<li class='luck'> The closest C flare to your last decade transition was " + solarFlareGenObj.C.timeDiffDays + " days away. " +
                        "On " + solarFlareGenObj.C.start + " to be precise." +
                        "<li class='luck'> It lasted for " + solarFlareGenObj.C.duration + " minutes." +
                        "</ul>" +
                        "</li>" +
                        "<li class='luck'>Solar class M: " +
                        "This explosions can cause brief blackouts of communications around Earth poles and minor radiation storm that can affect astronauts." +
                        "<ul>" +
                        "<li class='luck'> The closest M flare to your last decade transition was " + solarFlareGenObj.M.timeDiffDays + " days away. " +
                        "On " + solarFlareGenObj.M.start + " to be precise." +
                        "<li class='luck'> It lasted for " + solarFlareGenObj.M.duration + " minutes." +
                        "</ul>" +
                        "</li>" +
                        "<li class='luck'>Solar class X: " +
                        "This flares are the real juggernauts. They can severly harm sattelites and people flying around poles can even get radiation dosis. They also have the potential to create global transmitions problems and worldwide blackouts." +
                        "<ul>" +
                        "<li class='luck'> The closest X flare to your last decade transition was " + solarFlareGenObj.X.timeDiffDays + " days away. " +
                        "On " + solarFlareGenObj.X.start + " to be exact." +
                        "<li class='luck'> It lasted for " + solarFlareGenObj.X.duration + " minutes." +
                        "</ul>" +
                        "</li>" +
                        "</ol>"

                    )

                }

            })

        }

        requestMore(.5);

    }

    function sunMoon(coordinates) {
        var sunMoonDate = dateEntered.format("YYYY-MM-DD");
        sunMoonQryURL =
            "https://api.worldweatheronline.com/premium/v1/astronomy.ashx?key=" +
            wwoKey + "&q=" + coordinates + "&date=" +
            sunMoonDate + "&format=json";
        // Create an AJAX call to retrieve data Log the data in console
        $.ajax({
            url: sunMoonQryURL,
            method: "GET"
        }).then(function (resp) {
            var moonPhase = resp.data.time_zone[0].moon_phase;
            var moonrise = resp.data.time_zone[0].moonrise;
            var moonset = resp.data.time_zone[0].moonset;
            var sunrise = resp.data.time_zone[0].sunrise;
            var sunset = resp.data.time_zone[0].sunset;



            $("#sunInfo").html(
                "<ul>" +
                "<li class='luck'><b class='textBoldItalic'>Sunrise: </b>" +
                sunrise + "</li>" +
                "<li class='luck'><b class='textBoldItalic'>Sunset: </b>" +
                sunset + "</li>" +
                "</ul>"
            );

            $("#moonPic").attr(
                "src", "assets/images/Fases_Lunares/" + moonPhase + ".png"
            )

            $("#moonInfo").html(
                "<ul>" +
                "<li class='luck'><b class='textBoldItalic'>Lunar-Phase: </b>" +
                moonPhase + "</li>" +
                "<li class='luck'><b class='textBoldItalic'>Moonrise: </b>" +
                moonrise + "</li>" +
                "<li class='luck'><b class='textBoldItalic'>Moonset: </b>" +
                moonset + "</li>" +
                "</ul>"
            );

        })

    }

    function birthAsteroids() {
        var birthDate = dateEntered.format("YYYY-MM-DD");
        birthAsteroidsyURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
            birthDate + "&end_date=" +
            birthDate + "&api_key=" + nasaKey;

        // Create an AJAX call to retrieve data Log the data in console
        $.ajax({
            url: birthAsteroidsyURL,
            method: "GET"
        }).then(function (resp) {
            var astFoundCount = resp.element_count;
            if (astFoundCount > 6) {
                astFoundCount = 6;
            }

            $("#astInfo").html(
                "<p class='luck'>" +
                "These are the " + astFoundCount +
                " closest asteroids at your birthdate. " +
                "They all came by to greet you when you were born:</p>"
            );

            for (var i = 0; i < astFoundCount; i++) {
                var astName = resp.near_earth_objects[birthDate][i].name;

                var astMaxSize = resp.near_earth_objects[birthDate][i].estimated_diameter.meters.estimated_diameter_max;
                astMaxSize = parseFloat(astMaxSize);
                astMaxSize = astMaxSize.toFixed(4);

                var astMinSize = resp.near_earth_objects[birthDate][i].estimated_diameter.meters.estimated_diameter_min;
                astMinSize = parseFloat(astMinSize);
                astMinSize = astMinSize.toFixed(4);

                var astSpeed = resp.near_earth_objects[birthDate][i].close_approach_data[0].relative_velocity.kilometers_per_second;
                astSpeed = parseFloat(astSpeed);
                astSpeed = astSpeed.toFixed(4);

                var astDistance = resp.near_earth_objects[birthDate][i].close_approach_data[0].miss_distance.kilometers;
                astDistance = numeral(astDistance).format('0,0');

                var astContent =
                    "<div class='col-12 col-sm-12 col-md-6 col-lg-6 col'>" +
                    "<p class='subHeaders'>Id: " + astName + "</p>" +
                    "<ul>" +
                    "<li class='luck'><b class='textBoldItalic'>Max-Diameter: </b>" +
                    astMaxSize + "m</li>" +
                    "<li class='luck'><b class='textBoldItalic'>Min-Diameter: </b>" +
                    astMinSize + "m</li>" +
                    "<li class='luck'><b class='textBoldItalic'>Relative-Speed: </b>" +
                    astSpeed + "km/sec</li>" +
                    "<li class='luck'><b class='textBoldItalic'>Distance: </b>" +
                    astDistance + "km</li>" +
                    "</ul>" +
                    "</div>";

                $("#astInfo").append(astContent);

            }

        });
    }

    function zodSignFirstUpper() {
        var zodiacSign2 = zodiacSign.toUpperCase();
        zodiacSign2 = zodiacSign2.substring(0, 1)
        zodiacSign2 = zodiacSign2 + zodiacSign.substring(1, zodiacSign.length);
        return zodiacSign2;
    }

    function dateToDouble(momentDate) {
        var dateMonth = parseInt(momentDate.format("M"));
        var dateDay = parseInt(momentDate.format("D"));
        dateDay = dateDay / 100;
        return dateMonth + dateDay;
    }

    function getCoord(city) {
        $.ajax({
            url: 'https://api.opencagedata.com/geocode/v1/json',
            method: 'GET',
            data: {
                'key': '9b18e4e7c5df4dbabb26095e66651862',
                'q': city,
                'no_annotations': 1
                // see other optional params:
                // https://opencagedata.com/api#forward-opt
            },
            dataType: 'json',
            statusCode: {
                200: function (resp) { // success

                    if (resp.results.length == 0) {
                        locFormat = "Mexico City, Mexico"
                        locLat = 19.4287;
                        locLong = -99.1276;
                        if (!locatSwitch) {

                            $("#exampleModalCenter2").modal();
                            locatSwitch = true;
                        }

                    } else {
                        locFormat = resp.results[0].formatted
                        locLat = resp.results[0].geometry.lat;
                        locLong = resp.results[0].geometry.lng;

                    }
                    $(".sunMoonLocat").text(
                        "Information at: " +
                        locFormat +
                        "."
                    );

                    locCoordinates = locLat + "," + locLong;

                    sunMoon(locCoordinates);

                },
                402: function () {
                    console.log('hit free-trial daily limit');
                    console.log('become a customer: https://opencagedata.com/pricing');
                }
                // other possible response codes:
                // https://opencagedata.com/api#codes
            }
        });
    }

    function imageOfDay($img, $imgTitle) {

        function determineDate(baseYear, baseMonth, baseDay) {

            var dateYear = parseInt(moment().format("YYYY"));
            var dateMonth = parseInt(moment().format("MM"));
            var dateDay = parseInt(moment().format("DD"));

            var randomYear = Math.floor(Math.random() * (dateYear - baseYear) + baseYear);
            var randomMonth;
            var randomDay;

            if (randomYear == dateYear) {
                randomMonth = Math.floor(Math.random() * (dateMonth - 1) + 1);

            } else if (randomYear == baseYear) {
                randomMonth = Math.floor(Math.random() * (12 - baseMonth) + baseMonth);

            } else {
                randomMonth = Math.floor(Math.random() * (12 - 1) + 1);

            }

            if (randomYear == dateYear && randomMonth == dateMonth) {
                randomDay = Math.floor(Math.random() * (dateDay - 1) + 1);

            } else if (randomYear == 1995 && randomMonth == baseMonth) {
                randomDay = Math.floor(Math.random() * (30 - baseDay) + baseDay);

            } else {
                if (
                    randomMonth == 1 ||
                    randomMonth == 3 ||
                    randomMonth == 5 ||
                    randomMonth == 7 ||
                    randomMonth == 8 ||
                    randomMonth == 10 ||
                    randomMonth == 12
                ) {
                    randomDay = Math.floor(Math.random() * (31 - 1) + 1);
                } else if (
                    randomMonth == 4 ||
                    randomMonth == 6 ||
                    randomMonth == 9 ||
                    randomMonth == 11
                ) {
                    randomDay = Math.floor(Math.random() * (30 - 1) + 1);
                } else {
                    randomDay = Math.floor(Math.random() * (28 - 1) + 1);
                }
            }

            randomYear = randomYear.toString();
            if (randomMonth < 10) {
                randomMonth = "0" + randomMonth.toString();
            } else {
                randomMonth = randomMonth.toString();
            }
            if (randomDay < 10) {
                randomDay = "0" + randomDay.toString();
            } else {
                randomDay = randomDay.toString();
            }

            var date = randomYear + "-" + randomMonth + "-" + randomDay;
            return date;
        }

        var imageOfDayqry = "https://api.nasa.gov/planetary/apod?" +
            "date=" + determineDate(1995, 6, 16) + "&api_key=" + nasaKey;

        var rndmSlideNum;
        var rndmSlide;

        $.ajax({

            url: imageOfDayqry,
            method: "GET",
            error: function () {
                rndmSlideNum = Math.floor(Math.random() * (10 - 1) + 1);
                rndmSlide =
                    "assets/images/CosmicAlbum/" +
                    rndmSlideNum + ".jpg";
                $img.attr("src", rndmSlide);
                $img.attr("src", rndmSlide);
            },
            crossDomain: function () {
                rndmSlideNum = Math.floor(Math.random() * (10 - 1) + 1);
                rndmSlide =
                    "assets/images/CosmicAlbum/" +
                    rndmSlideNum + ".jpg";
                $img.attr("src", rndmSlide);
            }

        }).then(function (resp) {

            $img.attr("src", resp.url);
            $imgTitle.text(resp.title);


        });

    }

    for (var i = 1; i < 11; i++) {

        var $img = $("#img" + i);
        var $imgTitle = $("#imgTitle" + i);

        imageOfDay($img, $imgTitle);

    };

});