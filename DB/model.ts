
import mongoose ,{Schema , Document} from "mongoose";
import { sessionI, userI } from "../structure";


//Defining User schema :

const userSchema : Schema  = new mongoose.Schema<userI>({

    name:{type:String, required:true},
    role:{type:String,required:true,enum:['docter','patient']},
    email:{type:String,required:true}

})


const sessionSchema : Schema  = new mongoose.Schema<sessionI>({
 docterId:{type:Schema.Types.ObjectId,ref:'User',required:true},
 patientId:{type:Schema.Types.ObjectId,ref:'User',required:true},
 meetingId:{type:String,required:true},
 meetingLink:{ype:String,required:true},
 scheduledAt:{ype:Date,required:true},
 createdAt:{type:Date ,default:Date.now}
})

                          
//defining and exporting user Model :
export const  User =  mongoose.model<userI>('user',userSchema);


//defining and exporting session Model:
export const Session = mongoose.model<sessionI>('Session',sessionSchema);