import React from 'react';
import Receipt from './Receipt';
// import receiptData from './receiptData';

const Receipts = ({receiptData}) => {
    return (
        <div className="body">
            {receiptData.map((receipt, index)=>{
                return(
                        // {receipts.forEach(receipt => {
                        //     if {paid === true}
                        // });}
                        
                        <Receipt 
                            number={receipt.id}
                            name={receipt.person}
                            order={receipt.order}
                            paid='false'
                            key={index}
                        />
                        
                        )
                }
    )}
        </div>
    )}


export default Receipts
