const express = require("express");
const dotenv = require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/contact", require("./routes/contactRoute"))

app.listen(PORT,()=>{
    console.log(`Server is running on port 👌 ${PORT}`);
})