import mongoose, {Document} from "mongoose";

export interface userI extends Document {
   name:string;
   email:string;
   role:string;
   _id:string;
}

export interface sessionI extends Document {
 doctorId:mongoose.Types.ObjectId;
 patientId:mongoose.Types.ObjectId;
 meetingId:string;
 meetingLink:string;
 scheduledAt:Date;
 createdAt:Date;
 password:string;
 topic:string;
 duration:string;
}

export interface payloadI {
     iss:string;
     exp:number;
}

export interface meetingI{
    topic: string;
    type: number;
    start_time: string;
    duration: number; 
    timezone: string;
    settings: {
        host_video: boolean;
        participant_video:  boolean;
        join_before_host:  boolean;
        mute_upon_entry:  boolean;
        waiting_room:  boolean;
    }

}

export interface generateZoomJWTI{
    access_token:string;
    expires_in:number;
    scope:string;
    api_url:string;
}



