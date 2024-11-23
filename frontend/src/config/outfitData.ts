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

// DataqaSbase of outfit items
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
        //formal modern
        summer:{
          top:[
            { 
              type: "Top",
              name: "Cashmere Blend T-Shirt",
              brand: "UNIQLO",
              price: 24.99,
              image: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/469765/item/usgoods_10_469765_3x4.jpg?width=400",
              color: "Beige Pink",
              description: "Moderately sheer fabric and slightly longer sleeves for easy layering.",
              link: "https://www.uniqlo.com/us/en/products/E469765-000/00?colorDisplayCode=10&sizeDisplayCode=004"
            }
          ],
          bottom:[
            { 
              type: "Pants",
              name: "Wide Chinos Pants",
              brand: "UNIQLO",
              price: 19.99,
              image: "https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/469828/item/cagoods_10_469828_3x4.jpg?width=369",
              color: "Beige Pink",
              description: "Smart looking pants with minimal detailing. Stretch at the waist for comfort and a flattering fit. The wide fit falls straight down to the hem for a well-balanced fit.",
              link: "https://www.uniqlo.com/ca/en/products/E469828-000?colorCode=COL10&sizeCode=SMA002"
            }
          ]
        },
        
        fall: {
          top:[
            { 
              type: "Top",
              name: "Heat Tech Fleece Turtleneck T-Shirt",
              brand: "UNIQLO",
              price: 29.90,
              image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/442063/sub/goods_442063_sub14_3x4.jpg?width=369",
              color: "Wine",
              description: "Fleece fabric. The soft and comfortable feel of fleece. Turtleneck design for extra warmth.",
              link: "https://www.uniqlo.com/ca/en/products/E442063-000?colorCode=COL19&sizeCode=SMA002"
            }
          ],
          bottom:[
            { 
              type: "Skirt",
              name: "Satin Skirts",
              brand: "UNIQLO",
              price: 59.90,
              image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/469830/sub/goods_469830_sub18_3x4.jpg?width=369",
              color: "Black",
              description: "Bias cut for a natural fit.",
              link: "https://www.uniqlo.com/ca/en/products/E469830-000?colorCode=COL09&sizeCode=SMA003"
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
      // Formal creative
      summer:{
        top:[
          { 
            type: "Top",
            name: "Asummetric Alpaca Blend Knit Top",
            brand: "ZARA",
            price: 69.99,
            image: "https://static.zara.net/assets/public/860c/1b18/ded645f8bb58/3ad2b20f4c89/05755142802-p/05755142802-p.jpg?ts=1731674119012&w=1024",
            color: "Gray",
            description: "Alpaca top. Asymmetrical neckline and short sleeve.",
            link: "https://www.zara.com/ca/en/asymmetric-alpaca-blend-knit-top-p05755142.html?v1=401153590&v2=2419930"
          }
        ],
        bottom:[
          { 
            type: "Skirt",
            name: "SATIN EFFECT MIDI SKIRT",
            brand: "ZARA",
            price: 55.99,
            image: "https://static.zara.net/assets/public/de1e/c9c3/7f7e4459838b/d435d5a9f93d/02011399681-p/02011399681-p.jpg?ts=1730882856706&w=1024",
            color: "Burgundy",
            description: "Skirt with a high elastic waistband.",
            link: "https://www.zara.com/ca/en/satin-effect-midi-skirt-p02011399.html?v1=411821997&v2=2419930"
          }
        ]
      },
      fall: {
        top:[
          { 
            type: "Vest",
            name: "Fitted Sequin Vest",
            brand: "ZARA",
            price: 59.99,
            image: "https://static.zara.net/assets/public/fa5d/2b28/bb3949e79d34/e51796e6862d/04387399800-p/04387399800-p.jpg?ts=1731069322789&w=1024",
            color: "Black",
            description: "V-neck vest. Sequin appliqué. Front hidden snap button closure.",
            link: "https://www.zara.com/ca/en/fitted-sequin-vest-p04387399.html?v1=395968556&v2=2419940"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Satin Lace Pajama Pants",
            brand: "ZARA",
            price: 79.99,
            image: "https://static.zara.net/assets/public/fe8c/e8da/25144cb6a19e/190db7d28f44/01067929500-e1/01067929500-e1.jpg?ts=1731941080172&w=1024",
            color: "Green",
            description: "Satin effect pants with a mid elastic waist. Contrasting lace trim. Straight leg.",
            link: "https://www.zara.com/ca/en/satin-lace-pajama-pants-p01067929.html?v1=384757092&v2=2420795"
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
      //casual modern
      summer:{
        top:[
          { 
            type: "Pants",
            name: "Oversize Printed T-Shirt",
            brand: "H&M",
            price: 24.99,
            image: "https://image.hm.com/assets/hm/16/d9/16d958eb5b56e9126b27ed74dfaf69c421f0ccd6.jpg?imwidth=1536",
            color: "White",
            description: "Oversized T-shirt in soft cotton jersey with a printed motif at front. Ribbed neckline and dropped shoulders.",
            link: "https://www2.hm.com/en_ca/productpage.1242503012.html"
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
            type: "T-Shirt",
            name: "Oversize Print T-Shirt",
            brand: "H&M",
            price: 24.99,
            image: "https://image.hm.com/assets/hm/43/30/4330de8151b3f24e4e988a11b5ec0bf3059a7dff.jpg?imwidth=1536",
            color: "Pink",
            description: "Oversized T-shirt in soft cotton jersey with a printed design. Ribbed neckline, heavily dropped shoulders, and a straight-cut hem.",
            link: "https://www2.hm.com/en_ca/productpage.1227727027.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Cotton-blend Sweatpants",
            brand: "H&M",
            price: 24.99,
            image: "https://image.hm.com/assets/hm/95/a6/95a6c3011271ab0fc9642096d9c3809f750a7b8a.jpg?imwidth=1536",
            color: "Burgundy",
            description: "Sweatpants in soft, cotton-blend fabric. High waist with covered, elasticized waistband and drawstring, side pockets, and covered elastic at hems. Soft, brushed inside.",
            link: "https://www2.hm.com/en_ca/productpage.0932722098.html"
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
          type: "Top",
          name: "Mohair-Blend Rib-Knit Top",
          brand: "H&M",
          price: 59.99,
          image: "https://image.hm.com/assets/hm/fb/82/fb82b88507edeb0b69fd18ecc2de214ec41ce0f0.jpg?imwidth=1536",
          color: "Light beige",
          description: "Top in a soft rib knit with mohair and wool content. Round, rib-knit neckline, rhinestone-embellished buttons at top, and short sleeves.",
          link: "https://www2.hm.com/en_ca/productpage.1254224001.html"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Super Barrel Regular Jeans",
          brand: "H&M",
          price: 59.99,
          color: "Denim blue",
          description: "Loose fit from hip to thigh. Regular waist and zip fly with button. Voluminous, extra-curved legs, tapered to hems. Regular length, designed to fall at top of foot with little or no stacking. A denim statement that goes the distance.",
          link: "https://www2.hm.com/en_ca/productpage.1229033003.html"
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
      // party modern
      fall: {
        top:[
          { 
            type: "Top",
            name: "Belted Velvet Top",
            brand: "ZARA",
            price: 55.90,
            image: "https://static.zara.net/assets/public/a29b/c831/5a574a47b981/ed692464c748/09026150606-p/09026150606-p.jpg?ts=1728045573352&w=1024",
            color: "Burgundy",
            description: "Strapless top with straight neckline. Thin belt with metal buckle. Interior lining. Side zip closure",
            link: "https://www.zara.com/ca/en/belted-velvet-top-p09026150.html?v1=398023642&v2=2419940"
          }
        ],
        bottom:[
          { 
            type: "Skirt",
            name: "Belted Velvet Mini Skirt",
            brand: "ZARA",
            price: 65.99,
            image: "https://static.zara.net/assets/public/11a6/403d/a4ad4c3eb61c/c5f5208cfae7/01255521605-p/01255521605-p.jpg?ts=1728045588858&w=1024",
            color: "Burgundy",
            description: "Mini skirt with a low waist. Wide contrasting belt with metal buckle. Interior lining. Hidden zip closure at side",
            link: "https://www.zara.com/ca/en/belted-velvet-mini-skirt-p01255521.html?v1=393605659&v2=2419940"
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
            type: "Top",
            name: "Velvet BowsTop",
            brand: "ZARA",
            price: 45.99,
            image: "https://static.zara.net/assets/public/4a6e/b55f/d6e546ab821d/61570de62764/09853071550-p/09853071550-p.jpg?ts=1731670765765&w=1024",
            color: "Green",
            description: "Top made of velvet. Boatneck and straps. Matching interior lining. Back bows and opening detail. Hidden zip closure at side.",
            link: "https://www.zara.com/ca/en/velvet-bows-top-p09853071.html?v1=409846022&v2=2419940"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Sequin Velvet Flared Leggings",
            brand: "ZARA",
            price: 79.99,
            image: "https://static.zara.net/assets/public/da20/b840/126c4d8d8190/103ca8108924/09860222033-p/09860222033-p.jpg?ts=1731576237477&w=1024",
            color: "Black",
            description: "Leggings with a high elastic waist. Sequin appliqués. A-line silhouette.",
            link: "https://www.zara.com/ca/en/sequin-velvet-flared-leggings-p09860222.html?v1=396940734&v2=2420896"
          }
        ]
      }
    },
  }
 };