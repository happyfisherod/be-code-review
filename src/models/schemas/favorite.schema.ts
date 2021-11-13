import mongoose from "mongoose";

import { IFavorite } from "../interfaces/favorite.interface";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: String,
    name: String,
    favorite1: String,
    favorite2: String,
    favorite3: String,
  },
  {
    timestamps: true,
  }
);

export const Favorite = mongoose.model<IFavorite>("Favorite", schema);
