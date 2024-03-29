import "./components/app-navbar.js";
import "./renderPages.js"

// go to top button
const gtButton = document.querySelector(".gotop");

document.addEventListener("scroll", function(){
  const scrollPos = window.pageYOffset;
  if(scrollPos > 1000){
  gtButton.classList.add("show");
  } else{
  gtButton.classList.remove("show");
  }
});

// set theme from loacal storage

  if(localStorage.getItem("theme") === "true"){
    document.body.classList.add("dark-mode");
  } else{
    document.body.classList.remove("dark-mode");
  }


const viewMode = document.querySelector(".toggle-body");
viewMode.addEventListener("click", function(){
  
  document.body.classList.toggle("dark-mode");
  // save theme mode
  if(typeof(Storage) !== undefined){
    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem("theme", "true");
    } else{
      localStorage.setItem("theme", "false");
    }
  }else{
    console.log("Your Browser doesnt support Storage");
  }
});

checkBookmarked()


// document.addEventListener("DOMContentLoaded", function(){
//   const btnBookmark = document.querySelectorAll("i.bookmarkicon");
// console.log(btnBookmark)
// btnBookmark.forEach(function(bookmark){
//   bookmark.addEventListener("click", function(e){
//     console.log(bookmark.getAttribute("data-id"))
//         })
//       })

// })




