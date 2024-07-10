const productsContainer = document.getElementById("products-container");


const template = (product) => `
  <div class="contenedor_productos">
  <div class="productos">
      <img src="${product.imageProducts}" alt="producto">
      <div>
          <p>${product.nameProducts}</p>
          <p class="productos__precio">$${product.priceProducts}</p>
          <p><small>Código: ${product.idProducts} - Stock: ${product.stockProducts} unidades</small></p>
          <div class="productos__button">
              <a href="./carrito.html">Comprar</a>
          </div>
      </div>
  </div>
</div>
`;



const showProducts = (products) => {
    for (let product of products) {
      const div = document.createElement('div')
      div.className = 'card my-2'
      div.innerHTML = template(product)
      productsContainer.append(div)
    }
  }
  
  
  
  fetch('/products')
    .then(res => res.json())
    .then(res => showProducts(res))
    .catch(err => console.log(err))

