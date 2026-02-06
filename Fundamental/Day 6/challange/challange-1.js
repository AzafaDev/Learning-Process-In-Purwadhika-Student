/* 
    # Case 1 - Analisa property data
    Sebuah aplikasi e-commerce memiliki beberapa kategori produk, misalnya:
    - Fashion
    - Electronic
    - Foods

    Tugas:
    1. Tentukan property apa saja yang dimiliki oleh masing-masing category product.
    2. Tuliskan minimal 3-5 property untuk tiap category.

    # Case 2 - Implementasi
    Berdasarkan hasil analisis pada soal nomor 1:

    Tugas:
    1. Buat class terpisah untuk setiap category product.
    2. Setiap class harus memiliki constructor untuk mengisi property-nya.
*/

/* 
Fashion:
- name
- price
- color
- stock
- bahan
- size

Electronic:
- name
- price
- brand

Foods:
- name
- price
- expiryDate
*/

class Product{
    constructor(name, price, stock, description, image){
        this.name = name
        this.price = price
        this.stock = stock
        this.description = description
        this.image = image
    }
}
class FashionProducts extends Product {
  constructor(name, price, color, stock, bahan, size, brand, image, description) {
    super(name, price, stock, description, image);
    this.color = color;
    this.bahan = bahan;
    this.size = size;
    this.brand = brand;
  }
}

class ElectronicProducts extends Product {
  constructor(name, price, brand, stock, weight, color, image, description) {
    super(name, price, stock, description, image);
    this.brand = brand;
    this.weight = weight;
    this.color = color;
  }
}

class FoodsProducts extends Product {
  constructor(name, price, expiryDate, stock, weight, image, description) {
    super(name, price, stock, description, image);
    this.expiryDate = expiryDate;
    this.weight = weight;
  }
}

const fashionProduct1 = new FashionProducts(
  'T-Shirt',
  50000,
  'Red',
  10,
  'Cotton',
  'M',
  'Nike',
  'https://example.com/t-shirt.jpg',
  'A t-shirt made of cotton'
);

const electronicProduct1 = new ElectronicProducts(
  'Laptop',
  1000000,
  'Apple',
  5,
  1.5,
  'Black',
  'https://example.com/laptop.jpg',
  'A laptop from Apple'
);

const foodsProduct1 = new FoodsProducts(
  'Banana',
  2000,
  '2023-06-30',
  20,
  0.5,
  'https://example.com/banana.jpg',
  'A banana'
);

console.log(fashionProduct1);
console.log(electronicProduct1);
console.log(foodsProduct1);
