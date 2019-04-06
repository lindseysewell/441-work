
$.getJSON("data/earthquake.json",function (responseText) {

console.log(responseText);

var earthquake = responseText;

console.log(earthquake.features[0].properties.mag);

});
