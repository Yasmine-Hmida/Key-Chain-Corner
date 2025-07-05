// Coding the Logic Part of Loading and putting everything together

import cart from './template.js'
import initSlider from './home.js'; // import the slider logic

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
        initSlider()
        // initApp() // perform function related to the current page
    })
}
loadTemplate()

// const initApp = () => {
//     // Load List of Products

// } 