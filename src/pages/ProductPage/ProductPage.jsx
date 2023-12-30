import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ReactComponent as Search } from "../../assets/search.svg";
import { Box, Grid, Stack, TextField,Typography } from "@mui/material";
import { fetchProducts } from "../../FakerData/FakerData";
import Filter from "../../components/Filter/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {  SentimentDissatisfied } from "@mui/icons-material";

import {
  Drawer,
  
} from "@mui/material";
const ProductPage = () => {

  const [productData ,setProductData]= useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);



  const filterProductsBySearch = (keys) => {
    let products = productData
    if (keys.trim(" ") === "") {
      setFilteredProducts(products);
    } else {
      const searchkeys = keys.toLowerCase().split(" ");

      const filtereddata = products.filter((product) => {
        return searchkeys.some((key) =>
        product.productName.toLowerCase().includes(key)
      );

      });

      console.log(filtereddata)

      setFilteredProducts(filtereddata);
    }
  };


  const toggleDrawer = (open) => {
  
    setOpenDrawer(open);
  };

  useEffect(()=>{
setProductData(fetchProducts());
setFilteredProducts(fetchProducts())
  },[])
  return (
    <div>
      <Grid container >
        <Grid item  sm={3}
          sx={{ padding: "22px" }} className={styles.filterBackground}>
          
           {
            <>
            <Filter filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} productData={productData}/>

            <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => toggleDrawer(false)}
            sx={{ display: { xs: "block", sm: "none", md: "none" } }}
           
          >
            <Filter filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} productData={productData}/>
          </Drawer>
          </>
           }
        </Grid>

        <Grid item  sm={9} sx={{ padding: "22px" }} style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          <Stack direction="row" justifyContent="center" alignItems="center" className={styles.searchField}>
            <TextField
              size="small"
              
              InputProps={{
                className: "search",
                endAdornment: <Search color="primary" />,
              }}
              onChange={(e)=>filterProductsBySearch(e.target.value)}

              placeholder="Search for Products"
              name="search"
              fullWidth
              
            />

<Box
              sx={{ display: { xs: "block", sm: "none", md: "none" } }}
             
            >
              <FilterAltIcon
                fontSize="large"
                color="primary"
                onClick={() => toggleDrawer(true)}
              />
            </Box>
            
          </Stack>
          {
            filteredProducts.length!==0 ? (
          
          <Grid container className={styles.productContainer}>
            {filteredProducts.map((data)=>{
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

          :
          (
            <>
            <Box className={styles.loading}>
              <SentimentDissatisfied />
              <Typography sx={{ fontWeight: "bold" }}>
                No products found
              </Typography>
            </Box>
          </>
          )
          }

        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
