const button = document.getElementById('button');


function createCart() {
    return `
    <div class="container main__container">
        <div class="image">
            <img src="${product.attributes.image}" alt="">
        </div>
        <div class="info">
           <h2>${product.attributes.title}</h2>
           <h3>${product.attributes.company}</h3>
           <h3>$${product.attributes.price}</h3>
            <p>${product.attributes.description}</p>
    
     
        </div>
    
    
        </div>
    `
}

button && button.addEventListener('submit',function (event) {
    event.preventDefault()
    alert('add cart');
  return `
  <h1>Shopping Cart</h1>
  <div style="display: flex;">
      <img src="${product.attributes.image}" alt="">
      <h3>${product.attributes.company}</h3>
      <h4>Amount</h4>
      <h2>$${cart.attributes.price}</h2>
  </div>   
  ` 
})  

