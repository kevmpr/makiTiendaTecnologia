import Routes from './routes.js'
import AuthControllers from '../controllers/auth.controllers.js'

export default class AuthRoutes extends Routes {

    constructor() {
        super()
        this.controller = new AuthControllers()
        this.getRoutes()
    }

    getRoutes() {
        this.router
            .post('/register', this.controller.register)
            .post('/login', this.controller.login)
    }
}

