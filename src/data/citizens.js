import {
  artisanGoods,
  cooking,
  flowers,
  foragedMinerals,
  fruitTreeFruits,
  gems,
  unsorted,
  vegetables
} from "./all-gifts"

const citizens = [{
  name: 'Alex',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/7/73/Alex_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/0/04/Alex.png/80px-Alex.png',
  },
  birthday: {
    month: 'Summer',
    day: 13,
  },
  gifts: {
    loves: [...cooking.filter(item => [
      201, // Complete Breakfast
      212 // Salmon Diner
    ].includes(item.id))],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Elliott',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/6/6f/Elliott_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/b/bd/Elliott.png/80px-Elliott.png',
  },
  birthday: {
    month: 'Fall',
    day: 5,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        732, // Crab Cakes
        218 // Tom Kha Soup
      ].includes(item.id)),
      ...fruitTreeFruits.filter(item => item.id === 637), // Pomegranate
      ...fruitTreeFruits.filter(item => [637].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...cooking.filter(item => item.id === 206) // Pizza (what a weirdo)
    ],
    hates: [
      ...vegetables.filter(item => item.id === 300) // Amaranth
    ],
  },
},
{
  name: 'Harvey',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/7/7a/Harvey_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Harvey.png/80px-Harvey.png',
  },
  birthday: {
    month: 'Winter',
    day: 14,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => [
        395, // Coffee
        342, // Pickles
        432, // Truffle Oil
        348 // Wine
      ].includes(item.id)),
      ...cooking.filter(item => item.id === 237) // Super Meal
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...artisanGoods.filter(item => [
        424, // Cheese
        426 // Goat Cheese
      ].includes(item.id)),
      ...cooking.filter(item => [
        234, // Blueberry Tart
        220, // Chocolate Cake,
        223, // Cookie
        238, // Cranberry Sauce
        208, // Glazed Yams
        210, // Hashbrowns
        233, // Ice Cream
        211, // Pancakes
        221, // Pink Cake
        206, // Pizza
        222, // Rhubarb Pie
        232, // Rice Pudding
      ].includes(item.id))
    ],
    hates: [],
  },
},
{
  name: 'Sam',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Sam_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/9/94/Sam.png/80px-Sam.png',
  },
  birthday: {
    month: 'Summer',
    day: 17,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        731, // Maple Bar
        206  // Pizza
      ].includes(item.id)),
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...vegetables.filter(item => ![
        304, // Hops
        262  // Wheat
      ].includes(item.id)) // All Vegetables (except Hops & Wheat, universally normal)
    ],
    hates: [
      ...artisanGoods.filter(item => [
        307, //Duck Mayonnaise
        306, // Mayonnaise,
        342  // Pickles
      ].includes(item.id))
    ],
  },
},
{
  name: 'Sebastian',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/6/6a/Sebastian_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/a8/Sebastian.png/80px-Sebastian.png',
  },
  birthday: {
    month: 'Winter',
    day: 10,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        236, // Pumpkin Soup
        227  // Sashimi
      ].includes(item.id)),
      ...foragedMinerals.filter(item => item.id === 84) // Frozen Tear
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...flowers.filter(item => item.id !== 376) // All Flowers (except Poppy, universally hated)
    ],
    hates: [
      ...artisanGoods.filter(item => ![
        395, // Coffee
        614, // Green Tea
        247  // Oil
      ].includes(item.id)),
      ...cooking.filter(item => [
        201, // Complete Breakfast
        240, // Farmer's Lunch
        195, // Omelet
      ].includes(item.id))
    ],
  },
},
{
  name: 'Shane',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/b/b4/Shane_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/8b/Shane.png/80px-Shane.png',
  },
  birthday: {
    month: 'Spring',
    day: 20,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => item.id === 346), // Beer
      ...cooking.filter(item => [
        215, // Pepper Poppers
        206  // Pizza
      ].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [
      ...artisanGoods.filter(item => item.id === 342) // Pickles
    ],
  },
},
{
  name: 'Abigail',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/6/63/Abigail_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/88/Abigail.png/80px-Abigail.png',
  },
  birthday: {
    month: 'Fall',
    day: 13,
  },
  gifts: {
    loves: [
      ...gems.filter(item => item.id === 66), // Amethyst
      ...cooking.filter(item => [
        904, // Banana Pudding
        611, // Blackberry Cobbler
        220, // Chocolate Cake
        226 // Spicy Eel
      ].includes(item.id)),
      ...vegetables.filter(item => item.id === 276) // Pumpkin
    ],
    likes: [],
    neutral: [],
    dislikes: [...vegetables.filter(item => item.id !== 276)], // All vegetables except Pumpkin
    hates: [],
  },
},
{
  name: 'Emily',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/c/c3/Emily_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/2/28/Emily.png/80px-Emily.png',
  },
  birthday: {
    month: 'Spring',
    day: 27,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => item.id === 428), // Cloth
      ...cooking.filter(item => item.id === 241), // Survival Burger
      ...gems.filter(item => item.id !== 72) // All Gems except Diamond (universally liked)
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...cooking.filter(item => [
        225, // Fried Eel
        233, // Ice Cream
        232, // Rice Pudding
        226 // Spicy Eel
      ].includes(item.id)),
    ],
    hates: [
      ...cooking.filter(item => [
        213, // Fish Taco
        228, // Maki Roll
        212, // Salmon Dinner
        227 // Sashimi
      ].includes(item.id))
    ],
  },
},
{
  name: 'Haley',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/f/f7/Haley_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Haley.png/80px-Haley.png',
  },
  birthday: {
    month: 'Spring',
    day: 14,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        610, // Fruit Salad
        221 // Pink Cake
      ].includes(item.id)),
      ...flowers.filter(item => item.id === 421) // Sunflower
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...vegetables.filter(item => ![
        304,
        262
      ].includes(item.id)) // All Vegetables (except Hops & Wheat, universally normal)
    ],
    hates: [
      ...gems.filter(item => item.id === 74) // Prismatic Shard
    ],
  },
},
{
  name: 'Leah',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/6/6e/Leah_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/e/e6/Leah.png/80px-Leah.png',
  },
  birthday: {
    month: 'Winter',
    day: 23,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => [
        426, // Goat Cheese
        348 // Wine
      ].includes(item.id)),
      ...cooking.filter(item => [
        651, // Poppyseed Muffin
        196, // Salad
        606, // Stir Fry
        200 // Vegetable Medley
      ].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...foragedMinerals.filter(item => item.id !== 86), // All Foraged Minerals except Earth Crystal (universally liked)
      ...gems.filter(item => ![
        72, // Diamond
        74 // Prismatic Shard
      ].includes(item.id)), // All Gems except Diamond (universally liked) & Prismatic Shard (universally loved)
      ...cooking.filter(item => [
        209, // Carp Surprise
        223, // Cookie
        233, // Ice Cream
        221, // Pink Cake
        232, // Rice Pudding
        241, // Survival Burger
        229 // Tortilla
      ].includes(item.id))
    ],
    hates: [
      ...cooking.filter(item => [
        210, // Hashbrowns (Coincidence that the double is 420?)
        211, // Pancakes
        206 // Pizza
      ].includes(item.id))
    ],
  },
},
{
  name: 'Maru',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/2/23/Maru_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/f/f8/Maru.png/80px-Maru.png',
  },
  birthday: {
    month: 'Summer',
    day: 10,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        197, // Cheese Cauliflower
        243, // Miner's Treat
        215, // Pepper Poppers
        222 // Rhubab Pie
      ].includes(item.id)),
      ...gems.filter(item => item.id === 72), // Diamond
      ...vegetables.filter(item => item.id === 190) // Cauliflower
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...unsorted.loved.filter(item => item.id === 724) // Maple Syrup
    ],
    hates: [
      ...artisanGoods.filter(item => [
        340, // Honey
        342 // Pickles
      ].includes(item.id))
    ],
  },
},
{
  name: 'Penny',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/b/bc/Penny_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/ab/Penny.png/80px-Penny.png',
  },
  birthday: {
    month: 'Fall',
    day: 2,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        651, // Poppyseed Muffin
        230, // Red Plate
        244, // Roots Platter
        218  // Tom Kha Soup
      ].includes(item.id)),
      ...gems.filter(item => [
        72,   // Diamond
        60    // Emerald
      ].includes(item.id)),
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...cooking.filter(item => [
        456, // Algae Soup
        457  // Pale Broth
      ].includes(item.id))
    ],
    hates: [
      ...artisanGoods.filter(item => [
        346, // Beer
        459, // Mead
        303, // Pale Ale
        873, // Piña Colada
        348  // Wine
      ].includes(item.id))
    ],
  },
},
{
  name: 'Caroline',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/d/d4/Caroline_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/87/Caroline.png/80px-Caroline.png',
  },
  birthday: {
    month: 'Winter',
    day: 7,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => item.id === 614), // Green Tea
      ...cooking.filter(item => [
        213, // Fish Taco
        907 // Tropical Curry
      ].includes(item.id) === 213 || item.id === 907),
      ...flowers.filter(item => item.id === 593) // Summer Sprangle
    ],
    likes: [
      ...vegetables.filter(item => item.id === 815) // Tea Leaves
    ],
    neutral: [
      ...artisanGoods.filter(item => [
        307, // Duck Mayonnaise
        306 // Mayonnaise
      ].includes(item.id)),
      ...vegetables.filter(item => item.id === 300) // Amaranth
    ],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Clint',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/7/74/Clint_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Clint.png/80px-Clint.png',
  },
  birthday: {
    month: 'Winter',
    day: 26,
  },
  gifts: {
    loves: [
      ...gems.filter(item => item.id !== 72), // All Gems except Diamond
      ...cooking.filter(item => [
        605, // Artichoke Dip
        649 // Fiddlehead Risotto
      ].includes(item.id)),
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...flowers.filter(item => item.id !== 376) // All Flowers (except Poppy, universally hated)
    ],
    hates: [],
  },
},
{
  name: 'Demetrius',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/0/0b/Demetrius_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/f/f9/Demetrius.png/80px-Demetrius.png',
  },
  birthday: {
    month: 'Summer',
    day: 19,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        207, // Bean Hotpot
        233, // Ice Cream
        232 // Rice Pudding
      ].includes(item.id)),
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Dwarf',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/0/08/Dwarf_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Dwarf.png/80px-Dwarf.png',
  },
  birthday: {
    month: 'Summer',
    day: 22,
  },
  gifts: {
    loves: [
      ...gems.filter(item => item.id !== 72) // All Gems except Diamond (universally liked)
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Evelyn',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/5/54/Evelyn_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/8e/Evelyn.png/80px-Evelyn.png',
  },
  birthday: {
    month: 'Winter',
    day: 20,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        220, // Chocolate Cake
        239 // Stuffing
      ].includes(item.id)),
      ...flowers.filter(item => [
        595, // Fairy Rose
        591 // Tulip
      ].includes(item.id)),
      ...gems.filter(item => item.id === 72), // Diamond
      ...vegetables.filter(item => item.id === 284) // Beet
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [
      ...cooking.filter(item => [
        225, // Fried Eel
        228, // Maki Roll
        227, // Sashimi
        226, // Spicy Eel
        219 // Trout Soup
      ].includes(item.id)),
      ...vegetables.filter(item => item.id === 248) // Garlinc
    ],
  },
},
{
  name: 'George',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/a/ad/George_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/7/78/George.png/80px-George.png',
  },
  birthday: {
    month: 'Fall',
    day: 24,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => item.id === 205) // Fried Mushroom
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...flowers.filter(item => item.id !== 376) // All Flowers (except Poppy, universally hated)
    ],
    hates: [],
  },
},
{
  name: 'Gus',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Gus_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/5/52/Gus.png/80px-Gus.png',
  },
  birthday: {
    month: 'Summer',
    day: 8,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        729, // Escargot
        213, // Fish Taco
        907 // Tropical Curry
      ].includes(item.id)),
      ...fruitTreeFruits.filter(item => item.id === 635), // Orange
      ...gems.filter(item => item.id === 72) // Diamond
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [
      ...cooking.filter(item => item.id === 648) // Coleslaw
    ],
  },
},
{
  name: 'Jas',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/6/68/Jas_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/5/55/Jas.png/80px-Jas.png',
  },
  birthday: {
    month: 'Summer',
    day: 4,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        221, // Pink Cake
        232 // Rice Pudding
      ].includes(item.id)),
      ...flowers.filter(item => item.id === 595) // Fairy Rose
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...vegetables.filter(item => ![
        304,
        262
      ].includes(item.id)) //	All Vegetables (except Hops & Wheat, universally normal)
    ],
    hates: [
      ...artisanGoods.filter(item => [
        340, // Honey
        344, // Jelly
        247 // Oil
      ].includes(item.id)),
      ...cooking.filter(item => item.id === 253) // Triple Shot Sepresso
    ],
  },
},
{
  name: 'Jodi',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/f/f7/Jodi_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/4/41/Jodi.png/80px-Jodi.png',
  },
  birthday: {
    month: 'Fall',
    day: 11,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        220, // Chocolate Cake
        214, // Crispy Bass
        231, // Eggplant Parmesan
        225, // Fried Eel
        211, // Pancakes
        222, // Rhubarb Pie
        200 // Vegetable Medley
      ].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...cooking.filter(item => item.id === 248) // Garlic
    ],
    hates: [],
  },
},
{
  name: 'Kent',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/8/86/Kent_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/9/99/Kent.png/80px-Kent.png',
  },
  birthday: {
    month: 'Spring',
    day: 4,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        649, // Fiddlehead Risotto
        607 // Roasted Hazelnuts
      ].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [
      ...cooking.filter(item => [
        456, // Algae Soup
        227, // Sashimi
        229 // Tortilla
      ].includes(item.id))
    ],
  },
},
{
  name: 'Krobus',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/1/10/Krobus_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/7/71/Krobus.png/80px-Krobus.png',
  },
  birthday: {
    month: 'Winter',
    day: 1,
  },
  gifts: {
    loves: [
      ...gems.filter(item => item.index === 72), // Diamond
      ...vegetables.filter(item => item.id === 276) // Pumpkin
    ],
    likes: [
      ...cooking.filter(item => item.id === 265) // Seafoam Pudding
    ],
    neutral: [],
    dislikes: [
      ...cooking.filter(item => ![
        216, // Bread
        194, // Fried Egg
        203, // Strange Bun
        265 // Seafoam Pudding
      ].includes(item.id)),
      ...unsorted.liked.filter(item => item.id === 773) // Life Elixir
    ],
    hates: [],
  },
},
{
  name: 'Leo',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/3/3d/Leo_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/1/1d/Leo.png/80px-Leo.png',
  },
  birthday: {
    month: 'Summer',
    day: 26,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => item.id === 906) // Poi
    ],
    likes: [],
    neutral: [
      ...artisanGoods.filter(item => item.id === 395) // Coffee
    ],
    dislikes: [
      ...artisanGoods.filter(item => item.id === 342), // Pickles
      ...cooking.filter(item => ![
        216, // Bread
        194, // Fried Egg
        906, // Poi
        905, // Mango Sticky Rice
        203, // Strange Bun
        265, // Seafoam Pudding
        253 // Triple Shot Espresso
      ].includes(item.id)),
      ...unsorted.liked.filter(item => item.id === 773) // Life Elixir
    ],
    hates: [
      ...artisanGoods.filter(item => [
        346, // Beer
        379, // Mead
        303, // Pale Ale
        873, // Pina Colada (no ID)//TBD
        348 // Wine
      ].includes(item.id))
      // TBD: According to Wiki: Triple Shot Espresso as well? (is already in dislikes)
    ],
  },
},
{
  name: 'Lewis',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/b/b6/Lewis_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Lewis.png/80px-Lewis.png',
  },
  birthday: {
    month: 'Spring',
    day: 7,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => item.id === 614), // Green Tea
      ...cooking.filter(item => [
        235, // Autumn's Bounty
        208, // Glazed Yams
        200 // Vegetable Medley
      ].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Linus',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Linus_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Linus.png/80px-Linus.png',
  },
  birthday: {
    month: 'Winter',
    day: 3,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        234, // Blueberry Tart
        242, // Dish O' The Sea
      ].includes(item.id)),
      ...vegetables.filter(item => item.id === 280) // Yam
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...foragedMinerals,
      ...gems.filter(item => ![72, 74].includes(item.id)) // All Gems except Diamond (universally liked) & Prismatic Shard (universally loved)
    ],
    hates: [],
  },
},
{
  name: 'Marnie',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/d/d4/Marnie_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/5/52/Marnie.png/80px-Marnie.png',
  },
  birthday: {
    month: 'Fall',
    day: 18,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        240, // Farmer's Lunch
        221, // Pink Cake
        608  // Pumpkin Pie
      ].includes(item.id)),
      ...gems.filter(item => item.id === 72) // Diamond
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Pam',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/b/b6/Pam_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/d/da/Pam.png/80px-Pam.png',
  },
  birthday: {
    month: 'Spring',
    day: 18,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => [
        346, // Beer
        459, // Mead
        303, // Pale Ale
        873  // Piña Colada
      ].includes(item.id)),
      ...cooking.filter(item => [
        208, // Glazed Yams
        199  // Parsnip Soup
      ].includes(item.id)),
      ...vegetables.filter(item => item.id === 24), // Parsnip
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Pierre',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/c/cf/Pierre_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/7/7e/Pierre.png/80px-Pierre.png',
  },
  birthday: {
    month: 'Spring',
    day: 26,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => item.id === 202) // Fried Calamari
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...foragedMinerals.filter(item => [].includes(item.id)),
      ...gems.filter(item => ![
        72, // Diamond
        74 // Prismatic Shard
      ].includes(item.id)), // All Gems except Diamond (universally liked) & Prismatic Shard (universally loved)
    ],
    hates: [
      ...cooking.filter(item => [
        199, // Parsnip Soup
        229 // Tortilla
      ].includes(item.id)),
      ...vegetables.filter(item => [
        270, // Corn
        248 // Garlic
      ].includes(item.id))
    ],
  },
},
{
  name: 'Robin',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/d/d1/Robin_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Robin.png/80px-Robin.png',
  },
  birthday: {
    month: 'Fall',
    day: 21,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => item.id === 426), // Goat Cheese
      ...cooking.filter(item => item.id === 224), // Spaghetti
      ...fruitTreeFruits.filter(item => item.id === 636) // Peach
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Sandy',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/7/7d/Sandy_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Sandy.png/80px-Sandy.png',
  },
  birthday: {
    month: 'Fall',
    day: 15,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => item.id === 905), // Mango Sticky Rice
      ...flowers.filter(item => [
        418, // Crocus
        402  // Sweet Pea
      ].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
{
  name: 'Vincent',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/0/0b/Vincent_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Vincent.png/80px-Vincent.png',
  },
  birthday: {
    month: 'Spring',
    day: 10,
  },
  gifts: {
    loves: [
      ...cooking.filter(item => [
        612, // Cranberry Candy
        903, // Ginger Ale
        221  // Pink Cake
      ].includes(item.id))
    ],
    likes: [],
    neutral: [],
    dislikes: [
      ...vegetables.filter(item => ![
        304, // Hops
        262  // Wheat
      ].includes(item.id)) // All Vegetables (except Hops & Wheat, universally normal)
    ],
    hates: [
      ...artisanGoods.filter(item => ![
        340, // Honey
        344, // Jelly
        247  // Oil
      ].includes(item.id)),
      ...cooking.filter(item => item.id === 283) // Triple Shot Espresso
    ],
  },
},
{
  name: 'Willy',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/7/73/Willy_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Willy.png/80px-Willy.png',
  },
  birthday: {
    month: 'Summer',
    day: 24,
  },
  gifts: {
    loves: [
      ...artisanGoods.filter(item => item.id === 459), // Mead
      ...gems.filter(item => item.id === 72), // Diamond
      ...vegetables.filter(item => item.id === 276)  // Pumpkin
    ],
    likes: [
      ...cooking.filter(item => item.id === 265) // Seafoam Pudding
    ],
    neutral: [
      ...cooking.filter(item => [
        242, // Dish O' The Sea
        228, // Maki Roll
        227  // Sasahimi
      ].includes(item.id))
    ],
    dislikes: [
      ...cooking.filter(item => ![
        242, // Dish O' The Sea
        228, // Maki Roll
        227  // Sasahimi
      ].includes(item.id)),
      // TBD: decrypt the wiki entry
      // ...CATEGORY.filter(item => [].includes(item.id))
    ],
    hates: [],
  },
},
{
  name: 'Wizard',
  image: {
    small: 'https://stardewvalleywiki.com/mediawiki/images/e/e9/Wizard_Icon.png',
    big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/c/c7/Wizard.png/80px-Wizard.png',
  },
  birthday: {
    month: 'Wizard',
    day: 17,
  },
  gifts: {
    loves: [],
    likes: [],
    neutral: [],
    dislikes: [],
    hates: [],
  },
},
]

export default citizens