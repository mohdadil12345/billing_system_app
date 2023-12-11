import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "./Item";

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
      console.log("data", data);
      setBill(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const fetchBills = async () => {
    try {
      const response = await fetch("http://localhost:8080/bills");
      const data = await response.json();
      // console.log("bills", data)
      setPostBill(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchBills();
  }, []);

  const plus_btn = () => {
    alert("adil");
  };

  return (
    <div className="container">
      <div className="select_tag">
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
        <div className="btn">
          <button onClick={formSubmit}>Add</button>
        </div>
      </div>

      <div className="main_cont">
        <h2>New Bill</h2>
        {postBill.map((e) => (
          <div className="cont_2" key={e._id}>
            {e.items.map((item) => (
              <div className="item" key={item.item._id}>
                <div className="info">
                  <h3>name : {bill.find((e) => e._id === item._id)?.name}</h3>
                  <h5>price : {bill.find((e) => e._id === item._id)?.price}</h5>
                </div>
                <p>quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        ))}

        <div onClick={plus_btn} className="plus">
          +
        </div>
        <div className="total">
          <h3>Amount: Rs. 200</h3>
          <h3>Total Items: {postBill.length}</h3>

        </div>
      </div>
    </div>
  );
}

export default Billing;
