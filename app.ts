import express from 'express';
import dotenv from 'dotenv' ;
import { connect } from './DB/db';

dotenv.config()

connect();

const app  = express();


app.get('/',(req,res)=>{

 res.json({message:"Server is Running :"});
})


app.listen(process.env.PORT,()=>{
 
    console.log('Server is Running :',process.env.PORT)

})
