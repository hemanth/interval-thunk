'use strict';
'use strict';
module.exports = function (func) {
  return function (ms) {
      ms = ms  || 0;
    return setInterval(func, ms);
  };
};
