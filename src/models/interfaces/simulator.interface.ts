import { Document } from "mongoose";

export interface ISimulator extends Document {
    profile_id: string,
    dateRecorded: Date,
    cryptocurrency: string,
    euros: number,
    price: number,
    quantity: number,
}
