import express from "express";
import { Application } from "express";
import { env } from "../env.js";
import todoRouter from "./todo/routes.js";

// Routes


export function createServerApplication(): Application {
    const app = express()

    app.use(express.json())
    app.use('/todos', todoRouter)



    return app
}