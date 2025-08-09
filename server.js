const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Signroute = require('./Routes/AuthenticationRoutes/signup.js');
const loginRoute = require('./Routes/AuthenticationRoutes/login.js');
const Tokenverify = require('./Routes/Middleware/TokenVerify.js');
const EventRoute = require('./Routes/EventRoutes/EditEvent.js');
const UserDetailRoute = require('./Routes/GetDetailRoute/UserDetailRoute.js');
const EventDetailRoute = require('./Routes/GetDetailRoute/EventDetails.js');
const cors = require('cors');
const { User } = require('./Models/Models.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;
//listern
app.listen(PORT, () => console.log(`iam listerning on port ${PORT}`))
mongoose.connect('mongodb://localhost:27017/ENDTOEND')
    .then(() => console.log("DB is connected"))
    .catch((error) => console.log("DB Not Connected", error));

//routers
app.use("/api", Signroute);
app.use('/api', loginRoute);
app.use('/api',Tokenverify);

app.use('/api', EventRoute);
app.use('/user',UserDetailRoute);
app.use('/event', EventDetailRoute);