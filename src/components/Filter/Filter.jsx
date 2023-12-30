import React, { useEffect, useState } from 'react'
import styles from "./Filter.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';


const Filter = ({filteredProducts, setFilteredProducts,productData}) => {
  
  const [category, setCategory] = useState([]);


  const handleCategory = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategory([...category, value]);
     
    } else {
      
      setCategory(category.filter((filtvalue) => filtvalue !== value));
    
    }
  };
  const checkPriceRange = (price) => {
    if (price >= 0 && price <= 500) {
      return "0-500";
    } else if (price >= 500 && price <=3000 ) {
      return "500-3000";
    } 
  };

  const isProductPresent =(product,filterItems)=>{
    const {productName,productRating,productDisPrice} = product

    const priceRange = checkPriceRange(productDisPrice);
    const brandCategory = filterItems
    .filter((filterItem) => filterItem.startsWith("brand_"))
    .map((brand) => brand.substring(6));

    const priceInCategory = filterItems
    .filter((filterItem) => filterItem.startsWith("price_"))
    .map((price) => price.substring(6));

    const ratingInCategory = filterItems
    .filter((filterItem) => filterItem.startsWith("rating_"))
    .map((rating) => rating.substring(7));


    let isPresent = (brandCategory.includes(productName) || brandCategory.length===0) &&
    ( priceInCategory.includes(priceRange) || priceInCategory.length ===0 ) &&
    (ratingInCategory.includes(productRating+"") || ratingInCategory.length ===0)

    return isPresent
  }


  const filterProductsByFilter = (category) => {
    if (category.length === 0) {
      setFilteredProducts(productData);
    } else {
     
      const filtereddata = productData.filter((product) => {
        return isProductPresent(product, category);
      });

      
      setFilteredProducts(filtereddata);
    }
  };


  useEffect(()=>{
     filterProductsByFilter(category)
  },[category])
  // const filterProductByRating =(event)=>{
  //   if(event.target.checked){
  //     let data = productData.filter((ele)=>ele.productRating == event.target.value)
  //     setFilteredProducts(data)
  //   }
  //   else{
  //     let data = productData.filter((ele)=>ele.productRating != event.target.value)
  //     setFilteredProducts(data)
  //   }
  // }



  return (
    <div className={styles.filterWrapper}>
         <h1>Search Results</h1>
        <div className={styles.filterOptions}>
        <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          BRAND

        </AccordionSummary>

        <AccordionDetails>
        <Checkbox  value={"brand_mango"} onChange={(e)=>handleCategory(e)}/> Mango
        <br />
        <Checkbox  value={"brand_h&m"} onChange={(e)=>handleCategory(e)}/> H & M  
        </AccordionDetails>

        </Accordion >


        <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          PRICE RANGE

        </AccordionSummary>

        <AccordionDetails>
        <Checkbox  value="price_0-500" onChange={(e)=>handleCategory(e)}/>  Under 500
        <br />
        <Checkbox value="price_500-3000" onChange={(e)=>handleCategory(e)}/>  500 to 3000
        </AccordionDetails>

        </Accordion>


        <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         RATINGS

        </AccordionSummary>

        <AccordionDetails>
      
        <Checkbox  value={"rating_5"} onChange={(e)=>handleCategory(e)}/> <Rating name="read-only" value={5} readOnly />
        <br />
        <Checkbox  value={"rating_4"} onChange={(e)=>handleCategory(e)}/> <Rating name="read-only" value={4} readOnly /> 
        <br />
        <Checkbox  value={"rating_3"} onChange={(e)=>handleCategory(e)}/> <Rating name="read-only" value={3} readOnly />
        <br />
        <Checkbox  value={"rating_2"} onChange={(e)=>handleCategory(e)}/> <Rating name="read-only" value={2} readOnly />
        <br />
        <Checkbox  value={"rating_1"} onChange={(e)=>handleCategory(e)}/> <Rating name="read-only" value={1} readOnly />
        </AccordionDetails>

        </Accordion>
        </div>

    </div>
  )
}

export default Filter
