import { Document } from "mongoose";

export interface IProfile extends Document {
    name: string,
    nickname: string,
    email: string,
    capital: number,
    divisa: string,
    prefered_cryptocurrency: string,
}
