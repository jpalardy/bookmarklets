
all: toggleRuby memoraLarge

toggleRuby:
	sed --in-place -e '/toggle ruby/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/toggleRuby.js)/' index.html

memoraLarge:
	sed --in-place -e '/memora large/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/memoraLarge.js)/' index.html

