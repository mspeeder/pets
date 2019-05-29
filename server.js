var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/mongoose.js');
require('./server/models/pet.js');
require('./server/config/routes.js')(app); // last step is to import the server



app.listen(8000, function() {
    console.log("listening on port 8000");
})