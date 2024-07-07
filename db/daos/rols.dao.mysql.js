import Mysql from '../connections/Mysql.js';


export default class RolsDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'rols'
    }

    async getAllRols() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los roles')
            return []
        }
    }


    async getRolsById(id) {
        const query = `SELECT * FROM ${this.table} WHERE idRols = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }

    async addRol(rol) {
        const { idRols , typeRols } = rol
        const query = `INSERT INTO ${this.table} VALUES (?,?)`
        const [result] = await this.connection.promise().query(query, [idRols, typeRols])
        return result
    }


    async modifyRol(rol) {
        const { idRols , typeRols } = rol
        const query = `UPDATE ${this.table} SET typeRols = ? WHERE idRols = ?`
        const [result] = await this.connection.promise().query(query, [typeRols , idRols])
        return result
    }


    async deleteRol(id) {
        const query = `DELETE FROM ${this.table} WHERE idRols = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}