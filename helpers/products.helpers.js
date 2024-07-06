import Product from '../models/Product.js'

export default class ProductsHelpers {

    createProduct(newData) {
        const { idProducts , nameProducts , priceProducts , stockProducts , imageProducts , categoryProducts} = newData
        const product = new Product(parseInt(idProducts), nameProducts, parseFloat(priceProducts), parseInt(stockProducts), imageProducts, categoryProducts)
        return product
    }
}