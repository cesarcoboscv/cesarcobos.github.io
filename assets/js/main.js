var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})


var typeText = document.getElementById("machine")
var textToBeTyped = "Civil Engineer"
var textToBeTypedArr = ["Civil Engineer", "Data Science", "Project Manager","Mechanical Design", "FrontEnd Dev"]
var index = 0, isAdding = true, textToBeTypedIndex = 0
function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim()



function openNav() {
  document.getElementById("sideNav").style.width = "320px";
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


var menuRandom = document.getElementById("menu-random");
  var arr = ["fa-satellite","fa-radiation","fa-jedi","fa-rocket","fa-atom","fa-seedling","fa-wifi","fa-user-astronaut","fa-hand-spock","fa-dragon","fa-pizza-slice","fa-cat","fa-burger","fa-bacon","fa-utensils","fa-cookie", "fa-fish"];
  var randomItem = arr[Math.floor(Math.random()*arr.length)];
window.onload = function(){
  menuRandom.classList.add(randomItem)
  // console.log(randomItem);
};


var barNav = document.getElementById("nav");
var elements = document.getElementsByClassName("text");
window.onscroll = function(){
    if (document.documentElement.scrollTop >= 80){
        barNav.classList.add("background-light");
        barNav.classList.remove("background-dark")
        // console.log("Scroll On - color change");
        for (let i = 0; i < elements.length; i++){
          
          elements[i].classList.remove("light-text")
          elements[i].classList.add("dark-text")
        }
    }else{
        barNav.classList.remove("background-light")
        barNav.classList.add("background-dark");
        // console.log("Scroll Off - color change");
        for (let i = 0; i < elements.length; i++){
          
          elements[i].classList.remove("dark-text")
          elements[i].classList.add("light-text")
        }

    }
}