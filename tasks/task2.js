"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function createUser(user) {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users', {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(user)
});
if (!response.ok) {
throw new Error(`http status of error: ${response.status}`);
}
const createdUser = await response.json();
return createdUser;
} catch (error) {
console.error('Error creating user:', error);
return null;
}
}

console.log(createUser({name: "Pavlo", email: "ajkkasoksks22@gmail.com"}))

module.exports = createUser;
