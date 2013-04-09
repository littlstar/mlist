mlist
=======

## install
```sh
$ [sudo] npm install mlist
```

## usage
```js
var mlist = require('mlist')
  , set = mlist.set

cities(set('nyc', 'New York City'));
cities(set('tpa', 'Tampa'));
cities(set('la', 'Los Angeles'));
cities(set('bos', 'Boston'));
cities(set('dc', 'Washington D.C'));

cities(get('nyc')); // New York City
cities(get('tpa')); // Tampa
cities(get('la')) ; // Los Angeles
cities(get('bos')); // Boston
cities(get('dc')) ; // Washington D.C
```

## api
#### prepend(value)
Prepend a value to the list
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
```js
var list = mlist()
  , get = mlist.get

list(get('myKey')); // myValue
```

#### set(key, value)
```js
var list = mlist()
  , set = mlist.set

list(set('name', 'Joe'));
```

#### concat(value)
```js
var list = mlist()
  , concat = mlist.concat

list(concat(4));
list(concat(['foo', 'bar']));
list(concat(17));
```

#### each(callback)
```js
var list = mlist()
  , each = mlist.each

list(each(function(value, key){ }));
```

#### map(callback)
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