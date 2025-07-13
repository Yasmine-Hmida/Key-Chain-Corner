// Coding the Slider Image Part

const initSlider = () => {
    let interfaceDiv = document.querySelector(".slide");
    let slideContainer = interfaceDiv.querySelector(".slideContainer");
    let slideDiv = slideContainer.querySelector(".slides"); 
    let slideImages = slideDiv.querySelectorAll(".slideImage"); // Array of Images
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let dots = document.querySelectorAll(".dot");
 
    let counter = 0;
    let deletInterval;
 
    function slideNext(){
        slideImages[counter].style.animation = "next1 0.5s ease-in forwards"; // Slide the current image to the left 
        counter = (counter + 1) % slideImages.length; // Increment the Counter and avoid exceeding the length of the array
        slideImages[counter].style.animation = "next2 0.5s ease-in forwards"; // Slide the next Image from the Right to left
        indicators();
    }

    function slidePrev(){
        slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
        counter = (counter === 0) ? slideImages.length - 1 : counter - 1;
        slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
        indicators();
    }

    function autoSliding(){
        deletInterval = setInterval(() => {
            slideNext();
            indicators();
        }, 1300);
    }

    function indicators(){
        dots.forEach(dot => dot.classList.remove("active"));
        dots[counter].classList.add("active");
    }

    // Event listeners
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    slideContainer.addEventListener("mouseover", () => clearInterval(deletInterval)); // when putting the mouse on the slide container, stop the autosliding
    slideContainer.addEventListener("mouseout", autoSliding); // When removing the mouse from the slide container, return the autosliding

    // Start auto sliding
    autoSliding(); 
}

export default initSlider;
