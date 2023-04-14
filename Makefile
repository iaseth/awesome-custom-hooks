
default: build

build:
	npm run build

prepare: create readme ts clean build json

publish: prepare
	npm publish

readme:
	python generate.py readme

ts:
	python generate.py ts

create:
	python generate.py create

json:
	python generate.py json

clean:
	@rm -rf dist
