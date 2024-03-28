import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const naviagte = useNavigate();

  const showDetail = () => {
    naviagte(`/product/${item.id}`);
  };

  return (
    <div className="ProductCard" onClick={showDetail}>
      <img src={item?.img} alt="상품 이미지" />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
