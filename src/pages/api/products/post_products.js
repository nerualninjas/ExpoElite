// import { connectMongoDB } from "@/libs/MongoConnect";
// import productsCollection from "@/models/products";

// export default async function handler(req, res) {
    
//   // res.status(201).send("Hi Server Running");
//   if (req.method !== 'POST') {
//       res.status(405).send({msg: "Only Post Reqeust Allow"});
//       return;
//     }
    
//     const {product}=req.body;

//     try{
//       await connectMongoDB();
//       productsCollection.create({product}).then((data)=>{
//         console.log(data);
//         res.status(201).send(data);
//       });
//     }catch(err){
//       console.log(err);
//       res.status(400).send({err,msg:"Something Worng"})
//     }
  
//   }