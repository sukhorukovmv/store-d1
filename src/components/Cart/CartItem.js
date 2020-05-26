import React from 'react';

export default function CartItem({ product, productCount, value }) {
    const { id, title, img, price, total } = product;
    const { cartIncrementItem, cartDecrementItem, cartRemoveItem } = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price :</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => cartDecrementItem(id)}> - </span>
                        <span className="btn btn-black mx-1">{productCount}</span>
                        <span className="btn btn-black mx-1" onClick={() => cartIncrementItem(id)}> + </span>
                    </div>
                </div>
            </div>
            {/**/}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => cartRemoveItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : (<i className="fas fa-cart-plus" />) {total}</strong>
            </div>
        </div>
    )
}