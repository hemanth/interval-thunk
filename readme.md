# interval-thunk [![Build Status](https://travis-ci.org/hemanth/interval-thunk.svg?branch=master)](https://travis-ci.org/hemanth/interval-thunk)

> setInterval Thunk.


## Install

```
$ npm install --save interval-thunk
```


## Usage

```js
var intervalThunk = require('interval-thunk');

var interval = intervalThunk(function(){
  console.log('meow');
})(5000);

^ // meows, every 5000ms once.
```


## API

### intervalThunk -> func -> delay

#### input

*Required*  
Type: `function`

The function that has to be repeatedly executed.

#### delay (optional)

Type: `Number` in ms. 
Default: 0

delay for the interval function to wait before each call to `func`.

## License

MIT © [hemanth](http://h3manth.com)
