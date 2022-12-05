import db from "../database/db.js"
import DataTypes from "sequelize"

const PredictionsModel = db.define("predicciones",{
    idPrediccion: {type:DataTypes.INTEGER, primaryKey: true},
    idUsuario: {type:DataTypes.INTEGER},
    idPartido: {type:DataTypes.INTEGER},
    preEquipo1: {type:DataTypes.TINYINT},
    preEquipo2: {type:DataTypes.TINYINT}
}, { timestamps: false },
)
export default PredictionsModel