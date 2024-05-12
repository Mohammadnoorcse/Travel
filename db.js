
import mongoose from "mongoose";

const URI = "mongodb+srv://aminur1514010:M6tssvMcY3yPNSQG@cluster0.asgzvgz.mongodb.net/OYO?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async ()=>{
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("DB Connected ...")
};

export default connectDB;