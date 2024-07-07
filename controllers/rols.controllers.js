import RolsHelpers from '../helpers/rols.helpers.js'
import RolsDaoMysql from '../db/daos/rols.dao.mysql.js'


export default class RolsControllers {

    constructor() {
        this.db = new RolsDaoMysql()
        this.helpers = new RolsHelpers()
    }


    getRols = async (req, res) => {
        const rols = await this.db.getAllRols()
        res.json(rols)
    }


    getRolById = async (req, res) => {
        const { id } = req.params
        const rol = await this.db.getRolById(id)
        res.json(rol)
    }


    addRol = async (req, res) => {
        const rol = this.helpers.createRol(req.body)
        const result = await this.db.addRol(rol)
        res.json(result)
    }


    modifyRol = async (req, res) => {
        const rol = this.helpers.createRol(req.body)
        const result = await this.db.modifyRol(rol)
        res.json(result)
    }


    deleteRol = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteRol(id)
        res.json(result)
    }
}