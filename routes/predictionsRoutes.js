import express from "express"
import { createPrediction, getAllPredictions, getPrediction, getPredictionsByUser, updatePrediction, getPredictionByIdUser, getResult} from "../controllers/predictionsController.js"

const predictionsRouter = express.Router()

predictionsRouter.get ("/",getAllPredictions)
predictionsRouter.get ("/:id",getPrediction)
predictionsRouter.post ("/",createPrediction)
predictionsRouter.put ("/:id",updatePrediction)
predictionsRouter.get ("/user/:id",getPredictionByIdUser)
predictionsRouter.get ("/result/:id",getResult)
predictionsRouter.get ("/user/:usuario/game/:partido",getPredictionsByUser)

export default predictionsRouter