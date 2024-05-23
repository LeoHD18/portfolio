$(".btnLucky").click( function() {
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var total = randomNum1 + randomNum2;
    var imgSource1 = "./assets/pics/dice" + randomNum1 + ".png";
    var imgSource2 = "./assets/pics/dice" + randomNum2 + ".png";
    $(".dice1").attr("src", imgSource1 );
    $(".dice2").attr("src", imgSource2 );
    $(".luckyDisplay").text("Your lucky number is " +  total)
})