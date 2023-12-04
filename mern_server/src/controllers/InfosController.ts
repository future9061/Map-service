import { NextFunction, Request, Response } from 'express';
import { Info } from '../types/info';
import InfosService from '../services/InfosService';
import { HttpException } from '../middlewares/errorHandler';
import { HttpCode } from '../types/httpCode';

export default {
  createInfo: async (req: Request, res: Response, next: NextFunction) => {
    const info = req.body as Info;

    try {
      const target = await InfosService.getInfo(info.id);
      if (target) throw new HttpException(HttpCode.CONFLICT, '중복된 데이터');

      await InfosService.createInfo(info);
      res.status(HttpCode.OK).json({
        message: 'success',
      });
    } catch (error) {
      next(error);
    }
  },

  getInfos: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await InfosService.getInfos();
      res.status(HttpCode.OK).json({
        message: 'success',
        data,
      });
    } catch (error) {
      next(error);
    }
  },
};
