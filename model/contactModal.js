const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type : 'String',
        required: [true,"Please add the contact name"],
    },
    email:{
        type : 'String',
        required: [true,"Please add the contact email"],
    },
    Phone :{
        type:'Number',
        require : [true,"Please add the contact number"]
    }
},
{
    timestamps : true
}
)

module.exports = mongoose.model("Contact",contactSchema)