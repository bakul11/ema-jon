import React from 'react';
import './ShopDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShopDetails = (props) => {

    // console.log(props);
    const { name, price, img, stock, seller, star } = props.singleLaptop;
    return (
        <section className="shop-section container mb-3">
            <div className="row">
                <div className="col-md-3">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-9">
                    <h5 className='pt-3'>{name}</h5>
                    <p><strong>Price :</strong> {price}</p>
                    <p><strong>Stock :</strong> {stock}</p>
                    <p><strong>Seller :</strong> {seller}</p>
                    <p><strong>Rating :</strong> {star}</p>
                    <button type="button" onClick={() => props.handleAddProduct(props.singleLaptop)} className='btn btn-success fw-bold mt-2'><FontAwesomeIcon icon={faShoppingCart} className='me-2' />Add to Card</button>
                </div>
            </div>
        </section>
    );
};

export default ShopDetails;