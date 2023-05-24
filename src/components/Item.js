import React, { useState } from "react";

function Item({ name, category }) {
  
  const [isInCart, setIsInCart] = useState(false);

  function handleClick() {
    setIsInCart((isInCart) => !isInCart);
  }
  
  const cartClass = isInCart ? "in-cart" : "";
  const actionClass = isInCart ? "remove" : "add";
  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={actionClass} onClick={handleClick}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
