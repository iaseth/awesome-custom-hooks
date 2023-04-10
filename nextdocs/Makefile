
default: build

build:
	npm run build

publish: build
	netlify deploy --prod -d out

clean:
	rm -rf out
