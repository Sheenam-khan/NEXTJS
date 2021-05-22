const express = require("express");
const mongoose=require('mongoose') ;
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); 

const cors = require('cors')
const URI="mongodb+srv://seenam:seenam@cluster0-djew2.mongodb.net/next?retryWrites=true&w=majority"
const userRoutes=require('./controllers/userRoutes')
const employeeRoutes=require('./controllers/employeeRoutes') 
//connection
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to database"))
.catch(err=>console.log('error while connecting db ',err))




app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/user',userRoutes)
app.use('/employee',employeeRoutes)

const PORT=process.env.PORT || 5000
app.listen(PORT, () => {console.log('server is running on port',PORT)});