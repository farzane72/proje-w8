"use strict";

let itemMenu = document.querySelectorAll(".has-sibling");
let itemMenuAside = document.querySelectorAll(".li-menu");
let iconMenu = document.querySelector(".icon-menu");
let menuAside = document.getElementById("menu-aside");
let iconClose = document.querySelector(".icon-close");
let articles = document.querySelectorAll(".article");
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");

itemMenu.forEach((item) => {
  //if(item.classList.contains("menu-item")){
  //console.log(item);
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let ul = item.nextElementSibling;
    console.log(ul);
    if (ul.style.display === "none") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  });
  // }
});

itemMenuAside.forEach((item) => {
  //console.log(item);
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let ulAside = item.nextElementSibling;
    // let iconDown = document.querySelector(".down-aside");
    let iconDown = item.lastElementChild;
    console.log(iconDown);
    if (ulAside.style.display === "none") {
      //iconDown.style.transform = "rotate(180deg)";
      iconDown.classList.add("icon-transform");
      ulAside.style.display = "block";
    } else {
      // iconDown.style.transform = "rotate(180deg)";
      ulAside.style.display = "none";
      iconDown.classList.remove("icon-transform");
    }
  });
  // }
});

iconMenu.addEventListener("click", () => {
  // if (menuAside.style.display === "none") {
  menuAside.style.display = "block";
  // document.body.style.background="black"
  iconClose.style.display = "block";

  // } else {
  //   menuAside.style.display = "none";
  // }
});
iconClose.addEventListener("click", () => {
  menuAside.style.display = "none";
  iconClose.style.display = "none";
});
//console.log(article);
//articles.forEach((article,index) => {

btnNext.addEventListener("click", function (e) {
  let active=document.querySelector(".active");
  let nextArticle = active.nextElementSibling;
  if(nextArticle === null){
   active.parentElement.firstElementChild.classList.add("active");
   active.classList.remove("active");
  }
  nextArticle.classList.add("active");
  active.classList.remove("active");
  
});
  btnPrev.addEventListener("click",()=>{
    let active=document.querySelector(".active");
    let prevArticle = active.previousElementSibling;
    if(prevArticle === null){
      active.parentElement.lastElementChild.classList.add("active");
      active.classList.remove("active");
     }
    prevArticle.classList.add("active");
    active.classList.remove("active");

});
