// import { connectMongoDB } from "@/libs/MongoConnect";
// import userCollection from "@/models/user";


// export default async function handler(req, res) {
    
//   // res.status(201).send("Hi Server Running");
//   if (req.method !== 'POST') {
//       res.status(405).send({msg: "Only POST Reqeust Allow"});
//       return;
//     }

// const {user}= req.body;
//     try{
//       await connectMongoDB();
//       userCollection.create({user}).then((data)=>{
//         console.log(data);
//         res.status(201).send(data);
//       });
//     }catch(err){
//       console.log(err);
//       res.status(400).send({err,msg:"Something Worng"})
//     }
  
//   }

