// const { Schema, model } = require('mongoose');

// // ------------------------------------UsingSchema----------------------------------------
// const UserSchema = new Schema({
//     userName: {
//       type: String,
//       required: true,
//     },
//     userEmail: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },
//     userRole: {
//       type: String,
//       enum: ['Admin', 'User', 'Manager'], 
//       required: true,
//     }
//   });

// const userCollection = model('users', UserSchema);

// module.exports=userCollection;