import { Document } from "mongoose";

export interface IFavorite extends Document {
    profile_id: string;
    name: string;
    favorite1: string;
    favorite2: string;
    favorite3: string;
}
