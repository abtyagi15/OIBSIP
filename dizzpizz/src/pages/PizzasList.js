import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrFormEdit } from "react-icons/gr";

const PizzasList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4500/abtyagi15/v1/getpizzas", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data = data.data;
        data = Object.entries(data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  const pizzaList = data.map((entry) => {
    return (
      <tr>
        <th>{entry[1].pizzaName}</th>
        <th>
          {entry[1].smallPizzaPrice} <br />
          {entry[1].mediumPizzaPrice}
          <br />
          {entry[1].largePizzaPrice}
        </th>
        <th>{entry[1].category}</th>
        <th className="flex flex-col items-center justify-center h-full">
          <RiDeleteBinLine />
          <GrFormEdit />
        </th>
      </tr>
    );
  });

  return (
    <div>
      <h1>Pizzas List</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{pizzaList}</tbody>
        </table>
    </div>
  );
};

export default PizzasList;
