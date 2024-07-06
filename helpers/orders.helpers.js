import Order from '../models/Order.js'

export default class OrdersHelpers {

    createOrder(newData) {
        const { idOrders , idUsers , dateOrders , stateOrders} = newData
        const order = new Order(parseInt(idOrders), parseInt(idUsers), dateOrders, stateOrders)
        return order
    }
}