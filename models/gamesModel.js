import db from "../database/db.js"
import DataTypes from "sequelize"

const GamesModel = db.define("partidos",{
    idPartido: {type:DataTypes.INTEGER, primaryKey: true},
    equipo1: {type:DataTypes.STRING},
    equipo2: {type:DataTypes.STRING},
    fase: {type:DataTypes.STRING},
    grupo: {type:DataTypes.STRING},
    fecha: {type:DataTypes.STRING},
    hora: {type:DataTypes.STRING},
    estadio: {type:DataTypes.STRING},
    goles1: {type:DataTypes.INTEGER},
    goles2: {type:DataTypes.INTEGER},
    ganador: {type:DataTypes.TINYINT},
    empate: {type:DataTypes.TINYINT}
}, { timestamps: false },
)
export default GamesModel