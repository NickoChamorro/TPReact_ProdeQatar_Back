import  {Sequelize} from "sequelize"

// initialize database connection
const db = new Sequelize ("prode2022","root","",{
    host:"localhost",
    dialect:"mysql",
    port:3307
})

export default db