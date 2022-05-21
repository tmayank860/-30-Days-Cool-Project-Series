clock = () => {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
console.log(hr);
  var hour = hr>12?-24+hr+12:hr; ;
  document.getElementById("hr").innerHTML=(hour>9)? hour:"0"+ hour;
  document.getElementById("min").innerHTML = min>9? min:"0"+min;
  document.getElementById("sec").innerHTML = sec>9?sec:"0"+sec;
  document.getElementById("meridian").innerHTML = hr>12?"PM":"AM";

  setTimeout(clock, 1000);
}

clock();