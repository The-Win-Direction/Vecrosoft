const bcrypt = require("bcryptjs");
const userDB = require("../models/userSchema");
const postDB = require("../models/postSchema");
const articleDB = require("../models/articleSchema");
const upload = require("../multerconfig/storageConfig");
//api
//signUp
exports.signUpApi = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    if (!fname || !lname || !email || !password) {
      res.status(422).json({ message: "fill all the details" });
    }
    let user = await userDB.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new userDB({
      fname,
      lname,
      email,
      password,
    });

    await user.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

//signIn
exports.signInApi = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ message: "fill all details" });
    }

    let user = await userDB.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(422).json({ message: "Invalid details" });
      } else {
        /*  user.tokens = user.tokens.filter(tokenDoc => {
            try {
              jwt.verify(tokenDoc.token, keysecret);
              return true;
            } catch (err) {
              return false;
            }
          })newPost */

        const token = await user.generateAuthToken();
        //console.log(token);
        if (!token) {
          res.status(500).json({ message: "Server error try again" });
        }
        /*  res.cookie("usercookie", token, {
          expires: new Date(Date.now() + 9000000),
          httpOnly: true,
        });  */
        const result = {
          user,
          token,
        };
        res.status(201).json({ status: 201, result });
      }
    } else {
      res.status(401).json({ status: 401, message: "invalid details" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error try again" });
  }
};

//validation api

exports.validationApi = async (req, res) => {
  try {
    const validUserOne = await userDB.findOne({ _id: req.userId });
    res.status(201).json({ status: 201, validUserOne });
  } catch (err) {
    res.status(401).json({ status: 401, err });
  }
};

// create post api

exports.createPostApi = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;
    console.log(caption, file);
    if (!file) {
      return res.status(400).json({ message: "Please upload a file" });
    }

    const imageUrl = `/uploads/post/${file.filename}`;
    console.log(imageUrl);

    const newPost = new postDB({
      user_id: req.userId,
      content: caption,
      createdDate: Date.now(),
      imageUrl: imageUrl,
      comments: [],
      likes: [],
    });

    console.log("i am here");
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    res.status(500).json({ status: 500, message: "server error", err });
  }
};

// get posts api

exports.getPostsApi = async (req, res) => {
  try {
    //

    const posts = await postDB.find()
      .populate("user_id", "fname lname profile_pic_url") 
      .populate("likes", "fname lname profile_pic_url") 
      .populate("comments.user_id", "fname lname profile_pic_url") 
   // console.log(posts,posts.length);
    
    res.status(200).json({ status: 200, posts ,userId:req.userId});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: 500, message: "Server error" });
  }
};


//get viewProfileApi
exports.viewProfileApi = async (req, res) => {
  try {
    const {
      _id,
      fname,
      lname,
      email,
      created_at,
      updated_at,
      bio,
      phone_number,
      profession,
      profile_pic_url,
    } = req.rootUser;
    const user = {
      _id,
      fname,
      lname,
      email,
      created_at,
      updated_at,
      bio,
      phone_number,
      profession,
      profile_pic_url,
    };

    console.log("use");
    
    if (!user) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }
    console.log(user);
    res.status(200).json({ status: 200, user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: 500, message: "Server error, try again" });
  }
};


// Update Profile API

exports.updateProfileApi = async (req, res) => {
  try {
    const { userId } = req;
    const {fname,lname, phone_number, bio, profession } = req.body;
    let updateData = { phone_number, bio, profession };

    if (req.file) {
      const profile_pic_url = `/uploads/profile/${req.file.filename}`;
      updateData.profile_pic_url = profile_pic_url;
    }

    const updatedUser = await userDB.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Like Post API
exports.likePostApi = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.userId;

    const post = await postDB.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const isLiked = post.likes.includes(userId);

    if (isLiked) {
      post.likes.pull(userId);
    } else {
      post.likes.push(userId);
    }

    await post.save();

    res.status(200).json({ message: "Post liked/unliked successfully", likes: post.likes.length });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

// Comment API
exports.commentPostApi = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.userId;
    const { content } = req.body;

    const post = await postDB.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const newComment = {
      user_id: userId,
      content,
      created_at: Date.now(),
    };

    post.comments.push(newComment);

    await post.save();

    res.status(200).json({ message: "Comment added successfully", comments: post.comments });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};



//get whoAmIApi
exports.whoAmIApi = async (req, res) => {
  try {

    if (!req.userId) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }
    console.log(user);
    res.status(200).json({ status: 200, userId:req.userId});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: 500, message: "Server error, try again" });
  }
};

// create article api

exports.createArticleApi = async (req, res) => {
  try {
    console.log("i am here");
    const {  heading, author,content} = req.body;
    const file = req.file;
    console.log(content,author,heading, file);
    if (!file) {
      return res.status(400).json({ message: "Please upload a file" });
    }

    const imageUrl = `/uploads/article/${file.filename}`;
    console.log(imageUrl);

    const newArticle = new articleDB({
      user_id: req.userId,
      content: content,
      heading:heading,
      author:author,
      createdDate: Date.now(),
      imageUrl: imageUrl,
      comments: [],
      likes: [],
    });

    await newArticle.save();
    res
      .status(201)
      .json({ message: "Article created successfully", article: newArticle });
  } catch (err) {
    res.status(500).json({ status: 500, message: "server error", err });
  }
};

//get article api
exports.getArticlesApi = async (req, res) => {
  try {
    const articles = await articleDB.find()
      .populate("user_id", "fname lname profile_pic_url") // Populate user details
      .populate("likes", "fname lname profile_pic_url") // Populate likes details
      .populate("comments.user_id", "fname lname profile_pic_url"); // Populate comments details

    res.status(200).json({ status: 200, articles, userId: req.userId });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: 500, message: "Server error" });
  }
};
