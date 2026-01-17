#!/bin/bash

cat "$@" | \
  sed -E -e "/toggle ruby/ s/#code/$(npm exec bookmarklet src/toggleRuby.js)/" \
         -e "/amazon-ca/ s/#code/$(npm exec bookmarklet src/amazon-ca.js)/" \
         -e "/pagemeta/ s/#code/$(npm exec bookmarklet src/pagemeta.js)/" \
         -e "/highlight-yellow/ s/#code/$(npm exec bookmarklet src/highlight-yellow.js)/" \
         -e "/keasy[^-]/ s/#code/$(npm exec bookmarklet src/keasy.js)/" \
         -e "/keasy-1/ s/#code/$(npm exec bookmarklet src/keasy-1.js)/"

