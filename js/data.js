const deliveryNetwork = {
  locations: [
    { id: "L1", name: "Main Warehouse" },
    { id: "L2", name: "Sector 18" },
    { id: "L3", name: "Pari Chowk" },
    { id: "L4", name: "Knowledge Park" },
    { id: "L5", name: "Greater Noida West" },
    { id: "L6", name: "Noida Sector 62" },
    { id: "L7", name: "Dadri" },
    { id: "L8", name: "Alpha 1" }
  ],

  roads: [
    { from: "L1", to: "L2", distance: 8 },
    { from: "L1", to: "L3", distance: 5 },
    { from: "L2", to: "L3", distance: 4 },
    { from: "L2", to: "L4", distance: 6 },
    { from: "L3", to: "L4", distance: 3 },
    { from: "L3", to: "L5", distance: 7 },
    { from: "L4", to: "L5", distance: 2 },
    { from: "L4", to: "L6", distance: 9 },
    { from: "L5", to: "L6", distance: 5 },
    { from: "L5", to: "L7", distance: 8 },
    { from: "L6", to: "L8", distance: 4 },
    { from: "L7", to: "L8", distance: 6 }
  ]
};

const storeData = {
  storeName: "TechMart",

  categories: [
    {
      id: "cat-1",
      name: "Electronics",
      description: "Electronic devices and accessories",

      subcategories: [
        {
          id: "sub-1",
          name: "Laptops",

          products: [
            {
              id: "p-101",
              name: "MacBook Air M3",
              brand: "Apple",
              price: 114999,
              originalPrice: 129999,
              rating: 4.8,
              reviews: 1240,
              stock: 12,
              category: "Electronics",
              subcategory: "Laptops",
              tags: ["laptop", "apple", "macbook", "m3"],
              specifications: {
                processor: "Apple M3",
                ram: "16GB",
                storage: "512GB SSD",
                display: "13.6 inch",
                operatingSystem: "macOS"
              }
            },

            {
              id: "p-102",
              name: "Dell Inspiron 14",
              brand: "Dell",
              price: 68999,
              originalPrice: 74999,
              rating: 4.4,
              reviews: 856,
              stock: 18,
              category: "Electronics",
              subcategory: "Laptops",
              tags: ["laptop", "dell", "inspiron"],
              specifications: {
                processor: "Intel Core i5",
                ram: "16GB",
                storage: "512GB SSD",
                display: "14 inch",
                operatingSystem: "Windows 11"
              }
            },

            {
              id: "p-103",
              name: "HP Pavilion 15",
              brand: "HP",
              price: 64999,
              originalPrice: 71999,
              rating: 4.3,
              reviews: 634,
              stock: 7,
              category: "Electronics",
              subcategory: "Laptops",
              tags: ["laptop", "hp", "pavilion"],
              specifications: {
                processor: "Intel Core i5",
                ram: "16GB",
                storage: "512GB SSD",
                display: "15.6 inch",
                operatingSystem: "Windows 11"
              }
            },

            {
              id: "p-104",
              name: "Lenovo ThinkPad E14",
              brand: "Lenovo",
              price: 72999,
              originalPrice: 79999,
              rating: 4.6,
              reviews: 923,
              stock: 5,
              category: "Electronics",
              subcategory: "Laptops",
              tags: ["laptop", "lenovo", "thinkpad"],
              specifications: {
                processor: "Intel Core i7",
                ram: "16GB",
                storage: "1TB SSD",
                display: "14 inch",
                operatingSystem: "Windows 11"
              }
            },

            {
              id: "p-105",
              name: "ASUS ROG Gaming Laptop",
              brand: "ASUS",
              price: 124999,
              originalPrice: 139999,
              rating: 4.7,
              reviews: 412,
              stock: 4,
              category: "Electronics",
              subcategory: "Laptops",
              tags: ["laptop", "asus", "gaming", "rog"],
              specifications: {
                processor: "AMD Ryzen 9",
                ram: "32GB",
                storage: "1TB SSD",
                display: "15.6 inch",
                operatingSystem: "Windows 11"
              }
            }
          ]
        },

        {
          id: "sub-2",
          name: "Mobiles",

          products: [
            {
              id: "p-201",
              name: "iPhone 16",
              brand: "Apple",
              price: 79999,
              originalPrice: 84999,
              rating: 4.7,
              reviews: 2100,
              stock: 15,
              category: "Electronics",
              subcategory: "Mobiles",
              tags: ["phone", "iphone", "apple", "ios"],
              specifications: {
                processor: "Apple A18",
                ram: "8GB",
                storage: "128GB",
                display: "6.1 inch",
                operatingSystem: "iOS"
              }
            },

            {
              id: "p-202",
              name: "Samsung Galaxy S25",
              brand: "Samsung",
              price: 74999,
              originalPrice: 81999,
              rating: 4.6,
              reviews: 1680,
              stock: 10,
              category: "Electronics",
              subcategory: "Mobiles",
              tags: ["phone", "samsung", "galaxy", "android"],
              specifications: {
                processor: "Snapdragon",
                ram: "12GB",
                storage: "256GB",
                display: "6.2 inch",
                operatingSystem: "Android"
              }
            },

            {
              id: "p-203",
              name: "Google Pixel 9",
              brand: "Google",
              price: 69999,
              originalPrice: 74999,
              rating: 4.5,
              reviews: 980,
              stock: 8,
              category: "Electronics",
              subcategory: "Mobiles",
              tags: ["phone", "pixel", "google", "android"],
              specifications: {
                processor: "Google Tensor G4",
                ram: "12GB",
                storage: "256GB",
                display: "6.3 inch",
                operatingSystem: "Android"
              }
            },

            {
              id: "p-204",
              name: "OnePlus 13",
              brand: "OnePlus",
              price: 64999,
              originalPrice: 69999,
              rating: 4.4,
              reviews: 1340,
              stock: 20,
              category: "Electronics",
              subcategory: "Mobiles",
              tags: ["phone", "oneplus", "android"],
              specifications: {
                processor: "Snapdragon 8 Elite",
                ram: "16GB",
                storage: "512GB",
                display: "6.82 inch",
                operatingSystem: "Android"
              }
            }
          ]
        },

        {
          id: "sub-3",
          name: "Accessories",

          products: [
            {
              id: "p-301",
              name: "Logitech MX Master 3S",
              brand: "Logitech",
              price: 7495,
              originalPrice: 8995,
              rating: 4.7,
              reviews: 3210,
              stock: 30,
              category: "Electronics",
              subcategory: "Accessories",
              tags: ["mouse", "wireless", "logitech"],
              specifications: {
                connectivity: "Bluetooth",
                battery: "70 days",
                type: "Wireless Mouse"
              }
            },

            {
              id: "p-302",
              name: "Keychron K2 Mechanical Keyboard",
              brand: "Keychron",
              price: 8999,
              originalPrice: 9999,
              rating: 4.6,
              reviews: 876,
              stock: 14,
              category: "Electronics",
              subcategory: "Accessories",
              tags: ["keyboard", "mechanical", "keychron"],
              specifications: {
                connectivity: "Bluetooth + USB-C",
                switches: "Gateron",
                type: "Mechanical Keyboard"
              }
            },

            {
              id: "p-303",
              name: "Sony WH-1000XM5",
              brand: "Sony",
              price: 29990,
              originalPrice: 34990,
              rating: 4.8,
              reviews: 5420,
              stock: 9,
              category: "Electronics",
              subcategory: "Accessories",
              tags: ["headphones", "sony", "wireless", "audio"],
              specifications: {
                connectivity: "Bluetooth",
                battery: "30 hours",
                type: "Noise Cancelling Headphones"
              }
            },

            {
              id: "p-304",
              name: "Anker 65W GaN Charger",
              brand: "Anker",
              price: 3999,
              originalPrice: 4999,
              rating: 4.5,
              reviews: 2130,
              stock: 25,
              category: "Electronics",
              subcategory: "Accessories",
              tags: ["charger", "gan", "usb-c", "anker"],
              specifications: {
                power: "65W",
                ports: "3",
                type: "GaN Charger"
              }
            }
          ]
        }
      ]
    },

    {
      id: "cat-2",
      name: "Books",
      description: "Programming and technology books",

      subcategories: [
        {
          id: "sub-4",
          name: "Programming",

          products: [
            {
              id: "p-401",
              name: "JavaScript: The Definitive Guide",
              brand: "O'Reilly",
              price: 899,
              originalPrice: 1199,
              rating: 4.7,
              reviews: 1870,
              stock: 25,
              category: "Books",
              subcategory: "Programming",
              tags: ["javascript", "programming", "web"],
              specifications: {
                author: "David Flanagan",
                pages: 704,
                language: "English"
              }
            },

            {
              id: "p-402",
              name: "You Don't Know JS Yet",
              brand: "O'Reilly",
              price: 699,
              originalPrice: 899,
              rating: 4.8,
              reviews: 2340,
              stock: 18,
              category: "Books",
              subcategory: "Programming",
              tags: ["javascript", "js", "programming"],
              specifications: {
                author: "Kyle Simpson",
                pages: 278,
                language: "English"
              }
            },

            {
              id: "p-403",
              name: "Clean Code",
              brand: "Pearson",
              price: 799,
              originalPrice: 999,
              rating: 4.6,
              reviews: 4320,
              stock: 20,
              category: "Books",
              subcategory: "Programming",
              tags: ["clean-code", "software", "programming"],
              specifications: {
                author: "Robert C. Martin",
                pages: 464,
                language: "English"
              }
            },

            {
              id: "p-404",
              name: "Designing Data-Intensive Applications",
              brand: "O'Reilly",
              price: 1299,
              originalPrice: 1599,
              rating: 4.9,
              reviews: 5670,
              stock: 11,
              category: "Books",
              subcategory: "Programming",
              tags: ["system-design", "database", "distributed-systems"],
              specifications: {
                author: "Martin Kleppmann",
                pages: 616,
                language: "English"
              }
            }
          ]
        },

        {
          id: "sub-5",
          name: "DSA",

          products: [
            {
              id: "p-501",
              name: "Introduction to Algorithms",
              brand: "MIT Press",
              price: 1599,
              originalPrice: 1899,
              rating: 4.8,
              reviews: 3200,
              stock: 8,
              category: "Books",
              subcategory: "DSA",
              tags: ["dsa", "algorithms", "data-structures"],
              specifications: {
                author: "Cormen",
                pages: 1312,
                language: "English"
              }
            },

            {
              id: "p-502",
              name: "Cracking the Coding Interview",
              brand: "CareerCup",
              price: 999,
              originalPrice: 1299,
              rating: 4.7,
              reviews: 2870,
              stock: 13,
              category: "Books",
              subcategory: "DSA",
              tags: ["dsa", "interview", "coding"],
              specifications: {
                author: "Gayle Laakmann McDowell",
                pages: 708,
                language: "English"
              }
            }
          ]
        }
      ]
    },

    {
      id: "cat-3",
      name: "Gaming",
      description: "Gaming hardware and accessories",

      subcategories: [
        {
          id: "sub-6",
          name: "Gaming Accessories",

          products: [
            {
              id: "p-601",
              name: "Razer DeathAdder V3",
              brand: "Razer",
              price: 6999,
              originalPrice: 7999,
              rating: 4.6,
              reviews: 1450,
              stock: 17,
              category: "Gaming",
              subcategory: "Gaming Accessories",
              tags: ["gaming", "mouse", "razer"],
              specifications: {
                dpi: "30000",
                connectivity: "USB",
                type: "Gaming Mouse"
              }
            },

            {
              id: "p-602",
              name: "Logitech G Pro X Keyboard",
              brand: "Logitech",
              price: 11999,
              originalPrice: 13999,
              rating: 4.7,
              reviews: 920,
              stock: 6,
              category: "Gaming",
              subcategory: "Gaming Accessories",
              tags: ["gaming", "keyboard", "mechanical"],
              specifications: {
                switches: "GX Mechanical",
                connectivity: "Wireless",
                type: "Gaming Keyboard"
              }
            },

            {
              id: "p-603",
              name: "HyperX Cloud III",
              brand: "HyperX",
              price: 8999,
              originalPrice: 9999,
              rating: 4.5,
              reviews: 1100,
              stock: 12,
              category: "Gaming",
              subcategory: "Gaming Accessories",
              tags: ["gaming", "headset", "hyperx"],
              specifications: {
                connectivity: "USB",
                microphone: "Detachable",
                type: "Gaming Headset"
              }
            }
          ]
        }
      ]
    }
  ]
};