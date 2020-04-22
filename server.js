var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var path = require('path');
var PORT= process.env.PORT || 5000;
var lozad = require('lozad');

// Ejs
// ================================================================================================


app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');





app.use(express.static(__dirname + '/public'));

app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/whatInput', express.static('node_modules/what-input/dist'));
app.use('/foundation', express.static('node_modules/foundation-sites/dist'));
app.use('/', require(__dirname + '/routes/html-routes'));




// require("./routes/api-routes.js")(app);




app.listen(PORT, console.log("server start on " + PORT));