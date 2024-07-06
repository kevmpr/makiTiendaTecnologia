import Mysql from '../connections/Mysql.js';


export default class UsersDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'users'
        // this.#createTable()
    }

    // #createTable() {
    //     const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
    //         idUsers INT AUTO_INCREMENT PRIMARY KEY,
    //         nameUsers VARCHAR(50) NOT NULL,
    //         lastNameUsers VARCHAR(50) NOT NULL,
    //         emailUsers VARCHAR(50) NOT NULL,
    //         passwordUsers VARCHAR(50) NOT NULL,
    //         genderUsers ENUM('Masculino', 'Femenino', 'Otro') NULL,
    //         telUsers INT NULL,
    //         imageUsers INT NULL
    //     );

    //     INSERT INTO ${this.table} (nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers)
    //         VALUES	('Pablo', 'Ganes', 'pabloganes@gmail.com', '123', 'Masculino', 1140294816, 'img1'), 
    //                 ('Gabriel', 'Medina', 'gabrielmedina@gmail.com', '123', 'Masculino', 1130292240, 'img2'),
    //                 ('Sofia', 'Rodriguez', 'sofiarodriguez@gmail.com', '123', 'Femenino', 1109221292, 'img3'), 
    //                 ('Micaela', 'Aquino', 'micaelaaquino@gmail.com', '123', 'Femenino', 1138837654, 'img4'),
    //                 ('Alex', 'Perez', 'alexperez@gmail.com', '123', 'Otro', 1123463728, 'img5'),
    //                 ('Charly', 'Divino', 'charlydivino@gmail.com', '123', 'Otro', 1144509908, 'img6');`
    //     this.connection.query(query)
    // }

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
        const { idUsers, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers } = user
        const query = `INSERT INTO ${this.table} VALUES (?,?,?,?,?,?,?,?)`
        const [result] = await this.connection.promise().query(query, [idUsers, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers])
        return result
    }


    async modifyUser(user) {
        const { idUsers, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers} = user
        const query = `UPDATE ${this.table} SET nameUsers = ?, lastNameUsers = ?, emailUsers = ?, passwordUsers = ?, genderUsers = ?, telUsers = ?, imageUsers = ? WHERE idUsers = ?`
        const [result] = await this.connection.promise().query(query, [nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers, idUsers])
        return result
    }


    async deleteUser(id) {
        const query = `DELETE FROM ${this.table} WHERE idUsers = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}