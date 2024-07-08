// const button = document.getElementById(button)
async function getDate(url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
     return error;
  }
}

function createDateils(product) {
return`
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

function getDatestorage() {
let data = [];
if(localStorage.getItem('products')){
    data = JSON.parse(localStorage.getItem('products'))
}
}

function createCard(product) {
  return `
  <div class="card" data-id = "${product.id}">
      <img src="${product.attributes.image}" alt="img">
      <h2>${product.attributes.title}</h2>
      <p>${product.attributes.price}</p>
  </div>
  `
}
export {getDate, createCard, createDateils, getDatestorage};
