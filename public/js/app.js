$(document).ready(function () {
    // getJson();
    // navActive();
    // console.log("TEST");
    $('.is-drilldown').css('height', '1px');
    
    $('.is-drilldown').show(1);
    
})
$(document).foundation();
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navBarBox");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
$(".dogBox").on("click", "img", function(){
  document.location.href = $(this).data("links");
  // console.log($(this).data("links"));
});