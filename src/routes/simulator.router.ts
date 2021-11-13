import { Router } from "express";

import { SimulatorController } from "../controllers/simulator.controller";
import { SimulatorService } from "../services/simulator.service";

export const router: Router = Router();

const simulatorController: SimulatorController = new SimulatorController(new SimulatorService());

router.get("/api/simulator", (req, res) => simulatorController.getAllSimulators(req, res));
router.get("/api/simulator/:profile_id", (req, res) => simulatorController.getSimulatorsByProfileId(req, res));
router.post("/api/simulator/:profile_id", (req, res) => simulatorController.createSimulator(req, res));
