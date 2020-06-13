import React from "react";
import Product from "./Product";
import Title from "./Title";
//import { storeProduct, storeProducts } from "../data";
import { ProductConsumer } from "../context";
import ProductSearchName from "./ProductSearchName";

export default function ProductList(props) {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="Наши" title="товары" />
          <ProductSearchName className="row" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      handleDetail={value.handleDetail}
                    />
                  );
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
