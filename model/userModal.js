const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
userName : {
    type: 'String', 
    require: [true,"Please add username"]
},
email : {
    type:'String' ,     
    unique: [true,"Email already taken"]
},
password: {
    type:'String',
    require: [true,"Please add user password"] 
}
},{
    timestamps : true
})

module.exports = mongoose.model("User", userSchema)
