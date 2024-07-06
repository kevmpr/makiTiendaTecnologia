import Routes from "./routes.js";
import OrdersControllers from "../controllers/orders.controllers.js";

export default class OrdersRoutes extends Routes {

    constructor() {
        super()
        this.controller = new OrdersControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .get('/', this.controller.getOrders)
            .get('/order', this.controller.getOrderById)
            .post('/', this.controller.addOrder)
            .put('/:id', this.controller.modifyOrder)
            .delete('/:id', this.controller.deleteOrder)
    }
}
