// Get query string
const queryString = window.location.search;
console.log(queryString);

// Parse query parameters
if (queryString.length > 0) {
  const urlParams = new URLSearchParams(queryString);

  // Initialize variables
  let cartItems = [];
  let totalCost = 0;

  // Map of cart items and prices
  const itemPrices = {
    widget: 3.99,
    sprocket: 5.99,
    thingy: 1.99,
  };

  // Process each query parameter
  urlParams.forEach(function(value, key) {
    // If cart item, add to cart and calculate total cost
    if (key.toLowerCase() === 'cart') {
      const itemPrice = itemPrices[value.toLowerCase()] || 0;
      cartItems.push(`${value}: $${itemPrice.toFixed(2)}`);
      totalCost += itemPrice;
    } else {
      // Replace underscores with spaces
      key = key.split('_').join(' ');
      cartItems.push(`${key}: ${value}`);
    }
  });

  // Format cart contents
  let cartContents = `<h3>Cart Contents</h3>`;
  if (cartItems.length > 0) {
    cartContents += cartItems.join('<br>');
    cartContents += `<br>Total: $${totalCost.toFixed(2)}<br>`;
    cartContents += `<p><a href="index.html">CLEAR</a></p>`;
  } else {
    cartContents += `Cart is empty`;
  }

  // Display cart contents
  document.getElementById('output').innerHTML = cartContents;
}