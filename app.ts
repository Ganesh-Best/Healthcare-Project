import express from 'express';
import dotenv from 'dotenv' ;
import { connect } from './DB/db';
import router from './Routes/routes';
dotenv.config()

connect();

const app  = express();

//If there any meeting in URL it redirect to router route

app.use(express.json())

app.use('/patient/meeting',router);

app.get('/',(req,res)=>{

 res.json({message:"Server is Running :"});
})


app.listen(process.env.PORT,()=>{
 
    console.log('Server is Running :',process.env.PORT)

})
