let products = [];

for (let i = 0; i < storeData.categories.length; i++) {
  let category = storeData.categories[i];
  for (let j = 0; j < category.subcategories.length; j++) {
    let sub = category.subcategories[j];
    for (let k = 0; k < sub.products.length; k++) {
      products.push(sub.products[k]);
    }
  }
}

let shownProducts = [];

function showProducts(list) {
  shownProducts = list;
  let html = "";

  if (list.length === 0) {
    html = "<p>No products found.</p>";
  }

  for (let i = 0; i < list.length; i++) {
    let p = list[i];
    html += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Brand: ${p.brand}</p>
        <p class="price">₹${p.price}</p>
        <p>Rating: ⭐ ${p.rating}</p>
        <button onclick="viewProduct(${i})">View Product</button>
      </div>
    `;
  }

  document.getElementById("results").innerHTML = html;
  document.getElementById("details").style.display = "none";
}

function viewProduct(index) {
  let p = shownProducts[index];
  let box = document.getElementById("details");

  box.innerHTML = `
    <h3>${p.name}</h3>
    <p>Brand: ${p.brand}</p>
    <p>Category: ${p.category} / ${p.subcategory}</p>
    <p>Price: ₹${p.price} (Original: ₹${p.originalPrice})</p>
    <p>Rating: ⭐ ${p.rating} (${p.reviews} reviews)</p>
    <p>Stock: ${p.stock}</p>
  `;
  box.style.display = "block";
}

function findClosest() {
  let value = document.getElementById("price").value;
  let error = document.getElementById("error1");
  error.innerText = "";

  if (value === "") {
    error.innerText = "Please enter a price.";
    return;
  }

  let target = Number(value);

  if (target < 0) {
    error.innerText = "Price cannot be negative.";
    return;
  }

  let copy = products.slice();

  copy.sort(function (a, b) {
    let diffA = Math.abs(a.price - target);
    let diffB = Math.abs(b.price - target);
    return diffA - diffB;
  });

  let closest = copy.slice(0, 5);

  document.getElementById("title").innerText = "Closest products to ₹" + target;
  showProducts(closest);
}

function findInRange() {
  let minValue = document.getElementById("minPrice").value;
  let maxValue = document.getElementById("maxPrice").value;
  let error = document.getElementById("error2");
  error.innerText = "";

  if (minValue === "" || maxValue === "") {
    error.innerText = "Please enter both minimum and maximum price.";
    return;
  }

  let min = Number(minValue);
  let max = Number(maxValue);

  if (min < 0 || max < 0) {
    error.innerText = "Price cannot be negative.";
    return;
  }

  if (min > max) {
    error.innerText = "Minimum price cannot be greater than maximum price.";
    return;
  }

  let result = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= min && products[i].price <= max) {
      result.push(products[i]);
    }
  }

  document.getElementById("title").innerText = result.length + " products between ₹" + min + " and ₹" + max;
  showProducts(result);
}
