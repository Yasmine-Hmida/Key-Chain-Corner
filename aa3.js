import products from './prods.js'; // same product list

const checkoutCart = () => {
    const cartContainer = document.querySelector(".checkoutCart"); // a div you'll make in the HTML
    const totalElement = document.querySelector(".totalMoney");

    let cart = []; // Our Shopping Cart

    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart")); // Get the Items already ordered
    }

    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
    } 
    else {
        cart.forEach((item) => {

            let product = products.find(p => p.id == item.product_id);

            if (product) {
                let itemTotal = product.price * item.quantity;
                totalPrice += itemTotal;

                const productDiv = document.createElement("div");
                productDiv.classList.add("item");
                productDiv

                productDiv.innerHTML = 
                `
                    <div class="image">
                        <img src="${product.image}" />
                    </div>

                    <div class="name">${product.name}</div>

                    <div class="totalPrice">${itemTotal.toLocaleString("de-DE")} DT</div>
                    
                    <div class="quantity">
                        <span class="minus" data-id="${product.id}">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-id="${product.id}">+</span>                
                    </div>

                    <div class="delBtn" data-id="${product.id}">x</div>
                `;

                cartContainer.appendChild(productDiv);
            }
        });

        totalElement.innerText = `${totalPrice.toLocaleString('de-DE')} DT`;
    }
};

checkoutCart();
