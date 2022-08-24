import { Router } from "express";

import { getUser } from "../../controllers/users.controller";
import verifyTokenExists from "../../middlewares/verifyTokenExists";

const router = Router();

router.get("/me", verifyTokenExists, getUser);

export default router;
