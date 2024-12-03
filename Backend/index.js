// require('dotenv').config()
// const connectToMongo = require('./db')
// const express = require('express')
// const multer = require('multer')

// connectToMongo();
// const app = express()
// var cors = require('cors');
// const cookieParser = require("cookie-parser");
// var bodyParser = require('body-parser');
// app.use(cors({ origin:true, credentials:true }));
// app.use(cookieParser());
// app.use(bodyParser.json());
// // app.use(cors());
// const port = 5000
// app.use(express.json())
// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/g',require('./routes/gate_stoken'))
// app.use('/api/c',require('./routes/complains_route'))
// app.use('/api/b',require('./routes/room_allot'))
// app.use('/api/a',require('./routes/attendence'))
// app.use('/api/f',require('./routes/feedback'))



// app.use('/api/admin_auth',require('./routes/admin_routes/admin_auth'))
// app.use('/api/ad',require('./routes/admin_routes/getallusers'))
// app.use('/api/ud',require('./routes/admin_routes/updates'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })













// app.listen(port, () => {
//   console.log(`iNotebook backend listening on port http://localhost:${port}`)
// })



require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const attendanceRouter = require('./routes/attendence');

connectToMongo();

const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: true, credentials: true }));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/g', require('./routes/gate_stoken'));
app.use('/api/c', require('./routes/complains_route'));
app.use('/api/b', require('./routes/room_allot'));
// app.use('/api/a', require('./routes/attendence'));
app.use('/api/f', require('./routes/feedback'));

app.use('/api/admin_auth', require('./routes/admin_routes/admin_auth'));
app.use('/api/ad', require('./routes/admin_routes/getallusers'));
app.use('/api/ud', require('./routes/admin_routes/updates'));

// Mess Off Routes
app.use('/api/mess-off', require('./routes/mess-off')); // Add this line
app.use('/api/attendence', attendanceRouter);

// Attendance Routes
// app.use('/api/attendence', require('./routes/attendence')); // Add this line

// // Test Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');


});

// Server Start
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
