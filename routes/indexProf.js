var express = require('express')	//requirements for the code
var router = express.Router()		//requirements for the code




router.get('/', function (req, res) {	//requirements for the code

	const userName = req.cookies.graph_user_name;

	if(userName){
  	const userName = req.cookies.graph_user_name; //gets the username from the email
  	var layout = './Professor/indexProf';
  	let parms = { title: 'profHome', active: { home: true }, urlReservation: '/reservation', urlProfApp: '/Appointments'};

	//res.send('Testing Professor Home');
	parms.user = userName;
	res.render(layout, parms);
	}

	else{
		res.redirect('/');
	}
})

module.exports = router;			//requirements for the code
