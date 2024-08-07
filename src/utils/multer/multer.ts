import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure the directory exists
const ensureDirectoryExistence = (filePath: string)=> {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../../../public/SubjectVideos/videos');
        // Ensure the directory exists
        ensureDirectoryExistence(uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
       
const subjectVideosMulter = multer({ storage });
export default subjectVideosMulter;
