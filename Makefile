
all: toggleRuby memoraLarge amazon-ca

toggleRuby:
	sed --in-place -e '/toggle ruby/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/toggleRuby.js)/' index.html

memoraLarge:
	sed --in-place -e '/memora large/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/memoraLarge.js)/' index.html

amazon-ca:
	sed --in-place -e '/amazon-ca/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/amazon-ca.js)/' index.html

