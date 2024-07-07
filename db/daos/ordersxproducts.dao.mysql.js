import Mysql from '../connections/Mysql.js';


export default class OrdersxProductsDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'ordersxproducts'
        // this.#createTable()
    }

    async getAllOrdersxProducts() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener las ordenes x productos')
            return []
        }
    }


    async getOrdersxProductsById(id) {
        const query = `SELECT * FROM ${this.table} WHERE idOrders = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }

    async addOrderxProduct(orderxproduct) {
        const { idOrders , idProducts , quantityOxp , priceOxp } = orderxproduct
        const query = `INSERT INTO ${this.table} VALUES (?,?,?,?)`
        const [result] = await this.connection.promise().query(query, [idOrders , idProducts , quantityOxp , priceOxp])
        return result
    }


    async modifyOrderxProduct(orderxproduct) {
        const { idOrders , idProducts , quantityOxp , priceOxp } = orderxproduct
        const query = `UPDATE ${this.table} SET  idProducts = ?, quantityOxp = ?, priceOxp = ? WHERE idOrders = ?`
        const [result] = await this.connection.promise().query(query, [idProducts , quantityOxp , priceOxp, idOrders])
        return result
    }


    async deleteOrderxProduct(id) {
        const query = `DELETE FROM ${this.table} WHERE idOrders = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}