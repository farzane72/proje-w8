

//let itemMenu=document.querySelectorAll(".ul-menu li");
//let itemMenu = document.querySelectorAll("li");
//let ul = document.getElementsByClassName("ul-child");
let itemMenu=document.querySelectorAll(".has-sibling");
console.log(itemMenu);

itemMenu.forEach((item) => {
    //if(item.classList.contains("menu-item")){
        console.log(item);
        item.addEventListener("mouseover", function(e) {
            e.stopPropagation();
            let ul = item.nextElementSibling;
            console.log(ul);
                if (ul.style.display==="none") {
                
                     ul.style.display = "block";
                 }
                else{
                     ul.style.display = "none";
                
                 }
        })
   // }
   
})





// function test() {
//     itemMenu.forEach((item) => {
//         console.log(item);
//   if (item.classList.contains("menu-item")) {
//     console.log(ul);
//     if ((ul.style.display = "none")) {
//       ul.style.display = "block";
//     } else {
//       ul.style.display = "none";
//     }
//   }
// });
// }


  // let ul = item.nextElementSibling;
  // // const chevronDown = header.lastElementChild
  //      console.log(ul);

  //itemMenu.addEventListener("mousemove",test);

// let ul = item.nextElementSibling;
// const chevronDown = header.lastElementChild
// let ul = item.hasChildNodes;

// }
// if (ul) {

//     ul.style.display = "block";
// }
//  else {
//     ul.style.display = "none";

// }

//})
