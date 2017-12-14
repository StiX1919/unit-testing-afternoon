const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(thing) {
    this.cart.push(thing);
    this.total += thing.price
  },

  removeFromCart: function(index, price) {
    this.cart.splice(index, 1);
    this.total -= price
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0
  }
};