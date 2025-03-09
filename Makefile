
inplace:
	sed --in-place -e '/toggle ruby/ s/javascript:[^"]\+/$(shell npm exec bookmarklet src/toggleRuby.js)/' index.html
	sed --in-place -e '/amazon-ca/ s/javascript:[^"]\+/$(shell npm exec bookmarklet src/amazon-ca.js)/' index.html
	sed --in-place -e '/pagemeta/ s/javascript:[^"]\+/$(shell npm exec bookmarklet src/pagemeta.js)/' index.html
	sed --in-place -e '/highlight-yellow/ s/javascript:[^"]\+/$(shell npm exec bookmarklet src/highlight-yellow.js)/' index.html
	sed --in-place -e '/keasy/ s/javascript:[^"]\+/$(shell npm exec bookmarklet src/keasy.js)/' index.html

add-to-bookpiles:
	npm exec bookmarklet src/add-to-bookpiles.js

