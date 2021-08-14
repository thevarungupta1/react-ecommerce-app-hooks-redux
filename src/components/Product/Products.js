import React, { useState, useEffect } from "react";
import {Grid} from "@material-ui/core";
import Product from './Product';
import axios from 'axios';

// const products = [
//   { id: 1, name: "Laptop", description: "Laptop description" , image:'https://m.media-amazon.com/images/I/41sGASjc4-L.jpg', price: 1000},
//   { id: 2, name: "Mobile", description: "Mobile description", image: 'https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg', price: 2000 }
// ];

const Products = () => {

  const [ products, setProducts ] = useState([]);

  const fetchProducts  = async () => {
   const { data } = await axios.get('http://apolis-grocery.herokuapp.com/api/products')
   
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products)

  return (
    <main>
      <Grid container justify="center" spacing={4}>
        
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
