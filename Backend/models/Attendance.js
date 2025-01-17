// const mongoose = require('mongoose')
// const { Schema } = mongoose;

// const AttendSchema = new Schema({
//   user :{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'user'
//   }
//   ,name :{
//     type:String,
//     required:true
//   }
//   ,room_no:{
//     type:Number,
//     required:true
//   },
//   location:{
//     type:String,
//     required:true
//   },
//   status:{
//     type:String,
//     required:true
//   },date:{
//     type:Date,
//     default:Date.now
//   }
// });
// mongoose.pluralize(null);
// module.exports = mongoose.models.attendance || mongoose.model('attendance', AttendSchema);




const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  studentId: String,
  date: Date,
  status: { type: String, enum: ["Present", "Absent"] },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
