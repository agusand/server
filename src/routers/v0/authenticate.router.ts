import { Router } from "express";

import { login } from "../../controllers/authenticate.controller";

const router = Router();

router.post("/", login);

export default router;
