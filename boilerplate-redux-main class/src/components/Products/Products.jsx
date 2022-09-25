import React from "react";
import Product from "./Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/product.actions";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      {data.map((prod) => (
        <Product
          key={prod.id}
          name={prod.name}
          description={prod.description}
          productid={prod.id}
        />
      ))}
    </div>
  );
};

export default Products;
