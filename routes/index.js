// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
  res.render('index', data);
  	/*{
	"friends": [
		{
			"name": "Doug Engelbart",
			"description": "Has awesome pet mice",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"			
		},
		{
			"name": "Ivan Sutherland",
			"description": "Great at sketching",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"			
		},
		{
			"name": "Lucy Suchman",
			"description": "Loves Trukese navigators",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lucy_Suchman.jpeg"			
		},
		{
			"name": "Vannevar Bush",
			"description": "Has stellar associative memory",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg"			
		},
		{
			"name": "Grace Hopper",
			"description": "Only friend with a Navy ship named after them",
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/220px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
		},
		{
			"name": "Allen Newell",
			"description": "Really into psychology",
			"imageURL": "data:image/jpeg;base64,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"
		}
	]
  });*/
};