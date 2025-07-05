// Coding the Shopping Cart Slide

const cart = () => {
    let iconCart = document.querySelector("#shopCart")
    let closeBtn = document.querySelector(".cartTab .close")
    let body = document.querySelector("body")

    iconCart.addEventListener("click" , () => {
        body.classList.toggle("activeTabCart");
    })

    closeBtn.addEventListener("click" , () => {
        body.classList.toggle("activeTabCart");
    })
}

export default cart; 