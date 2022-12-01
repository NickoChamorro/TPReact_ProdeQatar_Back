import db from "../database/db.js"

import DataTypes from "sequelize"

const UsersModel = db.define("usuarios",{
    idusuarios : {type:DataTypes.INTEGER,primaryKey:true},
    usuario:{type:DataTypes.STRING},
    pass:{type:DataTypes.STRING},
    nombre:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    admin:{type:DataTypes.TINYINT},
    puntos:{type:DataTypes.INTEGER}
}, { timestamps: false },
)
export default UsersModel