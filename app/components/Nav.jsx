var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
// 	render: function() {
// 		return(
// 			<header>
// 				<h2>React Weather</h2>
// 				<IndexLink to='/' activeClassName='active'>Get Weather</IndexLink>
// 				<Link to='/about' activeClassName='active'>About</Link>
// 				<Link to='/examples' activeClassName='active'>Examples</Link>
// 			</header>
// 		);
// 	}
// });

var Nav = (props) => {
	return (
		<header>
			<h2>React Weather</h2>
			<IndexLink to='/' activeClassName='active'>Get Weather</IndexLink>
			<Link to='/about' activeClassName='active'>About</Link>
			<Link to='/examples' activeClassName='active'>Examples</Link>
		</header>
	)
};

module.exports = Nav;