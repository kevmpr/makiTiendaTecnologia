import Routes from "./routes.js";
import OrdersxProductsControllers from "../controllers/ordersxproducts.controllers.js";

export default class OrdersxProductsRoutes extends Routes {

    constructor() {
        super()
        this.controller = new OrdersxProductsControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .get('/', this.controller.getOrdersxProducts)
            .get('/orderxproduct', this.controller.getOrderxProductById)
            .post('/', this.controller.addOrderxProduct)
            .put('/:id', this.controller.modifyOrderxProduct)
            .delete('/:id', this.controller.deleteOrderxProduct)
    }
}
