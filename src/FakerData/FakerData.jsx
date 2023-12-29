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

export const fetchProducts = () => {
    const products=[];
  
    for (let i = 0; i <= 30; i++) {
      const productImg = faker.image.url({
        height: 400,
        width: 300,
      });
      const productId = i;
      const productName = faker.commerce.productName();
      const productRating = faker.number.int({ min: 1, max: 5 });
      const productOrgPrice = Number(
        faker.commerce.price({ min: 300, max: 5000 })
      );
      const productDisPrice = Number(
        faker.commerce.price({
          min: 300,
          max: Number(productOrgPrice),
        })
      );
      const productsReviews = faker.number.int({ min: 10, max: 50 });
  
      products.push({
        productId,
        productImg,
        productName,
        productRating,
        productOrgPrice,
        productDisPrice,
        productsReviews,
      });
    }
  
    return products;
  };