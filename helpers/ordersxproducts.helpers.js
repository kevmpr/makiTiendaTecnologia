import OrderxProduct from '../models/OrderxProduct.js'

export default class OrdersxProductsHelpers {

    createOrderxProduct(newData) {
        const { idOrders , idProducts , quantityOxp , priceOxp} = newData
        const orderxproduct = new OrderxProduct(parseInt(idOrders), parseInt(idProducts), parseInt(quantityOxp), parseFloat(priceOxp))
        return orderxproduct
    }
}