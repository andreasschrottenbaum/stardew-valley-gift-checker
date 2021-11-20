// https://stardewvalleywiki.com/Friendship

const artisanGoods = [
  {
    id: 340,
    name: 'Honey',
    image: '',
    wiki: '',
  },
  {
    id: 348,
    name: 'Wine',
    image: '',
    wiki: '',
  },
  {
    id: 303,
    name: 'Pale Ale',
    image: '',
    wiki: '',
  },
  {
    id: 346,
    name: 'Beer',
    image: '',
    wiki: '',
  },
  {
    id: 459,
    name: 'Mead',
    image: '',
    wiki: '',
  },
  {
    id: 424,
    name: 'Cheese',
    image: '',
    wiki: '',
  },
  {
    id: 426,
    name: 'Goat Cheese',
    image: '',
    wiki: '',
  },
  {
    id: 395,
    name: 'Coffee',
    image: '',
    wiki: '',
  },
  {
    id: 614,
    name: 'Green Tea',
    image: '',
    wiki: '',
  },
  {
    id: 350,
    name: 'Juice',
    image: '',
    wiki: '',
  },
  {
    id: 428,
    name: 'Cloth',
    image: '',
    wiki: '',
  },
  {
    id: 306,
    name: 'Mayonnaise',
    image: '',
    wiki: '',
  },
  {
    id: 307,
    name: 'Duck Mayonnaise',
    image: '',
    wiki: '',
  },
  {
    id: 807,
    name: 'Dinosaur Mayonnaise',
    image: '',
    wiki: '',
  },
  {
    id: 432,
    name: 'Truffle Oil',
    image: '',
    wiki: '',
  },
  {
    id: 342,
    name: 'Pickles',
    image: '',
    wiki: '',
  },
  {
    id: 344,
    name: 'Jelly',
    image: '',
    wiki: '',
  },
  {
    id: 445,
    name: 'Caviar',
    image: '',
    wiki: '',
  },
  {
    id: 447,
    name: 'Aged Roe',
    image: '',
    wiki: '',
  },
  {
    id: 247,
    name: 'Oil',
    image: '',
    wiki: '',
  },
  {
    id: 308,
    name: 'Void Mayonnaise',
    image: '',
    wiki: '',
  },
  {
    id: 873,
    name: 'Piña Colada',
    image: '',
    wiki: '',
  },
]
const cooking = [
  {
    id: 195,
    name: 'Omelet',
    image: '',
    wiki: '',
  },
  {
    id: 196,
    name: 'Salad',
    image: '',
    wiki: '',
  },
  {
    id: 197,
    name: 'Cheese Cauliflower',
    image: '',
    wiki: '',
  },
  {
    id: 198,
    name: 'Baked Fish',
    image: '',
    wiki: '',
  },
  {
    id: 199,
    name: 'Parsnip Soup',
    image: '',
    wiki: '',
  },
  {
    id: 200,
    name: 'Vegetable Medley',
    image: '',
    wiki: '',
  },
  {
    id: 201,
    name: 'Complete Breakfast',
    image: '',
    wiki: '',
  },
  {
    id: 202,
    name: 'Fried Calamari',
    image: '',
    wiki: '',
  },
  {
    id: 204,
    name: 'Lucky Lunch',
    image: '',
    wiki: '',
  },
  {
    id: 205,
    name: 'Fried Mushroom',
    image: '',
    wiki: '',
  },
  {
    id: 206,
    name: 'Pizza',
    image: '',
    wiki: '',
  },
  {
    id: 207,
    name: 'Bean Hotpot',
    image: '',
    wiki: '',
  },
  {
    id: 208,
    name: 'Glazed Yams',
    image: '',
    wiki: '',
  },
  {
    id: 209,
    name: 'Carp Surprise',
    image: '',
    wiki: '',
  },
  {
    id: 210,
    name: 'Hashbrowns',
    image: '',
    wiki: '',
  },
  {
    id: 211,
    name: 'Pancakes',
    image: '',
    wiki: '',
  },
  {
    id: 212,
    name: 'Salmon Dinner',
    image: '',
    wiki: '',
  },
  {
    id: 213,
    name: 'Fish Taco',
    image: '',
    wiki: '',
  },
  {
    id: 214,
    name: 'Crispy Bass',
    image: '',
    wiki: '',
  },
  {
    id: 215,
    name: 'Pepper Poppers',
    image: '',
    wiki: '',
  },
  {
    id: 218,
    name: 'Tom Kha Soup',
    image: '',
    wiki: '',
  },
  {
    id: 219,
    name: 'Trout Soup',
    image: '',
    wiki: '',
  },
  {
    id: 220,
    name: 'Chocolate Cake',
    image: '',
    wiki: '',
  },
  {
    id: 221,
    name: 'Pink Cake',
    image: '',
    wiki: '',
  },
  {
    id: 222,
    name: 'Rhubarb Pie',
    image: '',
    wiki: '',
  },
  {
    id: 223,
    name: 'Cookie',
    image: '',
    wiki: '',
  },
  {
    id: 224,
    name: 'Spaghetti',
    image: '',
    wiki: '',
  },
  {
    id: 225,
    name: 'Fried Eel',
    image: '',
    wiki: '',
  },
  {
    id: 226,
    name: 'Spicy Eel',
    image: '',
    wiki: '',
  },
  {
    id: 227,
    name: 'Sashimi',
    image: '',
    wiki: '',
  },
  {
    id: 228,
    name: 'Maki Roll',
    image: '',
    wiki: '',
  },
  {
    id: 229,
    name: 'Tortilla',
    image: '',
    wiki: '',
  },
  {
    id: 230,
    name: 'Red Plate',
    image: '',
    wiki: '',
  },
  {
    id: 231,
    name: 'Eggplant Parmesan',
    image: '',
    wiki: '',
  },
  {
    id: 232,
    name: 'Rice Pudding',
    image: '',
    wiki: '',
  },
  {
    id: 233,
    name: 'Ice Cream',
    image: '',
    wiki: '',
  },
  {
    id: 234,
    name: 'Blueberry Tart',
    image: '',
    wiki: '',
  },
  {
    id: 235,
    name: "Autumn's Bounty",
    image: '',
    wiki: '',
  },
  {
    id: 236,
    name: 'Pumpkin Soup',
    image: '',
    wiki: '',
  },
  {
    id: 237,
    name: 'Super Meal',
    image: '',
    wiki: '',
  },
  {
    id: 238,
    name: 'Cranberry Sauce',
    image: '',
    wiki: '',
  },
  {
    id: 239,
    name: 'Stuffing',
    image: '',
    wiki: '',
  },
  {
    id: 240,
    name: "Farmer's Lunch",
    image: '',
    wiki: '',
  },
  {
    id: 241,
    name: 'Survival Burger',
    image: '',
    wiki: '',
  },
  {
    id: 242,
    name: "Dish O' The Sea",
    image: '',
    wiki: '',
  },
  {
    id: 243,
    name: "Miner's Treat",
    image: '',
    wiki: '',
  },
  {
    id: 244,
    name: 'Roots Platter',
    image: '',
    wiki: '',
  },
  {
    id: 253,
    name: 'Triple Shot Espresso',
    image: '',
    wiki: '',
  },
  {
    id: 456,
    name: 'Algae Soup',
    image: '',
    wiki: '',
  },
  {
    id: 457,
    name: 'Pale Broth',
    image: '',
    wiki: '',
  },
  {
    id: 604,
    name: 'Plum Pudding',
    image: '',
    wiki: '',
  },
  {
    id: 605,
    name: 'Artichoke Dip',
    image: '',
    wiki: '',
  },
  {
    id: 606,
    name: 'Stir Fry',
    image: '',
    wiki: '',
  },
  {
    id: 607,
    name: 'Roasted Hazelnuts',
    image: '',
    wiki: '',
  },
  {
    id: 608,
    name: 'Pumpkin Pie',
    image: '',
    wiki: '',
  },
  {
    id: 609,
    name: 'Radish Salad',
    image: '',
    wiki: '',
  },
  {
    id: 610,
    name: 'Fruit Salad',
    image: '',
    wiki: '',
  },
  {
    id: 611,
    name: 'Blackberry Cobbler',
    image: '',
    wiki: '',
  },
  {
    id: 612,
    name: 'Cranberry Candy',
    image: '',
    wiki: '',
  },
  {
    id: 618,
    name: 'Bruschetta',
    image: '',
    wiki: '',
  },
  {
    id: 648,
    name: 'Coleslaw',
    image: '',
    wiki: '',
  },
  {
    id: 649,
    name: 'Fiddlehead Risotto',
    image: '',
    wiki: '',
  },
  {
    id: 651,
    name: 'Poppyseed Muffin',
    image: '',
    wiki: '',
  },
  {
    id: 727,
    name: 'Chowder',
    image: '',
    wiki: '',
  },
  {
    id: 728,
    name: 'Fish Stew',
    image: '',
    wiki: '',
  },
  {
    id: 729,
    name: 'Escargot',
    image: '',
    wiki: '',
  },
  {
    id: 730,
    name: 'Lobster Bisque',
    image: '',
    wiki: '',
  },
  {
    id: 731,
    name: 'Maple Bar',
    image: '',
    wiki: '',
  },
  {
    id: 732,
    name: 'Crab Cakes',
    image: '',
    wiki: '',
  },
  {
    id: 733,
    name: 'Shrimp Cocktail',
    image: '',
    wiki: '',
  },
  {
    id: 903,
    name: 'Ginger Ale',
    image: '',
    wiki: '',
  },
  {
    id: 904,
    name: 'Banana Pudding',
    image: '',
    wiki: '',
  },
  {
    id: 905,
    name: 'Mango Sticky Rice',
    image: '',
    wiki: '',
  },
  {
    id: 906,
    name: 'Poi',
    image: '',
    wiki: '',
  },
  {
    id: 907,
    name: 'Tropical Curry',
    image: '',
    wiki: '',
  },
  {
    id: 921,
    name: 'Squid Ink Ravioli',
    image: '',
    wiki: '',
  },
  {
    id: 194,
    name: 'Fried Egg',
    image: '',
    wiki: '',
  },
  {
    id: 216,
    name: 'Bread',
    image: '',
    wiki: '',
  },
  {
    id: 265,
    name: 'Seafoam Pudding',
    image: '',
    wiki: '',
  },
  {
    id: 203,
    name: 'Strange Bun',
    image: '',
    wiki: '',
  },
]
const flowers = [
  {
    id: 402,
    name: 'Sweet Pea',
    image: '',
    wiki: '',
  },
  {
    id: 418,
    name: 'Crocus',
    image: '',
    wiki: '',
  },
  {
    id: 421,
    name: 'Sunflower',
    image: '',
    wiki: '',
  },
  {
    id: 591,
    name: 'Tulip',
    image: '',
    wiki: '',
  },
  {
    id: 593,
    name: 'Summer Spangle',
    image: '',
    wiki: '',
  },
  {
    id: 595,
    name: 'Fairy Rose',
    image: '',
    wiki: '',
  },
  {
    id: 597,
    name: 'Blue Jazz',
    image: '',
    wiki: '',
  },
  {
    id: 376,
    name: 'Poppy',
    image: '',
    wiki: '',
  },
]
const foragedMinerals = [
  {
    id: 80,
    name: 'Quartz',
    image: '',
    wiki: '',
  },
  {
    id: 86,
    name: 'Earth Crystal',
    image: '',
    wiki: '',
  },
  {
    id: 84,
    name: 'Frozen Tear',
    image: '',
    wiki: '',
  },
  {
    id: 82,
    name: 'Fire Quartz',
    image: '',
    wiki: '',
  },
]
const fruitTreeFruits = [
  {
    id: 634,
    name: 'Apricot',
    image: '',
    wiki: '',
  },
  {
    id: 638,
    name: 'Cherry',
    image: '',
    wiki: '',
  },
  {
    id: 635,
    name: 'Orange',
    image: '',
    wiki: '',
  },
  {
    id: 636,
    name: 'Peach',
    image: '',
    wiki: '',
  },
  {
    id: 613,
    name: 'Apple',
    image: '',
    wiki: '',
  },
  {
    id: 637,
    name: 'Pomegranate',
    image: '',
    wiki: '',
  },
  {
    id: 91,
    name: 'Banana',
    image: '',
    wiki: '',
  },
  {
    id: 834,
    name: 'Mango',
    image: '',
    wiki: '',
  },
]
const gems = [
  {
    id: 60,
    name: 'Emerald',
    image: '',
    wiki: '',
  },
  {
    id: 62,
    name: 'Aquamarine',
    image: '',
    wiki: '',
  },
  {
    id: 64,
    name: 'Ruby',
    image: '',
    wiki: '',
  },
  {
    id: 66,
    name: 'Amethyst',
    image: '',
    wiki: '',
  },
  {
    id: 68,
    name: 'Topaz',
    image: '',
    wiki: '',
  },
  {
    id: 70,
    name: 'Jade',
    image: '',
    wiki: '',
  },
  {
    id: 72,
    name: 'Diamond',
    image: '',
    wiki: '',
  },
  {
    id: 74,
    name: 'Prismatic Shard',
    image: '',
    wiki: '',
  },
]
const vegetables = [
  {
    id: 259,
    name: 'Fiddlehead Fern',
    image: '',
    wiki: '',
  },
  {
    id: 300,
    name: 'Amaranth',
    image: '',
    wiki: '',
  },
  {
    id: 274,
    name: 'Artichoke',
    image: '',
    wiki: '',
  },
  {
    id: 284,
    name: 'Beet',
    image: '',
    wiki: '',
  },
  {
    id: 278,
    name: 'Bok Choy',
    image: '',
    wiki: '',
  },
  {
    id: 190,
    name: 'Cauliflower',
    image: '',
    wiki: '',
  },
  {
    id: 270,
    name: 'Corn',
    image: '',
    wiki: '',
  },
  {
    id: 272,
    name: 'Eggplant',
    image: '',
    wiki: '',
  },
  {
    id: 248,
    name: 'Garlic',
    image: '',
    wiki: '',
  },
  {
    id: 188,
    name: 'Green Bean',
    image: '',
    wiki: '',
  },
  {
    id: 250,
    name: 'Kale',
    image: '',
    wiki: '',
  },
  {
    id: 24,
    name: 'Parsnip',
    image: '',
    wiki: '',
  },
  {
    id: 192,
    name: 'Potato',
    image: '',
    wiki: '',
  },
  {
    id: 276,
    name: 'Pumpkin',
    image: '',
    wiki: '',
  },
  {
    id: 264,
    name: 'Radish',
    image: '',
    wiki: '',
  },
  {
    id: 266,
    name: 'Red Cabbage',
    image: '',
    wiki: '',
  },
  {
    id: 830,
    name: 'Taro Root',
    image: '',
    wiki: '',
  },
  {
    id: 256,
    name: 'Tomato',
    image: '',
    wiki: '',
  },
  {
    id: 280,
    name: 'Yam',
    image: '',
    wiki: '',
  },
  {
    id: 304,
    name: 'Hops',
    image: '',
    wiki: '',
  },
  {
    id: 815,
    name: 'Tea Leaves',
    image: '',
    wiki: '',
  },
  {
    id: 262,
    name: 'Wheat',
    image: '',
    wiki: '',
  },
  {
    id: 271,
    name: 'Unmilled Rice',
    image: '',
    wiki: '',
  },
]
const buildingMaterials = [
  {
    id: 2,
    name: 'Stone',
    image: '',
    wiki: '',
  },
  {
    id: 313,
    name: 'Weeds',
    image: '',
    wiki: '',
  },
  {
    id: 330,
    name: 'Clay',
    image: '',
    wiki: '',
  },
  {
    id: 787,
    name: 'Battery Pack',
    image: '',
    wiki: '',
  },
  {
    id: 771,
    name: 'Fiber',
    image: '',
    wiki: '',
  },
  {
    id: 709,
    name: 'Hardwood',
    image: '',
    wiki: '',
  },
  {
    id: 388,
    name: 'Wood',
    image: '',
    wiki: '',
  },
]
const artifacts = [
  {
    id: 96,
    name: 'Dwarf Scroll I',
    image: '',
    wiki: '',
  },
  {
    id: 97,
    name: 'Dwarf Scroll II',
    image: '',
    wiki: '',
  },
  {
    id: 98,
    name: 'Dwarf Scroll III',
    image: '',
    wiki: '',
  },
  {
    id: 99,
    name: 'Dwarf Scroll IV',
    image: '',
    wiki: '',
  },
  {
    id: 100,
    name: 'Chipped Amphora',
    image: '',
    wiki: '',
  },
  {
    id: 101,
    name: 'Arrowhead',
    image: '',
    wiki: '',
  },
  {
    id: 103,
    name: 'Ancient Doll',
    image: '',
    wiki: '',
  },
  {
    id: 104,
    name: 'Elvish Jewelry',
    image: '',
    wiki: '',
  },
  {
    id: 105,
    name: 'Chewing Stick',
    image: '',
    wiki: '',
  },
  {
    id: 106,
    name: 'Ornamental Fan',
    image: '',
    wiki: '',
  },
  {
    id: 107,
    name: 'Dinosaur Egg',
    image: '',
    wiki: '',
  },
  {
    id: 108,
    name: 'Rare Disc',
    image: '',
    wiki: '',
  },
  {
    id: 109,
    name: 'Ancient Sword',
    image: '',
    wiki: '',
  },
  {
    id: 110,
    name: 'Rusty Spoon',
    image: '',
    wiki: '',
  },
  {
    id: 111,
    name: 'Rusty Spur',
    image: '',
    wiki: '',
  },
  {
    id: 112,
    name: 'Rusty Cog',
    image: '',
    wiki: '',
  },
  {
    id: 113,
    name: 'Chicken Statue',
    image: '',
    wiki: '',
  },
  {
    id: 114,
    name: 'Ancient Seed',
    image: '',
    wiki: '',
  },
  {
    id: 115,
    name: 'Prehistoric Tool',
    image: '',
    wiki: '',
  },
  {
    id: 116,
    name: 'Dried Starfish',
    image: '',
    wiki: '',
  },
  {
    id: 117,
    name: 'Anchor',
    image: '',
    wiki: '',
  },
  {
    id: 118,
    name: 'Glass Shards',
    image: '',
    wiki: '',
  },
  {
    id: 119,
    name: 'Bone Flute',
    image: '',
    wiki: '',
  },
  {
    id: 120,
    name: 'Prehistoric Handaxe',
    image: '',
    wiki: '',
  },
  {
    id: 121,
    name: 'Dwarvish Helm',
    image: '',
    wiki: '',
  },
  {
    id: 122,
    name: 'Dwarf Gadget',
    image: '',
    wiki: '',
  },
  {
    id: 123,
    name: 'Ancient Drum',
    image: '',
    wiki: '',
  },
  {
    id: 124,
    name: 'Golden Mask',
    image: '',
    wiki: '',
  },
  {
    id: 125,
    name: 'Golden Relic',
    image: '',
    wiki: '',
  },
  {
    id: 126,
    name: 'Strange Doll',
    image: '',
    wiki: '',
  },
  {
    id: 127,
    name: 'Strange Doll',
    image: '',
    wiki: '',
  },
  {
    id: 579,
    name: 'Prehistoric Scapula',
    image: '',
    wiki: '',
  },
  {
    id: 580,
    name: 'Prehistoric Tibia',
    image: '',
    wiki: '',
  },
  {
    id: 581,
    name: 'Prehistoric Skull',
    image: '',
    wiki: '',
  },
  {
    id: 582,
    name: 'Skeletal Hand',
    image: '',
    wiki: '',
  },
  {
    id: 583,
    name: 'Prehistoric Rib',
    image: '',
    wiki: '',
  },
  {
    id: 584,
    name: 'Prehistoric Vertebra',
    image: '',
    wiki: '',
  },
  {
    id: 585,
    name: 'Skeletal Tail',
    image: '',
    wiki: '',
  },
  {
    id: 586,
    name: 'Nautilus Fossil',
    image: '',
    wiki: '',
  },
  {
    id: 587,
    name: 'Amphibian Fossil',
    image: '',
    wiki: '',
  },
  {
    id: 588,
    name: 'Palm Fossil',
    image: '',
    wiki: '',
  },
  {
    id: 589,
    name: 'Trilobite',
    image: '',
    wiki: '',
  },
]
const bombs = [
  {
    id: 286,
    name: 'Cherry Bomb',
    image: '',
    wiki: '',
  },
  {
    id: 287,
    name: 'Bomb',
    image: '',
    wiki: '',
  },
  {
    id: 288,
    name: 'Mega Bomb',
    image: '',
    wiki: '',
  },
]
const decor = [
  {
    id: 328,
    name: 'Wood Floor',
    image: '',
    wiki: '',
  },
  {
    id: 840,
    name: 'Rustic Plank Floor',
    image: '',
    wiki: '',
  },
  {
    id: 401,
    name: 'Straw Floor',
    image: '',
    wiki: '',
  },
  {
    id: 331,
    name: 'Weathered Floor',
    image: '',
    wiki: '',
  },
  {
    id: 333,
    name: 'Crystal Floor',
    image: '',
    wiki: '',
  },
  {
    id: 329,
    name: 'Stone Floor',
    image: '',
    wiki: '',
  },
  {
    id: 841,
    name: 'Stone Walkway Floor',
    image: '',
    wiki: '',
  },
  {
    id: 293,
    name: 'Brick Floor',
    image: '',
    wiki: '',
  },
  {
    id: 405,
    name: 'Wood Path',
    image: '',
    wiki: '',
  },

  {
    id: 407,
    name: 'Gravel Path',
    image: '',
    wiki: '',
  },

  {
    id: 409,
    name: 'Crystal Path',
    image: '',
    wiki: '',
  },

  {
    id: 411,
    name: 'Cobblestone Path',
    image: '',
    wiki: '',
  },

  {
    id: 415,
    name: 'Stepping Stone Path',
    image: '',
    wiki: '',
  },
]
const fences = [
  {
    id: 325,
    name: 'Gate',
    image: '',
    wiki: '',
  },
  {
    id: 322,
    name: 'Wood Fence',
    image: '',
    wiki: '',
  },
  {
    id: 323,
    name: 'Stone Fence',
    image: '',
    wiki: '',
  },
  {
    id: 324,
    name: 'Iron Fence',
    image: '',
    wiki: '',
  },
  {
    id: 298,
    name: 'Hardwood Fence',
    image: '',
    wiki: '',
  },
]
const fertilizer = [
  {
    id: 368,
    name: 'Basic Fertilizer',
    image: '',
    wiki: '',
  },

  {
    id: 369,
    name: 'Quality Fertilizer',
    image: '',
    wiki: '',
  },

  {
    id: 805,
    name: 'Tree Fertilizer',
    image: '',
    wiki: '',
  },

  {
    id: 919,
    name: 'Deluxe Fertilizer',
    image: '',
    wiki: '',
  },
  {
    id: 465,
    name: 'Speed-Gro',
    image: '',
    wiki: '',
  },

  {
    id: 466,
    name: 'Deluxe Speed-Gro',
    image: '',
    wiki: '',
  },

  {
    id: 918,
    name: 'Hyper Speed-Gro',
    image: '',
    wiki: '',
  },
  {
    id: 370,
    name: 'Basic Retaining Soil',
    image: '',
    wiki: '',
  },

  {
    id: 371,
    name: 'Quality Retaining Soil',
    image: '',
    wiki: '',
  },

  {
    id: 920,
    name: 'Deluxe Retaining Soil',
    image: '',
    wiki: '',
  },
]
const fish = [
  {
    id: 128,
    name: 'Pufferfish',
    image: '',
    wiki: '',
  },
  {
    id: 129,
    name: 'Anchovy',
    image: '',
    wiki: '',
  },
  {
    id: 130,
    name: 'Tuna',
    image: '',
    wiki: '',
  },
  {
    id: 131,
    name: 'Sardine',
    image: '',
    wiki: '',
  },
  {
    id: 132,
    name: 'Bream',
    image: '',
    wiki: '',
  },
  {
    id: 136,
    name: 'Largemouth Bass',
    image: '',
    wiki: '',
  },
  {
    id: 137,
    name: 'Smallmouth Bass',
    image: '',
    wiki: '',
  },
  {
    id: 138,
    name: 'Rainbow Trout',
    image: '',
    wiki: '',
  },
  {
    id: 139,
    name: 'Salmon',
    image: '',
    wiki: '',
  },
  {
    id: 140,
    name: 'Walleye',
    image: '',
    wiki: '',
  },
  {
    id: 141,
    name: 'Perch',
    image: '',
    wiki: '',
  },
  {
    id: 142,
    name: 'Carp',
    image: '',
    wiki: '',
  },
  {
    id: 143,
    name: 'Catfish',
    image: '',
    wiki: '',
  },
  {
    id: 144,
    name: 'Pike',
    image: '',
    wiki: '',
  },
  {
    id: 145,
    name: 'Sunfish',
    image: '',
    wiki: '',
  },
  {
    id: 146,
    name: 'Red Mullet',
    image: '',
    wiki: '',
  },
  {
    id: 147,
    name: 'Herring',
    image: '',
    wiki: '',
  },
  {
    id: 148,
    name: 'Eel',
    image: '',
    wiki: '',
  },
  {
    id: 149,
    name: 'Octopus',
    image: '',
    wiki: '',
  },
  {
    id: 150,
    name: 'Red Snapper',
    image: '',
    wiki: '',
  },
  {
    id: 151,
    name: 'Squid',
    image: '',
    wiki: '',
  },
  {
    id: 154,
    name: 'Sea Cucumber',
    image: '',
    wiki: '',
  },
  {
    id: 155,
    name: 'Super Cucumber',
    image: '',
    wiki: '',
  },
  {
    id: 156,
    name: 'Ghostfish',
    image: '',
    wiki: '',
  },
  {
    id: 158,
    name: 'Stonefish',
    image: '',
    wiki: '',
  },
  {
    id: 161,
    name: 'Ice Pip',
    image: '',
    wiki: '',
  },
  {
    id: 162,
    name: 'Lava Eel',
    image: '',
    wiki: '',
  },
  {
    id: 164,
    name: 'Sandfish',
    image: '',
    wiki: '',
  },
  {
    id: 165,
    name: 'Scorpion Carp',
    image: '',
    wiki: '',
  },
  {
    id: 267,
    name: 'Flounder',
    image: '',
    wiki: '',
  },
  {
    id: 269,
    name: 'Midnight Carp',
    image: '',
    wiki: '',
  },
  {
    id: 698,
    name: 'Sturgeon',
    image: '',
    wiki: '',
  },
  {
    id: 699,
    name: 'Tiger Trout',
    image: '',
    wiki: '',
  },
  {
    id: 700,
    name: 'Bullhead',
    image: '',
    wiki: '',
  },
  {
    id: 701,
    name: 'Tilapia',
    image: '',
    wiki: '',
  },
  {
    id: 702,
    name: 'Chub',
    image: '',
    wiki: '',
  },
  {
    id: 704,
    name: 'Dorado',
    image: '',
    wiki: '',
  },
  {
    id: 705,
    name: 'Albacore',
    image: '',
    wiki: '',
  },
  {
    id: 706,
    name: 'Shad',
    image: '',
    wiki: '',
  },
  {
    id: 707,
    name: 'Lingcod',
    image: '',
    wiki: '',
  },
  {
    id: 708,
    name: 'Halibut',
    image: '',
    wiki: '',
  },
  {
    id: 734,
    name: 'Woodskip',
    image: '',
    wiki: '',
  },
  {
    id: 795,
    name: 'Void Salmon',
    image: '',
    wiki: '',
  },
  {
    id: 796,
    name: 'Slimejack',
    image: '',
    wiki: '',
  },
  {
    id: 836,
    name: 'Stingray',
    image: '',
    wiki: '',
  },
  {
    id: 837,
    name: 'Lionfish',
    image: '',
    wiki: '',
  },
  {
    id: 838,
    name: 'Blue Discus',
    image: '',
    wiki: '',
  },
  {
    id: 721,
    name: 'Snail',
    image: '',
    wiki: '',
  },
]
const geodeMinerals = [
  {
    id: 562,
    name: 'Tigerseye',
    image: '',
    wiki: '',
  },
  {
    id: 564,
    name: 'Opal',
    image: '',
    wiki: '',
  },
  {
    id: 565,
    name: 'Fire Opal',
    image: '',
    wiki: '',
  },
  {
    id: 538,
    name: 'Alamite',
    image: '',
    wiki: '',
  },
  {
    id: 539,
    name: 'Bixite',
    image: '',
    wiki: '',
  },
  {
    id: 540,
    name: 'Baryte',
    image: '',
    wiki: '',
  },
  {
    id: 541,
    name: 'Aerinite',
    image: '',
    wiki: '',
  },
  {
    id: 542,
    name: 'Calcite',
    image: '',
    wiki: '',
  },
  {
    id: 543,
    name: 'Dolomite',
    image: '',
    wiki: '',
  },
  {
    id: 544,
    name: 'Esperite',
    image: '',
    wiki: '',
  },
  {
    id: 545,
    name: 'Fluorapatite',
    image: '',
    wiki: '',
  },
  {
    id: 546,
    name: 'Geminite',
    image: '',
    wiki: '',
  },
  {
    id: 547,
    name: 'Helvite',
    image: '',
    wiki: '',
  },
  {
    id: 548,
    name: 'Jamborite',
    image: '',
    wiki: '',
  },
  {
    id: 549,
    name: 'Jagoite',
    image: '',
    wiki: '',
  },
  {
    id: 550,
    name: 'Kyanite',
    image: '',
    wiki: '',
  },
  {
    id: 551,
    name: 'Lunarite',
    image: '',
    wiki: '',
  },
  {
    id: 552,
    name: 'Malachite',
    image: '',
    wiki: '',
  },
  {
    id: 553,
    name: 'Neptunite',
    image: '',
    wiki: '',
  },
  {
    id: 554,
    name: 'Lemon Stone',
    image: '',
    wiki: '',
  },
  {
    id: 555,
    name: 'Nekoite',
    image: '',
    wiki: '',
  },
  {
    id: 556,
    name: 'Orpiment',
    image: '',
    wiki: '',
  },
  {
    id: 557,
    name: 'Petrified Slime',
    image: '',
    wiki: '',
  },
  {
    id: 558,
    name: 'Thunder Egg',
    image: '',
    wiki: '',
  },
  {
    id: 559,
    name: 'Pyrite',
    image: '',
    wiki: '',
  },
  {
    id: 560,
    name: 'Ocean Stone',
    image: '',
    wiki: '',
  },
  {
    id: 561,
    name: 'Ghost Crystal',
    image: '',
    wiki: '',
  },
  {
    id: 563,
    name: 'Jasper',
    image: '',
    wiki: '',
  },
  {
    id: 566,
    name: 'Celestine',
    image: '',
    wiki: '',
  },
  {
    id: 567,
    name: 'Marble',
    image: '',
    wiki: '',
  },
  {
    id: 568,
    name: 'Sandstone',
    image: '',
    wiki: '',
  },
  {
    id: 569,
    name: 'Granite',
    image: '',
    wiki: '',
  },
  {
    id: 570,
    name: 'Basalt',
    image: '',
    wiki: '',
  },
  {
    id: 571,
    name: 'Limestone',
    image: '',
    wiki: '',
  },
  {
    id: 572,
    name: 'Soapstone',
    image: '',
    wiki: '',
  },
  {
    id: 573,
    name: 'Hematite',
    image: '',
    wiki: '',
  },
  {
    id: 574,
    name: 'Mudstone',
    image: '',
    wiki: '',
  },
  {
    id: 575,
    name: 'Obsidian',
    image: '',
    wiki: '',
  },
  {
    id: 576,
    name: 'Slate',
    image: '',
    wiki: '',
  },
  {
    id: 577,
    name: 'Fairy Stone',
    image: '',
    wiki: '',
  },
  {
    id: 578,
    name: 'Star Shards',
    image: '',
    wiki: '',
  },
]
const geodes = [
  {
    id: 535,
    name: 'Geode',
    image: '',
    wiki: '',
  },
  {
    id: 536,
    name: 'Frozen Geode',
    image: '',
    wiki: '',
  },
  {
    id: 537,
    name: 'Magma Geode',
    image: '',
    wiki: '',
  },
  {
    id: 749,
    name: 'Omni Geode',
    image: '',
    wiki: '',
  },
]
const seeds = [
  {
    id: 495,
    name: 'Spring Seeds',
    image: '',
    wiki: '',
  },
  {
    id: 496,
    name: 'Summer Seeds',
    image: '',
    wiki: '',
  },
  {
    id: 497,
    name: 'Fall Seeds',
    image: '',
    wiki: '',
  },
  {
    id: 498,
    name: 'Winter Seeds',
    image: '',
    wiki: '',
  },
  {
    id: 499,
    name: 'Ancient Seeds',
    image: '',
    wiki: '',
  },
  {
    id: 251,
    name: 'Tea Sapling',
    image: '',
    wiki: '',
  },
  {
    id: 885,
    name: 'Fiber Seeds',
    image: '',
    wiki: '',
  },
  {
    id: 292,
    name: 'Mahogany Seed',
    image: '',
    wiki: '',
  },

  {
    id: 299,
    name: 'Amaranth Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 310,
    name: 'Maple Seed',
    image: '',
    wiki: '',
  },

  {
    id: 347,
    name: 'Rare Seed',
    image: '',
    wiki: '',
  },

  {
    id: 425,
    name: 'Fairy Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 429,
    name: 'Jazz Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 431,
    name: 'Sunflower Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 453,
    name: 'Poppy Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 455,
    name: 'Spangle Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 472,
    name: 'Parsnip Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 474,
    name: 'Cauliflower Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 475,
    name: 'Potato Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 476,
    name: 'Garlic Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 477,
    name: 'Kale Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 478,
    name: 'Rhubarb Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 479,
    name: 'Melon Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 480,
    name: 'Tomato Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 481,
    name: 'Blueberry Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 482,
    name: 'Pepper Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 483,
    name: 'Wheat Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 484,
    name: 'Radish Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 485,
    name: 'Red Cabbage Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 486,
    name: 'Starfruit Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 487,
    name: 'Corn Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 488,
    name: 'Eggplant Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 489,
    name: 'Artichoke Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 490,
    name: 'Pumpkin Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 491,
    name: 'Bok Choy Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 492,
    name: 'Yam Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 493,
    name: 'Cranberry Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 494,
    name: 'Beet Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 745,
    name: 'Strawberry Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 770,
    name: 'Mixed Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 802,
    name: 'Cactus Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 833,
    name: 'Pineapple Seeds',
    image: '',
    wiki: '',
  },

  {
    id: 891,
    name: 'Mushroom Tree Seed',
    image: '',
    wiki: '',
  },
  {
    id: 69,
    name: 'Banana Sapling',
    image: '',
    wiki: '',
  },

  {
    id: 628,
    name: 'Cherry Sapling',
    image: '',
    wiki: '',
  },

  {
    id: 629,
    name: 'Apricot Sapling',
    image: '',
    wiki: '',
  },

  {
    id: 630,
    name: 'Orange Sapling',
    image: '',
    wiki: '',
  },

  {
    id: 631,
    name: 'Peach Sapling',
    image: '',
    wiki: '',
  },

  {
    id: 632,
    name: 'Pomegranate Sapling',
    image: '',
    wiki: '',
  },

  {
    id: 633,
    name: 'Apple Sapling',
    image: '',
    wiki: '',
  },

  {
    id: 835,
    name: 'Mango Sapling',
    image: '',
    wiki: '',
  },
  {
    id: 309,
    name: 'Acorn',
    image: '',
    wiki: '',
  },
  {
    id: 311,
    name: 'Pine Cone',
    image: '',
    wiki: '',
  },
]
const sprinklers = [
  {
    id: 599,
    name: 'Sprinkler',
    image: '',
    wiki: '',
  },

  {
    id: 621,
    name: 'Quality Sprinkler',
    image: '',
    wiki: '',
  },

  {
    id: 645,
    name: 'Iridium Sprinkler',
    image: '',
    wiki: '',
  },
]
const tackle = [
  {
    id: 686,
    name: 'Spinner',
    image: '',
    wiki: '',
  },
  {
    id: 687,
    name: 'Dressed Spinner',
    image: '',
    wiki: '',
  },
  {
    id: 694,
    name: 'Trap Bobber',
    image: '',
    wiki: '',
  },
  {
    id: 695,
    name: 'Cork Bobber',
    image: '',
    wiki: '',
  },
  {
    id: 691,
    name: 'Barbed Hook',
    image: '',
    wiki: '',
  },
  {
    id: 692,
    name: 'Lead Bobber',
    image: '',
    wiki: '',
  },
  {
    id: 693,
    name: 'Treasure Hunter',
    image: '',
    wiki: '',
  },
  {
    id: 856,
    name: 'Curiosity Lure',
    image: '',
    wiki: '',
  },
  {
    id: 877,
    name: 'Quality Bobber',
    image: '',
    wiki: '',
  },
]
const minedMetalGoods = [
  {
    id: 881,
    name: 'Bone Fragment',
    image: '',
    wiki: '',
  },
  {
    id: 848,
    name: 'Cinder Shard',
    image: '',
    wiki: '',
  },
  {
    id: 382,
    name: 'Coal',
    image: '',
    wiki: '',
  },
  {
    id: 334,
    name: 'Copper Bar',
    image: '',
    wiki: '',
  },
  {
    id: 335,
    name: 'Iron Bar',
    image: '',
    wiki: '',
  },
  {
    id: 336,
    name: 'Gold Bar',
    image: '',
    wiki: '',
  },
  {
    id: 337,
    name: 'Iridium Bar',
    image: '',
    wiki: '',
  },
  {
    id: 384,
    name: 'Gold Ore',
    image: '',
    wiki: '',
  },
  {
    id: 386,
    name: 'Iridium Ore',
    image: '',
    wiki: '',
  },
  {
    id: 338,
    name: 'Refined Quartz',
    image: '',
    wiki: '',
  },
]
const bait = [
  {
    id: 685,
    name: 'Bait',
    image: '',
    wiki: '',
  },
  {
    id: 908,
    name: 'Magic Bait',
    image: '',
    wiki: '',
  },
  {
    id: 774,
    name: 'Wild Bait',
    image: '',
    wiki: '',
  },
  {
    id: 703,
    name: 'Magnet',
    image: '',
    wiki: '',
  },
]
const fossils = [
  {
    id: 820,
    name: 'Fossilized Skull',
    image: '',
    wiki: '',
  },
  {
    id: 821,
    name: 'Fossilized Spine',
    image: '',
    wiki: '',
  },
  {
    id: 822,
    name: 'Fossilized Tail',
    image: '',
    wiki: '',
  },
  {
    id: 823,
    name: 'Fossilized Leg',
    image: '',
    wiki: '',
  },
  {
    id: 824,
    name: 'Fossilized Ribs',
    image: '',
    wiki: '',
  },
  {
    id: 825,
    name: 'Snake Skull',
    image: '',
    wiki: '',
  },
  {
    id: 826,
    name: 'Snake Vertebrae',
    image: '',
    wiki: '',
  },
  {
    id: 827,
    name: 'Mummified Bat',
    image: '',
    wiki: '',
  },
  {
    id: 828,
    name: 'Mummified Frog',
    image: '',
    wiki: '',
  },
]
const monsterLoot = [
  {
    id: 766,
    name: 'Slime',
    image: '',
    wiki: '',
  },
  {
    id: 684,
    name: 'Bug Meat',
    image: '',
    wiki: '',
  },
  {
    id: 767,
    name: 'Bat Wing',
    image: '',
    wiki: '',
  },
  {
    id: 768,
    name: 'Solar Essence',
    image: '',
    wiki: '',
  },
  {
    id: 769,
    name: 'Void Essence',
    image: '',
    wiki: '',
  },
]
const trash = [
  {
    id: 167,
    name: 'Joja Cola',
    image: '',
    wiki: '',
  },
  {
    id: 168,
    name: 'Trash',
    image: '',
    wiki: '',
  },
  {
    id: 169,
    name: 'Driftwood',
    image: '',
    wiki: '',
  },
  {
    id: 170,
    name: 'Broken Glasses',
    image: '',
    wiki: '',
  },
  {
    id: 171,
    name: 'Broken CD',
    image: '',
    wiki: '',
  },
  {
    id: 172,
    name: 'Soggy Newspaper',
    image: '',
    wiki: '',
  },
  {
    id: 747,
    name: 'Rotten Plant',
    image: '',
    wiki: '',
  },
  {
    id: 748,
    name: 'Rotten Plant',
    image: '',
    wiki: '',
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

const universalGifts = {
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

export default universalGifts

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
