import { Request, Response } from "express";
import httpstatus from "http-status";

import { IFavorite } from "../models/interfaces/favorite.interface";
import { FavoriteService } from '../services/favorite.service';
import JsonResp from "../utils/JsonResp";

export class FavoriteController {
    private favoriteService: FavoriteService;

    constructor(favoriteService: FavoriteService) {
        this.favoriteService = favoriteService;
    }

    public async getAllFavorites(req: Request, res: Response): Promise<Response> {
        try {
            const favorites: IFavorite[] = await this.favoriteService.findAll();

            return res.status(httpstatus.OK).send(new JsonResp(
                true,
                "The favorites loaded successfully",
                favorites
            ));
        } catch(error) {
            return res.status(httpstatus.INTERNAL_SERVER_ERROR).send(new JsonResp(
                false,
                `Error while loading the favorites`,
                error
            ));
        }
    }

    public async getFavoritesByProfileId(req: Request, res: Response): Promise<Response> {
        const profileId: string = req.params.profile_id;

        try {
            const favorites: IFavorite[] = await this.favoriteService.findByProfileId(profileId);

            return res.status(httpstatus.OK).send(new JsonResp(
                true,
                "The favorites loaded successfully",
                favorites
            ));
        } catch(error) {
            return res.status(httpstatus.INTERNAL_SERVER_ERROR).send(new JsonResp(
                false,
                `Error while loading the favorites by profile id ${profileId}`,
                error
            ));
        }
    }
}