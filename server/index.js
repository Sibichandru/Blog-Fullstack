require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 3111;

app.use(express.static("public"));

app.listen(PORT,()=>{
	console.log(`listening to port ${PORT}`);
})