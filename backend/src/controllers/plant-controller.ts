import { Request, Response, NextFunction } from 'express';
import { InternalServerError } from '../exceptions/http-exception';
import { PlantData  } from '../models/Plant';
import { plantService } from '../services/plant-service';

export const plantController = {
  async getAllPlants(
    req: Request<any, any, any, any>,
    res: Response<PlantData[]>,
    next: NextFunction
  ): Promise<void> {
    const data = await plantService.getPlants().catch(error => {
      next(new InternalServerError(error));
    });
    if (data) {
      res.status(200).json(data);
    };
  },
  async upvotePlantPostById(
    req: Request<{plantId : number}, any, any, any>,
    res: Response<PlantData>,
    next: NextFunction
  ): Promise<void> {
    const data = await plantService.upvotePlantPostById({plantId: req.params.plantId}).catch(error => {
      next(new InternalServerError(error));
    });
    if (data) {
      res.status(200).json(data);
    };
  },

  async downvotePlantPostById(
    req: Request<{plantId : number}, any, any, any>,
    res: Response<PlantData>,
    next: NextFunction
  ): Promise<void> {
    const data = await plantService.downvotePlantPostById({plantId: req.params.plantId}).catch(error => {
      next(new InternalServerError(error));
    });
    if (data) {
      res.status(200).json(data);
    };
  }

}