
$.getJSON("data/earthquake.json",function (responseText) {

console.log(responseText);

var earthquake = responseText;
var everything ="";
for (var i= 0; i < earthquake.features.length; i++){
  everything += earthquake.features[i].properties.title + "<br>"+ "<p>";
  everything += earthquake.features[i].properties.mag + "<br>"+ "<p>";
  everything += earthquake.features[i].properties.place+ "<br>"+ "<p>";
  everything += earthquake.features[i].properties.time+ "<br>"+ "<p>";
  everything += earthquake.features[i].properties.tz+ "<br>"+ "<p>";
  everything += earthquake.features[i].properties.tsunami+ "<br>"+ "<p>";
}

$("#earthquakeInfo").html(everything);
console.log(earthquake.features[0].properties.detail);

});
