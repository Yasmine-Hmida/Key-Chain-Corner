// Manipulating the Modal
const productButton = document.querySelector(".productButton"); 
const payButton = document.querySelector(".payButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const cardIcons = document.querySelectorAll(".cardIcon");
const orderDone = document.querySelector(".done");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});

close.addEventListener("click",()=>{
    payment.style.display="none";
})

cardIcons.forEach((cardIcon) => {
    cardIcon.addEventListener("click", (event) => {
        event.target.classList.toggle("selected");
    });
    
});

payButton.addEventListener("click",()=>{
    orderDone.innerHTML="Ordered! Thanks For Shopping from Us!";
});
