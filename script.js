document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
});

const products = ['Fresh Whole Milk', 'Semi-Skimmed Milk', 'Reusable Glass Bottles'];

const list = document.getElementById('product-list');
products.forEach(product => {
  const li = document.createElement('li');
  li.textContent = product;
  list.appendChild(li);
});