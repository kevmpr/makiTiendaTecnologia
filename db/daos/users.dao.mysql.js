import Mysql from '../connections/Mysql.js';

export default class UsersDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'users'
        // this.#createTable()
    }

    async getAllUsers() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los usuarios')
            return []
        }
    }


    async getUserById(id) {
        const query = `SELECT * FROM ${this.table} WHERE idUsers = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }


    async getUsersByName(name) {
        const query = `SELECT * FROM ${this.table} WHERE nameUsers = '${name}'`
        const [result] = await this.connection.promise().query(query)
        return result
    }

    async addUser(user) {
        const { idUsers, idRols, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers } = user
        const query = `INSERT INTO ${this.table} VALUES (?,?,?,?,?,?,?,?,?)`
        const [result] = await this.connection.promise().query(query, [idUsers, idRols, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers])
        return result
    }


    async modifyUser(user) {
        const { idUsers, idRols, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers} = user
        const query = `UPDATE ${this.table} SET idRols = ?, nameUsers = ?, lastNameUsers = ?, emailUsers = ?, passwordUsers = ?, genderUsers = ?, telUsers = ?, imageUsers = ? WHERE idUsers = ?`
        const [result] = await this.connection.promise().query(query, [idRols, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers, idUsers])
        return result
    }


    async deleteUser(id) {
        const query = `DELETE FROM ${this.table} WHERE idUsers = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}