import express from 'express'
import AuthRoutes from '../routes/auth.routes.js'
import RolsRoutes from '../routes/rols.routes.js'
import UsersRoutes from '../routes/users.routes.js'
import ProductsRoutes from '../routes/products.routes.js'
import OrdersRoutes from '../routes/orders.routes.js'
import OrdersxProductsRoutes from '../routes/ordersxproducts.routes.js'

export default class Server {

    static app = express()


    static middlewares() {
        Server.app.use(express.static('public'))
        Server.app.use(express.json())
        Server.app.use(express.urlencoded({ extended: true }))
    }


    static routes() {
        const authRoutes = new AuthRoutes()
        const rolsRoutes = new RolsRoutes()
        const usersRoutes = new UsersRoutes()
        const productsRoutes = new ProductsRoutes()
        const ordersRoutes = new OrdersRoutes()
        const ordersxproductsRoutes = new OrdersxProductsRoutes()

        Server.app.use('/auth', authRoutes.router)
        Server.app.use('/rols', rolsRoutes.router)
        Server.app.use('/users', usersRoutes.router)
        Server.app.use('/products', productsRoutes.router)
        Server.app.use('/orders', ordersRoutes.router)
        Server.app.use('/ordersxproducts', ordersxproductsRoutes.router)
    }


    static runServer(port) {
        Server.app.listen(port, () =>
            console.log(`listen at http://localhost:${port}`))
    }


    static run(port) {
        console.clear()
        Server.middlewares()
        Server.routes()
        Server.runServer(port)
    }
}