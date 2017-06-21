
[].filter.call(document.querySelectorAll('a'), function (link) {
  return link.href.indexOf('amazon.com') >= 0;
}).forEach(function (link) {
  link.href = link.href.replace(/amazon.com/, 'amazon.ca');
});

