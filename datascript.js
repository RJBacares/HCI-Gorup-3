document.addEventListener("DOMContentLoaded", function(){

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", function(){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link=>{
        link.addEventListener("click", function(){
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

});


function openModal(id){
    document.getElementById(id).style.display = "block";
}

function closeModal(id){
    document.getElementById(id).style.display = "none";
}

window.onclick = function(e){

    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal=>{
        if(e.target == modal){
            modal.style.display = "none";
        }
    });

}