import Mysql from '../connections/Mysql.js';


export default class OrdersDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'orders'
        // this.#createTable()
    }

    async getAllOrders() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener las ordenes')
            return []
        }
    }


    async getOrdersById(id) {
        const query = `SELECT * FROM ${this.table} WHERE idOrders = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }

    async addOrder(order) {
        const { idOrders , idUsers , dateOrders , stateOrders } = order
        const query = `INSERT INTO ${this.table} VALUES (?,?,?,?)`
        const [result] = await this.connection.promise().query(query, [idOrders, idUsers, dateOrders, stateOrders])
        return result
    }


    async modifyOrder(order) {
        const { idOrders , idUsers , dateOrders , stateOrders } = order
        const query = `UPDATE ${this.table} SET idUsers = ?, dateOrders = ?, stateOrders = ? WHERE idOrders = ?`
        const [result] = await this.connection.promise().query(query, [idUsers , dateOrders , stateOrders , idOrders])
        return result
    }


    async deleteOrder(id) {
        const query = `DELETE FROM ${this.table} WHERE idOrders = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}