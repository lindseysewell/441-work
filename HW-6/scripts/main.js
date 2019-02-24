
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10",];
var blankImagePath = "images/blank1.png";
var player = {"firstname":"", "lastname":""};
var firstNumber = -1;
var secondNumber = -1;

var actualImages = new Array();
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}


function createRandomImageArray()
{

    var actualImagePath = ["images/cat1.png", "images/cat2.png","images/cat3.png","images/cat4.png","images/cat5.png"];

    var count = [0,0,0,0,0,0,0,0,0,0];

    while(actualImages.length < 10)
    {
      var randomNumber = Math.floor(Math.random() * actualImagePath.length);
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }


}

function flipImage(number)
{

    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];

    }
    else if(firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];

    }

    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 1000);
    }
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }



}
function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    player.firstname = firstName;
    player.lastname = lastName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "main.html";
  }
  function playerInfo()
  {
      var playerInformation = localStorage.getItem("playerInfo");
      player = JSON.parse(playerInformation);
      console.log(player.firstname);
      console.log(player.lastname);
    }
