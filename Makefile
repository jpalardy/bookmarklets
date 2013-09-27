
all: toggleRuby

toggleRuby:
	sed --in-place -e '/toggle ruby/ c* [toggle ruby]('`node_modules/.bin/bookmarklet src/toggleRuby.js`')' README.md

