import express  from 'express';

import isAuthenticated from '../middlewares/iaAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js';
import { singleUpload } from './../middlewares/multer.js';



const router=express.Router();

router.route('/register').post(isAuthenticated,registerCompany);
router.route('/get').get(isAuthenticated, getCompany);
router.route('/get/:id').get(getCompanyById)
router.route('/update/:id').put(isAuthenticated,singleUpload, updateCompany);

export default router