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

// Toggle the Visa Card and the Border is Initially There
const visa = document.querySelector("#visa");
var borderThere = true;
visa.addEventListener("click",function(){
    if (borderThere){
        borderThere = false;
        this.style.border = 'none';
    } 
    else{
        borderThere = true;
        this.style.border = '2px solid gray';
    }
});

// Toggle the MasterCards when Selected
const masterCard = document.querySelector("#mastercard");
masterCard.addEventListener("click", (event) => {
    event.target.classList.toggle("selected");
});
    
// Hnadle the Submitting and Form Validation
payButton.addEventListener("click",()=>{
    // Get the Input Fields Every time you Click
    const fullName = document.querySelector("#name").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const Address = document.querySelector("#Address").value;
    const cardNumber = document.querySelector("#cardNumber").value;
    const month = document.querySelector("#month").value;
    const day = document.querySelector("#day").value;
    const year = document.querySelector("#year").value;
    
    // Form Validation
    if (fullName ==="" || phoneNumber ==="" || Address ==="" || cardNumber ==="" || month ==="" || day ==="" || year ==="") {
        orderDone.innerHTML="Empty Field(s). Please Try Again!";
    }

    else if(phoneNumber.length !== 8){
        orderDone.innerHTML="Phone Number Should have 8 Digits. Please Try Again!";
    }

    else if(cardNumber.length !== 16){
        orderDone.innerHTML="Card Number Should have 16 Digits. Please Try Again!";
    }   

    else if(month.length !== 2 || day.length !== 2 || year.length !== 4){
        orderDone.innerHTML="Date is Wrong. Please Fix the Date!";
    }

    else{
        orderDone.innerHTML="Ordered! Thanks For Shopping from Us!";
    }
});