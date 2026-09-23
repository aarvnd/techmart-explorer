function buildPrefixSums(sorted) {
  const valuePrefix = [0];
  const stockPrefix = [0];

  for (let i = 0; i < sorted.length; i++) {
    valuePrefix.push(valuePrefix[i] + sorted[i].price * sorted[i].stock);
    stockPrefix.push(stockPrefix[i] + sorted[i].stock);
  }

  return { valuePrefix, stockPrefix };
}

function queryInventory(sorted, prefix, min, max) {
  const start = lowerBound(sorted, min);
  const end = upperBound(sorted, max);

  if (start >= end) {
    return { start, end, count: 0, units: 0, value: 0 };
  }

  return {
    start,
    end,
    count: end - start,
    units: prefix.stockPrefix[end] - prefix.stockPrefix[start],
    value: prefix.valuePrefix[end] - prefix.valuePrefix[start]
  };
}

function initInventory(products) {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  const prefix = buildPrefixSums(sorted);

  const minInput = document.getElementById("invMin");
  const maxInput = document.getElementById("invMax");
  const searchBtn = document.getElementById("invSearchBtn");
  const errorBox = document.getElementById("invError");

  const sliderMin = document.getElementById("sliderMin");
  const sliderMax = document.getElementById("sliderMax");
  const track = document.getElementById("sliderTrack");
  const minLabel = document.getElementById("sliderMinLabel");
  const maxLabel = document.getElementById("sliderMaxLabel");

  const countEl = document.getElementById("invCount");
  const unitsEl = document.getElementById("invUnits");
  const valueEl = document.getElementById("invValue");
  const table = document.getElementById("invTable");

  const highestPrice = sorted.length ? sorted[sorted.length - 1].price : 0;
  const sliderLimit = Math.max(150000, Math.ceil(highestPrice / 10000) * 10000);
  sliderMin.max = sliderLimit;
  sliderMax.max = sliderLimit;

  function updateTrack() {
    const minPercent = (Number(sliderMin.value) / sliderLimit) * 100;
    const maxPercent = (Number(sliderMax.value) / sliderLimit) * 100;
    track.style.background = `linear-gradient(to right, #e5e7eb ${minPercent}%, #2563eb ${minPercent}%, #2563eb ${maxPercent}%, #e5e7eb ${maxPercent}%)`;
    minLabel.textContent = formatPrice(sliderMin.value);
    maxLabel.textContent = formatPrice(sliderMax.value);
  }

  function renderTable(start, end) {
    table.innerHTML = "";

    if (start >= end) {
      table.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--muted); padding: 24px;">No products in this price range</td></tr>`;
      return;
    }

    for (let i = start; i < end; i++) {
      const p = sorted[i];
      const row = document.createElement("tr");
      const stockClass = p.stock <= 5 ? "low-stock" : "";
      row.innerHTML = `
        <td>${p.name}</td>
        <td>${p.brand}</td>
        <td>${formatPrice(p.price)}</td>
        <td class="${stockClass}">${p.stock}</td>
        <td>${formatPrice(p.price * p.stock)}</td>
      `;
      row.style.cursor = "pointer";
      row.addEventListener("click", () => openProductModal(p));
      table.appendChild(row);
    }
  }

  function runQuery(min, max) {
    const result = queryInventory(sorted, prefix, min, max);
    countEl.textContent = result.count;
    unitsEl.textContent = result.units.toLocaleString("en-IN");
    valueEl.textContent = formatPrice(result.value);
    renderTable(result.start, result.end);
  }

  function searchFromInputs() {
    errorBox.textContent = "";
    const min = parsePrice(minInput.value);
    const max = parsePrice(maxInput.value);

    if (min === null || max === null) {
      errorBox.textContent = "Please enter both minimum and maximum price.";
      return;
    }
    if (min < 0 || max < 0) {
      errorBox.textContent = "Price cannot be negative.";
      return;
    }
    if (min > max) {
      errorBox.textContent = "Minimum price cannot be greater than maximum price.";
      return;
    }

    sliderMin.value = Math.min(min, sliderLimit);
    sliderMax.value = Math.min(max, sliderLimit);
    updateTrack();
    runQuery(min, max);
  }

  function onSliderChange(e) {
    errorBox.textContent = "";
    let min = Number(sliderMin.value);
    let max = Number(sliderMax.value);

    if (min > max) {
      if (e.target === sliderMin) {
        sliderMin.value = max;
        min = max;
      } else {
        sliderMax.value = min;
        max = min;
      }
    }

    minInput.value = min;
    maxInput.value = max;
    updateTrack();
    runQuery(min, max);
  }

  searchBtn.addEventListener("click", searchFromInputs);
  sliderMin.addEventListener("input", onSliderChange);
  sliderMax.addEventListener("input", onSliderChange);

  [minInput, maxInput].forEach(input => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchFromInputs();
    });
  });

  searchFromInputs();
}
