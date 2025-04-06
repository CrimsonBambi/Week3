import express from 'express';
import multer from 'multer';
import createThumbnail from '../../middlewares.js';

import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
  getCatByOwnerId
} from '../controllers/cat-controller.js';

const upload = multer({dest: 'uploads/'});


const catRouter = express.Router();

catRouter.route('/').get(getCat).post(upload.single('filename'), createThumbnail, postCat);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

catRouter.route('/owner/:id').get(getCatByOwnerId);

export default catRouter;