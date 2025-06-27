import mongoose from "mongoose";
const applicationScehma=new mongoose.Schema({
    job:{
        type:mongoose.Schema.ObjectId,
        ref:'Job',
        required:true
    },
    applicant:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'  
    },
},{timestamps:true});

export const Application=mongoose.model('Application',applicationScehma)