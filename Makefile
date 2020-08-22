
inplace:
	sed --in-place -e '/toggle ruby/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/toggleRuby.js)/' index.html
	sed --in-place -e '/amazon-ca/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/amazon-ca.js)/' index.html
	sed --in-place -e '/pagemeta/ s/javascript:[^"]\+/$(shell node_modules/.bin/bookmarklet src/pagemeta.js)/' index.html

add-to-bookpiles:
	node_modules/.bin/bookmarklet src/add-to-bookpiles.js

