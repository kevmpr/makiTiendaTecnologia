import User from '../models/User.js'
import bcrypt from 'bcryptjs'

export default class UsersHelpers {

    createUser(newData) {
        const { idUsers, idRols, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers } = newData

        const hash = bcrypt.hashSync(passwordUsers, 1)

        const user = new User(parseInt(idUsers),  parseInt(idRols), nameUsers, lastNameUsers, emailUsers, hash, genderUsers, parseInt(telUsers), imageUsers)
        return user
    }
}