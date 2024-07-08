import Routes from "./routes.js";
import UsersControllers from "../controllers/users.controllers.js";
// import middlewares from '../middlewares/auth.middlewares.js'

export default class UsersRoutes extends Routes {

    constructor() {
        super()
        this.controller = new UsersControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .get('/', this.controller.getUsers)
            .get('/user', this.controller.getUsersByName)
            .get('/:id', 
                // middlewares.authJwt,
                this.controller.getUserById)
            .post('/', this.controller.addUser)
            .put('/:id', this.controller.modifyUser)
            .delete('/:id', this.controller.deleteUser)
    }
}
