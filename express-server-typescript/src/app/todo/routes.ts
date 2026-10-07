import { Router } from "express";
import TodoController from "./controller.js";

const todoRouter = Router();
const controller = new TodoController();

todoRouter.get('/',controller.handleGetTodos.bind(controller))

todoRouter.post('/',controller.handleCreateTodo.bind(controller))

export default todoRouter;