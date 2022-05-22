const express = require('express');
const mongoDB = require('./config/db');
const PostsModel = require('./models/PostsModel');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');


const connectDB = require('./config/db');
const PostRouter = require('./routes/PostRouter');
connectDB();

const PORT = process.env.PORT || 5000;
 
// app.use(express.json());
// app.use(express.static('public'));
var awesome_instance = new PostsModel({ name: 'awesome' });

// Save the new model instance, passing a callback
// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

app.use('/posts', PostRouter)

app.get('/', (req, res) => {
  var data= {
    'status' :  true,
    'data' : 'Success'};
  res.json(data).send();
    //  res.send(data)
});


app.listen(port, () => console.log(`Application live on ${port}`));