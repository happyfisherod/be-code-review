import { Request, Response } from "express";
import httpstatus from "http-status";

import { Profile } from "../models/schemas/profile.schema";
import { IProfile } from "../models/interfaces/profile.interface";
import { ProfileService } from "../services/profile.service";
import JsonResp from "../utils/JsonResp";

export class ProfileController {
    private profileService: ProfileService;

    constructor(profileService: ProfileService) {
        this.profileService = profileService;
    }

    public async getAllProfiles(req: Request, res: Response): Promise<Response> {
        try {
            const profiles: IProfile[] = await this.profileService.findAll();

            return res.status(httpstatus.OK).send(new JsonResp(
                true,
                "The profiles loaded successfully",
                profiles
            ));
        } catch(error) {
            return res.status(httpstatus.INTERNAL_SERVER_ERROR).send(new JsonResp(
                false,
                `Error while loading the profiles`,
                error
            ));
        }
    }

    public async createProfile(req: Request, res: Response): Promise<Response> {
        const { email, name, nickname } = req.body;

        try {
            const exists = this.profileService.checkIfExistsOr(email, nickname);

            if (exists) {
                return res.status(httpstatus.ACCEPTED).send(new JsonResp(
                    false,
                    "The profile already exists",
                    null
                ));
            }

            const newProfile: IProfile = new Profile({
                name: name,
                nickname: nickname,
                email: email,
                capital: 0,
                divisa: '',
                prefered_cryptocurrency: ''
            });

            const createdProfile = await this.profileService.create(newProfile);

            return res.status(httpstatus.OK).send(new JsonResp(
                true,
                "The profile created successfully",
                createdProfile
            ));
        } catch(error) {
            return res.status(httpstatus.INTERNAL_SERVER_ERROR).send(new JsonResp(
                false,
                `Error while creating a profile`,
                error
            ));
        }
    }
}