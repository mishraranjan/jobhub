import { Router } from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../contollers/company.controller.js';
import { multipleUpload } from '../middlewares/multer.js';
const router = Router();

router.route('/register').post(isAuthenticated,registerCompany);
router.route('/get').get(isAuthenticated,getCompany);
router.route('/get/:id').get(isAuthenticated, getCompanyById);
router.route('/update/:id').put(isAuthenticated,multipleUpload, updateCompany);
export default router;