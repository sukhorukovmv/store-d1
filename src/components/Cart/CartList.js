import React from "react";
import CartItem from "./CartItem";
import { storeProducts } from "../../data";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map((cartItem) => {
        let product = storeProducts.find(
          (product) => product.id === cartItem.productId
        );
        return (
          <CartItem
            product={product}
            productCount={cartItem.productCount}
            value={value}
          />
        );
      })}
    </div>
  );
}
