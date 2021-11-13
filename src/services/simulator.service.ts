import { Simulator } from "../models/schemas/simulator.schema";
import { ISimulator } from "../models/interfaces/simulator.interface";
import { ErrorDetail } from "../utils/JsonResp";

export class SimulatorService {
    public async findAll(): Promise<ISimulator[]> {
        try {
            return await Simulator.find().lean();
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while loading the simulators`,
                description: error
            }
            throw errorDetail;
        }
    }

    public async findByProfileId(profileId: string): Promise<ISimulator[]> {
        try {
            return await Simulator.find({ profile_id: profileId });
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while loading the simulators by profile id ${profileId}`,
                description: error
            }
            throw errorDetail;
        }        
    }

    public async create(newSimulator: ISimulator): Promise<ISimulator> {
        try {
            return await newSimulator.save();
        } catch(error) {
            const errorDetail: ErrorDetail = {
                name: `Error while creating a simulator`,
                description: error
            }
            throw errorDetail;
        }
    }
}