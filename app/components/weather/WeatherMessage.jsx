var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function() {
// 		var {temp, location} = this.props;

// 		return(
// 			<p>The temperature is {temp} in {location}</p>
// 		);
// 	}
// });

var WeatherMessage = ({temp, location}) => {
	return (
		<p> The temperature is {temp} in {location}</p>
	)
};

module.exports = WeatherMessage;