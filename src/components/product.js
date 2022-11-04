import React from "react";
import Loader from "./Loader";
import { useAxiosGet } from "./httpRequests";
import "./product.css";
import { Button } from '@mantine/core';

function Product() {
  // const { id } = useParams()
  // Create your own Mock API: https://mockapi.io/
  const url = `https://api.catboys.com/img`;

  let product = useAxiosGet(url);
  console.log(product);
  let content = null;

  if (product.error) {
    content = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please remember to create your own{" "}
          
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div id="container">
        <img src={product.data.url} alt={product.data.name} />
        <p>$200</p>
        <Button variant="outline" color="cyan" radius="md">
      Buy
    </Button>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
