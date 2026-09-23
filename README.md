# TechMart Product Explorer

Mini e-commerce dashboard built with plain HTML, CSS and JavaScript using the provided `data.js` dataset.

**Name:** Arvind Kumar
**Roll No:** 25SCSE1010470

## Challenges Completed

| Challenge | Feature | Marks |
|---|---|---|

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
    └── app.js
```

- `app.js` flattens the nested categories → subcategories → products into one array and starts every feature.
- `utils.js` has the binary search helpers (`lowerBound`, `upperBound`) and price formatting.
- `ui.js` has the product card, star rating and product detail modal.
- Every feature file keeps its logic functions separate from the DOM code.




## Responsive Design

Tested on desktop, tablet and mobile widths. Cards switch to a single column on small screens, and the inventory table scrolls horizontally.
