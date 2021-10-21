import { Request, Response, NextFunction } from 'express';

import { BadRequest } from '../exceptions/http-exception';
import { UserRequest, UserData } from '../models/User';
import { userService } from '../services/registration-service';

export const registrationController = {
  async newUser(
    req: Request<unknown, unknown, UserRequest>,
    res: Response<UserData>,
    next: NextFunction
  ): Promise<void> {
    const regBody = req.body;
    const data: any = await userService(regBody).catch(error => {
      next(new BadRequest(error));
    });
    if (data) {
      res.status(200).json(data);
    }
  },
};
