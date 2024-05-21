import { Router } from "express";
import { addTransection, deleteTransection, editTransaction, getAllTransection } from "../controller/transectionController.js";

const router = Router()

router.post("/get-all",getAllTransection)
router.post("/add-transection",addTransection)
router.post("/edit-transection",editTransaction)
router.post("/delete-transection",deleteTransection)


export default router