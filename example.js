require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TimePicker = require('basic-react-timepicker');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'Default'
				),
				React.createElement(TimePicker, { name: 'default' })
			),
			React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'With a default value selected (2:30PM)'
				),
				React.createElement(TimePicker, { name: 'default-value-selected', defaultValue: '2:30PM' })
			),
			React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'With 60 min step'
				),
				React.createElement(TimePicker, { name: '60-min-step', step: 60 })
			),
			React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'With change handler'
				),
				React.createElement(TimePicker, { name: 'with-change-handler', onChange: function () {
						return alert('a change was made!');
					} })
			),
			React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'With beginning and ending limits (3:00PM to 6:00PM)'
				),
				React.createElement(TimePicker, { name: 'with-limits', beginLimit: '3:00PM', endLimit: '6:00PM' })
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"basic-react-timepicker":undefined,"react":undefined,"react-dom":undefined}]},{},[1]);
