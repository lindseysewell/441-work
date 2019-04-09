 var yChange = 10;
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   var square = new Square(200, 0, 100, 100);
   var square2 = new Square(100, 100, 100, 100);
   var square3 = new Square(500, 100, 100, 100);
   var square4 = new Square(100, 500, 40, 40);

   // var x = 200;
   // var y = 0;
   drawSquare();
   setInterval(update, 1000/60);

   function hasCollided(object1, object2) {
     console.log (object1.X);
    return !(
        ((object1.Y + object1.H) < (object2.Y)) ||
        (object1.Y > (object2.Y + object2.H)) ||
        ((object1.X + object1.W) < object2.X) ||
        (object1.X > (object2.X + object2.W))
    );
  }


   $(document).ready(function(){
$(this).keypress(function(event){
getKey(event);

});
});

   function update()
   {
     ctx.clearRect (0, 0, 600, 800);
 square2.changeY(yChange);
 if (square2.Y >600 || square2.Y <0){
   yChange *= -1;
  }
 // square3.changeY(yChange); if (square3.Y >600 || square3.Y <0)
 // {
 // yChange *= -1;
 // }
       drawSquare();
   }

   function drawSquare()
   {
       ctx.fillStyle = "Green";
       ctx.fillRect(square2.X, square2.Y, square2.W, square2.H);
       ctx.fillStyle = "#0000FF";
       ctx.fillRect(square3.X, square3.Y, square3.W, square3.H);
       ctx.fillStyle = "Yellow";
       ctx.fillRect(square.X, square.Y, square.W, square.H);
       // ctx.fillRect(square4.X, square4.Y, square4.W, square4.H);
   }

   function getKey(event)
   {
       var char = event.which || event.keyCode;
       var actualLetter = String.fromCharCode(char);
       if(actualLetter == "w")
       {
         console.log("skdfjlasdf");
           moveUp();
       }
       else if(actualLetter == "a")
       {
           moveLeft();
       }
       else if(actualLetter == "s")
       {
           moveDown();
       }
       else if(actualLetter == "d")
       {
           moveRight();
       }
       console.log ("aaaaaaaa");
       if (hasCollided(square, square2))
       {
         console.log ("test");
        $("#myCanvas").css ("background-color", " red");
        if (hasCollided(square, square3))
        {

         $("#myCanvas").css ("background-color", "orange");
        // ctx.fillStyle(square) = "blue";
      }
    }
       drawSquare();
   }

   function moveUp()
   {
       square.changeY(-10);
   }
   function moveLeft()
   {
       square.changeX(-10);
   }
   function moveRight()
   {
       square.changeX(10);
   }
   function moveDown()
   {
       square.changeY(10);
   }
