class User {
  greeting() {
    console.log('Hello, world!');
  }
}

const Student = class {
  greeting() {
    console.log('Hello, student!');
  }
};

const user = new User();
user.greeting();

const student = new Student();
student.greeting();

class Products {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const product = new Products('Indomie', 3250, 95);
console.log(product);

class BankAccount {
  customerName = '';
  #balance = '';
  constructor(customerName) {
    this.customerName = customerName;
  }

  get balanceInfo() {
    return this.#balance;
  }

  set balanceValidation(value) {
    if (value <= 0) {
      console.log('Invalid balance');
    } else {
      this.#balance = value;
    }
  }
}

const customer1 = new BankAccount('Muhammad')
customer1.balanceValidation = 100
console.log(customer1, customer1.balanceInfo);
