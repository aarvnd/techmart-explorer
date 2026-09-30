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

function getPopularity(product) {
  return product.rating * product.reviews;
}

function showTopProducts() {
  let k = Number(document.getElementById("topK").value);

  let copy = products.slice();

  copy.sort(function (a, b) {
    return getPopularity(b) - getPopularity(a);
  });

  let top = copy.slice(0, k);

  let html = "";

  for (let i = 0; i < top.length; i++) {
    let p = top[i];
    html += `
      <div class="card">
        <span class="rank">#${i + 1}</span>
        <h3>${p.name}</h3>
        <p>Brand: ${p.brand}</p>
        <p class="price">₹${p.price}</p>
        <p>⭐ ${p.rating}</p>
        <p>${p.reviews} reviews</p>
        <p class="score">Popularity: ${Math.round(getPopularity(p))}</p>
      </div>
    `;
  }

  document.getElementById("title").innerText = "Top " + k + " Products";
  document.getElementById("results").innerHTML = html;
}

showTopProducts();
