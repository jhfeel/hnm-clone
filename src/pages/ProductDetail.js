import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={10} sm={6} md={6} lg={6} className="product-img">
            <img src={product?.img} alt="상품 이미지" />
          </Col>
          <Col xs={10} sm={6} md={6} lg={6}>
            <div>{product?.title}</div>
            <div>₩{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
