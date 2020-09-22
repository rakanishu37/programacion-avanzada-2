class Product {
  constructor(id, title, price, description) {
    this._id = id;
    this._title = title;
    this._price = price;
    this._description = description;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._title;
  }
  get price() {
    return this._price;
  }
  get description() {
    return this._description;
  }
}

class CartItem {
  constructor(product) {
    this._product = product;
    this._quantity = 1;
  }

  get product() {
    return this._product;
  }

  get quantity() {
    return this._quantity;
  }

  incrementItem() {
    this._quantity++;
  }

  decrementItem() {
    this._quantity--;
  }

  getTotalPrice() {
    return this._product.price * this._quantity;
  }
}

class Cart {
  constructor() {
    this._productsBought = [];
  }

  render() {
    const tableBody = document.querySelector("#cart tbody");
    tableBody.innerHTML = "";
    this._productsBought.forEach((item) => {
      const row = tableBody.insertRow();
      const nameTd = document.createElement("td");
      row.append(nameTd);
      nameTd.innerText = item.product.name;

      const quantityTd = document.createElement("td");
      row.append(quantityTd);
      quantityTd.innerText = item.quantity;

      const priceTd = document.createElement("td");
      priceTd.innerText = "$" + item.getTotalPrice().toFixed(2);
      row.append(priceTd);

      const incrementItemButton = document.createElement("button");
      incrementItemButton.innerText = "+";
      incrementItemButton.addEventListener("click", () => {
        this.addProduct(item.product);
      });
      row.append(incrementItemButton);

      const decrementItemButton = document.createElement("button");
      decrementItemButton.innerText = "-";
      decrementItemButton.addEventListener("click", () => {
        this.decrementProductQuantity(item.product);
      });
      row.append(decrementItemButton);

      const removeItemButton = document.createElement("button");
      removeItemButton.innerText = "borrar";
      removeItemButton.addEventListener("click", () => {
        this.removeProduct(item.product);
      });
      row.append(removeItemButton);
    });
  }

  addProduct(product) {
    const index = this._productsBought.findIndex(
      (item) => item.product.id === product.id
    );
    if (index >= 0) {
      this._productsBought[index].incrementItem();
    } else {
      const cartItem = new CartItem(product);
      this._productsBought.push(cartItem);
    }
    this.render();
  }

  decrementProductQuantity(product) {    
    const index = this._productsBought.findIndex(
      (item) => item.product.id === product.id
    );
    
    if (index >= 0) {
      const item = this._productsBought[index];
      if (item.quantity >= 1) {
        this._productsBought[index].decrementItem();
        console.log(this._productsBought[index]);
      }
      if (item.quantity === 0) {
        this.removeProduct(product);
      }
      this.render();
    }
  }

  removeProduct(product) {
    const index = this._productsBought.findIndex(
      (item) => item.product.id === product.id
    );
    if (index >= 0) {
      this._productsBought.splice(index, 1);
      this.render();
    }
  }
}

class ProductList {
  constructor(products = [], cart) {
    this._products = products;
    this._cart = cart;
    this.render();
  }

  connectAddToCart(product) {
    this._cart.addProduct(product);
  }

  render() {
    const tableBody = document.querySelector("#products-list tbody");
    this._products.forEach((product) => {
      const row = tableBody.insertRow();
      const nameTd = document.createElement("td");
      row.append(nameTd);
      nameTd.innerText = product.name;
      const priceTd = document.createElement("td");
      priceTd.innerText = "$" + product.price;
      row.append(priceTd);
      const descriptionTd = document.createElement("td");
      descriptionTd.innerText = product.description;
      row.append(descriptionTd);

      const addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Agregar";
      addToCartButton.addEventListener("click", () => {
        this.connectAddToCart(product);
      });
      row.append(addToCartButton);
    });
  }
}

class App {
  static init() {
    const prod1 = new Product(1, "prod1", 10, "description of prod1");
    const prod2 = new Product(2, "prod2", 120, "description of prod2");
    const prod3 = new Product(3, "prod3", 30, "description of prod3");

    const cart = new Cart();
    new ProductList([prod1, prod2, prod3], cart);
  }
}

App.init();
