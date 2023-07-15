const asyncHandler = require("express-async-handler")
const User = require("../model/userModal")
const bcrypt = require("bcrypt")
// @desc Register User
// @route post /users/register
// @access Public
const registerUser = asyncHandler( async (req,res)=>{
  const {username,email,password} = req.body


  if(!username || !email || !password){
      res.status(400);
      throw new Error("All field are required")
  }

  const useAvailable = await User.findOne({email})
  if(useAvailable){
    res.status(400);
    throw new Error("User already register")
    
  }

  const hashPassword = await bcrypt.hash(password,10)
  

  const user = await User.create({
    username,
    password: hashPassword,
    email
  })

  console.log(`User Created : ${username} ${email} ${password}`)

  if(user){
   res.status(201).json({ _id: user._id, email: user.email })
  }else{
    res.status(400)
    throw new Error("User data not valid")
    
  }

    res.json({
      message: "Registration success"
    })
  }
)

// @desc Login User
// @route post /users/login
// @access Private
const loginUser = asyncHandler( async (req,res)=>{
  res.json({
    message: "Login success"
  })
}
)

// @desc Me 
// @route post /users/me
// @access Private
const currentUser = asyncHandler( async (req,res)=>{
  res.json({
    message: "Current User"
  })
}
)


module.exports = {registerUser,currentUser,loginUser}