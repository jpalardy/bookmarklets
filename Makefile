
render:
	scripts/replace.sh index.html.tmpl > index.html

add-to-bookpiles:
	npm exec bookmarklet src/add-to-bookpiles.js

watch:
	printf "%s\n" index.html* src/* | entr ding make

