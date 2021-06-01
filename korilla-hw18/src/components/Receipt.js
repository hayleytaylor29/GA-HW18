import React from 'react';
// import receiptData from './receiptData';
// import Receipts from './Receipts';
// import Form from './Form';

const Receipt = ({ props }) => {
    return (
        <div className="card">
            <h3>{props.person} </h3>
            <h5>Main: {props.order.main}</h5>
            <h5>Protein: {props.order.protein}</h5>
            <h5>Rice: {props.order.rice}</h5>
            <h5>Sauce: {props.order.sauce}</h5>
            <h5>Toppings: 
                {props.order.toppings.map((topping) => {
                    return (
                        <>
                            <h6>{topping}</h6>
                        </>
                    )
                })}
            </h5>
        </div>
    )
}

export default Receipt;