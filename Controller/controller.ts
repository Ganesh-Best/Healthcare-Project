import jwt from 'jsonwebtoken';
import { payloadI } from '../structure';
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

//Generating Zoom meeting 
