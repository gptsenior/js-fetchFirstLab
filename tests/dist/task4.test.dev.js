"use strict";

var deleteUser = require('../tasks/task3');

test('Correctly makes DELETE request and removes user', function _callee() {
  var userId, statusCode;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = 1;
          _context.next = 3;
          return regeneratorRuntime.awrap(deleteUser(userId));

        case 3:
          statusCode = _context.sent;

          if (typeof statusCode === 'number') {
            expect(statusCode).toBe(200);
          } else {
            console.error(statusCode.message);
            expect(statusCode.error).toBeUndefined();
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
//# sourceMappingURL=task4.test.dev.js.map
