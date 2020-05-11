import React, { Component } from 'react';
import Title from "../Title";
import CartColumnns from "./CartColumns.js";
import EmptyCart from "./EmptyCart.js";
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default function Cart() {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="ваша" title="корзина" />;
                <CartColumnns />;
                <CartList value={value} />;
                <CartTotals value={value} />;
              </React.Fragment>
            )
          } else {
            return (
              <EmptyCart />
            )
          }
        }}
      </ProductConsumer>
    </section>
  );
}
