var month = new Array(12);
month[0] = "1";
month[1] = "2";
month[2] = "3";
month[3] = "4";
month[4] = "5";
month[5] = "6";
month[6] = "7";
month[7] = "8";
month[8] = "9";
month[9] = "10";
month[10] = "11";
month[11] = "12";

var today = new Date();
document.getElementById("m").innerHTML = month[today.getMonth()];
document.getElementById("d").innerHTML = today.getDate();
document.getElementById("y").innerHTML = today.getFullYear();
