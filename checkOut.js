import products from './prods.js'; // reuse the same product list

/* Coding the Final Order Part */
 
// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const container = document.querySelector('.checkoutCart');
const totalElement = document.querySelector('.totalMoney');

let total = 0;

cart.forEach(item => {
    const product = products.find(p => p.id == item.product_id);

    if (product) {
      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      itemDiv.innerHTML =
      `
        <div class="image">
            <img src="${product.image}" />
        </div>

        <div class="name">${product.name}</div>

        <div class="quantity">
            × ${item.quantity}               
        </div>

        <div class="totalPrice">${itemTotal.toLocaleString('de-DE')} DT</div>          
        `;

        container.appendChild(itemDiv);
    }
});

totalElement.innerText = `${total.toLocaleString('de-DE')} DT`;

// -----------------------------------------------------------------------------------------------------------------------------------
/* Coding the Checkout Validation Part */

// Helper function to test input with regex
function testRegex(input, regex, messageParagraph, message) {
    const value = input.value.trim();
    const isValid = regex.test(value);

    input.style.border = isValid ? "1px solid #f4acb7" : "2px solid #ff006e";
    messageParagraph.innerText = isValid ? "" : message;
    messageParagraph.style.display = isValid ? "none" : "block";

    return isValid;
}

// Helper to check if any value is empty
function isEmpty(...values) {
    return values.some(value => value.trim() === ''); // .some(...) : returns true if any element in the array passes the test inside the callback.
}

// Show final message
function showFinalMessage(success, message = "Thanks for Ordering from Us!") {
    const finalMsg = document.querySelector(".finalMessage");
    finalMsg.style.display = success ? "block" : "none";
    finalMsg.textContent = success ? message : "";

    if(success){
        localStorage.removeItem("cart"); // Clear the Cart

        // Redirect to the HomePage after 3 seconds
        setTimeout(() => {
            window.location.href = "./home.html"; 
        }, 3000);
    }
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const cardDetails = document.querySelector(".cardDetails");

    let detailsDisplayed = false;

    // Handle radio button click
    document.addEventListener("click", (event) => {
        const target = event.target;

        if (target.id === "cardPayment") {
            cardDetails.style.display = "flex";
            detailsDisplayed = true;
        } 
        else if (target.id === "delieverPayment") {
            cardDetails.style.display = "none";
            detailsDisplayed = false;
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Basic Inputs
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phoneNumber");
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const cardNameInput = document.getElementById("cardName");

        // Radio Buttons
        const cardRadio = document.getElementById("cardPayment");
        const deliverRadio = document.getElementById("delieverPayment");
        const radioClicked = cardRadio.checked || deliverRadio.checked;

        // Card Details
        const cardNumberInput = document.getElementById("cardNumber");
        const expirationDateInput = document.getElementById("expirationDate");
        const securityCodeInput = document.getElementById("securityCode");

        // Error Paragraphs
        const pEmail = document.querySelector(".messageEmail");
        const pPhone = document.querySelector(".messagePhone");
        const pCard = document.querySelector(".messageCardNumber");
        const pDate = document.querySelector(".messageExpirationDate");
        const pCode = document.querySelector(".messageSecurityCode");
        const pCardName = document.querySelector(".messageCardName");
        const finalMsg = document.querySelector(".finalMessage");

        // Initializing the Error Paragraphs
        pEmail.textContent = ''
        pPhone.textContent = ''
        pCard.textContent = ''
        pDate.textContent = ''
        pCode.textContent = ''
        pCardName.textContent = ''
        finalMsg.textContent = ''

        // Validate Required Fields

        if (isEmpty(phoneInput.value, firstName, lastName, address)) {
            finalMsg.style.display = "block";
            finalMsg.textContent = "There are empty fields. Please fill all the fields!";
            return;
        }

        if (!radioClicked) {
            showFinalMessage(false);
            finalMsg.style.display="block";
            finalMsg.textContent = "Please select a payment method!"
            return;
        }

        // Validation
        const validEmail = testRegex(emailInput, /^[^@]+@[^@]+\.[^@]+$/, pEmail, "Invalid Email Format!");
        const validPhone = testRegex(phoneInput, /^(\d{8}|\+216\s?\d{8})$/, pPhone, "Invalid Phone Number!");

        if (detailsDisplayed) {
            const validCard = testRegex(cardNumberInput, /^\d{13,19}$/, pCard, "Invalid Card Number!");
            const validExp = testRegex(expirationDateInput, /^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/, pDate, "Invalid Expiration Date!");
            const validCode = testRegex(securityCodeInput, /^\d{3,4}$/, pCode, "Invalid Security Code");
            const validCardName = testRegex(cardNameInput, /^.+$/, pCardName, "The Name Card is Missing!");

            const allValid = validEmail && validPhone && validCard && validExp && validCode && validCardName;
            showFinalMessage(allValid);
        } 
        else {
            const allValid = validEmail && validPhone;
            showFinalMessage(allValid);
        }
    });
});
