/* Document.getElementById */
const byId = (id) => document.getElementById(id);

/* Product Container & List Item */
const productDiv = byId("product-container");

const storedProduct = () => {
    const cart = getCart()
    for (const item in cart) {
        showProduct(item)
    }
};

/* --------------------------- Buy Button --------------------------- */
const addProduct = () => {
  const input = byId("product-input");
  const product = input.value;

  // Product in UI
  showProduct(product);
  input.value = "";

  // Store in  Local Storage
  storeLocal(product);
};

/* Function to Show products */
const showProduct = (product) => {
  const list = document.createElement("p");
  list.classList.add("lead");
  list.innerText = product;
  productDiv.appendChild(list);
};

/* Function to Store products */
const storeLocal = (product) => {
  const cart = getCart();

  if (cart[product]) {
    cart[product] = cart[product] + 1;
  } else {
    cart[product] = 1;
  }
  const itemObj = JSON.stringify(cart);
  localStorage.setItem("Cart Container", itemObj);
};

// Get the Cart From LocalStorage
const getCart = () => {
  let cart = localStorage.getItem("Cart Container");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = {};
  }
  return cart;
};

storedProduct();
