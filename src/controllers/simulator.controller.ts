import { Request, Response } from "express";
import httpstatus from "http-status";

import { Simulator } from "../models/schemas/simulator.schema";
import { ISimulator } from "../models/interfaces/simulator.interface";
import { SimulatorService } from "../services/simulator.service";
import JsonResp from "../utils/JsonResp";

export class SimulatorController {
    private simulatorService: SimulatorService;

    constructor(simulatorService: SimulatorService) {
        this.simulatorService = simulatorService;        
    }

    public async getAllSimulators(req: Request, res: Response): Promise<Response> {
        try {
            const simulators: ISimulator[] = await this.simulatorService.findAll();

            return res.status(httpstatus.OK).send(new JsonResp(
                true,
                "The simulators loaded successfully",
                simulators
            ));
        } catch(error) {
            return res.status(httpstatus.INTERNAL_SERVER_ERROR).send(new JsonResp(
                false,
                `Error while loading the simulators`,
                error
            ));
        }
    }

    public async getSimulatorsByProfileId(req: Request, res: Response): Promise<Response> {
        const profileId: string = req.params.profile_id;

        try {
            const simulators: ISimulator[] = await this.simulatorService.findByProfileId(profileId);

            return res.status(httpstatus.OK).send(new JsonResp(
                true,
                "The simulators loaded successfully",
                simulators
            ));
        } catch(error) {
            return res.status(httpstatus.INTERNAL_SERVER_ERROR).send(new JsonResp(
                false,
                `Error while loading the simulators by profile id ${profileId}`,
                error
            ));
        }
    }

    public async createSimulator(req: Request, res: Response): Promise<Response> {
        const profileId: string = req.params.profile_id;

        try {
            const newSimulator: ISimulator = new Simulator({
                ...req.body,
                profileId,
            });

            const createdSimulator = await this.simulatorService.create(newSimulator);

            return res.status(httpstatus.OK).send(new JsonResp(
                true,
                "The simulator created successfully",
                createdSimulator
            ));
        } catch(error) {
            return res.status(httpstatus.INTERNAL_SERVER_ERROR).send(new JsonResp(
                false,
                `Error while creating a simulator`,
                error
            ));
        }        
    }
}