"use strict";
"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані.";
"Поверніть дані користувачів у форматі масиву";
"Дані мають включати такі поля, як id та name.";
"https://jsonplaceholder.typicode.com/users - адреса куди робити запит";

function fetchUsers() {
  var response, users;
  return regeneratorRuntime.async(function fetchUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/users'));

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
          users = _context.sent;
          return _context.abrupt("return", users.map(function (user) {
            return {
              id: user.id,
              name: user.name
            };
          }));

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching users:', _context.t0);
          return _context.abrupt("return", []);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

console.log(fetchUsers());
module.exports = fetchUsers;
//# sourceMappingURL=task1.dev.js.map
