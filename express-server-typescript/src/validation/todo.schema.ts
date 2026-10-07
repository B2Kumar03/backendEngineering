import {z} from "zod";
const todoSchema = z.object({
    id: z.string().describe("The id of the todo"),
    title: z.string().describe("The title of the todo"),
    description: z.string().optional().describe("The description of the todo"),
    isCompleted: z.boolean().default(false).describe("The completed status of the todo"),
})

export type Todo = z.infer<typeof todoSchema>;

// export interface ITodo {
//     id: string;
//     title: string;
//     description: string;
//     isCompleted: boolean;
// }