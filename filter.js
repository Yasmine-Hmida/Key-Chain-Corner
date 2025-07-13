import prods from './prods.js'

const filter = () => {
 
    let indicator = document.querySelector('.indicator').children; /* List of options of catagories */
    let li = document.querySelector('.items').children; /* Our keychain items */
    
    for(let i = 0 ; i <indicator.length ; i++){
        indicator[i].onclick = function(){

            for(let x = 0 ; x < indicator.length ; x++){ // Remove the class 'active' from all the catagories
                indicator[x].classList.remove('active')
            }

            this.classList.add('active') // Add the class 'active' to the clicked catagory
            const catagory = this.getAttribute("data-filter") // Get the Catagory wanted

            for(let z = 0 ; z < li.length ; z++){ // Go through the Items
                li[z].style.transform = 'scale(0)' // Make all the Items disappear
                
                setTimeout(() => {
                    li[z].style.display = 'none'
                }, 500)

                // Filter which items will be shown
                if((catagory == prods[z]["catagory"]) || catagory == 'All'){
                    li[z].style.transform = 'scale(1)'
                
                    setTimeout(() => {
                        li[z].style.display = 'block'
                    }, 500)
                }
            }
        }
    }

}

export default filter;