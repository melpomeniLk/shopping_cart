import React, {useState, useEffect } from "react";

const Cart = ({cart}) => {
    const [cartTotal, setCartTotal] = useState(0);

    /* calculate the total price of cart as soon as a change is made in products of cart*/ 
    useEffect(() => {
        const totalPrice = () => {
            let total = 0;
            cart.forEach((item) => {
                total += item.price * item.quantity
            })
            setCartTotal(total.toFixed(2));
        }
        totalPrice();
    }, [cart]);

    return (
        <div className="cart_section">
            <header>
                <h1>SHOPPING CART</h1>
            </header>
            <div className="cart_list">{cart.map((item, index) => (
                <div key={index} className="cart_product">
                    <p>{item.quantity} x {item.title}</p>
                    <p>$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
            ))} </div>
            <div>
                <h4>Total $ {cartTotal} </h4>
            </div>
        </div>
    );
};

export default Cart;