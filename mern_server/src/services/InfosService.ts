import { HttpException } from '../middlewares/errorHandler';
import InfoModel from '../model/info';
import { HttpCode } from '../types/httpCode';
import { Info } from '../types/info';

export default {
  //데이터 생성 및 저장
  createInfo: async (info: Info) => {
    try {
      const result = await InfoModel.create(info);
      return result;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB 서버 에러');
    }
  },

  //id로 중복 여부 확인
  getInfo: async (id: number) => {
    try {
      const result = await InfoModel.findOne({ id });
      return result;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB 서버 에러');
    }
  },

  getInfos: async () => {
    try {
      const result = await InfoModel.find({}, { _id: 0, __v: 0 });
      return result;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB 서버 에러');
    }
  },
};
