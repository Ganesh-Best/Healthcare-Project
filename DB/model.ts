
import mongoose ,{Schema , Document} from "mongoose";
import { sessionI, userI } from "../structure";


//Defining User schema as field are same for both Doctor and Patient Model :

const userSchema : Schema  = new mongoose.Schema<userI>({

    name:{type:String, required:true},
    role:{type:String,required:true,enum:['docter','patient']},
    email:{type:String,required:true},

})


const sessionSchema : Schema<sessionI>  = new mongoose.Schema({
 doctorId:{type:Schema.Types.ObjectId,ref:'Doctor',required:true},
 patientId:{type:Schema.Types.ObjectId,ref:'Patient',required:true},
 meetingId:{type:String,required:true},
 meetingLink:{type:String,required:true},
 scheduledAt:{type:Date,required:true},
 createdAt:{type:Date ,default:Date.now},
 password:{type:String,required:true},

//  topic:{type:String,required:true}
})

                          
//defining and exporting user Model :
export const  Patient =  mongoose.model<userI>('patient',userSchema);

export const  Doctor = mongoose.model<userI>('doctor',userSchema);

//defining and exporting session Model:
export const Session = mongoose.model<sessionI>('session',sessionSchema);