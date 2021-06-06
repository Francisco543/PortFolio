window.addEventListener("scroll", function(){
    var nav = document.getElementById("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})