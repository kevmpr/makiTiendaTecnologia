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
    //         nameProducts VARCHAR(50) NOT NULL,
    //         priceProducts FLOAT NOT NULL,
    //         stockProducts INT NOT NULL,
    //         imageProducts INT NULL,
    //         categoryProducts ENUM('TV', 'Movil', 'Computacion')          
    //     );
        
    //     INSERT INTO ${this.table} (nameProducts, priceProducts, stockProducts, imageProducts, categoryProducts)
	//         VALUES ('Smart TV 55', 6580000, 89, 'img1', 'TV'), 
	// 		    ('OLED 64 SAMSUNG', 87300000, 40, 'img2', 'TV'),
    // 		    ('Samsung A52', 580000, 20, 'img1', 'Movil'), 
	// 		    ('iPhone 15', 2500000, 10, 'img2', 'Movil'),
    //             ('Notebook ASUS', 4200000, 50, 'img5', 'Computacion'),
    //             ('Notebook MSI', 3700000, 38, 'img6', 'Computacion');`
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
        const { idProducts , nameProducts , priceProducts , stockProducts , imageProducts , categoryProducts } = product
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