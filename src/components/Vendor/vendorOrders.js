import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    try {
      const responsePromise = axios.post(
        `${config.backendUrl}/api/Vendors/myorders`,
        {
          vendorId: 1, //TODO: Replace with actual vendor ID
        }
      );

      responsePromise.then((response) => {
        if (response.status === 200) {
          setOrders(response.data);
        } else {
          throw new Error("Failed while getting vendor orders!");
        }
      });
    } catch (error) {
      //TODO: Handle fetch orders error
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <h1>My Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            Order ID: {order.orderId} - Customer: {order.customerName} - Tiffin:{" "}
            {order.tiffinName} - Quantity: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyOrders;
