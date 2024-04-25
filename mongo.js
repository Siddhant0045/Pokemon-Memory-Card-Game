import mongoose from "mongoose";
mongoose.connect("mongodb+srv://siddhantshinde0612:siddhant45@cluster0.sl0atk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log(e);
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

export default collection;