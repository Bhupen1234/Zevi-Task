import React, { useState } from 'react'
import styles from "./ProductCard.module.css"
import Rating from '@mui/material/Rating';
import { faker } from "@faker-js/faker";
import {ReactComponent as Liked } from "../../assets/RedHeart.svg"
import {ReactComponent as NotLiked }  from "../../assets/WhiteHeart.svg"
import { useNavigate } from 'react-router-dom';
const ProductCard = ({data}) => {

    const [isLiked ,setIsLiked ]= useState(false)
    
   
  return (
    <div className={styles.cardWrapper}  >
      <div className={styles.cardImage}>
        <img src={data.productImg} alt={data.productName}/>
        <div className={styles.likeButton}>
            {isLiked ? <Liked onClick={()=>setIsLiked((prevState)=>!prevState)}/> : <NotLiked onClick={()=>setIsLiked((prevState)=>!prevState)}/> }
        </div>
        <div className={styles.viewProduct}>
            <h3>View Product</h3>
        </div>
      </div>
      <p >{data.productName}</p>
      
      <span style={{textDecoration:"line-through",color:"rgba(0, 0, 0, 0.40)" ,fontWeight:"300"}}> Rs.{data.productOrgPrice}</span>
    
      <span style={{color:" #6D84FF",fontWeight:"600"}}> &nbsp;Rs. {data.productDisPrice}</span>
      <br />
      <Rating name="read-only" value={data.productRating} readOnly />
   
      
    </div>
  )
}

export default ProductCard
