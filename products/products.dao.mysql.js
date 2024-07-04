import { connection } from "../db/mysql.connection.js"



const getProducts = async () => {
    try {
        const query = `SELECT * FROM products`
        const [result] = await connection.promise().query(query)

        return result
    }
    catch (err) { return [] }
}



const createProduct = async (product) => {
    try {
        const { name, price, stock, image, category } = product
        const fields = [name, price, stock, image, category]

        const query = `INSERT INTO products VALUES (NULL,?,?,?,?,?)`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0
    }
    catch (err) { return false }
}



const updateProduct = async (id, product) => {
    try {
        const { name, price, stock, category } = product
        const fields = [name, price, stock, category, id]

        const query = `UPDATE products SET name=?,price=?,stock=?,category=? WHERE id=?`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }
}



const deleteProduct = async (id) => {
    try {
        const query = `DELETE FROM products WHERE id = ?`
        const [result] = await connection.promise().query(query, id)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }
}



export const db = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}