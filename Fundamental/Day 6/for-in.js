let person = {
    name: 'John',
    address: 'Jakarta',
}

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}