var mlist = module.exports = function(array) {
	var _list = new List()
	var proxy = function list(action) {
		var ret = action.call(_list, _list)
		return (ret === undefined)? proxy : ret;
	}

	Object.defineProperty(proxy, '$length', {
		get : function(){ return _list.length; },
		enumerable	: false
	});

	if (Array.isArray(array))
		_list = [].concat.call(_list, array);

	return proxy;
};

module.exports.createList = module.exports;
var List = module.exports.List = function List(){ Array.call(this); }
List.prototype = Object.create(Array.prototype);
List.prototype.constructor = List;
List.extend = function(obj) {
	for (var property in obj) {
		if ((! (property in List.prototype)) && (! (property in List.reserved))) {
			Object.defineProperty(List.prototype, property, {
				enumerable 		: false,
				configurable 	: false,
				writable 			: false,
				value 				: obj[property]
			});
		}
	}

	return List.prototype;
};


var reserved = List.reserved = Object.create(null);
reserved.constructor = reserved.length = 1;

var prepend = module.exports.prepend = function(value) {
	return function() { this.unshift(value) }
};

var append = module.exports.append = function(value) {
	return function() { this.push(value) }
};

var get = module.exports.get = function(key) {
	return function() {
		return (typeof key === 'undefined' || key === null)? this 
						: this[key] !== undefined? this[key] : null
	}
};

var set = module.exports.set = function(key, value) {
	return function() { this[key] = value; }
};

var concat = module.exports.concat = function(value) {
	var values = [].slice.call(arguments,0);
	return function() { return this.concat(values); }
};

var each = module.exports.each = function(callback) {
	return function() {
		var self = this
		this.forEach(function(){
			callback.apply(self, arguments);
		});
	}
};

var map = module.exports.map = function(callback) {
	return function() {
		var self = this, l = mlist()
		return l(concat(this.map(function(){
			return callback.apply(self, arguments);
		})));
	}
};

var forIn = module.exports.forIn = function(callback) {
	return function() {
		for (var thing in this) {
			if ((! (thing in List.prototype)) && (! (thing in List.reserved)) && this.hasOwnProperty(thing)) {
				callback.call(this, thing, this[thing]);
			}
		}
	};
};

var filter = module.exports.filter = function(callback) {
	return function() {
		var self = this, l = list()
		return l(concat(this.filter(function(){
			return callback.apply(self, arguments)
		})))
	}
};

var keys = module.exports.keys = function(callback) {
	return function() { return Object.keys(this); }
};

var values = module.exports.values = function(callback) {
	return function() { 
		var self = this;
		return Object.keys(this).map(function(key){ return self[key]; }); 
	}
};




// map to List prototype
for (var func in module.exports) List.prototype[func] = module.exports[func];