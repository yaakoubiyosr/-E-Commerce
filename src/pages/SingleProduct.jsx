import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products";

function SingleProduct() {
  const { item } = useParams();
  const singleProduct = products.find((prod) => prod.id == item);
  console.log(singleProduct);

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <p>{singleProduct.title}</p>
        <img src={singleProduct.image} alt={singleProduct.title} />
        <h2>{singleProduct.description}</h2>
      </div>
    </div>
  );
}

export default SingleProduct;
