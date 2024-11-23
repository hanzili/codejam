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
    modern: {
        winter: {
          top:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ],
          bottom:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ]
        },
        spring: {
          top:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ],
          bottom:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ]
        },
        summer:{
          top:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ],
          bottom:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ]
        },
        fall: {
          top:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ],
          bottom:[
            { 
              type: "Pants",
              name: "Slim Fit Suit Pants",
              brand: "H&M",
              price: 34.99,
              image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
              color: "Navy",
              description: "this is a description",
              link: "https://www2.hm.com/en_us/productpage.0713739044.html"
            }
          ]
        }
    },
    creative: {
      winter: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      spring: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      summer:{
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      fall: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      }
    },
  },
  casual: {
    modern: {
      winter: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      spring: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      summer:{
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      fall: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      }
    },
    creative: {
    winter: {
      top:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ]
    },
    spring: {
      top:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ]
    },
    summer:{
      top:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ]
    },
    fall: {
      top:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Slim Fit Suit Pants",
          brand: "H&M",
          price: 34.99,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
          color: "Navy",
          description: "this is a description",
          link: "https://www2.hm.com/en_us/productpage.0713739044.html"
        }
      ]
    }
    },
  },
  party: {
    modern: {
      winter: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      spring: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      summer:{
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      fall: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      }
    },
    creative: {
      winter: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      spring: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      summer:{
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      },
      fall: {
        top:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Slim Fit Suit Pants",
            brand: "H&M",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy",
            description: "this is a description",
            link: "https://www2.hm.com/en_us/productpage.0713739044.html"
          }
        ]
      }
    },
  }
 };