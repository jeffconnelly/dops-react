var React = require('react'),
	Button = require('./button'),
	styles = require('../styles');

var PasswordBox = React.createClass({

	propTypes: {
		value: React.PropTypes.any.isRequired,
		hideLabel: React.PropTypes.any,
		showLabel: React.PropTypes.any
	},

	getDefaultProps: function() {
		return {
			hideLabel: "hide",
			showLabel: "show"
		};
	},

	styles: {
		box: {
			borderRadius: 2,
			padding: '5px 10px',
			background: '#f5f5f5'
		}
	},

	getInitialState: function() {
		return {
			showPass: false
		};
	},

	handleShowPass: function ( e ) {
		e.preventDefault();
		this.setState({showPass: true});
	},

	handleHidePass: function ( e ) {
		e.preventDefault();
		this.setState({showPass: false});
	},

	render: function() {
		return (
			<div style={this.styles.box}>
				{this.state.showPass ? 
					(<div>
						<span style={this.styles.visibleKey}>{this.props.value}</span>
						<Button size="tiny" style={styles.right} onClick={this.handleHidePass}>{this.props.hideLabel}</Button>
					</div>) : 
					(<div>
						<span style={this.styles.hiddenKey}>************</span>
						<Button size="tiny" style={styles.right} onClick={this.handleShowPass}>{this.props.showLabel}</Button>
					</div>)
				}
			</div>
		);
	}
});

module.exports = PasswordBox;

