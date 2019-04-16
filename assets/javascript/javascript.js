$(".fondoHoro").on("click", function () {
    $(this).css("display", "none");
    $(".fondoAsteroids").css("display", "block");
})

$(".fondoAsteroids").on("click", function () {
    $(this).css("display", "none");
    $(".fondoSunMoon").css("display", "block");
    console.log("here2");
})

$(".fondoSunMoon").on("click", function () {
    $(this).css("display", "none");
    $(".fondoEarthPic").css("display", "block");
    console.log("here3");
})

$(".fondoEarthPic").on("click", function () {
    $(this).css("display", "none");
    $(".fondoOther").css("display", "block");
    console.log("here4");
})

$(".fondoOther").on("click", function () {
    $(this).css("display", "none");
    $(".fondoHoro").css("display", "block");
    console.log("here5");
})

