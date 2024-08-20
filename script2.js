// Manipulating the Modal
const productButtons = document.querySelectorAll(".productButton"); 
const payButton = document.querySelector(".payButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const cardIcons = document.querySelectorAll(".cardIcon");
const orderDone = document.querySelector(".done");

// When I Click on the Buy Button, THEN the Modal will Appear
productButtons.forEach((productButton) => {
    productButton.addEventListener("click",()=>{
        payment.style.display="flex";
    });
});


// When I Click on the Close Button, THEN the Modal will Disappear
close.addEventListener("click",()=>{
    payment.style.display="none";
})

// Toggle the Card Icons when Selected
cardIcons.forEach((cardIcon) => {
    cardIcon.addEventListener("click", (event) => {
        event.target.classList.toggle("selected");
    });
    
});

// Hnadle the Submitting
payButton.addEventListener("click",()=>{
    orderDone.innerHTML="Ordered! Thanks For Shopping from Us!";
});
