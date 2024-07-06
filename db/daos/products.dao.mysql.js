import Mysql from '../connections/Mysql.js';


export default class ProductsDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'products'
        // this.#createTable()
    }

    // #createTable() {
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         idProducts INT AUTO_INCREMENT PRIMARY KEY,
    //             nameProducts VARCHAR(50) NOT NULL,
    //             priceProducts FLOAT NOT NULL,
    //             stockProducts INT NOT NULL,
    //             imageProducts INT NULL,
    //             categoryProducts ENUM('TV', 'Movil', 'Computacion')          
    //     )`
    //     this.connection.query(query)
    // }

    async getAllProducts() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los productos')
            return []
        }
    }


    async getProductsById(id) {
        const query = `SELECT * FROM ${this.table} WHERE idProducts = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }


    async getProductsByName(name) {
        const query = `SELECT * FROM ${this.table} WHERE nameProducts = '${name}'`
        const [result] = await this.connection.promise().query(query)
        return result
    }

    async addProduct(product) {
        const { idProducts , nameProducts , priceProducts , stockProducts , imageProducts , categoryProducts} = product
        const query = `INSERT INTO ${this.table} VALUES (?,?,?,?,?,?)`
        const [result] = await this.connection.promise().query(query, [idProducts, nameProducts, priceProducts, stockProducts, imageProducts, categoryProducts])
        return result
    }


    async modifyProduct(product) {
        const { idProducts , nameProducts , priceProducts , stockProducts , imageProducts , categoryProducts} = product
        const query = `UPDATE ${this.table} SET nameProducts = ?, priceProducts = ?, stockProducts = ?, imageProducts = ?, categoryProducts = ? WHERE idProducts = ?`
        const [result] = await this.connection.promise().query(query, [nameProducts , priceProducts , stockProducts , imageProducts , categoryProducts, idProducts])
        return result
    }


    async deleteProduct(id) {
        const query = `DELETE FROM ${this.table} WHERE idProducts = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}