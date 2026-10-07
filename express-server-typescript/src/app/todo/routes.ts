import { Router } from "express";
import TodoController from "./controller.js";

const router = Router();
const controller = new TodoController();

router.get('/',controller.handleGetTodos)

router.post('/',(req,res)=>{
    return res.status(200).json({message:'Hello ji kaise ho ?'})
})

router.put('/:id',(req,res)=>{
    return res.status(200).json({message:'Hello ji kaise ho ?'})
})

router.get('/:id',(req,res)=>{
    return res.status(200).json({message:'Hello ji kaise ho ?'})
})

router.delete('/:id',(req,res)=>{
    return res.status(200).json({message:'Hello ji kaise ho ?'})
})

export default router;