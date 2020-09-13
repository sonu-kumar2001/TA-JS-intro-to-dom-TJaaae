function currentTime() {
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
     // adding time to the div 
    document.querySelector(".clock").innerText = hour + " : " + min + " : " + sec;
    document.querySelector(".clock2").innerText = hour + " : " + min + " : " + sec;
    // setting timer 
      let timer = setTimeout(function(){ currentTime() }, 1000); 
  }
  
  function updateTime(format) {
    if (format < 10) {
      return "0" + format;
    }
    else {
      return format;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */