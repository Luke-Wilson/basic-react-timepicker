var React = require('react');
var ReactDOM = require('react-dom');
var TimePicker = require('basic-react-timepicker');

var App = React.createClass({
	render () {
		return (
			<div>
				<div>
					<h2>Default</h2>
					<TimePicker name="default" />
				</div>
				<div>
					<h2>With a default value selected (2:30PM)</h2>
					<TimePicker name="default-value-selected" defaultValue="2:30PM"/>
				</div>
				<div>
					<h2>With 60 min step</h2>
					<TimePicker name="60-min-step" step={60}/>
				</div>
				<div>
					<h2>With change handler</h2>
					<TimePicker name="with-change-handler" onChange={() => alert('a change was made!')} />
				</div>
				<div>
					<h2>With beginning and ending limits (3:00PM to 6:00PM)</h2>
					<TimePicker name="with-limits" beginLimit="3:00PM" endLimit="6:00PM"/>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
