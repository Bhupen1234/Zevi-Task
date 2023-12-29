import { faker } from "@faker-js/faker";

export const fetchLatestTrendData =()=>{
    const latestTrends =[];

    for(let i=1;i<=5;i++){
        latestTrends.push({
            productImg: faker.image.people(300,400,true),
            productName : faker.commerce.productName()
        })
    }

    return latestTrends;
}


export const fetchPopularSuggestionData =()=>{
      const popularSuggestionData =[]
       
      for (let i = 1; i <= 5; i++) {
        popularSuggestionData.push({
          productName: faker.commerce.productName(),
        });
      }


      return popularSuggestionData

}