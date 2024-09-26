import { Router } from 'express';
import { register, login, updateProfile, logout} from '../contollers/user.contoller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';
const router = Router();

router.route('/register').post(singleUpload,register);
router.route('/login').post(login);
router.route('/profile/update').post(isAuthenticated,singleUpload, updateProfile);
router.route('/logout').post(logout);
export default router;