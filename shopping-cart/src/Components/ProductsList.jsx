import React from "react";

const ProductsList = ({products ,  addToCart }) => {

    return (
        <div className="products_section">
            <header>
                <h1>FISH STORE</h1>
                <h3>OUR PRODUCTS LIST</h3>
            </header>
            <div className="products_list">{products.map((item) => (
                <div className="product " key={item.id}>
                <img src={item.image} alt="{item.title}"/>
                <h3>{item.title}</h3>
                <span>$ {(item.price).toFixed(2)}</span>
                <p>{item.description}</p>
                <button className={item.status} onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
            ))} </div>
        </div>
    );
};

export default ProductsList;