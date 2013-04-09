mlist
=======

[![Build Status](https://travis-ci.org/jwerle/mlist.png?branch=master)](https://travis-ci.org/jwerle/mlist)

## install
```sh
$ [sudo] npm install mlist
```

## usage
```js
var mlist = require('mlist')
  , set = mlist.set

var cities = mlist()
// set properties to the clients list by key
cities(set('nyc', 'New York City'));
cities(set('tpa', 'Tampa'));
cities(set('la', 'Los Angeles'));
cities(set('bos', 'Boston'));
cities(set('dc', 'Washington D.C'));

// get properties from the clients list by key
cities(get('nyc')); // New York City
cities(get('tpa')); // Tampa
cities(get('la')) ; // Los Angeles
cities(get('bos')); // Boston
cities(get('dc')) ; // Washington D.C
```

## api
#### prepend(value)
Prepend a value to the list. Values are indexed.
```js
var list = mlist()
  , prepend = mlist.prepend

list(prepend(1))(prepend(2))(prepend(3));
// or
list(prepend(1));
list(prepend(2));
list(prepend(3));

list(get(0)); // 3
list(get(1)); // 2
list(get(2)); // 1
```

#### append(value)
Append a value to the list. Values are indexed.
```js
var list = mlist()
  , append = mlist.append

list(append(1))(append(2))(append(3));
// or
list(append(1));
list(append(2));
list(append(3));

list(get(0)); // 1
list(get(1)); // 2
list(get(2)); // 3
```

#### get(value)
Get a value from the list by key
```js
var list = mlist()
  , get = mlist.get

list(get('myKey')); // myValue
```

#### set(key, value)
Set a value in the list by key
```js
var list = mlist()
  , set = mlist.set

list(set('name', 'Joe'));
```

#### concat(value)
Concat values to the list. Accepts any value. Appends all elements of an array like `[].concat`
```js
var list = mlist()
  , concat = mlist.concat

list(concat(4));
list(concat(['foo', 'bar']));
list(concat(17));
```

#### each(callback)
Iterate over each indexed element in the list and execute a function. Similar to `[].forEach
```js
var list = mlist()
  , each = mlist.each

list(each(function(value, key){ }));
```

#### map(callback)
Map a new list from an existing list
```js
var list = mlist()
  , map = mlist.map

list(map(function(value){ }));
```

#### forIn(callback)
```js
var list = mlist()
  , forIn = mlist.forIn

list(forIn(function(value){ }));
```

#### filter(callback)
```js
var list = mlist()
  , filter = mlist.filter

list(filter(function(value){ }));
```

#### keys()
```js
var list = mlist()
  , keys = mlist.keys

console.log( list(keys()) )
```

#### values()
```js
var list = mlist()
  , values = mlist.values

console.log( list(values()) )
```

## author
Joseph Werle <joseph.werle@gmail.com>

## license
MIT
