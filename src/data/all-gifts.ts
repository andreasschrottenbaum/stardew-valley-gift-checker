// https://stardewvalleywiki.com/Friendship

const artisanGoods = [
  {
    id: 340,
    name: 'Honey',
  },
  {
    id: 348,
    name: 'Wine',
  },
  {
    id: 303,
    name: 'Pale Ale',
  },
  {
    id: 346,
    name: 'Beer',
  },
  {
    id: 459,
    name: 'Mead',
  },
  {
    id: 424,
    name: 'Cheese',
  },
  {
    id: 426,
    name: 'Goat Cheese',
  },
  {
    id: 395,
    name: 'Coffee',
  },
  {
    id: 614,
    name: 'Green Tea',
  },
  {
    id: 350,
    name: 'Juice',
  },
  {
    id: 428,
    name: 'Cloth',
  },
  {
    id: 306,
    name: 'Mayonnaise',
  },
  {
    id: 307,
    name: 'Duck Mayonnaise',
  },
  {
    id: 807,
    name: 'Dinosaur Mayonnaise',
  },
  {
    id: 432,
    name: 'Truffle Oil',
  },
  {
    id: 342,
    name: 'Pickles',
  },
  {
    id: 344,
    name: 'Jelly',
  },
  {
    id: 445,
    name: 'Caviar',
  },
  {
    id: 447,
    name: 'Aged Roe',
  },
  {
    id: 247,
    name: 'Oil',
  },
  {
    id: 308,
    name: 'Void Mayonnaise',
  },
  {
    id: 873,
    name: 'Piña Colada',
  },
]
const cooking = [
  {
    id: 195,
    name: 'Omelet',
  },
  {
    id: 196,
    name: 'Salad',
  },
  {
    id: 197,
    name: 'Cheese Cauliflower',
  },
  {
    id: 198,
    name: 'Baked Fish',
  },
  {
    id: 199,
    name: 'Parsnip Soup',
  },
  {
    id: 200,
    name: 'Vegetable Medley',
  },
  {
    id: 201,
    name: 'Complete Breakfast',
  },
  {
    id: 202,
    name: 'Fried Calamari',
  },
  {
    id: 204,
    name: 'Lucky Lunch',
  },
  {
    id: 205,
    name: 'Fried Mushroom',
  },
  {
    id: 206,
    name: 'Pizza',
  },
  {
    id: 207,
    name: 'Bean Hotpot',
  },
  {
    id: 208,
    name: 'Glazed Yams',
  },
  {
    id: 209,
    name: 'Carp Surprise',
  },
  {
    id: 210,
    name: 'Hashbrowns',
  },
  {
    id: 211,
    name: 'Pancakes',
  },
  {
    id: 212,
    name: 'Salmon Dinner',
  },
  {
    id: 213,
    name: 'Fish Taco',
  },
  {
    id: 214,
    name: 'Crispy Bass',
  },
  {
    id: 215,
    name: 'Pepper Poppers',
  },
  {
    id: 218,
    name: 'Tom Kha Soup',
  },
  {
    id: 219,
    name: 'Trout Soup',
  },
  {
    id: 220,
    name: 'Chocolate Cake',
  },
  {
    id: 221,
    name: 'Pink Cake',
  },
  {
    id: 222,
    name: 'Rhubarb Pie',
  },
  {
    id: 223,
    name: 'Cookie',
  },
  {
    id: 224,
    name: 'Spaghetti',
  },
  {
    id: 225,
    name: 'Fried Eel',
  },
  {
    id: 226,
    name: 'Spicy Eel',
  },
  {
    id: 227,
    name: 'Sashimi',
  },
  {
    id: 228,
    name: 'Maki Roll',
  },
  {
    id: 229,
    name: 'Tortilla',
  },
  {
    id: 230,
    name: 'Red Plate',
  },
  {
    id: 231,
    name: 'Eggplant Parmesan',
  },
  {
    id: 232,
    name: 'Rice Pudding',
  },
  {
    id: 233,
    name: 'Ice Cream',
  },
  {
    id: 234,
    name: 'Blueberry Tart',
  },
  {
    id: 235,
    name: "Autumn's Bounty",
  },
  {
    id: 236,
    name: 'Pumpkin Soup',
  },
  {
    id: 237,
    name: 'Super Meal',
  },
  {
    id: 238,
    name: 'Cranberry Sauce',
  },
  {
    id: 239,
    name: 'Stuffing',
  },
  {
    id: 240,
    name: "Farmer's Lunch",
  },
  {
    id: 241,
    name: 'Survival Burger',
  },
  {
    id: 242,
    name: "Dish O' The Sea",
  },
  {
    id: 243,
    name: "Miner's Treat",
  },
  {
    id: 244,
    name: 'Roots Platter',
  },
  {
    id: 253,
    name: 'Triple Shot Espresso',
  },
  {
    id: 456,
    name: 'Algae Soup',
  },
  {
    id: 457,
    name: 'Pale Broth',
  },
  {
    id: 604,
    name: 'Plum Pudding',
  },
  {
    id: 605,
    name: 'Artichoke Dip',
  },
  {
    id: 606,
    name: 'Stir Fry',
  },
  {
    id: 607,
    name: 'Roasted Hazelnuts',
  },
  {
    id: 608,
    name: 'Pumpkin Pie',
  },
  {
    id: 609,
    name: 'Radish Salad',
  },
  {
    id: 610,
    name: 'Fruit Salad',
  },
  {
    id: 611,
    name: 'Blackberry Cobbler',
  },
  {
    id: 612,
    name: 'Cranberry Candy',
  },
  {
    id: 618,
    name: 'Bruschetta',
  },
  {
    id: 648,
    name: 'Coleslaw',
  },
  {
    id: 649,
    name: 'Fiddlehead Risotto',
  },
  {
    id: 651,
    name: 'Poppyseed Muffin',
  },
  {
    id: 727,
    name: 'Chowder',
  },
  {
    id: 728,
    name: 'Fish Stew',
  },
  {
    id: 729,
    name: 'Escargot',
  },
  {
    id: 730,
    name: 'Lobster Bisque',
  },
  {
    id: 731,
    name: 'Maple Bar',
  },
  {
    id: 732,
    name: 'Crab Cakes',
  },
  {
    id: 733,
    name: 'Shrimp Cocktail',
  },
  {
    id: 903,
    name: 'Ginger Ale',
  },
  {
    id: 904,
    name: 'Banana Pudding',
  },
  {
    id: 905,
    name: 'Mango Sticky Rice',
  },
  {
    id: 906,
    name: 'Poi',
  },
  {
    id: 907,
    name: 'Tropical Curry',
  },
  {
    id: 921,
    name: 'Squid Ink Ravioli',
  },
  {
    id: 194,
    name: 'Fried Egg',
  },
  {
    id: 216,
    name: 'Bread',
  },
  {
    id: 265,
    name: 'Seafoam Pudding',
  },
  {
    id: 203,
    name: 'Strange Bun',
  },
]
const flowers = [
  {
    id: 402,
    name: 'Sweet Pea',
  },
  {
    id: 418,
    name: 'Crocus',
  },
  {
    id: 421,
    name: 'Sunflower',
  },
  {
    id: 591,
    name: 'Tulip',
  },
  {
    id: 593,
    name: 'Summer Spangle',
  },
  {
    id: 595,
    name: 'Fairy Rose',
  },
  {
    id: 597,
    name: 'Blue Jazz',
  },
  {
    id: 376,
    name: 'Poppy',
  },
]
const foragedMinerals = [
  {
    id: 80,
    name: 'Quartz',
  },
  {
    id: 86,
    name: 'Earth Crystal',
  },
  {
    id: 84,
    name: 'Frozen Tear',
  },
  {
    id: 82,
    name: 'Fire Quartz',
  },
]
const fruitTreeFruits = [
  {
    id: 634,
    name: 'Apricot',
  },
  {
    id: 638,
    name: 'Cherry',
  },
  {
    id: 635,
    name: 'Orange',
  },
  {
    id: 636,
    name: 'Peach',
  },
  {
    id: 613,
    name: 'Apple',
  },
  {
    id: 637,
    name: 'Pomegranate',
  },
  {
    id: 91,
    name: 'Banana',
  },
  {
    id: 834,
    name: 'Mango',
  },
]
const gems = [
  {
    id: 60,
    name: 'Emerald',
  },
  {
    id: 62,
    name: 'Aquamarine',
  },
  {
    id: 64,
    name: 'Ruby',
  },
  {
    id: 66,
    name: 'Amethyst',
  },
  {
    id: 68,
    name: 'Topaz',
  },
  {
    id: 70,
    name: 'Jade',
  },
  {
    id: 72,
    name: 'Diamond',
  },
  {
    id: 74,
    name: 'Prismatic Shard',
  },
]
const vegetables = [
  {
    id: 259,
    name: 'Fiddlehead Fern',
  },
  {
    id: 300,
    name: 'Amaranth',
  },
  {
    id: 274,
    name: 'Artichoke',
  },
  {
    id: 284,
    name: 'Beet',
  },
  {
    id: 278,
    name: 'Bok Choy',
  },
  {
    id: 190,
    name: 'Cauliflower',
  },
  {
    id: 270,
    name: 'Corn',
  },
  {
    id: 272,
    name: 'Eggplant',
  },
  {
    id: 248,
    name: 'Garlic',
  },
  {
    id: 188,
    name: 'Green Bean',
  },
  {
    id: 250,
    name: 'Kale',
  },
  {
    id: 24,
    name: 'Parsnip',
  },
  {
    id: 192,
    name: 'Potato',
  },
  {
    id: 276,
    name: 'Pumpkin',
  },
  {
    id: 264,
    name: 'Radish',
  },
  {
    id: 266,
    name: 'Red Cabbage',
  },
  {
    id: 830,
    name: 'Taro Root',
  },
  {
    id: 256,
    name: 'Tomato',
  },
  {
    id: 280,
    name: 'Yam',
  },
  {
    id: 304,
    name: 'Hops',
  },
  {
    id: 815,
    name: 'Tea Leaves',
  },
  {
    id: 262,
    name: 'Wheat',
  },
  {
    id: 271,
    name: 'Unmilled Rice',
  },
]
const buildingMaterials = [
  {
    id: 2,
    name: 'Stone',
  },

  {
    id: 4,
    name: 'Stone',
  },

  {
    id: 25,
    name: 'Stone',
  },

  {
    id: 75,
    name: 'Stone',
  },

  {
    id: 76,
    name: 'Stone',
  },

  {
    id: 77,
    name: 'Stone',
  },

  {
    id: 95,
    name: 'Stone',
  },

  {
    id: 290,
    name: 'Stone',
  },

  {
    id: 343,
    name: 'Stone',
  },

  {
    id: 390,
    name: 'Stone',
  },

  {
    id: 450,
    name: 'Stone',
  },

  {
    id: 668,
    name: 'Stone',
  },

  {
    id: 670,
    name: 'Stone',
  },

  {
    id: 751,
    name: 'Stone',
  },

  {
    id: 760,
    name: 'Stone',
  },

  {
    id: 762,
    name: 'Stone',
  },

  {
    id: 764,
    name: 'Stone',
  },

  {
    id: 765,
    name: 'Stone',
  },

  {
    id: 816,
    name: 'Stone',
  },

  {
    id: 817,
    name: 'Stone',
  },

  {
    id: 818,
    name: 'Stone',
  },

  {
    id: 819,
    name: 'Stone',
  },

  {
    id: 843,
    name: 'Stone',
  },

  {
    id: 844,
    name: 'Stone',
  },

  {
    id: 845,
    name: 'Stone',
  },

  {
    id: 846,
    name: 'Stone',
  },

  {
    id: 847,
    name: 'Stone',
  },

  {
    id: 849,
    name: 'Stone',
  },

  {
    id: 850,
    name: 'Stone',
  },
  {
    id: 0,
    name: 'Weeds',
  },

  {
    id: 313,
    name: 'Weeds',
  },

  {
    id: 314,
    name: 'Weeds',
  },

  {
    id: 315,
    name: 'Weeds',
  },

  {
    id: 316,
    name: 'Weeds',
  },

  {
    id: 317,
    name: 'Weeds',
  },

  {
    id: 318,
    name: 'Weeds',
  },

  {
    id: 319,
    name: 'Weeds',
  },

  {
    id: 320,
    name: 'Weeds',
  },

  {
    id: 321,
    name: 'Weeds',
  },

  {
    id: 452,
    name: 'Weeds',
  },

  {
    id: 674,
    name: 'Weeds',
  },

  {
    id: 675,
    name: 'Weeds',
  },

  {
    id: 676,
    name: 'Weeds',
  },

  {
    id: 677,
    name: 'Weeds',
  },

  {
    id: 678,
    name: 'Weeds',
  },

  {
    id: 679,
    name: 'Weeds',
  },

  {
    id: 750,
    name: 'Weeds',
  },

  {
    id: 784,
    name: 'Weeds',
  },

  {
    id: 785,
    name: 'Weeds',
  },

  {
    id: 786,
    name: 'Weeds',
  },

  {
    id: 792,
    name: 'Weeds',
  },

  {
    id: 793,
    name: 'Weeds',
  },

  {
    id: 794,
    name: 'Weeds',
  },

  {
    id: 882,
    name: 'Weeds',
  },

  {
    id: 883,
    name: 'Weeds',
  },

  {
    id: 884,
    name: 'Weeds',
  },
  {
    id: 330,
    name: 'Clay',
  },
  {
    id: 787,
    name: 'Battery Pack',
  },
  {
    id: 771,
    name: 'Fiber',
  },
  {
    id: 709,
    name: 'Hardwood',
  },
  {
    id: 388,
    name: 'Wood',
  },
]
const artifacts = [
  {
    id: 96,
    name: 'Dwarf Scroll I',
  },
  {
    id: 97,
    name: 'Dwarf Scroll II',
  },
  {
    id: 98,
    name: 'Dwarf Scroll III',
  },
  {
    id: 99,
    name: 'Dwarf Scroll IV',
  },
  {
    id: 100,
    name: 'Chipped Amphora',
  },
  {
    id: 101,
    name: 'Arrowhead',
  },
  {
    id: 103,
    name: 'Ancient Doll',
  },
  {
    id: 104,
    name: 'Elvish Jewelry',
  },
  {
    id: 105,
    name: 'Chewing Stick',
  },
  {
    id: 106,
    name: 'Ornamental Fan',
  },
  {
    id: 107,
    name: 'Dinosaur Egg',
  },
  {
    id: 108,
    name: 'Rare Disc',
  },
  {
    id: 109,
    name: 'Ancient Sword',
  },
  {
    id: 110,
    name: 'Rusty Spoon',
  },
  {
    id: 111,
    name: 'Rusty Spur',
  },
  {
    id: 112,
    name: 'Rusty Cog',
  },
  {
    id: 113,
    name: 'Chicken Statue',
  },
  {
    id: 114,
    name: 'Ancient Seed',
  },
  {
    id: 115,
    name: 'Prehistoric Tool',
  },
  {
    id: 116,
    name: 'Dried Starfish',
  },
  {
    id: 117,
    name: 'Anchor',
  },
  {
    id: 118,
    name: 'Glass Shards',
  },
  {
    id: 119,
    name: 'Bone Flute',
  },
  {
    id: 120,
    name: 'Prehistoric Handaxe',
  },
  {
    id: 121,
    name: 'Dwarvish Helm',
  },
  {
    id: 122,
    name: 'Dwarf Gadget',
  },
  {
    id: 123,
    name: 'Ancient Drum',
  },
  {
    id: 124,
    name: 'Golden Mask',
  },
  {
    id: 125,
    name: 'Golden Relic',
  },
  {
    id: 126,
    name: 'Strange Doll',
  },
  {
    id: 127,
    name: 'Strange Doll',
  },
  {
    id: 579,
    name: 'Prehistoric Scapula',
  },
  {
    id: 580,
    name: 'Prehistoric Tibia',
  },
  {
    id: 581,
    name: 'Prehistoric Skull',
  },
  {
    id: 582,
    name: 'Skeletal Hand',
  },
  {
    id: 583,
    name: 'Prehistoric Rib',
  },
  {
    id: 584,
    name: 'Prehistoric Vertebra',
  },
  {
    id: 585,
    name: 'Skeletal Tail',
  },
  {
    id: 586,
    name: 'Nautilus Fossil',
  },
  {
    id: 587,
    name: 'Amphibian Fossil',
  },
  {
    id: 588,
    name: 'Palm Fossil',
  },
  {
    id: 589,
    name: 'Trilobite',
  },
]
const bombs = [
  {
    id: 286,
    name: 'Cherry Bomb',
  },
  {
    id: 287,
    name: 'Bomb',
  },
  {
    id: 288,
    name: 'Mega Bomb',
  },
]
const decor = [
  {
    id: 328,
    name: 'Wood Floor',
  },
  {
    id: 840,
    name: 'Rustic Plank Floor',
  },
  {
    id: 401,
    name: 'Straw Floor',
  },
  {
    id: 331,
    name: 'Weathered Floor',
  },
  {
    id: 333,
    name: 'Crystal Floor',
  },
  {
    id: 329,
    name: 'Stone Floor',
  },
  {
    id: 841,
    name: 'Stone Walkway Floor',
  },
  {
    id: 293,
    name: 'Brick Floor',
  },
  {
    id: 405,
    name: 'Wood Path',
  },

  {
    id: 407,
    name: 'Gravel Path',
  },

  {
    id: 409,
    name: 'Crystal Path',
  },

  {
    id: 411,
    name: 'Cobblestone Path',
  },

  {
    id: 415,
    name: 'Stepping Stone Path',
  },
]
const fences = [
  {
    id: 325,
    name: 'Gate',
  },
  {
    id: 322,
    name: 'Wood Fence',
  },
  {
    id: 323,
    name: 'Stone Fence',
  },
  {
    id: 324,
    name: 'Iron Fence',
  },
  {
    id: 298,
    name: 'Hardwood Fence',
  },
]
const fertilizer = [
  {
    id: 368,
    name: 'Basic Fertilizer',
  },

  {
    id: 369,
    name: 'Quality Fertilizer',
  },

  {
    id: 805,
    name: 'Tree Fertilizer',
  },

  {
    id: 919,
    name: 'Deluxe Fertilizer',
  },
  {
    id: 465,
    name: 'Speed-Gro',
  },

  {
    id: 466,
    name: 'Deluxe Speed-Gro',
  },

  {
    id: 918,
    name: 'Hyper Speed-Gro',
  },
  {
    id: 370,
    name: 'Basic Retaining Soil',
  },

  {
    id: 371,
    name: 'Quality Retaining Soil',
  },

  {
    id: 920,
    name: 'Deluxe Retaining Soil',
  },
]
const fish = [
  {
    id: 128,
    name: 'Pufferfish',
  },
  {
    id: 129,
    name: 'Anchovy',
  },
  {
    id: 130,
    name: 'Tuna',
  },
  {
    id: 131,
    name: 'Sardine',
  },
  {
    id: 132,
    name: 'Bream',
  },
  {
    id: 136,
    name: 'Largemouth Bass',
  },
  {
    id: 137,
    name: 'Smallmouth Bass',
  },
  {
    id: 138,
    name: 'Rainbow Trout',
  },
  {
    id: 139,
    name: 'Salmon',
  },
  {
    id: 140,
    name: 'Walleye',
  },
  {
    id: 141,
    name: 'Perch',
  },
  {
    id: 142,
    name: 'Carp',
  },
  {
    id: 143,
    name: 'Catfish',
  },
  {
    id: 144,
    name: 'Pike',
  },
  {
    id: 145,
    name: 'Sunfish',
  },
  {
    id: 146,
    name: 'Red Mullet',
  },
  {
    id: 147,
    name: 'Herring',
  },
  {
    id: 148,
    name: 'Eel',
  },
  {
    id: 149,
    name: 'Octopus',
  },
  {
    id: 150,
    name: 'Red Snapper',
  },
  {
    id: 151,
    name: 'Squid',
  },
  {
    id: 154,
    name: 'Sea Cucumber',
  },
  {
    id: 155,
    name: 'Super Cucumber',
  },
  {
    id: 156,
    name: 'Ghostfish',
  },
  {
    id: 158,
    name: 'Stonefish',
  },
  {
    id: 161,
    name: 'Ice Pip',
  },
  {
    id: 162,
    name: 'Lava Eel',
  },
  {
    id: 164,
    name: 'Sandfish',
  },
  {
    id: 165,
    name: 'Scorpion Carp',
  },
  {
    id: 267,
    name: 'Flounder',
  },
  {
    id: 269,
    name: 'Midnight Carp',
  },
  {
    id: 698,
    name: 'Sturgeon',
  },
  {
    id: 699,
    name: 'Tiger Trout',
  },
  {
    id: 700,
    name: 'Bullhead',
  },
  {
    id: 701,
    name: 'Tilapia',
  },
  {
    id: 702,
    name: 'Chub',
  },
  {
    id: 704,
    name: 'Dorado',
  },
  {
    id: 705,
    name: 'Albacore',
  },
  {
    id: 706,
    name: 'Shad',
  },
  {
    id: 707,
    name: 'Lingcod',
  },
  {
    id: 708,
    name: 'Halibut',
  },
  {
    id: 734,
    name: 'Woodskip',
  },
  {
    id: 795,
    name: 'Void Salmon',
  },
  {
    id: 796,
    name: 'Slimejack',
  },
  {
    id: 836,
    name: 'Stingray',
  },
  {
    id: 837,
    name: 'Lionfish',
  },
  {
    id: 838,
    name: 'Blue Discus',
  },
  {
    id: 721,
    name: 'Snail',
  },
]
const geodeMinerals = [
  {
    id: 562,
    name: 'Tigerseye',
  },
  {
    id: 564,
    name: 'Opal',
  },
  {
    id: 565,
    name: 'Fire Opal',
  },
  {
    id: 538,
    name: 'Alamite',
  },
  {
    id: 539,
    name: 'Bixite',
  },
  {
    id: 540,
    name: 'Baryte',
  },
  {
    id: 541,
    name: 'Aerinite',
  },
  {
    id: 542,
    name: 'Calcite',
  },
  {
    id: 543,
    name: 'Dolomite',
  },
  {
    id: 544,
    name: 'Esperite',
  },
  {
    id: 545,
    name: 'Fluorapatite',
  },
  {
    id: 546,
    name: 'Geminite',
  },
  {
    id: 547,
    name: 'Helvite',
  },
  {
    id: 548,
    name: 'Jamborite',
  },
  {
    id: 549,
    name: 'Jagoite',
  },
  {
    id: 550,
    name: 'Kyanite',
  },
  {
    id: 551,
    name: 'Lunarite',
  },
  {
    id: 552,
    name: 'Malachite',
  },
  {
    id: 553,
    name: 'Neptunite',
  },
  {
    id: 554,
    name: 'Lemon Stone',
  },
  {
    id: 555,
    name: 'Nekoite',
  },
  {
    id: 556,
    name: 'Orpiment',
  },
  {
    id: 557,
    name: 'Petrified Slime',
  },
  {
    id: 558,
    name: 'Thunder Egg',
  },
  {
    id: 559,
    name: 'Pyrite',
  },
  {
    id: 560,
    name: 'Ocean Stone',
  },
  {
    id: 561,
    name: 'Ghost Crystal',
  },
  {
    id: 563,
    name: 'Jasper',
  },
  {
    id: 566,
    name: 'Celestine',
  },
  {
    id: 567,
    name: 'Marble',
  },
  {
    id: 568,
    name: 'Sandstone',
  },
  {
    id: 569,
    name: 'Granite',
  },
  {
    id: 570,
    name: 'Basalt',
  },
  {
    id: 571,
    name: 'Limestone',
  },
  {
    id: 572,
    name: 'Soapstone',
  },
  {
    id: 573,
    name: 'Hematite',
  },
  {
    id: 574,
    name: 'Mudstone',
  },
  {
    id: 575,
    name: 'Obsidian',
  },
  {
    id: 576,
    name: 'Slate',
  },
  {
    id: 577,
    name: 'Fairy Stone',
  },
  {
    id: 578,
    name: 'Star Shards',
  },
]
const geodes = [
  {
    id: 535,
    name: 'Geode',
  },
  {
    id: 536,
    name: 'Frozen Geode',
  },
  {
    id: 537,
    name: 'Magma Geode',
  },
  {
    id: 749,
    name: 'Omni Geode',
  },
]
const seeds = [
  {
    id: 495,
    name: 'Spring Seeds',
  },
  {
    id: 496,
    name: 'Summer Seeds',
  },
  {
    id: 497,
    name: 'Fall Seeds',
  },
  {
    id: 498,
    name: 'Winter Seeds',
  },
  {
    id: 499,
    name: 'Ancient Seeds',
  },
  {
    id: 251,
    name: 'Tea Sapling',
  },
  {
    id: 885,
    name: 'Fiber Seeds',
  },
  {
    id: 292,
    name: 'Mahogany Seed',
  },

  {
    id: 299,
    name: 'Amaranth Seeds',
  },

  {
    id: 310,
    name: 'Maple Seed',
  },

  {
    id: 347,
    name: 'Rare Seed',
  },

  {
    id: 425,
    name: 'Fairy Seeds',
  },

  {
    id: 429,
    name: 'Jazz Seeds',
  },

  {
    id: 431,
    name: 'Sunflower Seeds',
  },

  {
    id: 453,
    name: 'Poppy Seeds',
  },

  {
    id: 455,
    name: 'Spangle Seeds',
  },

  {
    id: 472,
    name: 'Parsnip Seeds',
  },

  {
    id: 474,
    name: 'Cauliflower Seeds',
  },

  {
    id: 475,
    name: 'Potato Seeds',
  },

  {
    id: 476,
    name: 'Garlic Seeds',
  },

  {
    id: 477,
    name: 'Kale Seeds',
  },

  {
    id: 478,
    name: 'Rhubarb Seeds',
  },

  {
    id: 479,
    name: 'Melon Seeds',
  },

  {
    id: 480,
    name: 'Tomato Seeds',
  },

  {
    id: 481,
    name: 'Blueberry Seeds',
  },

  {
    id: 482,
    name: 'Pepper Seeds',
  },

  {
    id: 483,
    name: 'Wheat Seeds',
  },

  {
    id: 484,
    name: 'Radish Seeds',
  },

  {
    id: 485,
    name: 'Red Cabbage Seeds',
  },

  {
    id: 486,
    name: 'Starfruit Seeds',
  },

  {
    id: 487,
    name: 'Corn Seeds',
  },

  {
    id: 488,
    name: 'Eggplant Seeds',
  },

  {
    id: 489,
    name: 'Artichoke Seeds',
  },

  {
    id: 490,
    name: 'Pumpkin Seeds',
  },

  {
    id: 491,
    name: 'Bok Choy Seeds',
  },

  {
    id: 492,
    name: 'Yam Seeds',
  },

  {
    id: 493,
    name: 'Cranberry Seeds',
  },

  {
    id: 494,
    name: 'Beet Seeds',
  },

  {
    id: 745,
    name: 'Strawberry Seeds',
  },

  {
    id: 770,
    name: 'Mixed Seeds',
  },

  {
    id: 802,
    name: 'Cactus Seeds',
  },

  {
    id: 833,
    name: 'Pineapple Seeds',
  },

  {
    id: 891,
    name: 'Mushroom Tree Seed',
  },
  {
    id: 69,
    name: 'Banana Sapling',
  },

  {
    id: 628,
    name: 'Cherry Sapling',
  },

  {
    id: 629,
    name: 'Apricot Sapling',
  },

  {
    id: 630,
    name: 'Orange Sapling',
  },

  {
    id: 631,
    name: 'Peach Sapling',
  },

  {
    id: 632,
    name: 'Pomegranate Sapling',
  },

  {
    id: 633,
    name: 'Apple Sapling',
  },

  {
    id: 835,
    name: 'Mango Sapling',
  },
  {
    id: 309,
    name: 'Acorn',
  },
  {
    id: 311,
    name: 'Pine Cone',
  },
]
const sprinklers = [
  {
    id: 599,
    name: 'Sprinkler',
  },

  {
    id: 621,
    name: 'Quality Sprinkler',
  },

  {
    id: 645,
    name: 'Iridium Sprinkler',
  },
]
const tackle = [
  {
    id: 686,
    name: 'Spinner',
  },
  {
    id: 687,
    name: 'Dressed Spinner',
  },
  {
    id: 694,
    name: 'Trap Bobber',
  },
  {
    id: 695,
    name: 'Cork Bobber',
  },
  {
    id: 691,
    name: 'Barbed Hook',
  },
  {
    id: 692,
    name: 'Lead Bobber',
  },
  {
    id: 693,
    name: 'Treasure Hunter',
  },
  {
    id: 856,
    name: 'Curiosity Lure',
  },
  {
    id: 877,
    name: 'Quality Bobber',
  },
]
const minedMetalGoods = [
  {
    id: 881,
    name: 'Bone Fragment',
  },
  {
    id: 848,
    name: 'Cinder Shard',
  },
  {
    id: 382,
    name: 'Coal',
  },
  {
    id: 334,
    name: 'Copper Bar',
  },
  {
    id: 335,
    name: 'Iron Bar',
  },
  {
    id: 336,
    name: 'Gold Bar',
  },
  {
    id: 337,
    name: 'Iridium Bar',
  },
  {
    id: 384,
    name: 'Gold Ore',
  },
  {
    id: 386,
    name: 'Iridium Ore',
  },
  {
    id: 338,
    name: 'Refined Quartz',
  },
]
const bait = [
  {
    id: 685,
    name: 'Bait',
  },
  {
    id: 908,
    name: 'Magic Bait',
  },
  {
    id: 774,
    name: 'Wild Bait',
  },
  {
    id: 703,
    name: 'Magnet',
  },
]
const fossils = [
  {
    id: 820,
    name: 'Fossilized Skull',
  },
  {
    id: 821,
    name: 'Fossilized Spine',
  },
  {
    id: 822,
    name: 'Fossilized Tail',
  },
  {
    id: 823,
    name: 'Fossilized Leg',
  },
  {
    id: 824,
    name: 'Fossilized Ribs',
  },
  {
    id: 825,
    name: 'Snake Skull',
  },
  {
    id: 826,
    name: 'Snake Vertebrae',
  },
  {
    id: 827,
    name: 'Mummified Bat',
  },
  {
    id: 828,
    name: 'Mummified Frog',
  },
]
const monsterLoot = [
  {
    id: 766,
    name: 'Slime',
  },
  {
    id: 684,
    name: 'Bug Meat',
  },
  {
    id: 767,
    name: 'Bat Wing',
  },
  {
    id: 768,
    name: 'Solar Essence',
  },
  {
    id: 769,
    name: 'Void Essence',
  },
]
const trash = [
  {
    id: 167,
    name: 'Joja Cola',
  },
  {
    id: 168,
    name: 'Trash',
  },
  {
    id: 169,
    name: 'Driftwood',
  },
  {
    id: 170,
    name: 'Broken Glasses',
  },
  {
    id: 171,
    name: 'Broken CD',
  },
  {
    id: 172,
    name: 'Soggy Newspaper',
  },
  {
    id: 747,
    name: 'Rotten Plant',
  },
  {
    id: 748,
    name: 'Rotten Plant',
  },
]

// These items are not linked in any category on the Frienship Wiki page, but mentioned directly
const unsorted = {
  loved: [
    {
      id: 373,
      name: 'Golden Pumpkin',
    },
    {
      id: 279,
      name: 'Magic Rock Candy',
    },
    {
      id: 797,
      name: 'Pearl',
    },
    {
      id: 446,
      name: "Rabbit's Foot",
    },
  ],
  liked: [
    {
      id: 773,
      name: 'Life Elixir',
    },
    {
      id: 724,
      name: 'Maple Syrup',
    },
  ],
  neutral: [],
  disliked: [
    {
      id: 78,
      name: 'Cave Carrot',
    },
    {
      id: 419,
      name: 'Vinegar',
    },
    {
      id: 726,
      name: 'Pine Tar',
    },
    {
      id: 399,
      name: 'Spring Onion',
    },
    {
      id: 305,
      name: 'Void Egg',
    },
    {
      id: 403,
      name: 'Field Snack',
    },
    {
      id: 889,
      name: 'Qi Fruit',
    },
    {
      id: 341,
      name: 'Tea Set',
    },
    {
      id: 746,
      name: 'Jack-O-Lantern',
    },
    {
      id: 423,
      name: 'Rice',
    },
    {
      id: 246,
      name: 'Wheat Flour',
    },
    {
      id: 725,
      name: 'Oak Resin',
    },
  ],
  hated: [
    {
      id: 275,
      name: 'Artifact Trove',
    },
    {
      id: 178,
      name: 'Hay',
    },
    {
      id: 152,
      name: 'Seaweed',
    },
    {
      id: 874,
      name: 'Bug Steak',
    },
    {
      id: 378,
      name: 'Copper Ore',
    },
    {
      id: 380,
      name: 'Iron Ore',
    },
    {
      id: 879,
      name: 'Monster Musk',
    },
    {
      id: 710,
      name: 'Crab Pot',
    },
    {
      id: 351,
      name: 'Muscle Remedy',
    },
    {
      id: 852,
      name: 'Dragon Tooth',
    },
    {
      id: 772,
      name: 'Oil of Garlic',
    },
    {
      id: 245,
      name: 'Sugar',
    },
    {
      id: 463,
      name: 'Drum Block',
    },
    {
      id: 93,
      name: 'Torch',
    },
    {
      id: 349,
      name: 'Energy Tonic',
    },
    {
      id: 917,
      name: 'Qi Seasoning',
    },
    {
      id: 166,
      name: 'Treasure Chest',
    },
    {
      id: 909,
      name: 'Radioactive Ore',
    },
    {
      id: 910,
      name: 'Radioactive Bar',
    },
    {
      id: 441,
      name: 'Explosive Ammo',
    },
    {
      id: 688,
      name: 'Warp Totem Farm',
    },
    {
      id: 689,
      name: 'Warp Totem Mountains',
    },
    {
      id: 690,
      name: 'Warp Totem Beach',
    },
    {
      id: 886,
      name: 'Warp Totem: Island',
    },
    {
      id: 261,
      name: 'Warp Totem: Desert',
    },
    {
      id: 157,
      name: 'White Algae',
    },
    {
      id: 872,
      name: 'Fairy Dust',
    },
    {
      id: 681,
      name: 'Rain Totem',
    },
    {
      id: 464,
      name: 'Flute Block',
    },
    {
      id: 420,
      name: 'Red Mushroom',
    },
    {
      id: 297,
      name: 'Grass Starter',
    },
    {
      id: 92,
      name: 'Sap',
    },
    {
      id: 153,
      name: 'Green Algae',
    },
    {
      id: 397,
      name: 'Sea Urchin',
    },
    {
      id: 791,
      name: 'Golden Coconut',
    },
  ],
}

const gifts = {
  universalLoved: [
    ...unsorted.loved,
    ...gems.filter((gem) => gem.name === 'Prismatic Shard'),
  ],
  universalLiked: [
    ...unsorted.liked,
    ...artisanGoods.filter((item) => {
      return item.name !== 'Oil' && item.name !== 'Void Mayonnaise'
    }),
    ...cooking.filter((item) => {
      return (
        item.name !== 'Fried Egg' &&
        item.name !== 'Bread' &&
        item.name !== 'Strange Bun' &&
        item.name !== 'Seafoam Pudding'
      )
    }),
    ...flowers.filter((item) => item.name !== 'poppy'),
    ...foragedMinerals.filter((item) => item.name !== 'Quartz'),
    ...fruitTreeFruits.filter(
      (item) => item.name !== 'Banana' && item.name !== 'Mango'
    ),
    ...gems.filter((item) => item.name !== 'Prismatic Shard'),
    ...vegetables.filter(
      (item) =>
        item.name !== 'Hops' &&
        item.name !== 'Tea Leaves' &&
        item.name !== 'Wheat' &&
        item.name !== 'Unmilled Rice'
    ),
  ],
  universalNeutral: [
    ...cooking.filter(
      (item) => item.name === 'Fried Egg' || item.name === 'Bread'
    ),
    ...fish.filter((item) => item.name === 'Clam'),
    ...vegetables.filter(
      (item) =>
        item.name === 'Hops' ||
        item.name === 'Tea Leaves' ||
        item.name === 'Wheat'
    ),
  ],
  universalDisliked: [
    ...unsorted.disliked,
    ...buildingMaterials,
    ...artifacts,
    ...bombs,
    ...decor,
    ...fences,
    ...fertilizer,
    ...fish.filter(
      (item) =>
        item.name !== 'Clam' && item.name !== 'Snail' && item.name !== 'Carp'
    ),
    ...geodeMinerals,
    ...geodes,
    ...seeds,
    ...sprinklers,
    ...tackle,
    ...minedMetalGoods,
    ...artisanGoods.filter((item) => item.name === 'Oil'),
    ...cooking.filter(
      (item) => item.name === 'Fried Egg' || item.name === 'Bread'
    ),
    ...vegetables.filter((item) => item.name === 'Unmilled Rice'),
    ...monsterLoot.filter(
      (item) => item.name === 'Solar Essence' || item.name === 'Void Essence'
    ),
    ...trash.filter((item) => item.name === 'Driftwood'),
  ],
  universalHated: [
    ...bait,
    ...fossils,
    ...monsterLoot.filter(
      (item) => item.name !== 'Solar Essence' && item.name !== 'Void Essence'
    ),
    ...trash.filter((item) => item.name !== 'Driftwood'),
    ...artisanGoods.filter((item) => item.name === 'Void Mayonnaise'),
    ...cooking.filter(
      (item) => item.name === 'Strange Bun' || item.name === 'Seafoam Pudding'
    ),
    ...flowers.filter((item) => item.name === 'Poppy'),
    ...fish.filter((item) => item.name === 'Carp' || item.name === 'Snail'),
  ],
}

export default gifts

export {
  artisanGoods,
  cooking,
  flowers,
  foragedMinerals,
  fruitTreeFruits,
  gems,
  vegetables,
  buildingMaterials,
  artifacts,
  bombs,
  decor,
  fences,
  fertilizer,
  geodes,
  seeds,
  sprinklers,
  tackle,
  minedMetalGoods,
  bait,
  fossils,
  monsterLoot,
  unsorted,
}
