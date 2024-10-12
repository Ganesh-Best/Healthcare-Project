import express from 'express';
import { generateZoomJWT,generateZoomMeeting } from '../Controller/controller';
import { meetingI } from '../structure'; 

const router = express.Router();

//Need to Add middleware for authentication(so that right person can schedule meeting :)

router.post('/schedule', async(req,res)=>{


    // const {docterId,patientId,duration,scheduledAt , topic }  = req.body ; 
    
    console.log('Hitting meeting routes:');

      generateZoomMeeting('test meeing','2024-10-12T14:00:00Z','30');

     res.json({message:"meeting schedule route working  fine :"});


})

export default router ;
