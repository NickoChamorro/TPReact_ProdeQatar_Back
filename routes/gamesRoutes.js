import express from "express"
import { getAllGames, getGame, getGamesByStage } from "../controllers/gamesController.js"

const gamesRouter = express.Router()

gamesRouter.get ("/",getAllGames)
gamesRouter.get ("/:id",getGame)
gamesRouter.get ("/stage/:stage",getGamesByStage)

export default gamesRouter