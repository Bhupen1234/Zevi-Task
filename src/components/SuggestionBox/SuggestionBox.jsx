import React from 'react'
import styles from "./SuggestionBox.module.css"
import { useNavigate } from 'react-router-dom'
const SuggestionBox = ({popularSuggestionData,latestTrendData}) => {

    const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
        <div className={styles.latestTrendWrapper}>
            <h2 style={{marginBottom:"2px"}}>Latest Trends</h2>
            <div className={styles.latestTrend}>
                {
                    latestTrendData.map((data)=>{
                        return(
                            <div className={styles.latestTrendCards}  onClick={()=>navigate("/product")}>
                                <img src={data.productImg} alt={data.productName} />
                                 <p>{data.productName}</p>
                            </div>
                        )
                    })
                }
               
            </div>
        </div>



        <div className={styles.popularSuggestionWrapper}>
            <div className={styles.popularSuggestion}>
            <h2 style={{marginBottom:"2px"}}>Popular Suggestions</h2>
            {
                popularSuggestionData.map((data)=>{
                    return(
                        <h4 style={{marginBottom:"12px"}} className={styles.productName} onClick={()=>navigate("/product")}>{data.productName}</h4>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default SuggestionBox
