import express from "express"
import {createUser, deleteUser, getAlluser, getUser, getUserByUserPass, updateUser} from "../controllers/usersController.js"

const router = express.Router()

router.get ("/",getAlluser)
router.get ("/:id",getUser)
router.post ("/",createUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser) 
router.get("/login/:usuario/pass/:pass",getUserByUserPass)
export default router