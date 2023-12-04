import axios from 'axios';
import dotenv from 'dotenv';
import { HttpException } from '../middlewares/errorHandler';
import { HttpCode } from '../types/httpCode';
import { SearchResponse } from '../types/SearchResponse';
dotenv.config({ path: '.env.local' });

export default {
  searchKeyword: async (keyword: string) => {
    try {
      const result = await axios.get<SearchResponse>(
        encodeURI(`https://dapi.kakao.com/v2/local/search/keyword?query=${keyword}`),
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REST_API_KEY}`,
          },
        }
      );

      const infos = result.data.documents.map((item) => {
        return {
          id: Number(item.id),
          placeName: item.place_name,
          addressName: item.address_name,
          position: {
            lat: Number(item.y),
            lng: Number(item.x),
          },
        };
      });

      return infos;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, '서버 에러');
    }
  },
};
