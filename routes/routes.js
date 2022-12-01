import express from "express"
import {getAlluser} from "../controllers/controller.js"

const router = express.Router()

router.get ("/",getAlluser)
/*router.get ("/:id",getBlog)
router.post ("/",createBlog)
router.put("/:id",updateBlog)
router.delete("/:id",deleteBlog) */
export default router