import Product from "../models/Product.js"

const productAdapter = (data, file = '') => {

    if (file !== '')
        file = './uploads/' + file.filename

    let { name, price, stock, category } = data

    stock = parseInt(stock)
    price = parseFloat(price)

    const product = new Product(name, price, stock, file, category)
    return product
}


export const adapters = {
    productAdapter
}