import Mysql from '../connections/Mysql.js';


export default class OrdersDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'orders'
        // this.#createTable()
    }

    // #createTable() {
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
	//         idOrders INT AUTO_INCREMENT PRIMARY KEY,
	//         idUsers INT,
    //         dateOrders VARCHAR(50) NULL,
    //         stateOrders ENUM('Entregado', 'En espera', 'Cancelado'),
    //         FOREIGN KEY (idUsers) REFERENCES users(idUsers)
    //     );
        
    //     INSERT INTO ${this.table} (idUsers, dateOrders, stateOrders)
    //         VALUES (1, '04-07-24', 'Entregado'),
    //             (2, '04-07-24', 'Entregado'),
    //             (3, '04-07-24', 'En espera'),
    //             (4, '04-07-24', 'En espera'),
    //             (5, '04-07-24', 'Cancelado'),
    //             (6, '04-07-24', 'Cancelado');
    //     `
    //     this.connection.query(query)
    // }


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