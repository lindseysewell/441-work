 var yChange = 10;
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   var square = new Square(200, 0, 40, 40);
   var square2 = new Square(100, 100, 40, 40);
   // var x = 200;
   // var y = 0;
   drawSquare();
   setInterval(update, 1000/60);
   ctx.fillStyle = "#0000FF";

   $(document).ready(function(){
$(this).keypress(function(event){
getKey(event);
});
});

   function update()
   {
     ctx.clearRect (0, 0, 600, 800);
 square2.changeY(yChange);
 // console.log (square2.Y);
 if (square2.Y >300 || square2.Y <0){
   yChange *= -1;
 }
       drawSquare();
   }

   function drawSquare()
   {
       ctx.fillRect(square.X, square.Y, square.W, square.H);
       ctx.fillRect(square2.X, square2.Y, square2.W, square2.H);
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
