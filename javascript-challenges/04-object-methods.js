const student = {
  name: "John Doe",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  courses: ["Math", "Physics", "Chemistry", "Biology", "English"],
  
  getAverage() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  },
  
  getHighestGrade() {
    return Math.max(...this.grades);
  },
  
  getLowestGrade() {
    return Math.min(...this.grades);
  },
  
  addGrade(grade) {
    this.grades.push(grade);
  },
  
  getCourseCount() {
    return this.courses.length;
  },
  
  getInfo() {
    return `${this.name} is ${this.age} years old and enrolled in ${this.getCourseCount()} courses.`;
  }
};

const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
  { id: 2, name: "Phone", price: 699.99, category: "Electronics", inStock: true },
  { id: 3, name: "Desk", price: 299.99, category: "Furniture", inStock: false },
  { id: 4, name: "Chair", price: 149.99, category: "Furniture", inStock: true },
  { id: 5, name: "Monitor", price: 399.99, category: "Electronics", inStock: true }
];

function getProductsByCategory(products, category) {
  return products.filter(product => product.category === category);
}

function getAvailableProducts(products) {
  return products.filter(product => product.inStock);
}

function getTotalValue(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

function getProductNames(products) {
  return products.map(product => product.name);
}

function sortProductsByPrice(products, ascending = true) {
  return [...products].sort((a, b) => 
    ascending ? a.price - b.price : b.price - a.price
  );
}

function findProductById(products, id) {
  return products.find(product => product.id === id);
}

function hasExpensiveProduct(products, threshold = 500) {
  return products.some(product => product.price > threshold);
}

function areAllInStock(products) {
  return products.every(product => product.inStock);
}

const cart = {
  items: [],
  
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  },
  
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  },
  
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  },
  
  getTotal() {
    return this.items.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0
    );
  },
  
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  },
  
  clear() {
    this.items = [];
  },
  
  getSummary() {
    return this.items.map(item => 
      `${item.product.name} x${item.quantity} = $${(item.product.price * item.quantity).toFixed(2)}`
    );
  }
};

function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function memoize(func) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

console.log("Student Average:", student.getAverage());
console.log("Student Info:", student.getInfo());
console.log("Electronics:", getProductsByCategory(products, "Electronics"));
console.log("Available Products:", getAvailableProducts(products));
console.log("Total Value:", getTotalValue(products));
console.log("Product Names:", getProductNames(products));
console.log("Sorted by Price:", sortProductsByPrice(products));
console.log("Has Expensive:", hasExpensiveProduct(products));
console.log("Grouped by Category:", groupBy(products, "category"));

cart.addItem(products[0], 2);
cart.addItem(products[1], 1);
console.log("Cart Total:", cart.getTotal());
console.log("Cart Summary:", cart.getSummary());
