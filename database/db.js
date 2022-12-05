import  {Sequelize} from "sequelize"
import { DH_HOST, DH_NAME, DH_PASS, DH_PORT, DH_USER, DIALECT } from "../config/config.js"


// initialize database connection
const db = new Sequelize (DH_NAME, DH_USER, DH_PASS,{  //"prode2022", "root",""
    host: DH_HOST, //"localhost"
    dialect: DIALECT, //"mysql"
    port: DH_PORT //3306
})

export default db