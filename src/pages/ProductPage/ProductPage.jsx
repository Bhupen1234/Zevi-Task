import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ReactComponent as Search } from "../../assets/search.svg";
import { Grid, Stack, TextField } from "@mui/material";
import { fetchProducts } from "../../FakerData/FakerData";
import Filter from "../../components/Filter/Filter";
const ProductPage = () => {

  const [productData ,setProductData]= useState([]);
  useEffect(()=>{
setProductData(fetchProducts());
  },[])
  return (
    <div>
      <Grid container>
        <Grid item  sm={3}
          sx={{ padding: "22px" }}>
           {
            <Filter/>
           }
        </Grid>

        <Grid item  sm={9} sx={{ padding: "22px" }}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <TextField
              size="small"
              InputProps={{
                className: "search",
                endAdornment: <Search color="primary" />,
              }}
              placeholder="Search for Products"
              name="search"
              fullWidth
            />
          </Stack>
          {
            productData.length!==0 &&(
          
          <Grid container>
            {productData.map((data)=>{
              return(
                <Grid item  md={4}
                sm={6}
                xs={12}
                key={data.productId}
                sx={{ padding: "22px" }}>

                  <ProductCard data={data}/>
                </Grid>
              )
            })}

          </Grid>
          )
          }

        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
