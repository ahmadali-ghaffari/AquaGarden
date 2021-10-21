import { Request, Response, NextFunction } from 'express';

import { BadRequest } from '../exceptions/http-exception';
import { UserRequest} from '../models/User';
import { loginService } from '../services/login-service';

export const loginController = {
  async checkUserData(
    req: Request<unknown, unknown, UserRequest>,
    res: Response<unknown>,
    next: NextFunction
  ): Promise<void> {
    const regBody = req.body;
    const data: any = await loginService(regBody).catch(error => {
      next(new BadRequest(error));
    });
    if (data) {
      res.status(200).json(data);
    };
  },
};
