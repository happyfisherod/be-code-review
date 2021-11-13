import { Router } from "express";

import { FavoriteController } from "../controllers/favorite.controller";
import { FavoriteService } from "../services/favorite.service";

export const router: Router = Router();

const favoriteController: FavoriteController = new FavoriteController(new FavoriteService());

router.get("/api/favorite", (req, res) => favoriteController.getAllFavorites(req, res));
router.get("/api/favorite/:profile_id", (req, res) => favoriteController.getFavoritesByProfileId(req, res));
