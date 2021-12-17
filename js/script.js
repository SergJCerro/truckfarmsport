var countDownDate = new Date("Dec 20, 2021 23:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
 document.getElementById("hour").innerHTML= hours;
 document.getElementById("minute").innerHTML= minutes;
 document.getElementById("second").innerHTML= seconds;
}, 1000);