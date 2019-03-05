var myViewFinderArray = new Array();
var ImagePath = ["images/Tea.JPG", "images/Klaus.JPG", "images/Sapphire.JPG", "images/Mouse.JPG", "images/bokeh.jpg"];
class ViewFinder

{
    constructor(name, title, imagePath, date, author)
    {
        this.name = name;
        this.title = title;
        this.imagePath = imagePath;
        this.date = date;
        this.author = author;
    }

    toString()
    {
        return "Name: " + this.name;
        return "Title: " + this.title;
        return "Date:"+ this.date;
        return "Author:"+ this.author;
        // you can just concatenate more information here rather
        // than creating another toString - you only want one toString
    }
    get theName()
    {
        return this.name;
    }
    get theImage()
    {
        return this.imagePath;
    }

    get theTitle()
    {
        return this.title;
    }
    get theDate()
    {
        return this.date;
    }
    get theAuthor()
    {
        return this.author;
    }
    // you can only have one constructor in your class.
   // constructor(date)
  //  {
  //      this.date = date;
  //  }

  //  toString()
  //  {
  //      return "Date: " + this.date;
  //  }

  // put this back in when you have a date
    //get theDate()
   // {
   //     return this.date;
   // }

}

function initializeArray()
{

    var myViewFinder = new ViewFinder("Jasmine","A delicious cup of tea with cookies", "images/tea.JPG", "January 2019", "Lindsey Sewell");
  // add another object onces you have the first one working the way you want.
    var myViewFinder1 = new ViewFinder("Klaus","Klaus the dog", "images/Klaus.JPG", "December 2018", "Lindsey Sewell");
    var myViewFinder2 = new ViewFinder("Sapphire","Sapphire the cat under a Christmas tree", "images/Sapphire.JPG", "December 2018", "Lindsey Sewell");
    var myViewFinder3 = new ViewFinder("Mouse","Mouse the cat enjoying the summer", "images/Mouse.JPG", "July 2018", "Lindsey Sewell");
    var myViewFinder4 = new ViewFinder("Bokeh","Soft blurred Christmas lights", "images/Bokeh.JPG", "December 2018", "Lindsey Sewell");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);



}
function accessInformation()
{
var randomNumber = Math.floor(Math.random() * 5);
    //document.getElementById("title").innerHTML = myViewFinderArray[0].toString();
    document.getElementById("name").innerHTML = myViewFinderArray[randomNumber].theName;
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].theTitle;
    document.getElementById("picture").src = myViewFinderArray[randomNumber].theImage;
   //document.getElementById("date").innerHTML = myViewFinderArray[1].toString();
   document.getElementById("date").innerHTML = myViewFinderArray[randomNumber].theDate;
    document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].theAuthor;

}
