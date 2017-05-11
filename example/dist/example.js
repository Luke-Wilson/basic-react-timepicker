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

},{"basic-react-timepicker":undefined,"react":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbHVrZXdpbHNvbi9EZXNrdG9wL2NvZGUvYmFzaWMtcmVhY3QtdGltZXBpY2tlci9leGFtcGxlL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOztBQUVuRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsT0FBTSxFQUFDLGtCQUFHO0FBQ1QsU0FDQzs7O0dBQ0M7OztJQUNDOzs7O0tBQWdCO0lBQ2hCLG9CQUFDLFVBQVUsSUFBQyxJQUFJLEVBQUMsU0FBUyxHQUFHO0lBQ3hCO0dBQ047OztJQUNDOzs7O0tBQStDO0lBQy9DLG9CQUFDLFVBQVUsSUFBQyxJQUFJLEVBQUMsd0JBQXdCLEVBQUMsWUFBWSxFQUFDLFFBQVEsR0FBRTtJQUM1RDtHQUNOOzs7SUFDQzs7OztLQUF5QjtJQUN6QixvQkFBQyxVQUFVLElBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUUsRUFBRSxBQUFDLEdBQUU7SUFDckM7R0FDTjs7O0lBQ0M7Ozs7S0FBNEI7SUFDNUIsb0JBQUMsVUFBVSxJQUFDLElBQUksRUFBQyxxQkFBcUIsRUFBQyxRQUFRLEVBQUU7YUFBTSxLQUFLLENBQUMsb0JBQW9CLENBQUM7TUFBQSxBQUFDLEdBQUc7SUFDakY7R0FDTjs7O0lBQ0M7Ozs7S0FBNEQ7SUFDNUQsb0JBQUMsVUFBVSxJQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsUUFBUSxHQUFFO0lBQ2pFO0dBQ0QsQ0FDTDtFQUNGO0NBQ0QsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUaW1lUGlja2VyID0gcmVxdWlyZSgnYmFzaWMtcmVhY3QtdGltZXBpY2tlcicpO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMj5EZWZhdWx0PC9oMj5cblx0XHRcdFx0XHQ8VGltZVBpY2tlciBuYW1lPVwiZGVmYXVsdFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMj5XaXRoIGEgZGVmYXVsdCB2YWx1ZSBzZWxlY3RlZCAoMjozMFBNKTwvaDI+XG5cdFx0XHRcdFx0PFRpbWVQaWNrZXIgbmFtZT1cImRlZmF1bHQtdmFsdWUtc2VsZWN0ZWRcIiBkZWZhdWx0VmFsdWU9XCIyOjMwUE1cIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxoMj5XaXRoIDYwIG1pbiBzdGVwPC9oMj5cblx0XHRcdFx0XHQ8VGltZVBpY2tlciBuYW1lPVwiNjAtbWluLXN0ZXBcIiBzdGVwPXs2MH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDI+V2l0aCBjaGFuZ2UgaGFuZGxlcjwvaDI+XG5cdFx0XHRcdFx0PFRpbWVQaWNrZXIgbmFtZT1cIndpdGgtY2hhbmdlLWhhbmRsZXJcIiBvbkNoYW5nZT17KCkgPT4gYWxlcnQoJ2EgY2hhbmdlIHdhcyBtYWRlIScpfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDI+V2l0aCBiZWdpbm5pbmcgYW5kIGVuZGluZyBsaW1pdHMgKDM6MDBQTSB0byA2OjAwUE0pPC9oMj5cblx0XHRcdFx0XHQ8VGltZVBpY2tlciBuYW1lPVwid2l0aC1saW1pdHNcIiBiZWdpbkxpbWl0PVwiMzowMFBNXCIgZW5kTGltaXQ9XCI2OjAwUE1cIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
