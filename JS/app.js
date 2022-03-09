// Global Variables
const productInput = document.getElementById('product-input')
const proContainer = document.getElementById('product-container')

// Add Product Button 
const addProduct = () => {
    const item = document.createElement('p')
    item.classList.add('icon')
    item.classList.add('fs-4')
    item.innerText = productInput.value
    proContainer.appendChild(item)
    productInput.value = ''
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