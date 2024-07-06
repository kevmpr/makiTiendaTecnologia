import Mysql from '../connections/Mysql.js';


export default class OrdersxProductsDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'ordersxproducts'
        // this.#createTable()
    }

    // #createTable() {
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         idOrders INT,
	//         idProducts INT,
    //         quantityOxp INT NULL,
    //         priceOxp FLOAT NULL,
    //         FOREIGN KEY (idOrders) REFERENCES orders(idOrders),
    //         FOREIGN KEY (idProducts) REFERENCES products(idProducts)         
    //     );
        
    //     INSERT INTO ${this.table} VALUES
	//         (1, 1, 3, NULL),
    //         (1, 2, 4, NULL),
    //         (1, 3, 30, NULL),
    //         (2, 4, 21, NULL),
    //         (2, 5, 12, NULL),
    //         (3, 6, 1, NULL);`
    //     this.connection.query(query)
    // }

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