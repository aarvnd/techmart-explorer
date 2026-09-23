# TechMart Product Explorer

Mini e-commerce dashboard built with plain HTML, CSS and JavaScript using the provided `data.js` dataset.

**Name:** Arvind Kumar
**Roll No:** 25SCSE1010470

## Challenges Completed

| Challenge | Feature | Marks |
|---|---|---|
| 1 | Smart Price Finder | 50 |

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
        └── priceFinder.js
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



## Responsive Design

Tested on desktop, tablet and mobile widths. Cards switch to a single column on small screens, and the inventory table scrolls horizontally.
