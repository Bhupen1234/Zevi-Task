import React, { useEffect, useState } from 'react'
import HomeBackground from "../../assets/HomeBackground.png"
import styles from "./HomePage.module.css"
import { ReactComponent as Search } from "../../assets/search.svg"
import { fetchLatestTrendData, fetchPopularSuggestionData } from '../../FakerData/FakerData'
import SuggestionBox from '../../components/SuggestionBox/SuggestionBox'
import {ReactComponent as Logo} from "../../assets/Zevi-Logo.svg"
const HomePage = () => {
   const [showSuggestionBox,setShowSuggestionBox] = useState(false)
   const [ latestTrendData,setLatestTrendData] = useState([]);
   const [popularSuggestionData,setPopularSuggestionData] = useState([])
   const onInputClick =()=>{
          setShowSuggestionBox((prevState)=>!prevState)
   }

   useEffect(()=>{
     setLatestTrendData(fetchLatestTrendData())
     setPopularSuggestionData(fetchPopularSuggestionData());
   },[])

  
  return (
    <div className={styles.wrapper}>
         <div className={styles.Logo}>
            <Logo/>
         </div>
      
        <form className={styles.searchBar}>
            <input type="text" placeholder='Search' onClick={()=>onInputClick()}/>
            <button>
            <Search className={styles.searchIcon}/>
            </button>
           
              
           
        </form>
        
        {
          showSuggestionBox && (
            <div>
                 <SuggestionBox latestTrendData={latestTrendData} popularSuggestionData={popularSuggestionData}/>
            </div>
            
          )
        }


    </div>
  )
}

export default HomePage
