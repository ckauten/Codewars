// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  url = url.split('');
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '#') {
      url = url.slice(0, i);
    }
  }
  url = url.join('');
  return url;
}
