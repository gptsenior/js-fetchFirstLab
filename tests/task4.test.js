const deleteUser = require('../tasks/task3'); 

test('Correctly makes DELETE request and removes user', async () => {
const userId = 1; 
const statusCode = await deleteUser(userId);
  
  
if (typeof statusCode === 'number') {
expect(statusCode).toBe(200);
} else {
    
console.error(statusCode.message); 
expect(statusCode.error).toBeUndefined(); 
}
});
