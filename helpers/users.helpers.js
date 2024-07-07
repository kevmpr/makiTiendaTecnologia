import User from '../models/User.js'

export default class UsersHelpers {

    createUser(newData) {
        const { idUsers, idRols, nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers } = newData
        const user = new User(parseInt(idUsers),  parseInt(idRols), nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, parseInt(telUsers), imageUsers)
        return user
    }
}