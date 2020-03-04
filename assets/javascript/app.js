let techSkills = [
  {
    name: "HTML",
    image: "assets/images/html5.png",
    animation: "zoom-in"
},    
{
    name: "CSS",
    image: "assets/images/css3.png",
    animation: "zoom-in"   
},    
{
    name: "Bootstrap",
    image: "assets/images/bootstrap4.png",
    animation: "zoom-out"
},    
{
    name: "JavaScript",
    image: "assets/images/js.png",
    animation: "zoom-in"   
},    
{
    name: "jQuery",
    image: "assets/images/jquery.png",
    animation: "zoom-out"
},    
{
    name: "Node.js",
    image: "assets/images/node.png",
    animation: "zoom-in"   
},    
{
    name: "Express",
    image: "assets/images/express.png",
    animation: "zoom-out"
},    
{
    name: "Express-Handlebars",
    image: "assets/images/handlebars.png",
    animation: "zoom-in"
},    
{
    name: "MySQL",
    image: "assets/images/mysql.png",
    animation: "zoom-out"
},    
{
    name: "MongoDB",
    image: "assets/images/mongo.png",
    animation: "zoom-in"
},
{
    name: "React.js",
    image: "assets/images/react.png",
    animation: "zoom-out"
},
{
    name: "PHP",
    image: "assets/images/php.png",
    animation: "zoom-in"
}
]




AOS.init();
$(document).ready(function(){
    
  $('[data-toggle="popover"]').popover({trigger: "hover"});
$(function(){
    $('a[href*="#"]:not([href="#"])').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length){
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }

        }
    })
})
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

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
})

createSkills();
function createSkills() {

  for (let i = 0; i < techSkills.length ; i++ ) {

          let theDiv = $("<div>").addClass("col-sm-4 mb-4 pb-4 text-center aniview slow")
                      .attr("data-aos", techSkills[i].animation)
          let theImage = $("<img>").addClass("img-fluid theProject")
                          .attr("alt" , "Responsive image")
                          .attr("value", techSkills[i].name)
                          .attr("src" , techSkills[i].image)
          let theName = $("<h3>").text(techSkills[i].name)
          theDiv.append(theImage)
          theDiv.append(theName)
          $("#skills").append(theDiv)
  }
  
}

