function getStars(rating) {
  const full = Math.round(rating);
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= full ? "★" : "☆";
  }
  return stars;
}

function createProductCard(product, extraHtml = "") {
  const card = document.createElement("div");
  card.className = "card";

  let oldPrice = "";
  if (product.originalPrice && product.originalPrice > product.price) {
    oldPrice = `<span class="old-price">${formatPrice(product.originalPrice)}</span>`;
  }

  card.innerHTML = `
    <span class="card-category">${product.subcategory || product.category || ""}</span>
    <h4>${product.name}</h4>
    <span class="card-brand">${product.brand || "Unknown brand"}</span>
    <div class="price">${formatPrice(product.price)}${oldPrice}</div>
    <div class="rating">${getStars(product.rating || 0)} ${product.rating || "-"} <small>(${(product.reviews || 0).toLocaleString("en-IN")})</small></div>
    ${extraHtml}
    <button class="btn btn-sm">View Product</button>
  `;

  card.querySelector("button").addEventListener("click", () => openProductModal(product));
  return card;
}

function showEmpty(container, message) {
  container.innerHTML = `<div class="empty">${message}</div>`;
}

function openProductModal(product) {
  const modal = document.getElementById("productModal");
  const content = document.getElementById("modalContent");

  let specsHtml = "";
  if (product.specifications) {
    for (const key in product.specifications) {
      const label = key.replace(/([A-Z])/g, " $1");
      specsHtml += `<li><span>${label}</span><span>${product.specifications[key]}</span></li>`;
    }
  }

  let tagsHtml = "";
  if (product.tags) {
    tagsHtml = product.tags.map(tag => `<span class="tag">#${tag}</span>`).join("");
  }

  let discount = "";
  if (product.originalPrice && product.originalPrice > product.price) {
    const off = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    discount = `<span class="old-price">${formatPrice(product.originalPrice)}</span> <span style="color: var(--green); font-size: 0.9rem;">${off}% off</span>`;
  }

  let stockText = `${product.stock} in stock`;
  if (!product.stock) {
    stockText = `<span style="color: var(--red)">Out of stock</span>`;
  } else if (product.stock <= 5) {
    stockText = `<span style="color: var(--red)">Only ${product.stock} left</span>`;
  }

  content.innerHTML = `
    <span class="card-category">${product.category} / ${product.subcategory}</span>
    <h3>${product.name}</h3>
    <span class="card-brand">by ${product.brand}</span>
    <div class="price" style="margin-top: 8px;">${formatPrice(product.price)} ${discount}</div>
    <div class="rating">${getStars(product.rating)} ${product.rating} <small>(${product.reviews.toLocaleString("en-IN")} reviews)</small></div>
    <div class="stock-info">${stockText}</div>
    <div class="tags">${tagsHtml}</div>
    <ul class="spec-list">${specsHtml}</ul>
  `;

  modal.classList.add("open");
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("open");
}

function setupModal() {
  const modal = document.getElementById("productModal");
  document.getElementById("modalClose").addEventListener("click", closeProductModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
    }
  });
}
