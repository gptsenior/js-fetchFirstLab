"use strict";
"Ваш код повинен зробити POST-запит до вказаного URL.";
"Для створення нового користувача, передайте в запит наступні дані:";
"name: ваше ім’я";
"email: ваш email";
"Поверніть відповідь від сервера після створення користувача.";
"https://jsonplaceholder.typicode.com/users - адреса куди робити запит";

function createUser(user) {
  var response, createdUser;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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
          createdUser = _context.sent;
          return _context.abrupt("return", createdUser);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Error creating user:', _context.t0);
          return _context.abrupt("return", null);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

console.log(createUser({
  name: "Pavlo",
  email: "ajkkasoksks22@gmail.com"
}));
module.exports = createUser;
//# sourceMappingURL=task2.dev.js.map
