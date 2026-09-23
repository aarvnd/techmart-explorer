# TechMart Product Explorer

Mini e-commerce dashboard built with plain HTML, CSS and JavaScript using the provided `data.js` dataset.

**Name:** Arvind Kumar
**Roll No:** 25SCSE1010470

## Challenges Completed

| Challenge | Feature | Marks |
|---|---|---|
| 1 | Smart Price Finder | 50 |
| 2 | Top K Popular Products | 70 |
| 6 | Inventory Range Dashboard | 120 |

## How to Run

Open `index.html` in any browser. No installation needed.

## Project Structure

```
techmart-explorer/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── data.js
    ├── utils.js
    ├── ui.js
    ├── app.js
    └── features/
        ├── priceFinder.js
        ├── topK.js
        └── inventory.js
```

- `app.js` flattens the nested categories → subcategories → products into one array and starts every feature.
- `utils.js` has the binary search helpers (`lowerBound`, `upperBound`) and price formatting.
- `ui.js` has the product card, star rating and product detail modal.
- Every feature file keeps its logic functions separate from the DOM code.

## Challenge 1 — Smart Price Finder

User enters a target price and gets the closest products. There is also a min/max range search.

**Initial Approach:** For every search, go through all products, calculate `|price - target|`, sort by that difference and pick the first K.

- Time Complexity: O(n log n) per search
- Space Complexity: O(n)

**Optimized Approach:** Sort products by price only once when the page loads. For each search, use binary search (`lowerBound`) to find where the target price would sit, then expand two pointers left and right, picking whichever side is closer, until K products are picked.

For range search, `lowerBound(min)` and `upperBound(max)` give the start and end index directly.

- Preprocessing: O(n log n) once
- Closest K search: O(log n + K)
- Range search: O(log n + m), where m = products in range
- Space Complexity: O(n) for the sorted array

**Edge cases handled:** empty input, negative price, min greater than max, only min or only max given, target higher than every product, no products in range.

## Challenge 2 — Top K Popular Products

`popularity = rating × reviews`. User can switch between Top 3, 5 and 10 without reload.

**Initial Approach:** Calculate popularity for all products, sort the full array in descending order and take the first K.

- Time Complexity: O(n log n)
- Space Complexity: O(n)

**Optimized Approach:** Use a Min-Heap of size K (written from scratch in `topK.js`). Go through every product:

- if heap has less than K items → push
- else if current product is more popular than the heap top (smallest of the current top K) → pop the top and push the current product

At the end the heap has exactly the top K products. Popping everything and reversing gives the ranking from #1 to #K.

- Time Complexity: O(n log K)
- Space Complexity: O(K)

When K is much smaller than n (for example n = 1,000,000 and K = 10), this is much faster than sorting everything.

Ties in popularity are broken by product name so the order is always same.

**Edge cases handled:** K larger than number of products, products with missing rating or reviews (treated as 0).

## Challenge 6 — Inventory Range Dashboard

User enters min and max price (or uses the slider) and sees number of products, total stock units and total inventory value (`price × stock`).

**Initial Approach:** For every query, loop through all products and add `price × stock` for products inside the range.

- Time Complexity: O(n) per query
- Space Complexity: O(1)

**Optimized Approach:** Preprocess once:

1. Sort products by price.
2. Build prefix sum arrays: `valuePrefix[i + 1] = valuePrefix[i] + price × stock` (and same for stock).

For each query:

- `start = lowerBound(min)`, `end = upperBound(max)`
- product count = `end - start`
- inventory value = `valuePrefix[end] - valuePrefix[start]`

- Preprocessing: O(n log n) once
- Each query: O(log n) for the summary numbers (plus O(m) only for drawing the table rows)
- Space Complexity: O(n)

Because the slider fires a query on every movement, this makes repeated queries fast.

**Edge cases handled:** empty inputs, negative price, min greater than max, slider handles crossing each other, no products in range, clicking a table row opens the product detail.

## Responsive Design

Tested on desktop, tablet and mobile widths. Cards switch to a single column on small screens, and the inventory table scrolls horizontally.
