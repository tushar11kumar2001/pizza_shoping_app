//Glue B/W view and model

import productOperation from "../services/products-operation.js";


async function loadPizzas(){
   const pizzas = await productOperation.loadProducts();
  console.log('pizza is ', pizzas);
for(let pizza of pizzas){
  preparePizzaCard(pizza);
}
}
loadPizzas();



function addToCart(){
 const currentBtn = this;
 const pizzaId  = currentBtn.getAttribute('product-id');
 console.log('pizza id is :- ', pizzaId);
 productOperation.search(pizzaId);
 printInBasket();
 console.log('tushar');

}

function printInBasket(){
  const cartProducts = productOperation.getProductsInCart();
  console.log('cartproducts is here ' , cartProducts);
  const basket = document.querySelector('#basket');
  let total = 0;
  basket.innerHTML = "";
  for (let product of cartProducts){
    const li = document.createElement('li');
    li.innerText = `${product.name} : ${product.price}`;
    basket.appendChild(li);

  }
}

function preparePizzaCard(pizza){

  const outputDiv = document.querySelector('#output');
  const colDiv = document.createElement('div');
  colDiv.className = 'col-4';
  const cardDiv  = document.createElement('div');
  cardDiv.className = 'card';
  // cardDiv.style = "width: 18rem";
  // cardDiv.style = "heigth: 40rem";
  colDiv.appendChild(cardDiv);
  const img = document.createElement('img');
  img.src = pizza.url;
  img.className = 'card-img-top';
  cardDiv.appendChild(img);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardDiv.appendChild(cardBody);
  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.innerText = pizza.name;
  const ptag = document.createElement('p');
  ptag.className = 'card-text';
  ptag.innerText = pizza.desc;
  const button = document.createElement('button');
  button.innerText = 'Add TO Cart';
  button.className = 'btn btn-primary';
  button.addEventListener('click' , addToCart);
  button.setAttribute('product-id' , pizza.id);
  cardBody.appendChild(h5);
  cardBody.appendChild(ptag);
  cardBody.appendChild(button);
  outputDiv.appendChild(colDiv);
 }
