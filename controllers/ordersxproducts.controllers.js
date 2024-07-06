import OrdersxProductsHelpers from '../helpers/ordersxproducts.helpers.js'
import OrdersxProductsDaoMysql from '../db/daos/ordersxproducts.dao.mysql.js'


export default class OrdersxProductsControllers {

    constructor() {
        this.db = new OrdersxProductsDaoMysql()
        this.helpers = new OrdersxProductsHelpers()
    }


    getOrdersxProducts = async (req, res) => {
        const ordersxproducts = await this.db.getAllOrdersxProducts()
        res.json(ordersxproducts)
    }


    getOrderxProductById = async (req, res) => {
        const { id } = req.params
        const orderxproduct = await this.db.getOrderxProductById(id)
        res.json(orderxproduct)
    }


    addOrderxProduct = async (req, res) => {
        const orderxproduct = this.helpers.createOrderxProduct(req.body)
        const result = await this.db.addOrderxProduct(orderxproduct)
        res.json(result)
    }


    modifyOrderxProduct = async (req, res) => {
        const orderxproduct = this.helpers.createOrderxProduct(req.body)
        const result = await this.db.modifyOrderxProduct(orderxproduct)
        res.json(result)
    }


    deleteOrderxProduct = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteOrderxProduct(id)
        res.json(result)
    }
}