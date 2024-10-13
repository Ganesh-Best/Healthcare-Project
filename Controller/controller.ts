import { meetingI ,generateZoomJWTI} from '../structure';

import Axios from 'axios'


//Generating JWT for zoom meeting :

export const generateZoomJWT =  async() => {

     const URL = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ZOOM_APPID}`

        const response:{data : generateZoomJWTI} =   await  Axios.post(URL,{},{
                auth:{
                    username:process.env.ZOOM_API_KEY as string,
                    password:process.env.ZOOM_API_SECRET as string
                }
              })

              console.log('Basic Auth with jwt : ',response.data.access_token);

         return response.data.access_token ;
}



//Generating Zoom meeting  and return with promise of meeting Info :
export const generateZoomMeeting =  async(topic:string,scheduledAt:string,duration:string) =>{

    //    const URL = `https://api.zoom.us/v2/users/${process.env.Zoom_USER}/meetings`
       
      try {

         const token = await generateZoomJWT();

         const URL = `https://api.zoom.us/v2/users/me/meetings`
      
          const meetingDetails : meetingI = {
            
              topic: topic,
              type: 2, // Scheduled meeting
              start_time: new Date(scheduledAt).toISOString(),
              duration: Number(duration), // in minutes
              timezone: 'UTC',
              settings: {
                  host_video: true,
                  participant_video: true,
                  join_before_host: false,
                  mute_upon_entry: true,
                  waiting_room: true
              }
      
          }
            
                        
         const  success  =  await Axios.post(URL,meetingDetails,{
             
             headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${token} `
              }
             })

           
      
            //  console.log('Meeting created successfully:' , success)
             return success.data ;
      } catch (e) {
         console.log('unable to generate meeting: ',e)
      }
    }


    