'use strict';
let xhr = new XMLHttpRequest();
xhr.onload = function() {
  console.log(this.response);
};
xhr.onerror = function() {
  console.log(this.status + ' - ' + this.statusText)
};
xhr.open(GET, '/users');
xhr.send();
