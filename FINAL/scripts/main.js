var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var Prompts = ["You", "Your best friend", "your favorite book character", "your favorite movie character", "your favorite cartoon character", "your favorite superhero", "your favorite cartoon character", "your favorite Disney princess", "your favorite animal", "your favorite fictional couple", "your favorite TV character", "your pet", "a mermaid", "a witch", "a dragon", "a fairy", "a cat", "a princess", "a dog", "your original character", "your favorite singer", "an alien", "a new character of your design", "your favorite meal", "a sad drawing", "a happy drawing", "an angry character", "a soft-serve ice cream cone", "your favorite villain", "A new cover for your favorite book", "a fun typography of your own name", "a magical deer", "a pack of wolves", "a mountainous landscape", "a sunset", "a lake landscape", "the ocean", "an abstraction of color", "your favorite Disney prince", "an extremely angry bunny rabbit", "a dog in a swimming pool", "a mixture of different animals", "an alien creature of your design", "a ballerina", "a silly cartoon"];
console.log (Prompts.length);
var square = new Square(150, 250, 100, 100);
var square2 = new Square(250, 250, 100, 100);
var square3 = new Square(350, 250, 100, 100);
var square4 = new Square(450, 250, 100, 100);
var square5 = new Square(550, 250, 100, 100);
var colorsArray = new Array();
var randomNumber = 0;
var randomNumber2 = 0;
// var randomNumber = Math.floor (Math.random() * colorsArray.length);
function displayPrompt(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
ctx.fillText(Prompts[randomNumber2], 10, 50); 
}

function drawSquare()
   {
      
       var colorObject = colorsArray[randomNumber];
       ctx.fillStyle = colorObject.C1;
       ctx.fillRect(square2.X, square2.Y, square2.W, square2.H);
       ctx.fillStyle = colorObject.C2;
       ctx.fillRect(square3.X, square3.Y, square3.W, square3.H);
       ctx.fillStyle = colorObject.C3;
       ctx.fillRect(square.X, square.Y, square.W, square.H);
       ctx.fillStyle = colorObject.C4;
       ctx.fillRect(square4.X, square4.Y, square4.W, square4.H);
       ctx.fillStyle = colorObject.C5;
       ctx.fillRect(square5.X, square5.Y, square5.W, square5.H);
       // ctx.fillRect(square4.X, square4.Y, square4.W, square4.H);
   }


   $(document).ready(function () {
    
   $("button").click(function(){
    ctx.clearRect (0, 0, 600, 800);
   randomNumber = Math.floor (Math.random() * colorsArray.length);
   randomNumber2 = Math.floor (Math.random() * Prompts.length);
   drawSquare ();
   displayPrompt ();
   });
$.getJSON("data/palettes.json",function (responseText) {

    console.log(responseText);
    

    var everything ="";
    for (var i= 0; i < responseText.palettes.length; i++){
        colorsArray.push (new Color(responseText.palettes[i].color1,responseText.palettes[i].color2,responseText.palettes[i].color3,responseText.palettes[i].color4,responseText.palettes[i].color5));
   
    }
    console.log (colorsArray.length)
    randomNumber = Math.floor (Math.random() * colorsArray.length);
    randomNumber = Math.floor (Math.random() * colorsArray.length);
    drawSquare ();
    displayPrompt ();
    });
    
});

