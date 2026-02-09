/* 
● Create a program to create transaction
● Product Class
    ○ Properties
        ■ Name
        ■ Price
● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
            ● All product data
            ● Qty

    ○ Add to cart method → Add product to transaction
    ○ Show total method → Show total current transaction
    ○ Checkout method → Finalize transaction, return transaction data
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.cart = []; 
  }

  addToCart(product, qty) {
    this.cart.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    console.log(`Total saat ini: Rp${this.total}`);
  }

  checkout() {
    console.log("--- Struk Belanja ---");
    console.log(this.cart);
    console.log(`Total Akhir: Rp${this.total}`);
    return { cart: this.cart, total: this.total };
  }
}

const apel = new Product("Apel", 5000);
const trx = new Transaction();

trx.addToCart(apel, 3); 
trx.showTotal();        
trx.checkout();         