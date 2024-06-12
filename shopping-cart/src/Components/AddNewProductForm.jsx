import React, { useState } from "react";

function AddNewProduct({ addProduct }) {
  const [id, setId] = useState(5);
  /* set the ID of the first new product to 5 by default because the JSON sample has 4 products*/
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("available");

  const handleSubmit = (event) => {
    event.preventDefault();
    const floatPrice = parseFloat(price);
    /*convert the price from a string to a float to perform calculations */
    
    const newProduct = { id, title, price: floatPrice, description, image, status };
    addProduct(newProduct);

    /* clear the fields and increase the ID by 1*/
    setId(id + 1);
    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
    setStatus("available");
  }


  return (

    <div className="add_new_form">
      <header>
        <h1>ADD A NEW FISH</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="name_field">
          <label>Name
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="price_field">
          <label>Price
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              pattern="^(?!0+$)\d*(\.\d{0,2})?$" 
              required
            />
          </label>
        </div>
        <div className="status_field">
          <select 
             name="Status"
             value={status}
             onChange={(e) => setStatus(e.target.value)}
             >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <div className="description_field">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="image_field">
          <label>Image</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddNewProduct;