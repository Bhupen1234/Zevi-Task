import React from 'react'
import styles from "./SuggestionBox.module.css"
const SuggestionBox = ({popularSuggestionData,latestTrendData}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.latestTrendWrapper}>
            <h2 style={{marginBottom:"2px"}}>Latest Trends</h2>
            <div className={styles.latestTrend}>
                {
                    latestTrendData.map((data)=>{
                        return(
                            <div className={styles.latestTrendCards}>
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
                        <h4 style={{marginBottom:"12px"}} >{data.productName}</h4>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default SuggestionBox
