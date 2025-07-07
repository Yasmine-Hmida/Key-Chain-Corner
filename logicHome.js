// Coding the Logic Part of Loading and putting everything together of the Home Page

import cart from './template.js' // Import the Shopping Cart Slide's logic
import initSlider from './home.js'; // Import the slider image's logic

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
        
        initSlider()
        cart()
        // initApp() // perform function related to the current page
    })
}
loadTemplate()

// const initApp = () => {
//     // Load List of Products

// } 