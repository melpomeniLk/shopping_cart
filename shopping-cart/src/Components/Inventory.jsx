import React, { useState, useEffect } from "react";

function Inventory({ products, updateProductList  }) {
  const [productsList, setProductsList] = useState(products);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const handleSubmit = (event, productId) => {
    event.preventDefault();
    const updatedProduct = productsList.find((product) => product.id === productId);
    updateProductList(updatedProduct);
  };

  const handleInputChange = (e, productId, field) => {
    let newValue = e.target.value;
    let newProductsList = [...productsList];
    
    if (field === "price") {
      newValue = parseFloat(newValue);
    }

    for( let i=0; i < newProductsList.length; i++) {
      if(newProductsList[i].id === productId) {
        newProductsList[i][field] = newValue;
        break;
      }
    }
    setProductsList(newProductsList);
  };
  
  return (
    <div className="edit_form">
      <header>
        <h1>INVENTORY</h1>
      </header>
      <div className="products_edit">
        {products.map((item) => (
          <form key={item.id} onSubmit={(e) => handleSubmit(e, item.id)}>
            <div className="name_field">
              <label>
              Name
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleInputChange(e, item.id, "title")}
              />
            </label>
            </div>
            <div className="price_field">
            <label>
              Price
              <input
                type="text"
                value={item.price}
                onChange={(e) => handleInputChange(e, item.id, "price")}
              />
            </label>
            </div>
            <div className="status_field">
              <select
                name="Status"
                value={item.status}
                onChange={(e) => handleInputChange(e, item.id, "status")}
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div className="description_field">
            <label>Description</label>
              <textarea
                value={item.description}
                onChange={(e) => handleInputChange(e, item.id, "description")}
              />
            
            </div>
            <div className="image_field">
            <label>Image</label>
              <input
                type="text"
                value={item.image}
                onChange={(e) => handleInputChange(e, item.id, "image")}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
