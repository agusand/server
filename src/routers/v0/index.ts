import { Router } from "express";

import authenticateRouter from "./authenticate.router";
import usersRouter from "./users.router";

const router = Router();

router.use("/authenticate", authenticateRouter);
router.use("/users", usersRouter);

export default router;
