# TechMart Product Explorer

**Name:** Arvind Kumar
**Roll No:** 25SCSE1010470

Made with HTML, CSS and JavaScript using the given `data.js`.

## How to Run

Open `index.html` in a browser and click on any challenge.

## Folder Structure

```
techmart-explorer/
├── index.html
├── data.js
├── challenge-01/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── challenge-02/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── challenge-06/
    ├── index.html
    ├── style.css
    └── script.js
```

## Challenge 1 - Smart Price Finder

- Enter a price and see the 5 closest products.
- Enter minimum and maximum price to see products in that range.

**Approach:** Sort a copy of all products by the difference between product price and the entered price, then take the first 5. For range search, loop through all products and keep the ones between minimum and maximum.

- Time Complexity: O(n log n) for closest search, O(n) for range search
- Space Complexity: O(n)

## Challenge 2 - Top K Popular Products

- Popularity = rating × reviews
- Choose Top 3, 5 or 10 from the dropdown.

**Approach:** Sort a copy of all products by popularity from high to low, then take the first K.

- Time Complexity: O(n log n)
- Space Complexity: O(n)

## Challenge 6 - Inventory Range Dashboard

- Enter minimum and maximum price (or use the sliders).
- Shows number of products and total inventory value (price × stock).

**Approach:** Loop through all products. If the price is inside the range, add price × stock to the total.

- Time Complexity: O(n) per search
- Space Complexity: O(1)

## Edge Cases Handled

- Empty input
- Negative price
- Minimum greater than maximum
- No products found
