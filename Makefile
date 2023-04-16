
default: build

build:
	npm run build

lint:
	npm run lint

prepare: create prod readme ts clean build json

publish: prepare
	npm publish

readme:
	python generate.py readme

ts:
	python generate.py ts

create:
	python generate.py create

prod:
	python generate.py prod

json:
	python generate.py json

examples:
	python generate.py examples

clean:
	@rm -rf dist
