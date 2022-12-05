import GamesModel from "../models/gamesModel.js";

//MOSTRAR TODOS LOS REGISTROS
export const getAllGames = async (req,res)=>{
    try {
        const games = await GamesModel.findAll();
        res.json(games)
    } catch (error) {
        res.json({message: error.message})
    }
};
//MOSTRAR UN REGISTRO
export const getGame = async (req,res)=>{
   try {
        const game = await GamesModel.findOne({
            where:{idPartido:req.params.id}
        });
        res.json(game)
    } catch (error) {
        res.json({message: error.message})
    } 
};

//MOSTRAR REGISTROS POR FASE
export const getGamesByStage = async (req,res)=>{
    try {
         const games = await GamesModel.findAll({
             where:{fase:req.params.stage}
         });
         res.json(games)
     } catch (error) {
         res.json({message: error.message})
     } 
 };