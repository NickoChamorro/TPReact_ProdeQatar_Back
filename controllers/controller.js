import UsersModel from "../models/models.js";

export const getAlluser = async (req,res)=>{
    try {
        const users = await UsersModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}
//MOSTRAR UN REGISTRO
/*export const getBlog = async (req,res)=>{
   try {
    const blog = await BlogModel.findOne({
        where:{id:req.params.id}
    })
    res.json(blog)
   } catch (error) {
    res.json({message: error.message})
   } 
}*/
//crear UN REGISTRO
/* export const createBlog = async (req,res)=>{
    try {
        await BlogModel.create (req.body)
        res.json ({message: "Registro creado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 };*/
 //actualizar un registro
 /*export const updateBlog =async (req,res)=>{
    try {
        await BlogModel.update(req.body,{
            where:{id:req.params.id} 
        })
        res.json ({message: "Registro Actualizado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 }*/
//borrar un resgistro
/* export const deleteBlog = async (req,res)=>{
    try {
        await BlogModel.destroy({
            where:{id:req.params.id} 
        })
        res.json ({message: "Registro eliminado"})
    } catch (error) {
        res.json ({message:error.message}) 
    }
 }*/