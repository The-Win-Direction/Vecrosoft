const multer = require("multer");


// storage config
const profileStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads/profile")
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
});
const postStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads/post")
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
});
const articleStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads/article")
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
});

//filter
/* const filefilter = (req,file,callback)=>{
 if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image.jpeg"||file.mimetype === "image/"){
    callback(null, true)
 } else{
    callback(null,false)
    return callback(new Error("Only .png .jpg and jpeg formatted Allowed"))
 }
} */

const filefilter = (req, file, callback) => {
    if (file.mimetype.startsWith("image/")) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(new Error("Only image files are allowed"));
    }
  };
exports.pofileUpload= multer({
    storage:profileStorage,
    fileFilter:filefilter
});

exports.articleUpload = multer({
    storage:articleStorage,
    fileFilter:filefilter
});
exports.postUpload = multer({
    storage:postStorage,
    fileFilter:filefilter
});
