import Routes from "./routes.js";
import RolsControllers from "../controllers/rols.controllers.js";

export default class RolsRoutes extends Routes {

    constructor() {
        super()
        this.controller = new RolsControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .get('/', this.controller.getRols)
            .get('/rol', this.controller.getRolById)
            .post('/', this.controller.addRol)
            .put('/:id', this.controller.modifyRol)
            .delete('/:id', this.controller.deleteRol)
    }
}
