import { Profile } from "../models/schemas/profile.schema";
import { IProfile } from "../models/interfaces/profile.interface";
import { ErrorDetail } from "../utils/JsonResp";

export class ProfileService {
    public async findAll(): Promise<IProfile[]> {
        try {
            return await Profile.find().lean();
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while loading the profiles`,
                description: error
            }
            throw errorDetail;
        }
    }

    public async checkIfExistsOr(email: string, nickname: string): Promise<boolean> {
        try {
            const profile = await Profile.findOne({
                $or: [{ email }, { nickname }],
            }).exec();

            return !profile ? false : true;
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while checking if the profile exists by email ${email} or nickname ${nickname}`,
                description: error
            }
            throw errorDetail;
        }
    }

    public async create(newProfile: IProfile): Promise<IProfile> {
        try {
            return await newProfile.save();
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while creating a profile`,
                description: error
            }
            throw errorDetail;
        }
    }
}