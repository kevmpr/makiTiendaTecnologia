import Routes from "./routes.js";
import ProductsControllers from "../controllers/products.controllers.js";

export default class ProductsRoutes extends Routes {

    constructor() {
        super()
        this.controller = new ProductsControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .get('/', this.controller.getProducts)
            .get('/product', this.controller.getProductByName)
            .get('/product', this.controller.getProductById)
            .post('/', this.controller.addProduct)
            .put('/:id', this.controller.modifyProduct)
            .delete('/:id', this.controller.deleteProduct)
    }
}
