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

var Nav = React.createClass({
	onSearch: function(e) {
		e.preventDefault();
	},
	render: function() {
		return (
			<header className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>React Weather</li>
						<li><IndexLink to='/' activeClassName='active'>Get Weather</IndexLink></li>
						<li><Link to='/about' activeClassName='active'>About</Link></li>
						<li><Link to='/examples' activeClassName='active'>Examples</Link></li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<form onSubmit = {this.onSearch}>
						<ul className='menu'>
							<li>
								<input type='search' placeholder='Search weather' />
							</li>
							<li>
								<input type='submit' className='button' value ='Get weather '/>
							</li>
						</ul>
					</form>
				</div>
			</header>
		);
	}
});

module.exports = Nav;