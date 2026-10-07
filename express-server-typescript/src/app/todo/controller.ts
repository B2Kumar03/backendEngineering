import type { Request, Response } from "express";
import { Todo } from "../../validation/todo.schema.js";
import {todoSchema} from "../../validation/todo.schema.js";
import { success } from "zod";
class TodoController {
   private _db:Todo[]
   constructor() {
    this._db = [];
   }

   public handleGetTodos = (req:Request,res:Response) => {
    const todos = this._db;
    return res.json({todos});
   }
   public async handleCreateTodo(req:Request,res:Response) {

     try {
       const unvalidatedData = req.body;
       const validatedData = await todoSchema.parseAsync(unvalidatedData);
       this._db.push(validatedData);
       return res.status(201).json({success:true,data:{todo:validatedData}});
     } catch (error) {
        return res.status(400).json({error:(error as Error).message});
     }


   }
   public async handleUpdateTodo(req:Request,res:Response) {
    try {
       const unvalidatedData = req.body;
       const validatedData = await todoSchema.parseAsync(unvalidatedData);
       this._db.push(validatedData);
       return res.status(201).json({success:true,data:{todo:validatedData}});
     } catch (error) {
       return res.status(400).json({error:(error as Error).message});
     }
   }
   public async handleDeleteTodo(req:Request,res:Response) {
    try {
       const unvalidatedData = req.body;
       const validatedData = await todoSchema.parseAsync(unvalidatedData);
       this._db.push(validatedData);
       return res.status(200).json({success:true,data:{todo:validatedData}});
     } catch (error) {
       return res.status(400).json({error:(error as Error).message});
     }
   }
   public async handleGetTodoById(req:Request,res:Response) {
    try {
       const unvalidatedData = req.body;
       const validatedData = await todoSchema.parseAsync(unvalidatedData);
       this._db.push(validatedData);
       return res.status(200).json({success:true,data:{todo:validatedData}});
     } catch (error) {
       return res.status(400).json({error:(error as Error).message});
     }
   }
}

export default TodoController;
