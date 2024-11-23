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
              type: "Top",
              name: "Gold Button Knitted Vest Top",
              brand: "Zara",
              price: 55.99,
              image: "https://static.zara.net/assets/public/3f06/fd6c/9332438aa9ba/e8a192a917c9/04192100606-p/04192100606-p.jpg?ts=1730826965943&w=850",
              color: "Burgundy",
              description: "Plain knit sleeveless vest top with round neck. Front slit at hem. Front closure with gold buttons.",
              link: "https://www.zara.com/ca/en/gold-button-knitted-vest-top-p04192100.html?v1=405471950&v2=2419940"
            }
          ],
          bottom:[
            { 
              type: "Pants",
              name: "Straight Cut Pleated Pants",
              brand: "Zara",
              price: 55.99,
              image: "https://static.zara.net/assets/public/8eaa/ffeb/7d1e449f8c6f/4b41b1e91789/08741357401-p/08741357401-p.jpg?ts=1732120023381&w=750",
              color: "Navy Blue",
              description: "Pants with a high waist with front pleats. Front pockets and back false welt pockets. Front zip, interior button and hooks closure.",
              link: "https://www.zara.com/ca/en/straight-cut-pleated-pants-p08741357.html?v1=419571759&v2=2420795"
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
            type: "Top",
            name: "Knit Top With Side Buttons",
            brand: "Zara",
            price: 45.90,
            image: "https://static.zara.net/assets/public/d7ff/21cb/7c80425c9ccb/26000f1aca6d/09598133401-p/09598133401-p.jpg?ts=1727866473676&w=750",
            color: "Navy Blue",
            description: "Basic knit sleeveless vest with round neck. Side gold button detail.",
            link: "https://www.zara.com/ca/en/knit-top-with-side-buttons-p09598133.html?v1=397870445&v2=2419940"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Straight Fit Crepe Pants",
            brand: "Zara",
            price: 65.90,
            image: "https://static.zara.net/assets/public/a434/5783/47d74f29b95b/8e3c7d1b396e/02008572501-p/02008572501-p.jpg?ts=1731687045034&w=750",
            color: "Bottle Green",
            description: "Pants with a high waist and back elastic waistband and front pockets. Straight leg. Front zip, interior button and hook closure.",
            link: "https://www.zara.com/ca/en/straight-fit-crepe-pants-p02008572.html?v1=414932802&v2=2420795"
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
            type: "Top",
            name: "Boxy Printed T-Shirt",
            brand: "H&M X Wicked",
            price: 29.99,
            image: "https://image.hm.com/assets/hm/23/e8/23e8a26f563eb5f227c5f1f59380f3502492c975.jpg?imwidth=1536",
            color: "Wintage black/Wicked",
            description: "Loose-fit, boxy T-shirt in soft cotton jersey with a printed design. Ribbed neckline and dropped shoulders.",
            link: "https://www2.hm.com/en_ca/productpage.1251342005.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Flared Rib-Knit Pants",
            brand: "H&M",
            price: 44.99,
            image: "https://image.hm.com/assets/hm/76/b5/76b56bb30d551af73fc940253fc2a2b64513a225.jpg?imwidth=1260",
            color: "Dark Gray",
            description: "Soft, rib-knit pants. High waist, elasticized waistband, and slim legs, flared to hems.",
            link: "https://www2.hm.com/en_ca/productpage.1207035002.html"
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
          type: "Top",
          name: "Mohair-Blend Knit Top",
          brand: "H&M",
          price: 74.99,
          image: "https://image.hm.com/assets/hm/0f/43/0f43338ec746c9d2b79fb3b53e99e7943efe7c36.jpg?imwidth=1260",
          color: "Plum",
          description: "Soft, knit sweater with mohair and wool content. Round neckline, short sleeves finishing just above elbows, and ribbing at neckline, cuffs, and hem.",
          link: "https://www2.hm.com/en_ca/productpage.1218191004.html"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Wide Coated Joggers",
          brand: "H&M",
          price: 34.99,
          image: "https://image.hm.com/assets/hm/70/b9/70b906481104dae8d4a9701bd8361ba1265d3d52.jpg?imwidth=1260",
          color: "Gray",
          description: "Joggers in coated fabric. Elasticized smocking at waistband, discreet side pockets, and wide legs with raw-edge hems.",
          link: "https://www2.hm.com/en_ca/productpage.1249234005.html"
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
            type: "Top",
            name: "Stretch Halter Top",
            brand: "Zara",
            price: 29.90,
            image: "https://static.zara.net/assets/public/d0b1/97dc/c7e84f4384a1/feb3abea715f/03644300406-p/03644300406-p.jpg?ts=1721313256891&w=750",
            color: "Light BLue",
            description: "Top made of stretch fabric with buttoned halter neckline. Ruching detail at side.",
            link: "https://www.zara.com/ca/en/stretch-halter-top-p03644300.html?v1=378482722&v2=2419906"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Sequin Velvet Flared Leggings",
            brand: "Zara",
            price: 79.90,
            image: "https://static.zara.net/assets/public/da20/b840/126c4d8d8190/103ca8108924/09860222033-p/09860222033-p.jpg?ts=1731576237477&w=750",
            color: "Black/Silver",
            description: "Leggings with a high elastic waist. Sequin appliqués. A-line silhouette.",
            link: "https://www.zara.com/ca/en/sequin-velvet-flared-leggings-p09860222.html?v1=396940734&v2=2420795"
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
            type: "Top",
            name: "Beaded Fringed Halter Top",
            brand: "Zara",
            price: 149.00,
            image: "https://static.zara.net/assets/public/debf/1b48/7aec456391d5/a622cd6ad08e/07521943808-e1/07521943808-e1.jpg?ts=1732099879736&w=750",
            color: "Gray",
            description: "Semi-sheer halter neck top with exposed shoulders. Fringes detail with contrast bead appliqués. Back hidden button closure.",
            link: "https://www.zara.com/ca/en/beaded-fringed-halter-top-p07521943.html?v1=387670944&v2=2419940"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Velvet Sequin Pants",
            brand: "Zara",
            price: 79.99,
            image: "https://static.zara.net/assets/public/4fc0/b650/1c824f479ee6/e1d2b78e8104/09544612800-015-p/09544612800-015-p.jpg?ts=1731060914664&w=1126",
            color: "Navy",
            description: "Velvet pants with sequins. High waist and five pockets. Straight leg. Front zip and button closure.",
            link: "https://www.zara.com/ca/en/velvet-sequin-pants-p09544612.html?v1=416753750&v2=2420795"
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