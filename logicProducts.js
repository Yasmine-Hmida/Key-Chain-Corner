// Coding the Logic Part of Loading and putting everything together

import cart from './template.js'
import prods from './prods.js'

let app = document.getElementById('app') /* Template file content */
let temporaryContent = document.getElementById('temporaryContent') /* Content that changes */

// Load template file
const loadTemplate = () => {
    fetch('./template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;

        let contentTab = document.getElementById('contentTab') /* Replacement of the Changing Content */
        contentTab.innerHTML = temporaryContent.innerHTML
        temporaryContent.innerHTML = null;
        cart()
        initProds() // Load Products
    })
}
loadTemplate()

const initProds = () => {

    let listProduct = document.querySelector(".listProducts")
    listProduct.classList.add("items")

    prods.forEach((prod) => {
        let newProd = document.createElement('div')
        newProd.classList.add("item")

        newProd.innerHTML = 
        `
            <img src="${prod.image}"/>
            <h2>${prod.name}</h2>
            <div class="price">${(prod.price).toLocaleString('de-DE')} DT</div>
            <button class="addCart" data-id="${prod.id}">Buy</button>
        `; // data-id to track which button is clicked

        listProduct.appendChild(newProd)
    })
}       