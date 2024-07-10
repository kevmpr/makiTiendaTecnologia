const updateButton = document.getElementById('update-button')

const updInputIdProducts = document.getElementById('update-idProducts')
const updInputNameProducts = document.getElementById('update-nameProducts')
const updInputPriceProducts = document.getElementById('update-priceProducts')
const updInputStockProducts = document.getElementById('update-stockProducts')
const updInputCategoryProducts = document.getElementById('update-categoryProducts')


const modifyButtonHandleClick = (e) => {

    e.preventDefault()

    if (updInputIdProducts.value.length === 0 ||
        updInputNameProducts.value.length === 0 ||
        updInputPriceProducts.value.length === 0 ||
        updInputStockProducts.value.length === 0 ||
        updInputCategoryProducts.value.length === 0) {

        return alert('Uno o más campos no se han completado')
    }

    const body = {
        name: updInputNameProducts.value,
        price: parseFloat(updInputPriceProducts.value),
        stock: updInputStockProducts.value,
        category: updInputCategoryProducts.value
    }

    const url = '/products/' + updInputIdProducts.value

    fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => alert(err))
}



updateButton.addEventListener('click', modifyButtonHandleClick)