import OrdersHelpers from '../helpers/orders.helpers.js'
import OrdersDaoMysql from '../db/daos/orders.dao.mysql.js'


export default class OrdersControllers {

    constructor() {
        this.db = new OrdersDaoMysql()
        this.helpers = new OrdersHelpers()
    }


    getOrders = async (req, res) => {
        const orders = await this.db.getAllOrders()
        res.json(orders)
    }


    getOrderById = async (req, res) => {
        const { id } = req.params
        const order = await this.db.getOrderById(id)
        res.json(order)
    }


    addOrder = async (req, res) => {
        const order = this.helpers.createOrder(req.body)
        const result = await this.db.addOrder(order)
        res.json(result)
    }


    modifyOrder = async (req, res) => {
        const order = this.helpers.createOrder(req.body)
        const result = await this.db.modifyOrder(order)
        res.json(result)
    }


    deleteOrder = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteOrder(id)
        res.json(result)
    }
}