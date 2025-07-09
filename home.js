function myFunction(){
    document.body.scrollTop = window.innerHeight;
    document.documentElement.scrollTop = window.innerHeight;
}

var body= document.body;
var bodyElememt= document.documentElement;

  //Navbar Animation
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  document.getElementById("navigation").style.position = "fixed";
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("navbar").style.top = "0";

} else {
  document.getElementById("navbar").style.top = "-100px";
}
prevScrollpos = currentScrollPos;

if(document.body.scrollTop >  80 || document.documentElement.scrollTop > 80){document.getElementById("navigation").style.position = "absolute";
  
}else{
  document.getElementById("navigation").style.position = "fixed";
}

if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
  document.getElementById("scrollup").style.display = "block";
}else{
  document.getElementById("scrollup").style.display = "none";
}
}



function navBar(){
    document.getElementById("navbar").style.display = "block";
    document.getElementById("scrollup").style.display = "auto";
    //const timerID = setTimeout(myGreetings, 2000); 
}

//Navbar-Animation: End 
//Go top animation
function goTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var Scroll = document.getElementById("scrollup");

function show(){
  document.getElementById("navigation").classList.toggle("fix");
}

