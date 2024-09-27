import { Router } from 'express';
import { register, login, updateProfile, logout} from '../contollers/user.contoller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { multipleUpload } from '../middlewares/multer.js';
const router = Router();

router.route('/register').post(multipleUpload,register);
router.route('/login').post(login);
router.route('/profile/update').post(isAuthenticated,multipleUpload, updateProfile);
router.route('/logout').post(logout);
export default router;