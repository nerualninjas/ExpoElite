import { connectMongoDB } from "@/libs/MongoConnect";
import userCollection from "@/models/user";


export default async function handler(req, res) {
    
  // res.status(201).send("Hi Server Running");
  if (req.method !== 'GET') {
      res.status(405).send({msg: "Only get Reqeust Allow"});
      return;
    }


    try{
      await connectMongoDB();
      userCollection.find().then((data)=>{
        console.log(data);
        res.status(201).send(data);
      });
    }catch(err){
      console.log(err);
      res.status(400).send({err,msg:"Something Worng"})
    }
  
  }