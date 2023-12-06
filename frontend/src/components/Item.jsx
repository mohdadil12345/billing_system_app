import React from "react";
import { useState } from "react";

function Item() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");

  const form_submit = (e) => {
    e.preventDefault();
    console.log(name, price);

    let obj = {
      name,
      price,
    };
    console.log(obj);

    postdata(obj);
  };

  const postdata = async (obj) => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(obj);

    let res = await fetch("http://localhost:8080/items/add", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await res.json();
    console.log(data);
  };







  return (
    <div className="contain">
        <h2>Add Items</h2>
      <form id="add_form" onSubmit={(e) => form_submit(e)}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Item;
