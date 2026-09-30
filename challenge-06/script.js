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

function showResult(min, max) {
  let count = 0;
  let total = 0;
  let rows = "";

  for (let i = 0; i < products.length; i++) {
    let p = products[i];

    if (p.price >= min && p.price <= max) {
      let value = p.price * p.stock;
      count = count + 1;
      total = total + value;

      rows += `
        <tr>
          <td>${p.name}</td>
          <td>₹${p.price}</td>
          <td>${p.stock}</td>
          <td>₹${value}</td>
        </tr>
      `;
    }
  }

  if (count === 0) {
    rows = `<tr><td colspan="4">No products in this range</td></tr>`;
  }

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = "₹" + total;
  document.getElementById("tableBody").innerHTML = rows;
}

function calculate() {
  let minValue = document.getElementById("minPrice").value;
  let maxValue = document.getElementById("maxPrice").value;
  let error = document.getElementById("error");
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

  document.getElementById("minSlider").value = min;
  document.getElementById("maxSlider").value = max;
  document.getElementById("minLabel").innerText = min;
  document.getElementById("maxLabel").innerText = max;

  showResult(min, max);
}

function sliderChanged() {
  let min = Number(document.getElementById("minSlider").value);
  let max = Number(document.getElementById("maxSlider").value);
  let error = document.getElementById("error");
  error.innerText = "";

  document.getElementById("minLabel").innerText = min;
  document.getElementById("maxLabel").innerText = max;
  document.getElementById("minPrice").value = min;
  document.getElementById("maxPrice").value = max;

  if (min > max) {
    error.innerText = "Minimum price cannot be greater than maximum price.";
    return;
  }

  showResult(min, max);
}

calculate();
