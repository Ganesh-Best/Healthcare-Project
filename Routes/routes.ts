import express from 'express';
import { generateZoomJWT,generateZoomMeeting} from '../Controller/controller';
import { meetingI, sessionI } from '../structure'; 
import { Session } from '../DB/model';

const router = express.Router();

//Need to Add middleware for authentication(so that right person can schedule meeting :)

router.post('/schedule', async(req,res)=>{
 
     const {doctorId,patientId,duration,scheduledAt , topic }  = req.body ; 
     
     const meetingInfo : any    =   await  generateZoomMeeting(topic,'2024-10-16T14:00:00Z',duration);
    

  let isSave : sessionI  =  await Session.create({doctorId,patientId,meetingId:meetingInfo.id ,topic:meetingInfo.topic,meetingLink:meetingInfo.start_url,createdAt:meetingInfo.created_at,scheduledAt:meetingInfo.start_time,password:meetingInfo.password })     
  
   if(isSave != null)   
     res.json({message:"Meeting has been schudule ,",isSave});

   else
    res.status(400).json({message:"unable to schedule Meeting :"});
})

export default router ;
