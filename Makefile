
default: build

build:
	npm run build

publish: clean build readme
	npm publish

readme:
	python generate.py readme

ts:
	python generate.py ts

create:
	python generate.py create

clean:
	@rm -rf dist
