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
			<p>Welcome to React Weather. This web application uses <a href='https://facebook.github.io/react' target='_blank'>React</a> and <a href='https://openweathermap.org' target='_blank'>OpenWeatherMap</a> to display the temperature in different cities.</p>
			<a href='https://github.com/Nesiehr/react-weather' target="_blank">Link to the github repo</a>
		</section>
	)
};

module.exports = About;