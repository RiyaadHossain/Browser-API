// Global Variables
const productInput = document.getElementById('product-input')
const proContainer = document.getElementById('product-container')

 
const addProduct = () => {
   
    //Add Product to cart
    addtoCart(productInput.value)

    productInput.value = ''
}

// Display Product in the UI
const displayProduct = (pName) => {
    const item = document.createElement('p')
    item.classList.add('icon')
    item.classList.add('fs-4')
    item.innerText = pName
    proContainer.appendChild(item)
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj
}

const addtoCart = (item) => {
    const cart = getCart()
    if (cart[item] = 1) {
        cart[item] += 1
    } else {
        cart[item] = 1
    }

    for (const x in cart) {
        displayProduct(x)
    }
    // Display Product in the UI
    // displayProduct(item)

    const string = JSON.stringify(cart)
    localStorage.setItem('cart', string)

    
}