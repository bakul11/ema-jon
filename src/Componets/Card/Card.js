import React from 'react';

const Card = (props) => {
    console.log(props);
    const cart = props.singleCard;

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const productRate = cart[i];
        total = total + productRate.price;
    }

    let totalFixed = total.toFixed(2);

    let shipping = 0;
    if (total > 50) {
        shipping = 2;
    }
    else if (total > 100) {
        shipping = 4;
    }
    else if (total > 300) {
        shipping = 0;
    }
    else {
        shipping = 0;
    }


    return (
        <div>
            <h5 className='text-uppercase text-danger text-center'>Order Summary</h5>
            <h5 className='text-center text-primary'>========================</h5>
            <h5>Items Add : {cart.length}</h5>
            <h5>Shipping Cast : {shipping}</h5>
            <h5>Total Price : {totalFixed + shipping}</h5>
            <button type="button" className='btn btn-success'>Checkout Now</button>
        </div>
    );
};

export default Card;