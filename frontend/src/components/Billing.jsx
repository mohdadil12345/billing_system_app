import axios from "axios";
import React, { useEffect, useState } from "react";

function Billing() {
  const [bill, setBill] = useState([]);
  const [postBill, setPostBill] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  const postdata = async (quantity, item) => {
    try {
      const response = await axios.post("http://localhost:8080/bills/add", {
        quantity,
        item,
      });
      console.log("res", response.data);
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const formSubmit = () => {
    postdata(quantity, item);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/items");
      const data = await response.json();
      setBill(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const fetchBills = async () => {
    try {
      const response = await fetch("http://localhost:8080/bills");
      const data = await response.json();
      setPostBill(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchBills();
  }, []);

  return (
    <div>
      <select onChange={(e) => setItem(e.target.value)}>
        {bill.length > 0 &&
          bill.map((ele) => (
            <option key={ele._id} value={ele._id}>
              {ele.name}
            </option>
          ))}
      </select>
      <br />
      <input
        type="text"
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="quantity"
      />
      <br />
      <button onClick={formSubmit}>Add</button>

      <div>
        {postBill.map((e) => (
          <div key={e._id}>
            {e.items.map((item) => (
              <div key={item.item._id}>
                <h3>name : {bill.find((e) => e._id === item.item._id)?.name}</h3>
                <h5>price : {bill.find((e) => e._id === item.item._id)?.price}</h5>
                <p>quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;
