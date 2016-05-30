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
			<h1 className='text-center'>About</h1>
			<p>Welcome to React Weather. This web application uses React and OpenWeatherMap to display the temperature in different cities.</p>
		</section>
	)
};

module.exports = About;