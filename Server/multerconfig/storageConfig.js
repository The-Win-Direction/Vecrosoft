const multer = require("multer");

// Storage config for profile
const profileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/profile");
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}.${file.originalname}`;
        callback(null, filename);
    }
});

// Storage config for posts
const postStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/post");
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}.${file.originalname}`;
        callback(null, filename);
    }
});

// Storage config for articles
const articleStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/article");
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}.${file.originalname}`;
        callback(null, filename);
    }
});

// File filter to allow only images
const filefilter = (req, file, callback) => {
    if (file.mimetype.startsWith("image/")) {
        callback(null, true);
    } else {
        callback(null, false);
        return callback(new Error("Only image files are allowed"));
    }
};

// Exporting the multer configurations
exports.profileUpload = multer({
    storage: profileStorage,
    fileFilter: filefilter
});

exports.articleUpload = multer({
    storage: articleStorage,
    fileFilter: filefilter
});

exports.postUpload = multer({
    storage: postStorage,
    fileFilter: filefilter
});
