// Price ranges for different budget categories
export const priceRanges = {
  budget: { min: 100, max: 300 },
  moderate: { min: 300, max: 700 },
  premium: { min: 700, max: 1500 }
};

// Rules for seasonal color combinations
export const outfitRules = {
  spring: {
    colors: ["coral", "peach", "warm yellow", "light blue", "mint green"],
    avoid: ["black", "dark gray", "burgundy"],
    combinations: [
      { main: "light blue", accent: "coral" },
      { main: "peach", accent: "mint green" }
    ]
  },
  summer: {
    colors: ["powder blue", "lavender", "soft pink", "sage green"],
    avoid: ["orange", "brown", "olive"],
    combinations: [
      { main: "powder blue", accent: "soft pink" },
      { main: "lavender", accent: "sage green" }
    ]
  },
  autumn: {
    colors: ["rust", "olive", "mustard", "terracotta"],
    avoid: ["neon colors", "pastel pink", "icy blue"],
    combinations: [
      { main: "rust", accent: "olive" },
      { main: "mustard", accent: "terracotta" }
    ]
  },
  winter: {
    colors: ["pure white", "navy", "true red", "emerald"],
    avoid: ["beige", "orange", "muted tones"],
    combinations: [
      { main: "navy", accent: "pure white" },
      { main: "true red", accent: "emerald" }
    ]
  }
};

// Database of outfit items
export const outfitItems = {
  formal: {
    classic: {
      budget: {
        spring: [
          {
            type: "Blazer",
            name: "Classic Single-Breasted Blazer",
            brand: "H&M",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f",
            color: "Light Blue",
            link: "https://www2.hm.com/en_us/productpage.0985335001.html"
          },
          {
            type: "Shirt",
            name: "Slim Fit Easy-iron Shirt",
            brand: "H&M",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f",
            color: "White",
            link: "https://www2.hm.com/en_us/productpage.0781505001.html"
          },
          {
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        summer: [
          {
            type: "Blazer",
            name: "Linen Blend Blazer",
            brand: "Uniqlo",
            price: 59.90,
            image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0",
            color: "Beige",
            link: "https://www.uniqlo.com/us/en/products/E455661-000/"
          },
          {
            type: "Shirt",
            name: "Premium Linen Shirt",
            brand: "Uniqlo",
            price: 29.90,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
            color: "Light Blue",
            link: "https://www.uniqlo.com/us/en/products/E447654-000/"
          }
        ]
      }
    },
    modern: {
      budget: {
        spring: [
          {
            type: "Blazer",
            name: "Oversized Blazer",
            brand: "Zara",
            price: 79.90,
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f",
            color: "Gray",
            link: "https://www.zara.com/us/en/oversized-blazer-p02753050.html"
          }
        ]
      }
    }
  },
  casual: {
    classic: {
      budget: {
        spring: [
          {
            type: "Shirt",
            name: "Oxford Cotton Shirt",
            brand: "Uniqlo",
            price: 29.90,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
            color: "White",
            link: "https://www.uniqlo.com/us/en/products/E433604-000/"
          },
          {
            type: "Pants",
            name: "Slim-Fit Chinos",
            brand: "H&M",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Beige",
            link: "https://www2.hm.com/en_us/productpage.0721962011.html"
          }
        ]
      }
    },
    modern: {
      budget: {
        spring: [
          {
            type: "Jacket",
            name: "Denim Jacket",
            brand: "Levi's",
            price: 89.50,
            image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9",
            color: "Light Blue",
            link: "https://www.levi.com/US/en_US/clothing/men/outerwear/trucker-jacket/p/723340406"
          },
          {
            type: "T-Shirt",
            name: "Premium Cotton T-Shirt",
            brand: "Uniqlo",
            price: 19.90,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            color: "White",
            link: "https://www.uniqlo.com/us/en/products/E422990-000/"
          }
        ]
      }
    }
  },
  business: {
    classic: {
      budget: {
        spring: [
          {
            type: "Blazer",
            name: "Classic Blazer",
            brand: "H&M",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f",
            color: "Navy",
            link: "https://www2.hm.com/en_us/productpage.0985335001.html"
          },
          {
            type: "Shirt",
            name: "Non-Iron Dress Shirt",
            brand: "Uniqlo",
            price: 29.90,
            image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f",
            color: "Light Blue",
            link: "https://www.uniqlo.com/us/en/products/E433604-000/"
          },
          {
            type: "Pants",
            name: "Slim Fit Dress Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Gray",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      }
    },
    modern: {
      budget: {
        spring: [
          {
            type: "Blazer",
            name: "Slim Fit Blazer",
            brand: "Zara",
            price: 89.90,
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f",
            color: "Gray",
            link: "https://www.zara.com/us/en/slim-fit-blazer-p02753050.html"
          },
          {
            type: "Shirt",
            name: "Stretch Dress Shirt",
            brand: "Uniqlo",
            price: 29.90,
            image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f",
            color: "White",
            link: "https://www.uniqlo.com/us/en/products/E433604-000/"
          }
        ]
      }
    }
  },
  party: {
    classic: {
      budget: {
        spring: [
          {
            type: "Blazer",
            name: "Velvet Blazer",
            brand: "H&M",
            price: 69.99,
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f",
            color: "Navy",
            link: "https://www2.hm.com/en_us/productpage.0985335001.html"
          },
          {
            type: "Shirt",
            name: "Dress Shirt",
            brand: "Zara",
            price: 39.90,
            image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f",
            color: "White",
            link: "https://www.zara.com/us/en/dress-shirt-p02753050.html"
          }
        ]
      }
    },
    modern: {
      budget: {
        spring: [
          {
            type: "Jacket",
            name: "Metallic Bomber Jacket",
            brand: "Zara",
            price: 89.90,
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f",
            color: "Silver",
            link: "https://www.zara.com/us/en/metallic-bomber-jacket-p02753050.html"
          },
          {
            type: "T-Shirt",
            name: "Graphic T-Shirt",
            brand: "H&M",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            color: "Black",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      }
    }
  }
};