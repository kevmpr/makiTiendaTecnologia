import Rol from '../models/Rol.js'

export default class RolsHelpers {

    createRol(newData) {
        const { idRols , typeRols } = newData
        const rol = new Rol(parseInt(idRols), typeRols)
        return rol
    }
}