import mongoose from "mongoose";
const companyScehma=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unqiue:true
    },
    description:{
        type:String,
        
    },
    website:{
        type:String,
        
    },
    location:{
        type:String,
        
    },
    logo:{
        type:String,
        
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    
},{timestamps:true});

export const Company=mongoose.model('Company',companyScehma)