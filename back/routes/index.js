import { Router } from "express";
import userRoutes from './userRoute.js'
import transactionRoutes from './transectionRoutes.js'

const router = Router()

router.use("/user",userRoutes)
router.use("/trasaction",transactionRoutes)


export default router;