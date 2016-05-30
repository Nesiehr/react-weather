var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render: function() {
// 		return(
// 			<h3>Examples component</h3>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<section>
			<h1 className='text-center'>Examples</h1>
			<p> Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=New%20York'>New York, NY</Link>
				</li>
				<li>
					<Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
				</li>
			</ol>
		</section>
	)
};

module.exports = Examples;