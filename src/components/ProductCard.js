import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const naviagte = useNavigate();

  const showDetail = () => {
    naviagte(`/product/${item.id}`);
  };

  return (
    <div className="ProductCard clickable" onClick={showDetail}>
      <img src={item?.img} alt="상품 이미지" />
      <div className="product-text">
        {item?.choice === true ? "Conscious choice" : ""}
      </div>
      <div className="product-text">{item?.title}</div>
      <div className="product-text">₩{item?.price}</div>
      <div className="product-text">{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
