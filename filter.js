import prods from './prods.js'

const filter = () => {

    let indicator = document.querySelector('.indicator').children; /* List of options of catagories */
    let li = document.querySelector('.items').children; /* Our keychain items */
    
    for(let i = 0 ; i <indicator.length ; i++){
        indicator[i].onclick = function(){

            for(let x = 0 ; x < indicator.length ; x++){
                indicator[x].classList.remove('active')
            }
            this.classList.add('active')
            const displayItems = this.getAttribute("data-filter") // Get the Catagory wanted

            for(let z = 0 ; z < li.length ; z++){
                li[z].style.transform = 'scale(0)' // Make the Items disappear
                
                setTimeout(() => {
                    li[z].style.display = 'none'
                }, 500)

                if((displayItems == prods[z]["catagory"]) || displayItems == 'All'){
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