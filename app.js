var express = require("express"),
    bodyParser = require("body-parser"),
	mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/task_1");
var userSchema = new mongoose.Schema({
	"_Id": Object,
	firstName: String,
	lastName: String,
	email : String,
	password: String
});

var User = mongoose.model("User", userSchema);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
	res.render("home.ejs");
});

app.post('/addUser', function (req, res) {
	if (req.body.password == req.body.passCheck ) {
		User.create(req.body, function (err, users) {
			if (err) {
				console.log(err);
			} else {
				console.log(users);
			}
		});
		res.send('data received:\n' + JSON.stringify(req.body));
	} else {
		res.send( 'passwords are not matching! password: ' +JSON.stringify(req.body.password) + ' || confirm password: ' + JSON.stringify(req.body.passCheck));
	}
});

app.get("/users", function(req, res){
	User.find({}, function(err, users){
		if (err) {
				console.log(err);
				res.send(err);
			} else {
				console.log(users);
				res.send(users);
			}
		
	});
});

app.listen(3000, function(){
	console.log("Server is listening on port: 3000")
}); 