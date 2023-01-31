const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");

function btnEvent1() {
  window.location.href = "https://Dec-Y-our-Home.dabztonplayz.repl.co"
};

function btnEvent2() {

  window.location.href = ""
};

function btnEvent3() {
  window.location.href = ""
};


function alertTimeout() {
  alert("This website is in it's developing stage, some buttons may not work.")
}

      let details = navigator.userAgent;
      let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

      if (isMobileDevice) {
        alertTimeout2();
      } 
function alertTimeout2() {
  alert("Kindly turn your phone sideways to see the proper website display.")
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}