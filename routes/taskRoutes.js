import express from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controller/taskController.js";

const router = express.Router();

router.post('/',createTask);
router.get('/',getAllTasks);
router.get('/:id',getTaskById)
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);

export default router;