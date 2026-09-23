function getAllProducts(data) {
  const products = [];

  if (!data || !Array.isArray(data.categories)) {
    return products;
  }

  for (const category of data.categories) {
    for (const sub of category.subcategories || []) {
      for (const product of sub.products || []) {
        if (typeof product.price !== "number" || product.price < 0) {
          continue;
        }
        products.push({
          ...product,
          category: product.category || category.name,
          subcategory: product.subcategory || sub.name,
          rating: product.rating || 0,
          reviews: product.reviews || 0,
          stock: product.stock || 0
        });
      }
    }
  }

  return products;
}

document.addEventListener("DOMContentLoaded", () => {
  const products = getAllProducts(storeData);

  setupModal();
  initPriceFinder(products);
});
