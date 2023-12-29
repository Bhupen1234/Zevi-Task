import React, { useState } from 'react'
import HomeBackground from "../../assets/HomeBackground.png"
import styles from "./HomePage.module.css"
import { ReactComponent as Search } from "../../assets/search.svg"
const HomePage = () => {
   const [showSuggestionBox,setShowSuggestionBox] = useState(false)

   const onInputClick =()=>{
          setShowSuggestionBox((prevState)=>!prevState)
   }

  return (
    <div className={styles.wrapper}>
      
        <form className={styles.searchBar}>
            <input type="text" placeholder='Search' onClick={()=>onInputClick()}/>
            <button>
            <Search className={styles.searchIcon}/>
            </button>
           
              
           
        </form>
        
        {
          showSuggestionBox && (
            <div className={styles.suggestionBox}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sint corporis aut, repellat voluptates tempore, molestias velit corrupti fugiat optio quasi esse accusamus consectetur ullam error minima aperiam voluptate? Unde.</p>
            </div>
          )
        }


    </div>
  )
}

export default HomePage
