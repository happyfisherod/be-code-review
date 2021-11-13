import { Favorite } from "../models/schemas/favorite.schema";
import { IFavorite } from "../models/interfaces/favorite.interface";
import { ErrorDetail } from "../utils/JsonResp";

export class FavoriteService {
    public async findAll(): Promise<IFavorite[]> {
        try {
            return await Favorite.find().lean();
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while loading the favorites`,
                description: error
            }
            throw errorDetail;
        }
    }

    public async findByProfileId(profileId: string): Promise<IFavorite[]> {
        try {
            return await Favorite.find({ profile_id: profileId });
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while loading the favorites by profile id ${profileId}`,
                description: error
            }
            throw errorDetail;
        }        
    }
}