import PredictionsModel from "../models/predictionsModel.js";

//MOSTRAR TODOS LOS REGISTROS
export const getAllPredictions = async (req,res)=>{
    try {
        const predictions = await PredictionsModel.findAll();
        res.json(predictions)
    } catch (error) {
        res.json({message: error.message})
    }
};
//MOSTRAR UN REGISTRO
export const getPrediction = async (req,res)=>{
   try {
        const prediction = await PredictionsModel.findOne({
            where:{idPrediccion:req.params.id}
        });
        res.json(prediction)
    } catch (error) {
        res.json({message: error.message})
    } 
};
export const getPredictionByIdUser = async (req,res)=>{
    try {
         const prediction = await PredictionsModel.findOne({
             where:{idUsuario:req.params.id}
         });
         res.json(prediction)
     } catch (error) {
         res.json({message: error.message})
     } 
 };

//crear UN REGISTRO
export const createPrediction = async (req,res)=>{
    try {
        await PredictionsModel.create (req.body)
        res.json ({message: "Registro creado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 };

 //actualizar un registro
 export const updatePrediction =async (req,res)=>{
    try {
        await PredictionsModel.update(req.body,{
            where:{idPrediccion:req.params.id} 
        })
        res.json ({message: "Registro Actualizado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 };

 //MOSTRAR REGISTROS POR USUARIO y PARTIDO
 export const getPredictionsByUser = async (req,res)=>{
    try {
         const predictions = await PredictionsModel.findAll({
             where:{idUsuario:req.params.usuario, idPartido:req.params.partido}
         });
         res.json(predictions)
     } catch (error) {
         res.json({message: error.message})
     } 
 };