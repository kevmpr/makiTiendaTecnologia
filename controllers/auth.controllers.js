import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UsersHelpers from '../helpers/users.helpers.js'
import UsersDaoMysql from '../db/daos/users.dao.mysql.js'
import { config } from '../db/config/auth.config.js'

export default class AuthControllers{
    constructor() {
        this.db = new UsersDaoMysql()
        this.helpers = new UsersHelpers()
    }
    
    register = async (req, res) => {   
        const user = this.helpers.createUser(req.body)
        const result = await this.db.addUser(user)

        const payload = { user }
        const signature = config.secretKey
        const token = jwt.sign(payload, signature, config.token)

        console.log(`Token: ${token}`)
        // result
        //     ? res
        //         .status(201)
        //         // .set('authorization', `Bearer ${token}`)
        //         .cookie('token', token, config.cookie)

        //     : res.send('Algo salio mal')

        res.json(result)
    }

    login = async (req, res) => {
        const user = this.helpers.createUser(req.body)
        const result = await this.db.getUsersByName(user)

        if(!result) return res.status(404).json({error: true, desc: 'User not found'})

        const {passwordUsers} = result

        const isValid = bcrypt.compareSync(passwordUsers, result.passwordUsers)

        console.log(isValid)

        const payload = { user }
        const signature = config.secretKey
        const token = jwt.sign(payload, signature, config.token)

        console.log(`Token: ${token}`)
        
        res
            .status(201)
            // .set('authorization', `Bearer ${token}`)
            .cookie('token', token, config.cookie)

        res.json(result)
    }
}