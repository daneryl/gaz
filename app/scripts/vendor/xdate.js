'use strict';

function parseDMY(str) {
  var parts = str.split('/');
  if (parts.length === 3) {
    return new XDate(parseInt(parts[2], 10), parseInt(parts[1] ? parts[1]-1 : 0, 10), parseInt(parts[0], 10));
  }
}

function parseDMYWithTime(str) {
  var parts = str.split('-');

  if(parts.length !== 2){
    parts = str.split(' ');
  }

  if(parts.length === 2) {
    var date = parts[0];
    var time = parts[1];

    date = date.split('/');
    time = time.split(':');

    if(time.length === 1) {
      time[1] = '00';
    }

    if (date.length === 3 && time.length === 2) {
      return new XDate(parseInt(date[2], 10), parseInt(date[1] ? date[1]-1 : 0, 10), parseInt(date[0], 10), time[0], time[1]);
    }
  }
}

function parseDMYWithTimeAndSecons(str) {
  var parts = str.split('-');

  if(parts.length !== 2) {
    parts = str.split(' ');
  }

  if(parts.length === 2){
    var date = parts[0];
    var time = parts[1];

    date = date.split('/');
    time = time.split(':');

    if (date.length === 3 && time.length === 3) {
      return new XDate(parseInt(date[2], 10), parseInt(date[1] ? date[1]-1 : 0, 10), parseInt(date[0], 10), time[0], time[1], time[2]);
    }
  }
}

XDate.prototype.getTimestamp = function()
{
  return Math.round(this.getTime() / 1000);
};

XDate.parsers.push(parseDMYWithTimeAndSecons);
XDate.parsers.push(parseDMYWithTime);
XDate.parsers.push(parseDMY);

