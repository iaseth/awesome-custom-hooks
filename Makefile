
default: build

build:
	npm run build

lint:
	npm run lint

prepare: create readme ts clean lint build json

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
