import mongoose from "mongoose";

export const connectDatabase = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/myProtfolio").then((c) =>{
        console.log(`MongoDb connected to:  ${c.connection.host}` );
    }).catch((e)=>{
        console.log(e);
    })
}
