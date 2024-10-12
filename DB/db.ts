import mongoose  from "mongoose" ;



export const connect   =  async () => {
 
   try {
    
 const connection =  await mongoose.connect(process.env.DB_URL as string,{minPoolSize:10})
  
   } catch (error) {
     console.log('Unable to connect with DB :', error)
   }


}