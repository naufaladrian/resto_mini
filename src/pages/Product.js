import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Data from "../data.json";
import ProductCard from "../component/ProductCard";

export default function Product() {
  const [change, setChange] = useState("");
  console.log(change);
  return (
    <main className="container mt-5">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={(e) => setChange(e.target.value)}
        />
      </InputGroup>
      <div
        className="mb-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {Data.filter((e) => e.name.toLocaleLowerCase().includes(change)).map(
          (e) => {
            return (
              <ProductCard
                image={e.image}
                name={e.name}
                description={e.description}
                price={e.price}
                keys={e.id}
              />
            );
          }
        )}
      </div>
      <hr />
    </main>
  );
}
