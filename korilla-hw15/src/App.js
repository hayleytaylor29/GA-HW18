import React, { useState } from 'react';
import Receipts from './components/Receipts';
import receiptData from './components/receiptData';
import Form from './components/Form';
// import Receipt from './components/Receipt';


function App() {
  const [filterName, setFilterName] = useState([]);

  const handleNameSearch = (name) => {
    let userInput = name;
    console.log(userInput);
    const filterReciepts = receiptData.filter(receipt => receipt.person === name);
    setFilterName(filterReciepts)
  };
  const renderReceipt = () => {
    return filterName.length > 0 ? (
      <Receipts receiptData={filterName} />
    ) : (
      <Receipts receiptData={receiptData} />
      );
    };
    return (
      <div>
      <h1>Korilla Receipts</h1>
      <Form handleNameSearch={handleNameSearch} />
      {renderReceipt()}
      </div>
    )
}


// function App() {
//   const [receipts, setReceipts] = useState( [
//     {
//       person: 'Karolin',
//       order: {
//         main: 'Burrito',
//         protein: 'Organic Tofu',
//         rice: 'Purple Rice',
//         sauce: 'Green Crack',
//         toppings: [
//           'Baby Bok Choy', 'Cucumber Kimchi'
//         ],
//         drink: 'Korchata',
//         cost: 22
//       },
//       paid: false
//     },
//     {
//       person: 'Mark',
//       order: {
//         main: 'Rice Bowl',
//         protein: 'Ginger Soy Chix',
//         rice: 'Sticky Rice',
//         sauce: 'Korilla',
//         toppings: [
//           'Yuzu Pickled Sweet Pepper', 'Kale'
//         ],
//         drink: 'Korchata',
//         cost: 19
//       },
//       paid: false
//     },
//     {
//       person: 'Matt',
//       order: {
//         main: 'Salad Bowl',
//         protein: 'Organic Tofu',
//         rice: 'none',
//         sauce: "K'lla",
//         toppings: [
//           'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
//         ],
//         drink: 'Sparkling Blood Orange Soda',
//         cost: 20
//       },
//       paid: true
//     }
//   ]
// )
//   return (
//     <>
      
//       <Receipts receipts={receipts}/>
//     </>
//   );
// }





export default App;