import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="ProductCard">
      <img src={item?.img} alt="상품 이미지" />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
