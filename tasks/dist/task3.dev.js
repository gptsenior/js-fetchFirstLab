"use strict";
"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача.";
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я.";
"Поверніть відповідь від сервера з оновленими даними користувача.";
"https://jsonplaceholder.typicode.com/users - адреса куди робити запит";

function updateUser(id, updatedData) {
  var response, updatedUser;
  return regeneratorRuntime.async(function updateUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/users/".concat(id), {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
          }));

        case 3:
          response = _context.sent;

          if (response.ok) {
            _context.next = 6;
            break;
          }

          throw new Error("http status of error: ".concat(response.status));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          updatedUser = _context.sent;
          return _context.abrupt("return", updatedUser);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Updating user error:', _context.t0);
          return _context.abrupt("return", null);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

console.log(updateUser(1, {
  name: 'New Name'
}));
module.exports = updateUser;
//# sourceMappingURL=task3.dev.js.map
