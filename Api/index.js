const app = require('./src/services/express.service');
const mongoose = require('./src/services/mongoose.service');


app.get("/",(req,res)=>{
    res.send("API IS LOADED");
});
mongoose.connect();