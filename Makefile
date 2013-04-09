all: clean install test build

test:
	node ./test.js

build:
	component build --dev

clean:
	rm -rf node_modules build

install:
	npm install .

.PHONY: test build test install