import UsersHelpers from '../helpers/users.helpers.js'
import UsersDaoMysql from '../db/daos/users.dao.mysql.js'

export default class AuthControllers{
    constructor() {
        this.db = new UsersDaoMysql()
        this.helpers = new UsersHelpers()
    }
    
    register = async (req, res) => {   
        const user = this.helpers.createUser(req.body)
        const result = await this.db.addUser(user)
        res.json(result)
    }

    login = () => {

    }
}