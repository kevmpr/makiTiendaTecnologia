const productsContainer = document.getElementById("products-container");

const template = (data) => `
  `;

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
    if (
        confirm(`Eliminará el producto con id: ${id}.
      Está seguro`)
    ) {
        const url = "/products/" + id;

        fetch(url, { method: "DELETE" })
            .then((res) => res.json())
            .then((res) => errorCheck(res))
            .catch((err) => console.log(err));
    }
}
