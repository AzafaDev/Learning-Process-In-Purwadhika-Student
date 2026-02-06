let user = {
    firstName: 'John',
    lastName: 'Doe',
    password: '123456',
    email: '8YH3e@example.com',
}

let profile = new Object()
profile.firstName = 'John'
profile.lastName = 'Doe'
profile.password = '123456'
profile.email = '8YH3e@example.com'

console.log(user);
console.log(profile);

// CRUD
console.log(user.password)
console.log(user['password']);

user.password = 'bca123'
console.log(user);

delete user.password
console.log(user);

user.age = 20
console.log(user);

const student = {
    fullName: 'Immanuel',
    greet(){
        console.log(`Hello, ${this.fullName}`);
    }
}

student.greet()

// Optional Chaining
const userCommerce = {}
console.log(userCommerce?.name?.first);