// Coding the Shopping Cart Slide

import products from './prods.js'
const cart = () => {

    let iconCart = document.querySelector("#shopCart") // The Shopping Cart Icon
    let closeBtn = document.querySelector(".cartTab .close") // The Close Button
    let body = document.querySelector("body")

    let cart = []; // Our Shopping Cart that will contain the Products


    // Event Handlers for the Shopping Card's appearance
    iconCart.addEventListener("click" , () => {
        body.classList.toggle("activeTabCart");
    })

    closeBtn.addEventListener("click" , () => {
        body.classList.toggle("activeTabCart");
    })


    // setProductInCart Function
    const setProductInCart = (idProduct , quantity , position) => {
        if(quantity > 0){ // quantity >= 1
            if(position < 0){ // The product doesn't already exist
                cart.push({
                    product_id : idProduct,
                    quantity : quantity
                })
            }
            else{
                cart[position].quantity = quantity; // Update the Quantity
            }
        }

        // This line saves the current cart array to local storage.
        localStorage.setItem('cart', JSON.stringify(cart)) // Update in the Local Storage

        refreshCartHTML() // Update the UI
    }


    // refreshCartHTML Function
    const refreshCartHTML = () => {
        let listHTML = document.querySelector(".listCart");
        let totalHTML = document.querySelector(".counter");
        let priceH2 = document.querySelector('.totalMoney')

        let totalQuantity = 0; // Counter for the Shopping Cart Icon to sum all the products
        let allTotalPrice = 0; // Counter for the total price of all products.

        listHTML.innerHTML = null; // Remove old Content to put new Content

        if(cart.length === 0){ // Empty Shopping Cart
            let newItem = document.createElement("div")
            newItem.classList.add('empty')
            newItem.innerHTML = 
            `
                <img src="./images/shopping-bag.png" alt="Empty Shopping Bag Icon" id="shopBag">
                <h1 id="emptyDesc">Empty Shopping Bag</h1>  
            `;

            listHTML.appendChild(newItem);
        }
            
        else{ // Displaying each item of the cart in the Shopping cart slide
            cart.forEach(item => {
                totalQuantity = totalQuantity + item.quantity; // To get the Total quantity

                let position = products.findIndex((value) => value.id == item.product_id); // Look for the index of the Product to extract infos
                let info = products[position]; // Extract the Infos of the Product to display it

                allTotalPrice += info.price * item.quantity; // To get the Total Price

                let newItem = document.createElement("div");
                newItem.classList.add("item"); // Add design to the product
                newItem.innerHTML = 
                `
                    <div class="image">
                        <img src="${info.image}" />
                    </div>

                    <div class="name">${info.name}</div>

                    <div class="totalPrice">${(info.price * item.quantity).toLocaleString('de-DE')} DT</div>
                    
                    <div class="quantity">
                        <span class="minus" data-id="${info.id}">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-id="${info.id}">+</span>                
                    </div>

                    <div class="delBtn" data-id="${info.id}">x</div>
                `;

                listHTML.appendChild(newItem); 
            })
        }
        
        // Update the total Price
        priceH2.innerText = `${allTotalPrice.toLocaleString('de-DE')} DT` // format it (for ex: 93.000 DT)
        
        // Update the Total Quantity
        totalHTML.innerText = totalQuantity;
    }

    // delProductButton
    const delProduct = (idProduct) => {
        let position = cart.findIndex((value) => value.product_id == idProduct)
        cart.splice(position , 1) // Deleting the Product
        refreshCartHTML() 
        localStorage.setItem('cart', JSON.stringify(cart)) // Update in the Local Storage       
    }

    // Event Click on the Buttons   
    document.addEventListener("click", (event) => {
        let buttonClick = event.target; // The clicked Button
        let idProduct = buttonClick.dataset.id; // data-id to track which button is clicked

        // Check if the Product is already there or not by looking for his position in the cart
        let position = cart.findIndex((value) => value.product_id === idProduct) // If it already exists, the position >=0, otherwise < 0
        let quantity = position < 0 ? 0: cart[position].quantity; // Initializing the quantity

        if(buttonClick.classList.contains('addCart') || buttonClick.classList.contains('plus')){
            quantity ++;
            setProductInCart(idProduct , quantity , position);
        }
        else if(buttonClick.classList.contains('minus')){
            quantity --;
            setProductInCart(idProduct , quantity , position);
        }
        else if(buttonClick.classList.contains('delBtn')){
            delProduct(idProduct);
        }
    })

    /* This code gets the stored cart back when the user visits the site again, and uses JSON.parse() to turn it back into an array */
    const initApp = () => {
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        refreshCartHTML();
    }
    initApp()
}

export default cart;  