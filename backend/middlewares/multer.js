// multerConfig.js
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Allow multiple fields: one for resume and one for profile photo
export const multipleUpload = upload.fields([
    { name: 'file', maxCount: 1 },       // For resume
    { name: 'profilePhoto', maxCount: 1 } // For profile photo
]);
