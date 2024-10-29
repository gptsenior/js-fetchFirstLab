"use strict";
"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити.";
"Поверніть статус відповіді сервера після видалення.";
"https://jsonplaceholder.typicode.com/users - адреса куди робити запит";

function deleteUser(id) {
  var response;
  return regeneratorRuntime.async(function deleteUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/users/".concat(userId), {
            method: 'DELETE'
          }));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.status);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error deleting user:', _context.t0);
          return _context.abrupt("return", null);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

module.exports = deleteUser;
//# sourceMappingURL=task4.dev.js.map
