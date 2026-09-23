function findClosestProducts(sorted, target, k) {
  if (sorted.length === 0 || k <= 0) {
    return [];
  }

  let right = lowerBound(sorted, target);
  let left = right - 1;
  const result = [];

  while (result.length < k && (left >= 0 || right < sorted.length)) {
    if (left < 0) {
      result.push(sorted[right++]);
    } else if (right >= sorted.length) {
      result.push(sorted[left--]);
    } else if (target - sorted[left].price <= sorted[right].price - target) {
      result.push(sorted[left--]);
    } else {
      result.push(sorted[right++]);
    }
  }

  return result;
}

function findProductsInRange(sorted, min, max) {
  const start = lowerBound(sorted, min);
  const end = upperBound(sorted, max);
  return sorted.slice(start, end);
}

function initPriceFinder(products) {
  const sorted = [...products].sort((a, b) => a.price - b.price);

  const targetInput = document.getElementById("targetPrice");
  const countSelect = document.getElementById("closestCount");
  const searchBtn = document.getElementById("searchPriceBtn");
  const priceError = document.getElementById("priceError");

  const minInput = document.getElementById("rangeMin");
  const maxInput = document.getElementById("rangeMax");
  const rangeBtn = document.getElementById("rangeSearchBtn");
  const rangeError = document.getElementById("rangeError");

  const title = document.getElementById("priceResultTitle");
  const results = document.getElementById("priceResults");

  function render(list, target) {
    results.innerHTML = "";

    if (list.length === 0) {
      showEmpty(results, "No products found for this price. Try a different value.");
      return;
    }

    for (const product of list) {
      let extra = "";
      if (target !== undefined) {
        const diff = product.price - target;
        if (diff === 0) {
          extra = `<span class="diff">Exact match</span>`;
        } else {
          extra = `<span class="diff">${formatPrice(Math.abs(diff))} ${diff > 0 ? "above" : "below"} your budget</span>`;
        }
      }
      results.appendChild(createProductCard(product, extra));
    }
  }

  function searchClosest() {
    priceError.textContent = "";
    rangeError.textContent = "";
    const target = parsePrice(targetInput.value);

    if (target === null) {
      priceError.textContent = "Please enter a valid price.";
      return;
    }
    if (target < 0) {
      priceError.textContent = "Price cannot be negative.";
      return;
    }

    const k = Number(countSelect.value);
    const closest = findClosestProducts(sorted, target, k);
    closest.sort((a, b) => a.price - b.price);

    title.textContent = `Closest products to ${formatPrice(target)}`;
    if (target > sorted[sorted.length - 1].price) {
      title.textContent += " (all products are below this price)";
    }
    render(closest, target);
  }

  function searchRange() {
    priceError.textContent = "";
    rangeError.textContent = "";

    let min = parsePrice(minInput.value);
    let max = parsePrice(maxInput.value);

    if (min === null && max === null) {
      rangeError.textContent = "Enter at least a minimum or maximum price.";
      return;
    }
    if (min === null) min = 0;
    if (max === null) max = Infinity;

    if (min < 0 || max < 0) {
      rangeError.textContent = "Price cannot be negative.";
      return;
    }
    if (min > max) {
      rangeError.textContent = "Minimum price cannot be greater than maximum price.";
      return;
    }

    const list = findProductsInRange(sorted, min, max);
    const maxText = max === Infinity ? "above" : "– " + formatPrice(max);
    title.textContent = `${list.length} product${list.length === 1 ? "" : "s"} in ${formatPrice(min)} ${maxText}`;
    render(list);
  }

  searchBtn.addEventListener("click", searchClosest);
  rangeBtn.addEventListener("click", searchRange);

  targetInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchClosest();
  });

  [minInput, maxInput].forEach(input => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchRange();
    });
  });

  if (sorted.length === 0) {
    showEmpty(results, "No products available.");
  } else {
    title.textContent = "Enter a price to see matching products";
  }
}
