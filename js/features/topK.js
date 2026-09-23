class MinHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return undefined;

    const top = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parent]) < 0) {
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const n = this.heap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) {
        smallest = left;
      }
      if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) {
        smallest = right;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function getPopularity(product) {
  return (product.rating || 0) * (product.reviews || 0);
}

function comparePopularity(a, b) {
  if (a.score !== b.score) {
    return a.score - b.score;
  }
  return b.product.name.localeCompare(a.product.name);
}

function getTopKProducts(products, k) {
  if (k <= 0) return [];

  const heap = new MinHeap(comparePopularity);

  for (const product of products) {
    const item = { product, score: getPopularity(product) };

    if (heap.size() < k) {
      heap.push(item);
    } else if (comparePopularity(item, heap.peek()) > 0) {
      heap.pop();
      heap.push(item);
    }
  }

  const result = [];
  while (heap.size() > 0) {
    result.push(heap.pop());
  }
  return result.reverse();
}

function initTopK(products) {
  const select = document.getElementById("topKSelect");
  const container = document.getElementById("popularList");

  function render() {
    const k = Number(select.value);
    const top = getTopKProducts(products, k);
    container.innerHTML = "";

    if (top.length === 0) {
      showEmpty(container, "No popular products to show right now.");
      return;
    }

    const maxScore = top[0].score || 1;

    top.forEach((item, index) => {
      const percent = Math.round((item.score / maxScore) * 100);
      const extra = `
        <div class="pop-bar"><div style="width: ${percent}%"></div></div>
        <span class="pop-text">Popularity score: ${Math.round(item.score).toLocaleString("en-IN")}</span>
      `;
      const card = createProductCard(item.product, extra);
      const rank = document.createElement("span");
      rank.className = "rank";
      rank.textContent = "#" + (index + 1);
      card.appendChild(rank);
      container.appendChild(card);
    });

    if (k > products.length) {
      const note = document.createElement("div");
      note.className = "empty";
      note.textContent = `Only ${products.length} products are available.`;
      container.appendChild(note);
    }
  }

  select.addEventListener("change", render);
  render();
}
