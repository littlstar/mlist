var list 		= require('./')
	,	assert 	= require('assert')
	,	puts 		= console.log

var prepend = list.prepend
  ,	append 	= list.append
  ,	get 		= list.get
  ,	set 		= list.set
  ,	concat 	= list.concat
  ,	each 		= list.each
  ,	map 		= list.map
  ,	forIn 	= list.forIn
  ,	filter 	= list.filter
  ,	keys 		= list.keys
  ,	values 	= list.values

var nums 		= list()
	, users 	= list()
	, types 	= list()
	, cities 	= list()

for (var i = 0; i <10; i++) {
	nums(append(i));
}

assert(nums(get()).length === 10)
assert(nums.$length === 10)

cities(set('nyc', 'New York City'));
cities(set('tpa', 'Tampa'));
cities(set('la',	'Los Angeles'));
cities(set('bos',	'Boston'));
cities(set('dc',	'Washington D.C'));

assert(cities(get('nyc')) === 'New York City');
assert(cities(get('tpa')) === 'Tampa');
assert(cities(get('la')) 	=== 'Los Angeles');
assert(cities(get('bos')) === 'Boston');
assert(cities(get('dc')) 	=== 'Washington D.C');

users(set('joe',
	list()
		(set('name', 	'joe'))
		(set('age', 	22))
		(set('city', 	cities(get('nyc'))))
));

users(set('frank',
	list()
		(set('name',  'frank'))
		(set('age', 	24))
		(set('city', 	cities(get('la'))))
));

users(set('sally',
	list()
		(set('name', 	'sally'))
		(set('age', 	27))
		(set('city', 	cities(get('bos'))))
));

users(set('jane',
	list()
		(set('name', 	'jane'))
		(set('age', 	24))
		(set('city', 	cities(get('dc'))))
));

users(keys()).map(function(user){
	assert(users(get(user))(get('name')), user);
});

cities(keys()).map(function(city){
	assert(cities(get(city)))
});
