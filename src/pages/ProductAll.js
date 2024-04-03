import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { productAction } from "../redux/actions/productAction";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";

    // dispatch(productAction.getProducts(searchQuery));
    dispatch(fetchProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col key={menu.id} xs={10} sm={6} md={4} lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
