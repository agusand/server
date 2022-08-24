import { Router } from "express";

import v0router from "./v0/index";

const router = Router();

router.use("/v0", v0router);

export default router;
