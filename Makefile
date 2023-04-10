
default: build

build:
	npm run build

publish: clean build
	npm publish

clean:
	@rm -rf dist
