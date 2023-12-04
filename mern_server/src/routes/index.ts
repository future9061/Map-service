import express from 'express';
import InfosController from '../controllers/InfosController';
import searchController from '../controllers/searchController';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'health check!!',
  });
});

//위치 데이터 저장하는 router
router.post('/infos', InfosController.createInfo);

//전체 위치 데이터 조회
router.get('/infos', InfosController.getInfos);

//키워드 검색
router.get('/search', searchController.searchKeyWord);

export default router;
