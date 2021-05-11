var today = new Date();

var calweekday = new Array(7);
calweekday[0] = "SUN";
calweekday[1] = "MON";
calweekday[2] = "TUE";
calweekday[3] = "WED";
calweekday[4] = "THU";
calweekday[5] = "FRI";
calweekday[6] = "SAT";

var calwd = calweekday[today.getDay()];
var calda = today.getDate();
document.getElementById("calwd").innerHTML = calwd;
document.getElementById("calda").innerHTML = calda;
