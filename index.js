// Declare customerName variable with 'bob' in global scope
var customerName = 'bob';

function returnsCustomerName() {
  return customerName;
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant called leastFavoriteCustomer in global scope and assign it an initial value
const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
    // Trying to reassign a constant will result in an error
    // JavaScript will prevent changing the value of a constant
    throw new TypeError("Assignment to constant variable.");
  }

module.exports = {
  returnsCustomerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
