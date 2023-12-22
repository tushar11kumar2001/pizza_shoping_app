//product CRUD operation..
//C - CREATE , R - READ , - U - UPDATE , D - DELETE..
//contains the logic for fetching,
//Adding , sorting , searching.
/*
it talk to network layer to bring the json , and convert 
json into object vice-versa.
*/

import toNetworkCall from "../api-client.js";
import Product from "../models/product.js";

const productOperation = {
  products: [],

  search(pizzaId) {
    const product = this.products.find(
      (currentPizza) => currentPizza.id == pizzaId
    );
    product.addedInCart = true;
    console.log("pizza found ", product);
  },


  getProductsInCart(){
    
     const productInBasket = this.products.filter(product=>product.addedInCart);
     return productInBasket;
  },


  async loadProducts() {
    const pizzas = await toNetworkCall();
    const pizzaArray = pizzas["Vegetarian"];
    // const array = [1,'a',2,'vds'];
    // console.log('sherwal ' , array instanceof Array);
    // console.log('pizzaarray = ',typeof pizzaArray);
    const productArray = pizzaArray.map((pizza) => {
      const currentPizza = new Product(
        pizza.id,
        pizza.name,
        pizza.menu_description,
        pizza.price,
        pizza.assets.product_details_page[0].url
      );

      return currentPizza;
    });

    console.log("Product Array ", productArray);
    // console.log(typeof productArray);
    this.products = productArray;
    return productArray;
  },

  sortProducts() {},

  searchProducts() {},
};

export default productOperation;
console.log()
