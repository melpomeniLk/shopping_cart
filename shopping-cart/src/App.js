import React, { useState } from 'react';
import './App.css';
import ProductsList from './Components/ProductsList.jsx'
import PRODUCTS from "./Products.js";
import Cart from './Components/Cart'
import AddNewProduct from './Components/AddNewProductForm.jsx'
import Inventory from './Components/Inventory.jsx'

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(PRODUCTS);

  const addToCart = product => {
    let newCart = [...cart];
    let exists = false;

    /* searching if product already exists in the cart to increase quantity
    otherwise set quantity to 1 and add product to cart*/
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === product.id) {
        newCart[i].quantity += 1; 
        exists = true;
        break; 
      }
    }
    if (!exists) {
      product.quantity = 1;
      newCart.push(product);
    } 
    setCart(newCart); 
  };

  const addProduct = (newProduct) =>{
    setProducts([...products, newProduct]);
  }

  const updateProductList = (updatedProduct) => {
    let newProductList = [...products];
    const index = newProductList.findIndex((product) => product.id === updatedProduct.id);
    
    /* find the product that will be updated and update the product list*/
    if (index !== -1) {
      newProductList[index] = updatedProduct;
      setProducts(newProductList);
    }

    let newCart = [...cart];
    
    /* searching if the updated product is on the cart */
    /* if it exists make the update, if it exists and the status is unavailble remove form the cart */
    for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].id === updatedProduct.id) {
          if (updatedProduct.status === "available") {
            newCart[i] = { ...newCart[i], ...updatedProduct };            
          } else {
            newCart.splice(i, 1);
          }
          break;
        }
      }
      setCart(newCart);
  }

  return (
    <div className="App">
      <ProductsList products={products} addToCart={addToCart}/>
      <Cart cart={cart}/>
      <div className="inventory_section">
        <Inventory products={products} updateProductList={updateProductList} />
        <AddNewProduct addProduct ={addProduct} />
      </div>
    </div>
  );
}

export default App;
