import { Router } from "express";

import { ProfileController } from "../controllers/profile.controller";
import { ProfileService } from "../services/profile.service";

export const router: Router = Router();

const profileController: ProfileController = new ProfileController(new ProfileService());

router.get("/api/profile", (req, res) => profileController.getAllProfiles(req, res));
router.post("/api/profile", (req, res) => profileController.createProfile(req, res));
