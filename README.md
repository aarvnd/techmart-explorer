# TechMart Product Explorer

Mini e-commerce dashboard built with plain HTML, CSS and JavaScript using the provided `data.js` dataset.

**Name:** Arvind Kumar
**Roll No:** 25SCSE1010470

## Challenges Completed

| Challenge | Feature |
|---|---|
| 1 | Smart Price Finder |
| 2 | Top K Popular Products |
| 6 | Inventory Range Dashboard |


## Challenge 1 — Smart Price Finder

User enters a target price and gets the closest products. There is also a min/max range search.

**Initial Approach:** For every search, go through all products, calculate `|price - target|`, sort by that difference and pick the first K.

- Time Complexity: O(n log n) per search
- Space Complexity: O(n)


## Challenge 2 — Top K Popular Products

`popularity = rating × reviews`. User can switch between Top 3, 5 and 10 without reload.


- Time Complexity: O(n log n)
- Space Complexity: O(n)


## Challenge 6 — Inventory Range Dashboard

User enters min and max price (or uses the slider) and sees number of products, total stock units and total inventory value (`price × stock`).

**Initial Approach:** For every query, loop through all products and add `price × stock` for products inside the range.

- Time Complexity: O(n) per query
- Space Complexity: O(1)

