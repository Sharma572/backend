const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 3000;
connectDb(); // mongoDb function with mongoose 
app.use(express.json())
app.use("/contact", require("./routes/contactRoute"))
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running on port 👌 ${PORT}`);
})