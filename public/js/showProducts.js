const productsContainer = document.getElementById("products-container");

const template = (data) => `
  <td class="text-center" class=v-align-middle>${data.id}</td>
  <td class="text-center" class=v-align-middle>${data.categoryProducts}</td>
  <td class="text-center" class=v-align-middle>${data.nameProducts}</td>
    <td class="text-center" class=v-align-middle>${data.priceProducts}</td>
    <td class="text-center" class=v-align-middle>${data.stockProducts}</td>
    <td class="text-center" class=v-align-middle><img src=${data.imageProducts} class=img-fluid style=max-width:50px></td>
    <td class="text-center" class=v-align-middle>
       <form id="acciones">        
             <a href="./noticia.html?id=${elem.id}" id="boton_crear" class="btn btn-primary">Ver</a>
             <a href="./noticiaEdit.html?id=${elem.id}" id="boton_crear" class="btn btn-warning">Editar</a>
            <button class="btn btn-danger" onclick="deleteProductTable(${data.idProducts})">Borrar</button>
        </form>  
        
    </td> `;

const showProducts = (products) => {
    for (let product of products) {
        const tr = document.createElement("tr");
        tr.innerHTML = template(product);
        productsContainer.append(tr);
    }
};

fetch("./products")
    .then((res) => res.json())
    .then((res) => showProducts(res))
    .catch((err) => console.log(err));

function deleteProductTable(id) {
    if (confirm(`Eliminará el producto con id: ${id}.
      Está seguro`)) {
        const url = "/products/" + id;

        fetch(url, { method: "DELETE" })
            .then((res) => res.json())
            .then((res) => errorCheck(res))
            .catch((err) => console.log(err));
    }
}
