# TimePicker

A really simple TimePicker dropdown component that lets you set the gap (step) between times, set earliest and latest limits for your range, attach a change handler and set a default value.

## Demo & Examples

![](http://g.recordit.co/hD6wmPCfOu.gif)

Live demo: [luke-wilson.github.io/basic-react-timepicker](http://luke-wilson.github.io/basic-react-timepicker/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use basic-react-timepicker is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/basic-react-timepicker.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install basic-react-timepicker --save
```


## Usage

*Prop Types:*
**defaultValue** Passing a time value as a string here (e.g. "2:30PM") will make that the default selected value

**onChange** This is the callback that fires when the user selects a time

**name** The name of the select element

**beginLimit** This sets the earliest time in the dropdown. Default value is "12:00AM"- string

**endLimit** This sets the latest time in the dropdown. Default value is "11:45PM" - string

**step** Number - this sets the time between steps. Default value is 15 minutes.

#Examples
```
var TimePicker = require('basic-react-timepicker');

//Default:
<TimePicker />
//or
<TimePicker name="default" />

//With a default value selected (2:30PM)
<TimePicker defaultValue="2:30PM"/>

//With a 60 min step between times
<TimePicker step={60}/>

//With change handler
<TimePicker onChange={yourFunctionName} />

//With beginning and ending limits (3:00PM to 6:00PM)
<TimePicker beginLimit="3:00PM" endLimit="6:00PM"/>

```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License

Copyright (c) 2017 Luke Wilson.
