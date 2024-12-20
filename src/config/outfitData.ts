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
        //formal modern
        spring: {
          top:[
            { 
              type: "Turtleneck",
              name: "Heat Tech Fleece Turtleneck T-Shirt",
              brand: "UNIQLO",
              price: 29.90,
              image: "https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/442063/item/cagoods_11_442063_3x4.jpg?width=369",
              color: "Pink",
              description: "Heat Tech fleece fabric. The soft and comfortable feel of fleece. Turtleneck design for extra warmth.",
              link: "https://www.uniqlo.com/ca/en/products/E442063-000?colorCode=COL11&sizeCode=SMA002"
            }
          ],
          bottom:[
            { 
              type: "Pants",
              name: "Wide Chino Pants",
              brand: "UNIQLO",
              price: 59.90,
              image: "https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/469828/item/cagoods_32_469828_3x4.jpg?width=369",
              color: "Beige",
              description: "Smart looking pants with minimal detailing. Stretch at the waist for comfort and a flattering fit.",
              link: "https://www.uniqlo.com/ca/en/products/E469828-000?colorCode=COL32&sizeCode=SMA002"
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
      //formal creative
      spring: {
        top:[
          { 
            type: "Cardigan",
            name: "Mohair-blend cardigan",
            brand: "H&M",
            price: 178.90,
            image: "https://image.hm.com/assets/hm/2c/60/2c60cb3d256a3816050ed08d33230e4fcd69e53f.jpg?imwidth=1536",
            color: "Dusty Blue",
            description: "Oversized cardigan in a soft knit containing mohair and wool. V-neckline, buttons down the front and dropped shoulders. Ribbing at the cuffs and hem.",
            link: "https://www2.hm.com/en_ca/productpage.1260301004.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Flared Crinkle Pants",
            brand: "H&M",
            price: 29.90,
            image: "https://image.hm.com/assets/hm/93/7e/937efca0d4b40be2cd0382097615c9a37c8e05d8.jpg?imwidth=1536",
            color: "Brown",
            description: "Fitted pants in crinkled jersey. Concealed, elasticized waistband and flared hems.",
            link: "https://www2.hm.com/en_ca/productpage.1274428001.html"
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
      //casual modern
      spring: {
        top:[
          { 
            type: "Jacket",
            name: "Hooded Jacket",
            brand: "H&M",
            price: 24.99,
            image: "https://image.hm.com/assets/hm/96/b3/96b346d9709a9b1f712a9169d069c6e654d983bf.jpg?imwidth=1536",
            color: "Dark Brown",
            description: "Hooded sweatshirt jacket with a soft, brushed inside. Jersey-lined, drawstring hood, zipper at front, and kangaroo pockets. Dropped shoulders, long sleeves, and ribbing at cuffs and hem.",
            link: "https://www2.hm.com/en_ca/productpage.1213772006.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Wide Legged Joggers",
            brand: "H&M",
            price: 24.99,
            image: "https://image.hm.com/assets/hm/9b/f3/9bf37f9be5c297c9d9106f46e19631a03da03723.jpg?imwidth=1536",
            color: "Light Yellow",
            description: "Loose-fit sweatpant joggers. Elasticized, drawstring waistband, discreet side-seam pockets, and wide legs.",
            link: "https://www2.hm.com/en_ca/productpage.1199249019.html"
          }
        ]
      },
      //casual modern
      summer:{
        top:[
          { 
            type: "Top",
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
            name: "Straight Regular Jeans",
            brand: "H&M",
            price: 59.99,
            image: "https://image.hm.com/assets/hm/bc/22/bc22b7bbcf74913c8a10d944614fa36bac0c4d90.jpg?imwidth=1536",
            color: "Blue",
            description: "5-pocket jeans in rigid cotton denim that feels firm at first, softening and relaxing with wear. Loose fit from waist to hip and straight cut from thigh to hem. Regular waist and button fly. Straight, longer legs, designed to fall over foot with a stacking effect. Denim that goes from daytime to date night.",
            link: "https://www2.hm.com/en_ca/productpage.1222679005.html"
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
    //casual creative
    spring: {
      top:[
        { 
          type: "Blouse",
          name: "Sheer Tie-Neck Blouse",
          brand: "H&M",
          price: 79.99,
          image: "https://image.hm.com/assets/hm/c7/3e/c73e5c309e63a45fae6bfe1dce2c66f3396348d3.jpg?imwidth=1536",
          color: "Cream",
          description: "Loose-fit blouse in sheer, woven fabric. Gathered stand collar with wide ties at front, long, wide raglan sleeves, and curved, flounce-trimmed cuffs.",
          link: "https://www2.hm.com/en_ca/productpage.1259011001.html"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Flared Crushed-Velour Leggings",
          brand: "H&M",
          price: 24.99,
          image: "https://image.hm.com/assets/hm/4e/7c/4e7c804daa983288719b1ee6f4086c42ea8a5893.jpg?imwidth=1536",
          color: "Orange",
          description: "Leggings in crushed velour. Concealed elasticized waistband and flared hems.",
          link: "https://www2.hm.com/en_ca/productpage.1276341002.html"
        }
      ]
    },
    //creative casual
    summer:{
      top:[
        { 
          type: "Blouse",
          name: "Floral Print Satin Effect Blouse",
          brand: "ZARA",
          price: 55.99,
          image: "https://static.zara.net/assets/public/6751/0969/58a14a85a205/0e1988f08022/09217281668-p/09217281668-p.jpg?ts=1731687043588&w=1024",
          color: "Light Burgundy",
          description: "Flowy blouse with lapel collar and long sleeves. Front hidden button closure.",
          link: "https://www.zara.com/ca/en/floral-print-satin-effect-blouse-p09217281.html?v1=408710202&v2=2419930"
        }
      ],
      bottom:[
        { 
          type: "Pants",
          name: "Wide Leg Belted Pants",
          brand: "ZARA",
          price: 65.99,
          image: "https://static.zara.net/assets/public/1dda/15cf/794b4ab0b6c2/1ad136239690/07968051406-e1/07968051406-e1.jpg?ts=1727010171384&w=1024",
          color: "Light Blue",
          description: "Pants with a high waist with front pleats and self belt. Front pockets and back patch pockets. Wide leg. Front zip, inner button, and metal hook closure.",
          link: "https://www.zara.com/ca/en/wide-leg-belted-pants-p07968051.html?v1=367323101&v2=2420795"
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
      // party modern
      spring: {
        top:[
          { 
            type: "Dress",
            name: "Velvet Midi Dress ZW Collection",
            brand: "ZARA",
            price: 79.99,
            image: "https://static.zara.net/assets/public/a705/f023/c1ee46a99ed0/a2f6ae68cc4c/09998185401-p/09998185401-p.jpg?ts=1731590343295&w=1024",
            color: "Navy",
            description: "Midi dress made of velvet effect fabric. Drop sleeve with fluid neckline.",
            link: "https://www.zara.com/ca/en/velvet-midi-dress-zw-collection-p09998185.html?v1=411120428&v2=2420795"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "STRAIGHT FIT CREPE PANTS",
            brand: "ZARA",
            price: 65.99,
            image: "https://static.zara.net/assets/public/f282/55b0/3cf44fc688b6/387d0572d1db/02008572501-e1/02008572501-e1.jpg?ts=1731596109166&w=1024",
            color: "Green",
            description: "Pants with a high waist and back elastic waistband and front pockets. Straight leg. Front zip, interior button and hook closure.",
            link: "https://www.zara.com/ca/en/straight-fit-crepe-pants-p02008572.html?v1=414932802&v2=2420795"
          }
        ]
      },
      summer:{
        top:[
          { 
            type: "Top",
            name: "Metallic Thread Top with Raised Flowers",
            brand: "ZARA",
            price: 45.90,
            image: "https://static.zara.net/assets/public/3521/8cc7/453e4fe49697/8bbd4ef8b87c/03152150629-p/03152150629-p.jpg?ts=1724854575330&w=1024",
            color: "Light Purple",
            description: "Top made with metallic thread knit fabric. Strapless with straight neckline. Matching interior lining. Self floral appliqués.",
            link: "https://www.zara.com/ca/en/metallic-thread-top-with-raised-flowers-p03152150.html?v1=387299624&v2=2419906"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "WRINKLED EFFECT SHINY PANTS",
            brand: "H&M",
            price: 65.99,
            image: "https://static.zara.net/assets/public/4449/7b5b/aa214d26b00f/9e9466d5b20b/08985543808-p/08985543808-p.jpg?ts=1727274221896&w=1024",
            color: "Gray",
            description: "Wrinkle effect and shiny fabric pants. High-waisted with front pockets and false back welt pockets. Straight leg. Front zip, interior button and hook closure.",
            link: "https://www.zara.com/ca/en/wrinkled-effect-shiny-pants-p08985543.html?v1=392190085&v2=2420795"
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
      // party creative
      spring: {
        top:[
          { 
            type: "Blouse",
            name: "Tied Blouse ZW Collection",
            brand: "ZARA",
            price: 65.99,
            image: "https://static.zara.net/assets/public/8bb3/03b0/409846a1bd4c/7b2b3f4b50c4/08876019600-e1/08876019600-e1.jpg?ts=1732098472895&w=1024",
            color: "Red",
            description: "Blouse with round collar and V-neck front with self tie. Long flared sleeves. Straight hem.",
            link: "https://www.zara.com/ca/en/tied-blouse-zw-collection-p08876019.html?v1=407604330&v2=2420959"
          }
        ],
        bottom:[
          { 
            type: "Skirt",
            name: "Velvet Pencil Skirt ZW Collection",
            brand: "ZARA",
            price: 99.99,
            image: "https://static.zara.net/assets/public/397e/a535/aab048c192e2/a667c842a7b7/04043118800-e1/04043118800-e1.jpg?ts=1731676653774&w=1024",
            color: "Black",
            description: "Midi pencil skirt made of velvet. Slit hem. Front embossed metal button closure.",
            link: "https://www.zara.com/ca/en/velvet-pencil-skirt-zw-collection-p04043118.html?v1=410564524&v2=2420959"
          }
        ]
      },
      summer:{
        top:[
          { 
            type: "Top",
            name: "Turtleneck Top",
            brand: "H&M",
            price: 14.99,
            image: "https://image.hm.com/assets/hm/a8/71/a871fac825526dda38e0fac27334936c9f4583f2.jpg?imwidth=1536",
            color: "Cheeta Print",
            description: "Fitted turtleneck top in soft jersey with long sleeves.",
            link: "https://www2.hm.com/en_ca/productpage.1089794026.html"
          }
        ],
        bottom:[
          { 
            type: "Pants",
            name: "Velvet Sequin Pants",
            brand: "ZARA",
            price: 65.90,
            image: "https://static.zara.net/assets/public/71e3/b22c/fc4c48c2a714/4f368bfc6852/09720645055-p/09720645055-p.jpg?ts=1730292161989&w=1024",
            color: "Light Blue",
            description: "Velvet pants with sequins. Straight leg pants with a high waist and side slits. Hidden zip closure at side",
            link: "https://www.zara.com/ca/en/velvet-sequin-pants-p09720645.html?v1=406252087&v2=2420795"
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