'use strict';

var http = require('http');


var quotes = {
  today: 'br',
  art: 'ar',
  funny: 'fu',
  love: 'lo',
  nature: 'na'
};

var base = 'http://www.brainyquote.com/link/quote{ type }.js';


function parseData(data) {
  var result = {};
  var index  = 0;

  data.replace(/writeln\((.*)\)/g, function (input, content) {

    if (index === 1) {
      result.quote = content.replace(/<br>/g, '');
    } else if (index === 2) {
      var match = content.match(/<a href=\\"([^"]*)\\".*>(.*)<\/a>/);
      if (match) {
        result.url    = match[1];
        result.author = match[2];
      }
    }

    index += 1;

    return '';
  });

  return result;
}

exports.get = function (type, callback) {

  if (typeof type === 'function') {
    callback = type;
    type     = null;
  }

  callback = callback && typeof callback === 'function'
    ? callback
    : function () {};

  var suffix = type && quotes[type] || quotes.today;
  var url    = base.replace(/\{ type \}/, suffix);

  http.get(url, function (res) {

    if (res.statusCode === 200) {

      var data = [];

      res.setEncoding('utf-8');
      res
        .on('data', function (chunk) {
          data.push(chunk);
        })
        .on('end', function () {
          callback(null, parseData(data.join('')));
        });
    } else {
      callback('Response with: ' + res.statusCode, null);
    }

    res
      .on('error', function (err) {
        callback(err, null);
      });
  });
};
