import products from './prods.js'; // reuse the same product list

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



