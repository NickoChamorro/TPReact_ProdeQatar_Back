import express from "express"
import { createPrediction, getAllPredictions, getPrediction, getPredictionsByUser, updatePrediction } from "../controllers/predictionsController.js"

const predictionsRouter = express.Router()

predictionsRouter.get ("/",getAllPredictions)
predictionsRouter.get ("/:id",getPrediction)
predictionsRouter.post ("/",createPrediction)
predictionsRouter.put ("/:id",updatePrediction)
predictionsRouter.get ("/user/:id",getPredictionsByUser)

export default predictionsRouter