var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return(
// 			<h3>About container</h3>
// 		);
// 	}
// });

var About = (props) => {
	return(
		<section>
			<h3>About</h3>
			<p>Welcome to the about page</p>
		</section>
	)
};

module.exports = About;