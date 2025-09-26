// LEFT SIDEBAR TOGGLE CONST //
const toggler = document.getElementById("toggler");
const sidebar = document.querySelector(".sidebar");

// RIGHT SIDEBAR TOGGLE CONST //
const toggler2 = document.getElementById("toggler2");
const sidebar2 = document.querySelector(".right-sidebar");

// function {left sidebar}//

toggler.addEventListener("click", function(e){
  if(sidebar.style.left === "-500px"){
    sidebar.style.left = "0px";
  } else {
    sidebar.style.left = "-500px";
  }
});

window.addEventListener("click", function(e){
  if(!sidebar.style.left !== "-500px" && (e.target !== toggler )){
    sidebar.style.left = "-500px";
  }
  }
);

// function {right sidebar} //
toggler2.addEventListener("click", function(){
  if(sidebar2.style.width === "16px"){
    sidebar2.style.width = "122px";
  } else {
    sidebar2.style.width = "122px";
  }
  }
);

window.addEventListener("click", function(e){
  if(!sidebar2.style.width !== "122px" && (e.target !== toggler2)){
    sidebar2.style.width = "16px";
  }
});

// CARDS AUTO SLIDE //
const slider = document.getElementById("slider");
let index = 0;

function autoSlide() {
  const cards = document.querySelectorAll(".card");
  index ++;

  if (index >= cards.length) {
    index = 0; // go back to first card 
  }

  slider.style.transform = `translateX(-${index * (cards[0].offsetWidth + 20)}px)`;
}

setInterval(autoSlide, 6000);