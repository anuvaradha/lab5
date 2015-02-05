var data = require("../data.json");

exports.addFriend = function(req, res) {  

	var name = req.query.name;
	var description = req.query.description;

	var newFriend = {
		'name': name,
		'description': description,
		'imageURL': "http://lorempixel.com/400/400/people"
	}

	console.log("The friend name is: " + name);

	res.render('add');

	data["friends"].push(newFriend);



	console.log(data["friends"]);

	
	// Your code goes here
}