
$(document).ready(function(){


    $("button").click(function(){

        //$("#stuff").animate({top:400});
        moveSquare1();
        moveSquare1();
        moveSquare1();
        moveSquare2();
        moveSquare2();
        moveSquare2();
        image1Move();
        image2Move();
        image3Move();


        $("#third").toggle();
        fadeText(); // you want to call your method to make the text fade out and in
          // setInterval(moveSquare, 1000);

       // $(allDogs[0].theSelector).fadeOut().fadeIn();

    });

});


function moveSquare1()
{
    $("#square1").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
function moveSquare2()
{
    $("#square2").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
function image1Move()
{
  $("#image1").animate({left:250}).animate({top:800}).animate({left:0}).animate({top:1000});  // you want to use top instead of down
}
function image2Move()
{
  $("#image2").animate({left:0}).animate({top:100}).animate({left:0}).animate({top:400});  // you want to use top instead of down
}
function image3Move()
{
  $("#image3").animate({left:100}).animate({top:100}).animate({left:0}).animate({top:600});  // you want to use top instead of down
}
// I changed the function name to fadeText so that it wouldn't conflict with the fadeIn function in jQuery
// You want to fadeOut first and then fadeIn since it starts showing
function fadeText()
{
  $( ".stuff" ).fadeOut( "slow").fadeIn("slow"); // since you create a class stuff, you want to use the "." operator to get to it

}
