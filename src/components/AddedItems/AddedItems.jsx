// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAddedItems } from "../context/AddedItemsContext";
// import { useTableNum } from "../context/TableNumContext";
// import { icons } from "../../assets/icons/icons";
// import Hambermenuoptions from "../Hambermenuoptions/Hambermenuoptions";
// import Footer from "../Footer/Footer";
// import "./AddedItems.css";
// import Header from "../Header/Header";

// const AddedItems = () => {
//   const { addedItems, removeItem, updateItemCount } = useAddedItems();
//   const { tableNum } = useTableNum();
//   const navigate = useNavigate();
//   const isAddpage = true;

//   const [option, setOption] = useState(false);
//   const handleMenuoption = () => {
//     setOption(true);
//   };

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   const handleItemClick = (id) => {
//     navigate(`/menu/${id}`);
//   };

//   const handleQuantityChange = (id, quantity) => {
//     if (quantity > 0) {
//       updateItemCount(id, quantity);
//     }
//   };

//   // Calculate the total cost with additional checks and logging
//   const totalCost = addedItems.reduce((acc, item) => {
//     // Ensure price is a valid number
//     const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
//     const count = parseInt(item.count, 10);

//     // Log the values to debug
//     console.log(`Item: ${item.name}, Price: ${price}, Count: ${count}`);

//     if (!isNaN(price) && !isNaN(count)) {
//       return acc + (price * count);
//     } else {
//       console.warn(`Invalid price or count for item: ${item.name}`);
//       return acc;
//     }
//   }, 0);

//   // Function to format the data and send it to the backend
//   const sendOrder = async () => {
//     if (!tableNum) {
//       console.warn('Table Number is not defined');
//       return;
//     }

//     const tableNumberInt = parseInt(tableNum, 10);

//     if (isNaN(tableNumberInt)) {
//       console.warn('Invalid Table Number');
//       return;
//     }


//     const dishes = addedItems.map(item => ({
//       name: item.name,
//       quantity: item.count,
//     }));

//     const orderData = {
//       tableNumber: tableNumberInt,
//       dishes,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/sendOrder', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (response.ok) {
//         console.log('Order sent successfully');
//         console.log(orderData);
//       } else {
//         console.error('Failed to send order');
//       }
//     } catch (error) {
//       console.error('Error sending order:', error);
//     }
//   };

//   return (
//     <>
//       <div className="added-items-main">
//         <Header isAddpage={isAddpage} />

//         <div className="added-items">
//           <h3 style={{ textAlign: "center" }}>
//             Call the waiter to tell your order
//           </h3>
//           {addedItems.length === 0 ? (
//             <p>No items added yet...</p>
//           ) : (
//             <ul>
//               {addedItems.map((item, index) => (
//                 <li key={index}>
//                   <div className="added-item">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="added-item-image"
//                       onClick={() => handleItemClick(item.id)}
//                     />
//                     <div
//                       className="added-item-info"
//                       onClick={() => handleItemClick(item.id)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <h3 className="added-item-name">{item.name}</h3>
//                       <p className="added-item-price">{item.price}</p>
//                       <span>Quantity X{item.count}</span>
//                     </div>
//                     <button className="added-item-edit" onClick={() => handleItemClick(item.id)}><img src={icons.edit_icon} alt="" /></button>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="delete-button"
//                     >
//                      <img src={icons.delete_icon} alt="" />
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div className="total-cost">
//             <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
//           </div>
//           <button className="go-back" onClick={handleGoBack}>
//             Go Back
//           </button>
//           <button className="send-order" onClick={sendOrder}>
//             Send Order
//           </button>
//         </div>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// };

// export default AddedItems;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddedItems } from "../context/AddedItemsContext";
import { useTableNum } from "../context/TableNumContext"; // Import the context hook
import { icons } from "../../assets/icons/icons";
import Footer from "../Footer/Footer";
import "./AddedItems.css";
import Header from "../Header/Header";

const AddedItems = () => {
  const { addedItems, removeItem, updateItemCount } = useAddedItems();
  const { tableNum } = useTableNum(); // Use the context to get the table number
  const navigate = useNavigate();
  const isAddpage = true;

  const [option, setOption] = useState(false);
  const handleMenuoption = () => {
    setOption(true);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleItemClick = (id) => {
    navigate(`/menu/${id}`);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      updateItemCount(id, quantity);
    }
  };

  // Calculate the total cost with additional checks and logging
  const totalCost = addedItems.reduce((acc, item) => {
    // Ensure price is a valid number
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    const count = parseInt(item.count, 10);

    // Log the values to debug
    console.log(`Item: ${item.name}, Price: ${price}, Count: ${count}`);

    if (!isNaN(price) && !isNaN(count)) {
      return acc + (price * count);
    } else {
      console.warn(`Invalid price or count for item: ${item.name}`);
      return acc;
    }
  }, 0);

  // Function to format the data and send it to the backend
  const sendOrder = async () => {
    if (!tableNum) {
      console.warn('Table Number is not defined');
      return;
    }

    // Convert tableNum to integer
    const tableNumberInt = parseInt(tableNum, 10);

    if (isNaN(tableNumberInt)) {
      console.warn('Invalid Table Number');
      return;
    }

    const dishes = addedItems.map(item => ({
      name: item.name,
      quantity: item.count,
    }));

    const orderData = {
      tableNumber: tableNumberInt,
      dishes,
    };

    // Log the order data to verify
    console.log("Order data being sent:", orderData);

    try {
      const response = await fetch('http://localhost:5000/sendOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log('Order sent successfully');
      } else {
        console.error('Failed to send order');
      }
    } catch (error) {
      console.error('Error sending order:', error);
    }
  };

  return (
    <>
      <div className="added-items-main">
        <Header isAddpage={isAddpage} />

        <div className="added-items">
          <h3 style={{ textAlign: "center" }}>
            Call the waiter to tell your order
          </h3>
          {addedItems.length === 0 ? (
            <p>No items added yet...</p>
          ) : (
            <ul>
              {addedItems.map((item, index) => (
                <li key={index}>
                  <div className="added-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="added-item-image"
                      onClick={() => handleItemClick(item.id)}
                    />
                    <div
                      className="added-item-info"
                      onClick={() => handleItemClick(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <h3 className="added-item-name">{item.name}</h3>
                      <p className="added-item-price">{item.price}</p>
                      <span>Quantity X{item.count}</span>
                    </div>
                    <button className="added-item-edit" onClick={() => handleItemClick(item.id)}><img src={icons.edit_icon} alt="" /></button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="delete-button"
                    >
                     <img src={icons.delete_icon} alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="total-cost">
            <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
          </div>
          <button className="go-back" onClick={handleGoBack}>
            Go Back
          </button>
          <button className="send-order" onClick={sendOrder}>
            Send Order
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddedItems;
