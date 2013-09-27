
all: toggleRuby

toggleRuby:
	sed --in-place -e '/toggle ruby/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/toggleRuby.js)/' index.html

