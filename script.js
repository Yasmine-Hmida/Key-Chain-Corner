document.addEventListener("DOMContentLoaded", function() {
    // Auto Slidin Images Code Part

    /* --------------------------------------------------------------------------------------------------------- */
    let interfaceDiv = document.querySelector(".slide");

    let slideContainer = interfaceDiv.querySelector(".slideContainer");
    
    let slideDiv = slideContainer.querySelector(".slides"); 

    // Access the Images
    let slideImages = slideDiv.querySelectorAll(".slideImage");

    // Access the Next and Prev Buttons
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");

    // Acess the Dots
    let dots = document.querySelectorAll(".dot");

    var counter = 0;

    // Code For Next Button
    next.addEventListener("click", slideNext);
    function slideNext(){
        slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
        if(counter >= slideImages.length-1){
            counter = 0;
        }
        else{
            counter++;
        }
        slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
        indicators();
    }

    // Code For Prev Button
    prev.addEventListener("click", slidePrev);
    function slidePrev(){
        slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
        if(counter == 0){
            counter = slideImages.length-1;
        }
        else{
            counter--;
        }
        slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
        indicators();
    }

    // Auto Sliding
    function autoSliding(){
        deletInterval = setInterval(timer, 1300);
        function timer(){
            slideNext();
            indicators();
        }
    }
    autoSliding();

    // Stop Auto Sliding When Mouse is Over
    slideContainer.addEventListener("mouseover", function(){
        clearInterval(deletInterval);
    })

    // Resume Sliding when Mouse is Out
    slideContainer.addEventListener("mouseout", autoSliding);

    // Add and Remove active class from dots
    function indicators(){
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active","");
        }
        dots[counter].className += " active";
    }

    /* --------------------------------------------------------------------------------------------------------- */
});
