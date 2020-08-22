
all: toggleRuby amazon-ca

toggleRuby:
	sed --in-place -e '/toggle ruby/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/toggleRuby.js)/' index.html

amazon-ca:
	sed --in-place -e '/amazon-ca/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/amazon-ca.js)/' index.html

add-to-bookpiles:
	node_modules/.bin/bookmarklet src/add-to-bookpiles.js

