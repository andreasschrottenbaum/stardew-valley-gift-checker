// https://stardewvalleywiki.com/Friendship

const artisanGoods = [
  {
    id: 340,
    name: 'Honey',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/Honey.png',
    wiki: 'https://stardewvalleywiki.com/Honey',
  },
  {
    id: 348,
    name: 'Wine',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/69/Wine.png',
    wiki: 'https://stardewvalleywiki.com/Wine',
  },
  {
    id: 303,
    name: 'Pale Ale',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/78/Pale_Ale.png',
    wiki: 'https://stardewvalleywiki.com/Pale_Ale',
  },
  {
    id: 346,
    name: 'Beer',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/b3/Beer.png',
    wiki: 'https://stardewvalleywiki.com/Beer',
  },
  {
    id: 459,
    name: 'Mead',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/84/Mead.png',
    wiki: 'https://stardewvalleywiki.com/Mead',
  },
  {
    id: 424,
    name: 'Cheese',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png',
    wiki: 'https://stardewvalleywiki.com/Cheese',
  },
  {
    id: 426,
    name: 'Goat Cheese',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c8/Goat_Cheese.png',
    wiki: 'https://stardewvalleywiki.com/Goat_Cheese',
  },
  {
    id: 395,
    name: 'Coffee',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e9/Coffee.png',
    wiki: 'https://stardewvalleywiki.com/Coffee',
  },
  {
    id: 614,
    name: 'Green Tea',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/8f/Green_Tea.png',
    wiki: 'https://stardewvalleywiki.com/Green_Tea',
  },
  {
    id: 350,
    name: 'Juice',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Juice.png',
    wiki: 'https://stardewvalleywiki.com/Juice',
  },
  {
    id: 428,
    name: 'Cloth',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/51/Cloth.png',
    wiki: 'https://stardewvalleywiki.com/Cloth',
  },
  {
    id: 306,
    name: 'Mayonnaise',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/4e/Mayonnaise.png',
    wiki: 'https://stardewvalleywiki.com/Mayonnaise',
  },
  {
    id: 307,
    name: 'Duck Mayonnaise',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/23/Duck_Mayonnaise.png',
    wiki: 'https://stardewvalleywiki.com/Duck_Mayonnaise',
  },
  {
    id: 807,
    name: 'Dinosaur Mayonnaise',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c3/Dinosaur_Mayonnaise.png',
    wiki: 'https://stardewvalleywiki.com/Dinosaur_Mayonnaise',
  },
  {
    id: 432,
    name: 'Truffle Oil',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/3d/Truffle_Oil.png',
    wiki: 'https://stardewvalleywiki.com/Truffle_Oil',
  },
  {
    id: 342,
    name: 'Pickles',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/c7/Pickles.png',
    wiki: 'https://stardewvalleywiki.com/Jellies_and_Pickles',
  },
  {
    id: 344,
    name: 'Jelly',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Jelly.png',
    wiki: 'https://stardewvalleywiki.com/Jellies_and_Pickles',
  },
  {
    id: 445,
    name: 'Caviar',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/89/Caviar.png',
    wiki: 'https://stardewvalleywiki.com/Caviar',
  },
  {
    id: 447,
    name: 'Aged Roe',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/0e/Aged_Roe.png',
    wiki: 'https://stardewvalleywiki.com/Aged_Roe',
  },
  {
    id: 247,
    name: 'Oil',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/06/Oil.png',
    wiki: 'https://stardewvalleywiki.com/Oil',
  },
  {
    id: 308,
    name: 'Void Mayonnaise',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/f3/Void_Mayonnaise.png',
    wiki: 'https://stardewvalleywiki.com/Void_Mayonnaise',
  },
  {
    id: 873,
    name: 'Piña Colada',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/12/Pi%C3%B1a_Colada.png',
    wiki: 'https://stardewvalleywiki.com/Pina_Colada',
  },
]
const cooking = [
  {
    id: 195,
    name: 'Omelet',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png',
    wiki: 'https://stardewvalleywiki.com/Omelet',
  },
  {
    id: 196,
    name: 'Salad',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/7e/Salad.png',
    wiki: 'https://stardewvalleywiki.com/Salad',
  },
  {
    id: 197,
    name: 'Cheese Cauliflower',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/6e/Cheese_Cauliflower.png',
    wiki: 'https://stardewvalleywiki.com/Cheese_Cauliflower',
  },
  {
    id: 198,
    name: 'Baked Fish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/94/Baked_Fish.png',
    wiki: 'https://stardewvalleywiki.com/Baked_Fish',
  },
  {
    id: 199,
    name: 'Parsnip Soup',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/76/Parsnip_Soup.png',
    wiki: 'https://stardewvalleywiki.com/Parsnip_Soup',
  },
  {
    id: 200,
    name: 'Vegetable Medley',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png',
    wiki: 'https://stardewvalleywiki.com/Vegetable_Medley',
  },
  {
    id: 201,
    name: 'Complete Breakfast',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png',
    wiki: 'https://stardewvalleywiki.com/Complete_Breakfast',
  },
  {
    id: 202,
    name: 'Fried Calamari',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png',
    wiki: 'https://stardewvalleywiki.com/Fried_Calamari',
  },
  {
    id: 204,
    name: 'Lucky Lunch',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/5d/Lucky_Lunch.png',
    wiki: 'https://stardewvalleywiki.com/Lucky_Lunch',
  },
  {
    id: 205,
    name: 'Fried Mushroom',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/4a/Fried_Mushroom.png',
    wiki: 'https://stardewvalleywiki.com/Fried_Mushroom',
  },
  {
    id: 206,
    name: 'Pizza',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f4/Pizza.png',
    wiki: 'https://stardewvalleywiki.com/Pizza',
  },
  {
    id: 207,
    name: 'Bean Hotpot',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/24/Bean_Hotpot.png',
    wiki: 'https://stardewvalleywiki.com/Bean_Hotpot',
  },
  {
    id: 208,
    name: 'Glazed Yams',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/30/Glazed_Yams.png',
    wiki: 'https://stardewvalleywiki.com/Glazed_Yams',
  },
  {
    id: 209,
    name: 'Carp Surprise',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/cc/Carp_Surprise.png',
    wiki: 'https://stardewvalleywiki.com/Carp_Surprise',
  },
  {
    id: 210,
    name: 'Hashbrowns',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/8f/Hashbrowns.png',
    wiki: 'https://stardewvalleywiki.com/Hashbrowns',
  },
  {
    id: 211,
    name: 'Pancakes',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/6b/Pancakes.png',
    wiki: 'https://stardewvalleywiki.com/Pancakes',
  },
  {
    id: 212,
    name: 'Salmon Dinner',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png',
    wiki: 'https://stardewvalleywiki.com/Salmon_Dinner',
  },
  {
    id: 213,
    name: 'Fish Taco',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d5/Fish_Taco.png',
    wiki: 'https://stardewvalleywiki.com/Fish_Taco',
  },
  {
    id: 214,
    name: 'Crispy Bass',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/53/Crispy_Bass.png',
    wiki: 'https://stardewvalleywiki.com/Crispy_Bass',
  },
  {
    id: 215,
    name: 'Pepper Poppers',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/08/Pepper_Poppers.png',
    wiki: 'https://stardewvalleywiki.com/Pepper_Poppers',
  },
  {
    id: 218,
    name: 'Tom Kha Soup',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/3b/Tom_Kha_Soup.png',
    wiki: 'https://stardewvalleywiki.com/Tom_Kha_Soup',
  },
  {
    id: 219,
    name: 'Trout Soup',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/48/Trout_Soup.png',
    wiki: 'https://stardewvalleywiki.com/Trout_Soup',
  },
  {
    id: 220,
    name: 'Chocolate Cake',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png',
    wiki: 'https://stardewvalleywiki.com/Chocolate_Cake',
  },
  {
    id: 221,
    name: 'Pink Cake',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png',
    wiki: 'https://stardewvalleywiki.com/Pink_Cake',
  },
  {
    id: 222,
    name: 'Rhubarb Pie',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/21/Rhubarb_Pie.png',
    wiki: 'https://stardewvalleywiki.com/Rhubarb_Pie',
  },
  {
    id: 223,
    name: 'Cookie',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/70/Cookie.png',
    wiki: 'https://stardewvalleywiki.com/Cookie',
  },
  {
    id: 224,
    name: 'Spaghetti',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/08/Spaghetti.png',
    wiki: 'https://stardewvalleywiki.com/Spaghetti',
  },
  {
    id: 225,
    name: 'Fried Eel',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/84/Fried_Eel.png',
    wiki: 'https://stardewvalleywiki.com/Fried_Eel',
  },
  {
    id: 226,
    name: 'Spicy Eel',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Spicy_Eel.png',
    wiki: 'https://stardewvalleywiki.com/Spicy_Eel',
  },
  {
    id: 227,
    name: 'Sashimi',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/41/Sashimi.png',
    wiki: 'https://stardewvalleywiki.com/Sashimi',
  },
  {
    id: 228,
    name: 'Maki Roll',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/b6/Maki_Roll.png',
    wiki: 'https://stardewvalleywiki.com/Maki_Roll',
  },
  {
    id: 229,
    name: 'Tortilla',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d7/Tortilla.png',
    wiki: 'https://stardewvalleywiki.com/Tortilla',
  },
  {
    id: 230,
    name: 'Red Plate',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/45/Red_Plate.png',
    wiki: 'https://stardewvalleywiki.com/Red_Plate',
  },
  {
    id: 231,
    name: 'Eggplant Parmesan',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/73/Eggplant_Parmesan.png',
    wiki: 'https://stardewvalleywiki.com/Eggplant_Parmesan',
  },
  {
    id: 232,
    name: 'Rice Pudding',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ec/Rice_Pudding.png',
    wiki: 'https://stardewvalleywiki.com/Rice_Pudding',
  },
  {
    id: 233,
    name: 'Ice Cream',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/5d/Ice_Cream.png',
    wiki: 'https://stardewvalleywiki.com/Ice_Cream',
  },
  {
    id: 234,
    name: 'Blueberry Tart',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9b/Blueberry_Tart.png',
    wiki: 'https://stardewvalleywiki.com/Blueberry_Tart',
  },
  {
    id: 235,
    name: "Autumn's Bounty",
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/f4/Autumn%27s_Bounty.png',
    wiki: 'https://stardewvalleywiki.com/Autumn%27s_Bounty',
  },
  {
    id: 236,
    name: 'Pumpkin Soup',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/59/Pumpkin_Soup.png',
    wiki: 'https://stardewvalleywiki.com/Pumpkin_Soup',
  },
  {
    id: 237,
    name: 'Super Meal',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d2/Super_Meal.png',
    wiki: 'https://stardewvalleywiki.com/Super_Meal',
  },
  {
    id: 238,
    name: 'Cranberry Sauce',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/0b/Cranberry_Sauce.png',
    wiki: 'https://stardewvalleywiki.com/Cranberry_Sauce',
  },
  {
    id: 239,
    name: 'Stuffing',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/9a/Stuffing.png',
    wiki: 'https://stardewvalleywiki.com/Stuffing',
  },
  {
    id: 240,
    name: "Farmer's Lunch",
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/79/Farmer%27s_Lunch.png',
    wiki: 'https://stardewvalleywiki.com/Farmer%27s_Lunch',
  },
  {
    id: 241,
    name: 'Survival Burger',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/87/Survival_Burger.png',
    wiki: 'https://stardewvalleywiki.com/Survival_Burger',
  },
  {
    id: 242,
    name: "Dish O' The Sea",
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/ff/Dish_O%27_The_Sea.png',
    wiki: 'https://stardewvalleywiki.com/Dish_O%27_The_Sea',
  },
  {
    id: 243,
    name: "Miner's Treat",
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/12/Miner%27s_Treat.png',
    wiki: 'https://stardewvalleywiki.com/Miner%27s_Treat',
  },
  {
    id: 244,
    name: 'Roots Platter',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e0/Roots_Platter.png',
    wiki: 'https://stardewvalleywiki.com/Roots_Platter',
  },
  {
    id: 253,
    name: 'Triple Shot Espresso',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/36/Triple_Shot_Espresso.png',
    wiki: 'https://stardewvalleywiki.com/Triple_Shot_Espresso',
  },
  {
    id: 456,
    name: 'Algae Soup',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/53/Algae_Soup.png',
    wiki: 'https://stardewvalleywiki.com/Algae_Soup',
  },
  {
    id: 457,
    name: 'Pale Broth',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/7e/Pale_Broth.png',
    wiki: 'https://stardewvalleywiki.com/Pale_Broth',
  },
  {
    id: 604,
    name: 'Plum Pudding',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/a0/Plum_Pudding.png',
    wiki: 'https://stardewvalleywiki.com/Plum_Pudding',
  },
  {
    id: 605,
    name: 'Artichoke Dip',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/77/Artichoke_Dip.png',
    wiki: 'https://stardewvalleywiki.com/Artichoke_Dip',
  },
  {
    id: 606,
    name: 'Stir Fry',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Stir_Fry.png',
    wiki: 'https://stardewvalleywiki.com/Stir_Fry',
  },
  {
    id: 607,
    name: 'Roasted Hazelnuts',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/18/Roasted_Hazelnuts.png',
    wiki: 'https://stardewvalleywiki.com/Roasted_Hazelnuts',
  },
  {
    id: 608,
    name: 'Pumpkin Pie',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/7d/Pumpkin_Pie.png',
    wiki: 'https://stardewvalleywiki.com/Pumpkin_Pie',
  },
  {
    id: 609,
    name: 'Radish Salad',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/b9/Radish_Salad.png',
    wiki: 'https://stardewvalleywiki.com/Radish_Salad',
  },
  {
    id: 610,
    name: 'Fruit Salad',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9e/Fruit_Salad.png',
    wiki: 'https://stardewvalleywiki.com/Fruit_Salad',
  },
  {
    id: 611,
    name: 'Blackberry Cobbler',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/70/Blackberry_Cobbler.png',
    wiki: 'https://stardewvalleywiki.com/Blackberry_Cobbler',
  },
  {
    id: 612,
    name: 'Cranberry Candy',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9d/Cranberry_Candy.png',
    wiki: 'https://stardewvalleywiki.com/Cranberry_Candy',
  },
  {
    id: 618,
    name: 'Bruschetta',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/ca/Bruschetta.png',
    wiki: 'https://stardewvalleywiki.com/Bruschetta',
  },
  {
    id: 648,
    name: 'Coleslaw',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Coleslaw.png',
    wiki: 'https://stardewvalleywiki.com/Coleslaw',
  },
  {
    id: 649,
    name: 'Fiddlehead Risotto',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/2d/Fiddlehead_Risotto.png',
    wiki: 'https://stardewvalleywiki.com/Fiddlehead_Risotto',
  },
  {
    id: 651,
    name: 'Poppyseed Muffin',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/8e/Poppyseed_Muffin.png',
    wiki: 'https://stardewvalleywiki.com/Poppyseed_Muffin',
  },
  {
    id: 727,
    name: 'Chowder',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/95/Chowder.png',
    wiki: 'https://stardewvalleywiki.com/Chowder',
  },
  {
    id: 728,
    name: 'Fish Stew',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/6f/Fish_Stew.png',
    wiki: 'https://stardewvalleywiki.com/Fish_Stew',
  },
  {
    id: 729,
    name: 'Escargot',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/78/Escargot.png',
    wiki: 'https://stardewvalleywiki.com/Escargot',
  },
  {
    id: 730,
    name: 'Lobster Bisque',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/0a/Lobster_Bisque.png',
    wiki: 'https://stardewvalleywiki.com/Lobster_Bisque',
  },
  {
    id: 731,
    name: 'Maple Bar',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/18/Maple_Bar.png',
    wiki: 'https://stardewvalleywiki.com/Maple_Bar',
  },
  {
    id: 732,
    name: 'Crab Cakes',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/70/Crab_Cakes.png',
    wiki: 'https://stardewvalleywiki.com/Crab_Cakes',
  },
  {
    id: 733,
    name: 'Shrimp Cocktail',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/8e/Shrimp_Cocktail.png',
    wiki: 'https://stardewvalleywiki.com/Shrimp_Cocktail',
  },
  {
    id: 903,
    name: 'Ginger Ale',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/1a/Ginger_Ale.png',
    wiki: 'https://stardewvalleywiki.com/Ginger_Ale',
  },
  {
    id: 904,
    name: 'Banana Pudding',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/40/Banana_Pudding.png',
    wiki: 'https://stardewvalleywiki.com/Banana_Pudding',
  },
  {
    id: 905,
    name: 'Mango Sticky Rice',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/6e/Mango_Sticky_Rice.png',
    wiki: 'https://stardewvalleywiki.com/Mango_Sticky_Rice',
  },
  {
    id: 906,
    name: 'Poi',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Poi.png',
    wiki: 'https://stardewvalleywiki.com/Poi',
  },
  {
    id: 907,
    name: 'Tropical Curry',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/32/Tropical_Curry.png',
    wiki: 'https://stardewvalleywiki.com/Tropical_Curry',
  },
  {
    id: 921,
    name: 'Squid Ink Ravioli',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/86/Squid_Ink_Ravioli.png',
    wiki: 'https://stardewvalleywiki.com/Squid_Ink_Ravioli',
  },
  {
    id: 194,
    name: 'Fried Egg',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png',
    wiki: 'https://stardewvalleywiki.com/Fried_Egg',
  },
  {
    id: 216,
    name: 'Bread',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Bread.png',
    wiki: 'https://stardewvalleywiki.com/Bread',
  },
  {
    id: 265,
    name: 'Seafoam Pudding',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/33/Seafoam_Pudding.png',
    wiki: 'https://stardewvalleywiki.com/Seafoam_Pudding',
  },
  {
    id: 203,
    name: 'Strange Bun',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/5e/Strange_Bun.png',
    wiki: 'https://stardewvalleywiki.com/Strange_Bun',
  },
]
const flowers = [
  {
    id: 402,
    name: 'Sweet Pea',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png',
    wiki: 'https://stardewvalleywiki.com/Sweet_Pea',
  },
  {
    id: 418,
    name: 'Crocus',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png',
    wiki: 'https://stardewvalleywiki.com/Crocus',
  },
  {
    id: 421,
    name: 'Sunflower',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png',
    wiki: 'https://stardewvalleywiki.com/Sunflower',
  },
  {
    id: 591,
    name: 'Tulip',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png',
    wiki: 'https://stardewvalleywiki.com/Tulip',
  },
  {
    id: 593,
    name: 'Summer Spangle',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9f/Summer_Spangle.png',
    wiki: 'https://stardewvalleywiki.com/Summer_Spangle',
  },
  {
    id: 595,
    name: 'Fairy Rose',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/5c/Fairy_Rose.png',
    wiki: 'https://stardewvalleywiki.com/Fairy_Rose',
  },
  {
    id: 597,
    name: 'Blue Jazz',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png',
    wiki: 'https://stardewvalleywiki.com/Blue_Jazz',
  },
  {
    id: 376,
    name: 'Poppy',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png',
    wiki: 'https://stardewvalleywiki.com/Poppy',
  },
]
const foragedMinerals = [
  {
    id: 80,
    name: 'Quartz',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png',
    wiki: 'https://stardewvalleywiki.com/Quartz',
  },
  {
    id: 86,
    name: 'Earth Crystal',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png',
    wiki: 'https://stardewvalleywiki.com/Earth_Crystal',
  },
  {
    id: 84,
    name: 'Frozen Tear',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png',
    wiki: 'https://stardewvalleywiki.com/Frozen_Tear',
  },
  {
    id: 82,
    name: 'Fire Quartz',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/5b/Fire_Quartz.png',
    wiki: 'https://stardewvalleywiki.com/Fire_Quartz',
  },
]
const fruitTreeFruits = [
  {
    id: 634,
    name: 'Apricot',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png',
    wiki: 'https://stardewvalleywiki.com/Apricot',
  },
  {
    id: 638,
    name: 'Cherry',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/20/Cherry.png',
    wiki: 'https://stardewvalleywiki.com/Cherry',
  },
  {
    id: 635,
    name: 'Orange',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png',
    wiki: 'https://stardewvalleywiki.com/Orange',
  },
  {
    id: 636,
    name: 'Peach',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png',
    wiki: 'https://stardewvalleywiki.com/Peach',
  },
  {
    id: 613,
    name: 'Apple',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png',
    wiki: 'https://stardewvalleywiki.com/Apple',
  },
  {
    id: 637,
    name: 'Pomegranate',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png',
    wiki: 'https://stardewvalleywiki.com/Pomegranate',
  },
  {
    id: 91,
    name: 'Banana',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/69/Banana.png',
    wiki: 'https://stardewvalleywiki.com/Banana',
  },
  {
    id: 834,
    name: 'Mango',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/38/Mango.png',
    wiki: 'https://stardewvalleywiki.com/Mango',
  },
]
const gems = [
  {
    id: 60,
    name: 'Emerald',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/6a/Emerald.png',
    wiki: 'https://stardewvalleywiki.com/Emerald',
  },
  {
    id: 62,
    name: 'Aquamarine',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png',
    wiki: 'https://stardewvalleywiki.com/Aquamarine',
  },
  {
    id: 64,
    name: 'Ruby',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a9/Ruby.png',
    wiki: 'https://stardewvalleywiki.com/Ruby',
  },
  {
    id: 66,
    name: 'Amethyst',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png',
    wiki: 'https://stardewvalleywiki.com/Amethyst',
  },
  {
    id: 68,
    name: 'Topaz',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a5/Topaz.png',
    wiki: 'https://stardewvalleywiki.com/Topaz',
  },
  {
    id: 70,
    name: 'Jade',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/7e/Jade.png',
    wiki: 'https://stardewvalleywiki.com/Jade',
  },
  {
    id: 72,
    name: 'Diamond',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png',
    wiki: 'https://stardewvalleywiki.com/Diamond',
  },
  {
    id: 74,
    name: 'Prismatic Shard',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/56/Prismatic_Shard.png',
    wiki: 'https://stardewvalleywiki.com/Prismatic_Shard',
  },
]
const vegetables = [
  {
    id: 259,
    name: 'Fiddlehead Fern',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/48/Fiddlehead_Fern.png',
    wiki: 'https://stardewvalleywiki.com/Fiddlehead_Fern',
  },
  {
    id: 300,
    name: 'Amaranth',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png',
    wiki: 'https://stardewvalleywiki.com/Amaranth',
  },
  {
    id: 274,
    name: 'Artichoke',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png',
    wiki: 'https://stardewvalleywiki.com/Artichoke',
  },
  {
    id: 284,
    name: 'Beet',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png',
    wiki: 'https://stardewvalleywiki.com/Beet',
  },
  {
    id: 278,
    name: 'Bok Choy',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png',
    wiki: 'https://stardewvalleywiki.com/Bok_Choy',
  },
  {
    id: 190,
    name: 'Cauliflower',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png',
    wiki: 'https://stardewvalleywiki.com/Cauliflower',
  },
  {
    id: 270,
    name: 'Corn',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png',
    wiki: 'https://stardewvalleywiki.com/Corn',
  },
  {
    id: 272,
    name: 'Eggplant',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png',
    wiki: 'https://stardewvalleywiki.com/Eggplant',
  },
  {
    id: 248,
    name: 'Garlic',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png',
    wiki: 'https://stardewvalleywiki.com/Garlic',
  },
  {
    id: 188,
    name: 'Green Bean',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png',
    wiki: 'https://stardewvalleywiki.com/Green_Bean',
  },
  {
    id: 250,
    name: 'Kale',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png',
    wiki: 'https://stardewvalleywiki.com/Kale',
  },
  {
    id: 24,
    name: 'Parsnip',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png',
    wiki: 'https://stardewvalleywiki.com/Parsnip',
  },
  {
    id: 192,
    name: 'Potato',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png',
    wiki: 'https://stardewvalleywiki.com/Potato',
  },
  {
    id: 276,
    name: 'Pumpkin',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png',
    wiki: 'https://stardewvalleywiki.com/Pumpkin',
  },
  {
    id: 264,
    name: 'Radish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png',
    wiki: 'https://stardewvalleywiki.com/Radish',
  },
  {
    id: 266,
    name: 'Red Cabbage',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png',
    wiki: 'https://stardewvalleywiki.com/Red_Cabbage',
  },
  {
    id: 830,
    name: 'Taro Root',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png',
    wiki: 'https://stardewvalleywiki.com/Taro_Root',
  },
  {
    id: 256,
    name: 'Tomato',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png',
    wiki: 'https://stardewvalleywiki.com/Tomato',
  },
  {
    id: 280,
    name: 'Yam',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png',
    wiki: 'https://stardewvalleywiki.com/Yam',
  },
  {
    id: 304,
    name: 'Hops',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/59/Hops.png',
    wiki: 'https://stardewvalleywiki.com/Hops',
  },
  {
    id: 815,
    name: 'Tea Leaves',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/5b/Tea_Leaves.png',
    wiki: 'https://stardewvalleywiki.com/Tea_Leaves',
  },
  {
    id: 262,
    name: 'Wheat',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png',
    wiki: 'https://stardewvalleywiki.com/Wheat',
  },
  {
    id: 271,
    name: 'Unmilled Rice',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/fe/Unmilled_Rice.png',
    wiki: 'https://stardewvalleywiki.com/Unmilled_Rice',
  },
]
const buildingMaterials = [
  {
    id: 2,
    name: 'Stone',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d4/Stone.png',
    wiki: 'https://stardewvalleywiki.com/Stone',
  },
  {
    id: 313,
    name: 'Weeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/30/Weeds_Composite.png',
    wiki: 'https://stardewvalleywiki.com/Weeds',
  },
  {
    id: 330,
    name: 'Clay',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a2/Clay.png',
    wiki: 'https://stardewvalleywiki.com/Clay',
  },
  {
    id: 787,
    name: 'Battery Pack',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/25/Battery_Pack.png',
    wiki: 'https://stardewvalleywiki.com/Battery_Pack',
  },
  {
    id: 771,
    name: 'Fiber',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/45/Fiber.png',
    wiki: 'https://stardewvalleywiki.com/Fiber',
  },
  {
    id: 709,
    name: 'Hardwood',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png',
    wiki: 'https://stardewvalleywiki.com/Hardwood',
  },
  {
    id: 388,
    name: 'Wood',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png',
    wiki: 'https://stardewvalleywiki.com/Wood',
  },
]
const artifacts = [
  {
    id: 96,
    name: 'Dwarf Scroll I',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/b9/Dwarf_Scroll_I.png',
    wiki: 'https://stardewvalleywiki.com/Dwarf_Scroll_I',
  },
  {
    id: 97,
    name: 'Dwarf Scroll II',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/ca/Dwarf_Scroll_II.png',
    wiki: 'https://stardewvalleywiki.com/Dwarf_Scroll_II',
  },
  {
    id: 98,
    name: 'Dwarf Scroll III',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ec/Dwarf_Scroll_III.png',
    wiki: 'https://stardewvalleywiki.com/Dwarf_Scroll_III',
  },
  {
    id: 99,
    name: 'Dwarf Scroll IV',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/85/Dwarf_Scroll_IV.png',
    wiki: 'https://stardewvalleywiki.com/Dwarf_Scroll_IV',
  },
  {
    id: 100,
    name: 'Chipped Amphora',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9e/Chipped_Amphora.png',
    wiki: 'https://stardewvalleywiki.com/Chipped_Amphora',
  },
  {
    id: 101,
    name: 'Arrowhead',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d1/Arrowhead.png',
    wiki: 'https://stardewvalleywiki.com/Arrowhead',
  },
  {
    id: 103,
    name: 'Ancient Doll',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c0/Ancient_Doll.png',
    wiki: 'https://stardewvalleywiki.com/Ancient_Doll',
  },
  {
    id: 104,
    name: 'Elvish Jewelry',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9d/Elvish_Jewelry.png',
    wiki: 'https://stardewvalleywiki.com/Elvish_Jewelry',
  },
  {
    id: 105,
    name: 'Chewing Stick',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d2/Chewing_Stick.png',
    wiki: 'https://stardewvalleywiki.com/Chewing_Stick',
  },
  {
    id: 106,
    name: 'Ornamental Fan',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/ab/Ornamental_Fan.png',
    wiki: 'https://stardewvalleywiki.com/Ornamental_Fan',
  },
  {
    id: 107,
    name: 'Dinosaur Egg',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/a1/Dinosaur_Egg.png',
    wiki: 'https://stardewvalleywiki.com/Dinosaur_Egg',
  },
  {
    id: 108,
    name: 'Rare Disc',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e0/Rare_Disc.png',
    wiki: 'https://stardewvalleywiki.com/Rare_Disc',
  },
  {
    id: 109,
    name: 'Ancient Sword',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/76/Ancient_Sword.png',
    wiki: 'https://stardewvalleywiki.com/Ancient_Sword',
  },
  {
    id: 110,
    name: 'Rusty Spoon',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/4e/Rusty_Spoon.png',
    wiki: 'https://stardewvalleywiki.com/Rusty_Spoon',
  },
  {
    id: 111,
    name: 'Rusty Spur',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/cd/Rusty_Spur.png',
    wiki: 'https://stardewvalleywiki.com/Rusty_Spur',
  },
  {
    id: 112,
    name: 'Rusty Cog',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/74/Rusty_Cog.png',
    wiki: 'https://stardewvalleywiki.com/Rusty_Cog',
  },
  {
    id: 113,
    name: 'Chicken Statue',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/af/Chicken_Statue.png',
    wiki: 'https://stardewvalleywiki.com/Chicken_Statue',
  },
  {
    id: 114,
    name: 'Ancient Seed',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/af/Ancient_Seed.png',
    wiki: 'https://stardewvalleywiki.com/Ancient_Seed',
  },
  {
    id: 115,
    name: 'Prehistoric Tool',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/26/Prehistoric_Tool.png',
    wiki: 'https://stardewvalleywiki.com/Prehistoric_Tool',
  },
  {
    id: 116,
    name: 'Dried Starfish',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/df/Dried_Starfish.png',
    wiki: 'https://stardewvalleywiki.com/Dried_Starfish',
  },
  {
    id: 117,
    name: 'Anchor',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/c0/Anchor.png',
    wiki: 'https://stardewvalleywiki.com/Anchor',
  },
  {
    id: 118,
    name: 'Glass Shards',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/b9/Glass_Shards.png',
    wiki: 'https://stardewvalleywiki.com/Glass_Shards',
  },
  {
    id: 119,
    name: 'Bone Flute',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/fc/Bone_Flute.png',
    wiki: 'https://stardewvalleywiki.com/Bone_Flute',
  },
  {
    id: 120,
    name: 'Prehistoric Handaxe',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/07/Prehistoric_Handaxe.png',
    wiki: 'https://stardewvalleywiki.com/Prehistoric_Handaxe',
  },
  {
    id: 121,
    name: 'Dwarvish Helm',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/8b/Dwarvish_Helm.png',
    wiki: 'https://stardewvalleywiki.com/Dwarvish_Helm',
  },
  {
    id: 122,
    name: 'Dwarf Gadget',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/58/Dwarf_Gadget.png',
    wiki: 'https://stardewvalleywiki.com/Dwarf_Gadget',
  },
  {
    id: 123,
    name: 'Ancient Drum',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/1e/Ancient_Drum.png',
    wiki: 'https://stardewvalleywiki.com/Ancient_Drum',
  },
  {
    id: 124,
    name: 'Golden Mask',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/7e/Golden_Mask.png',
    wiki: 'https://stardewvalleywiki.com/Golden_Mask',
  },
  {
    id: 125,
    name: 'Golden Relic',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/37/Golden_Relic.png',
    wiki: 'https://stardewvalleywiki.com/Golden_Relic',
  },
  {
    id: 126,
    name: 'Strange Doll',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ef/Strange_Doll_%28yellow%29.png',
    wiki: 'https://stardewvalleywiki.com/Strange_Doll_(yellow)',
  },
  {
    id: 127,
    name: 'Strange Doll',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/39/Strange_Doll_%28green%29.png',
    wiki: 'https://stardewvalleywiki.com/Strange_Doll_(green)',
  },
  {
    id: 579,
    name: 'Prehistoric Scapula',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ee/Prehistoric_Scapula.png',
    wiki: 'https://stardewvalleywiki.com/Prehistoric_Scapula',
  },
  {
    id: 580,
    name: 'Prehistoric Tibia',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/ce/Prehistoric_Tibia.png',
    wiki: 'https://stardewvalleywiki.com/Prehistoric_Tibia',
  },
  {
    id: 581,
    name: 'Prehistoric Skull',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/58/Prehistoric_Skull.png',
    wiki: 'https://stardewvalleywiki.com/Prehistoric_Skull',
  },
  {
    id: 582,
    name: 'Skeletal Hand',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/da/Skeletal_Hand.png',
    wiki: 'https://stardewvalleywiki.com/Skeletal_Hand',
  },
  {
    id: 583,
    name: 'Prehistoric Rib',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/62/Prehistoric_Rib.png',
    wiki: 'https://stardewvalleywiki.com/Prehistoric_Rib',
  },
  {
    id: 584,
    name: 'Prehistoric Vertebra',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e9/Prehistoric_Vertebra.png',
    wiki: 'https://stardewvalleywiki.com/Prehistoric_Vertebra',
  },
  {
    id: 585,
    name: 'Skeletal Tail',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/29/Skeletal_Tail.png',
    wiki: 'https://stardewvalleywiki.com/Skeletal_Tail',
  },
  {
    id: 586,
    name: 'Nautilus Fossil',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/3b/Nautilus_Fossil.png',
    wiki: 'https://stardewvalleywiki.com/Nautilus_Fossil',
  },
  {
    id: 587,
    name: 'Amphibian Fossil',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/cf/Amphibian_Fossil.png',
    wiki: 'https://stardewvalleywiki.com/Amphibian_Fossil',
  },
  {
    id: 588,
    name: 'Palm Fossil',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e1/Palm_Fossil.png',
    wiki: 'https://stardewvalleywiki.com/Palm_Fossil',
  },
  {
    id: 589,
    name: 'Trilobite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/2b/Trilobite.png',
    wiki: 'https://stardewvalleywiki.com/Trilobite',
  },
]
const bombs = [
  {
    id: 286,
    name: 'Cherry Bomb',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/1b/Cherry_Bomb.png',
    wiki: 'https://stardewvalleywiki.com/Cherry_Bomb',
  },
  {
    id: 287,
    name: 'Bomb',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/3b/Bomb.png',
    wiki: 'https://stardewvalleywiki.com/Bomb',
  },
  {
    id: 288,
    name: 'Mega Bomb',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/4f/Mega_Bomb.png',
    wiki: 'https://stardewvalleywiki.com/Mega_Bomb',
  },
]
const decor = [
  {
    id: 328,
    name: 'Wood Floor',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/58/Wood_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Wood_Floor',
  },
  {
    id: 840,
    name: 'Rustic Plank Floor',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9e/Rustic_Plank_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Rustic_Plank_Floor',
  },
  {
    id: 401,
    name: 'Straw Floor',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/85/Straw_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Straw_Floor',
  },
  {
    id: 331,
    name: 'Weathered Floor',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/2a/Weathered_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Weathered_Floor',
  },
  {
    id: 333,
    name: 'Crystal Floor',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/a4/Crystal_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Crystal_Floor',
  },
  {
    id: 329,
    name: 'Stone Floor',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/4e/Stone_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Stone_Floor',
  },
  {
    id: 841,
    name: 'Stone Walkway Floor',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/51/Stone_Walkway_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Stone_Walkway_Floor',
  },
  {
    id: 293,
    name: 'Brick Floor',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/29/Brick_Floor.png',
    wiki: 'https://stardewvalleywiki.com/Brick_Floor',
  },
  {
    id: 405,
    name: 'Wood Path',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e3/Wood_Path.png',
    wiki: 'https://stardewvalleywiki.com/Wood_Path',
  },
  {
    id: 407,
    name: 'Gravel Path',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/15/Gravel_Path.png',
    wiki: 'https://stardewvalleywiki.com/Gravel_Path',
  },
  {
    id: 409,
    name: 'Crystal Path',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9b/Crystal_Path.png',
    wiki: 'https://stardewvalleywiki.com/Crystal_Path',
  },
  {
    id: 411,
    name: 'Cobblestone Path',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/90/Cobblestone_Path.png',
    wiki: 'https://stardewvalleywiki.com/Cobblestone_Path',
  },
  {
    id: 415,
    name: 'Stepping Stone Path',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/1b/Stepping_Stone_Path.png',
    wiki: 'https://stardewvalleywiki.com/Stepping_Stone_Path',
  },
]
const fences = [
  {
    id: 325,
    name: 'Gate',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/94/Gate.png',
    wiki: 'https://stardewvalleywiki.com/Gate',
  },
  {
    id: 322,
    name: 'Wood Fence',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/1e/Wood_Fence.png',
    wiki: 'https://stardewvalleywiki.com/Wood_Fence',
  },
  {
    id: 323,
    name: 'Stone Fence',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/2d/Stone_Fence.png',
    wiki: 'https://stardewvalleywiki.com/Stone_Fence',
  },
  {
    id: 324,
    name: 'Iron Fence',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/9d/Iron_Fence.png',
    wiki: 'https://stardewvalleywiki.com/Iron_Fence',
  },
  {
    id: 298,
    name: 'Hardwood Fence',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/5c/Hardwood_Fence.png',
    wiki: 'https://stardewvalleywiki.com/Hardwood_Fence',
  },
]
const fertilizer = [
  {
    id: 368,
    name: 'Basic Fertilizer',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9b/Basic_Fertilizer.png',
    wiki: 'https://stardewvalleywiki.com/Basic_Fertilizer',
  },
  {
    id: 369,
    name: 'Quality Fertilizer',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/a0/Quality_Fertilizer.png',
    wiki: 'https://stardewvalleywiki.com/Quality_Fertilizer',
  },
  {
    id: 805,
    name: 'Tree Fertilizer',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/5d/Tree_Fertilizer.png',
    wiki: 'https://stardewvalleywiki.com/Tree_Fertilizer',
  },
  {
    id: 919,
    name: 'Deluxe Fertilizer',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/1c/Deluxe_Fertilizer.png',
    wiki: 'https://stardewvalleywiki.com/Deluxe_Fertilizer',
  },
  {
    id: 465,
    name: 'Speed-Gro',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/94/Speed-Gro.png',
    wiki: 'https://stardewvalleywiki.com/Speed-Gro',
  },
  {
    id: 466,
    name: 'Deluxe Speed-Gro',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/6d/Deluxe_Speed-Gro.png',
    wiki: 'https://stardewvalleywiki.com/Deluxe_Speed-Gro',
  },
  {
    id: 918,
    name: 'Hyper Speed-Gro',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/53/Hyper_Speed-Gro.png',
    wiki: 'https://stardewvalleywiki.com/Hyper_Speed-Gro',
  },
  {
    id: 370,
    name: 'Basic Retaining Soil',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c7/Basic_Retaining_Soil.png',
    wiki: 'https://stardewvalleywiki.com/Basic_Retaining_Soil',
  },
  {
    id: 371,
    name: 'Quality Retaining Soil',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/0a/Quality_Retaining_Soil.png',
    wiki: 'https://stardewvalleywiki.com/Quality_Retaining_Soil',
  },
  {
    id: 920,
    name: 'Deluxe Retaining Soil',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c3/Deluxe_Retaining_Soil.png',
    wiki: 'https://stardewvalleywiki.com/Deluxe_Retaining_Soil',
  },
]
const fish = [
  {
    id: 128,
    name: 'Pufferfish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png',
    wiki: 'https://stardewvalleywiki.com/Pufferfish',
  },
  {
    id: 129,
    name: 'Anchovy',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/79/Anchovy.png',
    wiki: 'https://stardewvalleywiki.com/Anchovy',
  },
  {
    id: 130,
    name: 'Tuna',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png',
    wiki: 'https://stardewvalleywiki.com/Tuna',
  },
  {
    id: 131,
    name: 'Sardine',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png',
    wiki: 'https://stardewvalleywiki.com/Sardine',
  },
  {
    id: 132,
    name: 'Bream',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png',
    wiki: 'https://stardewvalleywiki.com/Bream',
  },
  {
    id: 136,
    name: 'Largemouth Bass',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png',
    wiki: 'https://stardewvalleywiki.com/Largemouth_Bass',
  },
  {
    id: 137,
    name: 'Smallmouth Bass',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/a5/Smallmouth_Bass.png',
    wiki: 'https://stardewvalleywiki.com/Smallmouth_Bass',
  },
  {
    id: 138,
    name: 'Rainbow Trout',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/14/Rainbow_Trout.png',
    wiki: 'https://stardewvalleywiki.com/Rainbow_Trout',
  },
  {
    id: 139,
    name: 'Salmon',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e0/Salmon.png',
    wiki: 'https://stardewvalleywiki.com/Salmon',
  },
  {
    id: 140,
    name: 'Walleye',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png',
    wiki: 'https://stardewvalleywiki.com/Walleye',
  },
  {
    id: 141,
    name: 'Perch',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/43/Perch.png',
    wiki: 'https://stardewvalleywiki.com/Perch',
  },
  {
    id: 142,
    name: 'Carp',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png',
    wiki: 'https://stardewvalleywiki.com/Carp',
  },
  {
    id: 143,
    name: 'Catfish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png',
    wiki: 'https://stardewvalleywiki.com/Catfish',
  },
  {
    id: 144,
    name: 'Pike',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Pike.png',
    wiki: 'https://stardewvalleywiki.com/Pike',
  },
  {
    id: 145,
    name: 'Sunfish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png',
    wiki: 'https://stardewvalleywiki.com/Sunfish',
  },
  {
    id: 146,
    name: 'Red Mullet',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Red_Mullet.png',
    wiki: 'https://stardewvalleywiki.com/Red_Mullet',
  },
  {
    id: 147,
    name: 'Herring',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Herring.png',
    wiki: 'https://stardewvalleywiki.com/Herring',
  },
  {
    id: 148,
    name: 'Eel',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png',
    wiki: 'https://stardewvalleywiki.com/Eel',
  },
  {
    id: 149,
    name: 'Octopus',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/5a/Octopus.png',
    wiki: 'https://stardewvalleywiki.com/Octopus',
  },
  {
    id: 150,
    name: 'Red Snapper',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png',
    wiki: 'https://stardewvalleywiki.com/Red_Snapper',
  },
  {
    id: 151,
    name: 'Squid',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png',
    wiki: 'https://stardewvalleywiki.com/Squid',
  },
  {
    id: 154,
    name: 'Sea Cucumber',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/a9/Sea_Cucumber.png',
    wiki: 'https://stardewvalleywiki.com/Sea_Cucumber',
  },
  {
    id: 155,
    name: 'Super Cucumber',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d5/Super_Cucumber.png',
    wiki: 'https://stardewvalleywiki.com/Super_Cucumber',
  },
  {
    id: 156,
    name: 'Ghostfish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png',
    wiki: 'https://stardewvalleywiki.com/Ghostfish',
  },
  {
    id: 158,
    name: 'Stonefish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/03/Stonefish.png',
    wiki: 'https://stardewvalleywiki.com/Stonefish',
  },
  {
    id: 161,
    name: 'Ice Pip',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/63/Ice_Pip.png',
    wiki: 'https://stardewvalleywiki.com/Ice_Pip',
  },
  {
    id: 162,
    name: 'Lava Eel',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/12/Lava_Eel.png',
    wiki: 'https://stardewvalleywiki.com/Lava_Eel',
  },
  {
    id: 164,
    name: 'Sandfish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png',
    wiki: 'https://stardewvalleywiki.com/Sandfish',
  },
  {
    id: 165,
    name: 'Scorpion Carp',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/76/Scorpion_Carp.png',
    wiki: 'https://stardewvalleywiki.com/Scorpion_Carp',
  },
  {
    id: 267,
    name: 'Flounder',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/85/Flounder.png',
    wiki: 'https://stardewvalleywiki.com/Flounder',
  },
  {
    id: 269,
    name: 'Midnight Carp',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/33/Midnight_Carp.png',
    wiki: 'https://stardewvalleywiki.com/Midnight_Carp',
  },
  {
    id: 698,
    name: 'Sturgeon',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png',
    wiki: 'https://stardewvalleywiki.com/Sturgeon',
  },
  {
    id: 699,
    name: 'Tiger Trout',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png',
    wiki: 'https://stardewvalleywiki.com/Tiger_Trout',
  },
  {
    id: 700,
    name: 'Bullhead',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Bullhead.png',
    wiki: 'https://stardewvalleywiki.com/Bullhead',
  },
  {
    id: 701,
    name: 'Tilapia',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png',
    wiki: 'https://stardewvalleywiki.com/Tilapia',
  },
  {
    id: 702,
    name: 'Chub',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Chub.png',
    wiki: 'https://stardewvalleywiki.com/Chub',
  },
  {
    id: 704,
    name: 'Dorado',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/18/Dorado.png',
    wiki: 'https://stardewvalleywiki.com/Dorado',
  },
  {
    id: 705,
    name: 'Albacore',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Albacore.png',
    wiki: 'https://stardewvalleywiki.com/Albacore',
  },
  {
    id: 706,
    name: 'Shad',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png',
    wiki: 'https://stardewvalleywiki.com/Shad',
  },
  {
    id: 707,
    name: 'Lingcod',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/87/Lingcod.png',
    wiki: 'https://stardewvalleywiki.com/Lingcod',
  },
  {
    id: 708,
    name: 'Halibut',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/02/Halibut.png',
    wiki: 'https://stardewvalleywiki.com/Halibut',
  },
  {
    id: 734,
    name: 'Woodskip',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png',
    wiki: 'https://stardewvalleywiki.com/Woodskip',
  },
  {
    id: 795,
    name: 'Void Salmon',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/ad/Void_Salmon.png',
    wiki: 'https://stardewvalleywiki.com/Void_Salmon',
  },
  {
    id: 796,
    name: 'Slimejack',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/34/Slimejack.png',
    wiki: 'https://stardewvalleywiki.com/Slimejack',
  },
  {
    id: 836,
    name: 'Stingray',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/3a/Stingray.png',
    wiki: 'https://stardewvalleywiki.com/Stingray',
  },
  {
    id: 837,
    name: 'Lionfish',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/bb/Lionfish.png',
    wiki: 'https://stardewvalleywiki.com/Lionfish',
  },
  {
    id: 838,
    name: 'Blue Discus',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ee/Blue_Discus.png',
    wiki: 'https://stardewvalleywiki.com/Blue_Discus',
  },
  {
    id: 721,
    name: 'Snail',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png',
    wiki: 'https://stardewvalleywiki.com/Snail',
  },
]
const geodeMinerals = [
  {
    id: 562,
    name: 'Tigerseye',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/6e/Tigerseye.png',
    wiki: 'https://stardewvalleywiki.com/Tigerseye',
  },
  {
    id: 564,
    name: 'Opal',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/3c/Opal.png',
    wiki: 'https://stardewvalleywiki.com/Opal',
  },
  {
    id: 565,
    name: 'Fire Opal',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/60/Fire_Opal.png',
    wiki: 'https://stardewvalleywiki.com/Fire_Opal',
  },
  {
    id: 538,
    name: 'Alamite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/7c/Alamite.png',
    wiki: 'https://stardewvalleywiki.com/Alamite',
  },
  {
    id: 539,
    name: 'Bixite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/98/Bixite.png',
    wiki: 'https://stardewvalleywiki.com/Bixite',
  },
  {
    id: 540,
    name: 'Baryte',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/aa/Baryte.png',
    wiki: 'https://stardewvalleywiki.com/Baryte',
  },
  {
    id: 541,
    name: 'Aerinite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/6b/Aerinite.png',
    wiki: 'https://stardewvalleywiki.com/Aerinite',
  },
  {
    id: 542,
    name: 'Calcite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/97/Calcite.png',
    wiki: 'https://stardewvalleywiki.com/Calcite',
  },
  {
    id: 543,
    name: 'Dolomite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d4/Dolomite.png',
    wiki: 'https://stardewvalleywiki.com/Dolomite',
  },
  {
    id: 544,
    name: 'Esperite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/aa/Esperite.png',
    wiki: 'https://stardewvalleywiki.com/Esperite',
  },
  {
    id: 545,
    name: 'Fluorapatite',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/4a/Fluorapatite.png',
    wiki: 'https://stardewvalleywiki.com/Fluorapatite',
  },
  {
    id: 546,
    name: 'Geminite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/54/Geminite.png',
    wiki: 'https://stardewvalleywiki.com/Geminite',
  },
  {
    id: 547,
    name: 'Helvite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/3f/Helvite.png',
    wiki: 'https://stardewvalleywiki.com/Helvite',
  },
  {
    id: 548,
    name: 'Jamborite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Jamborite.png',
    wiki: 'https://stardewvalleywiki.com/Jamborite',
  },
  {
    id: 549,
    name: 'Jagoite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/c3/Jagoite.png',
    wiki: 'https://stardewvalleywiki.com/Jagoite',
  },
  {
    id: 550,
    name: 'Kyanite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e4/Kyanite.png',
    wiki: 'https://stardewvalleywiki.com/Kyanite',
  },
  {
    id: 551,
    name: 'Lunarite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/06/Lunarite.png',
    wiki: 'https://stardewvalleywiki.com/Lunarite',
  },
  {
    id: 552,
    name: 'Malachite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/ad/Malachite.png',
    wiki: 'https://stardewvalleywiki.com/Malachite',
  },
  {
    id: 553,
    name: 'Neptunite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Neptunite.png',
    wiki: 'https://stardewvalleywiki.com/Neptunite',
  },
  {
    id: 554,
    name: 'Lemon Stone',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/31/Lemon_Stone.png',
    wiki: 'https://stardewvalleywiki.com/Lemon_Stone',
  },
  {
    id: 555,
    name: 'Nekoite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/53/Nekoite.png',
    wiki: 'https://stardewvalleywiki.com/Nekoite',
  },
  {
    id: 556,
    name: 'Orpiment',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/41/Orpiment.png',
    wiki: 'https://stardewvalleywiki.com/Orpiment',
  },
  {
    id: 557,
    name: 'Petrified Slime',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/24/Petrified_Slime.png',
    wiki: 'https://stardewvalleywiki.com/Petrified_Slime',
  },
  {
    id: 558,
    name: 'Thunder Egg',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/14/Thunder_Egg.png',
    wiki: 'https://stardewvalleywiki.com/Thunder_Egg',
  },
  {
    id: 559,
    name: 'Pyrite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/64/Pyrite.png',
    wiki: 'https://stardewvalleywiki.com/Pyrite',
  },
  {
    id: 560,
    name: 'Ocean Stone',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/f1/Ocean_Stone.png',
    wiki: 'https://stardewvalleywiki.com/Ocean_Stone',
  },
  {
    id: 561,
    name: 'Ghost Crystal',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d0/Ghost_Crystal.png',
    wiki: 'https://stardewvalleywiki.com/Ghost_Crystal',
  },
  {
    id: 563,
    name: 'Jasper',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/9b/Jasper.png',
    wiki: 'https://stardewvalleywiki.com/Jasper',
  },
  {
    id: 566,
    name: 'Celestine',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/19/Celestine.png',
    wiki: 'https://stardewvalleywiki.com/Celestine',
  },
  {
    id: 567,
    name: 'Marble',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/82/Marble.png',
    wiki: 'https://stardewvalleywiki.com/Marble',
  },
  {
    id: 568,
    name: 'Sandstone',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d6/Sandstone.png',
    wiki: 'https://stardewvalleywiki.com/Sandstone',
  },
  {
    id: 569,
    name: 'Granite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/4a/Granite.png',
    wiki: 'https://stardewvalleywiki.com/Granite',
  },
  {
    id: 570,
    name: 'Basalt',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/22/Basalt.png',
    wiki: 'https://stardewvalleywiki.com/Basalt',
  },
  {
    id: 571,
    name: 'Limestone',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/4e/Limestone.png',
    wiki: 'https://stardewvalleywiki.com/Limestone',
  },
  {
    id: 572,
    name: 'Soapstone',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/81/Soapstone.png',
    wiki: 'https://stardewvalleywiki.com/Soapstone',
  },
  {
    id: 573,
    name: 'Hematite',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/b1/Hematite.png',
    wiki: 'https://stardewvalleywiki.com/Hematite',
  },
  {
    id: 574,
    name: 'Mudstone',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Mudstone.png',
    wiki: 'https://stardewvalleywiki.com/Mudstone',
  },
  {
    id: 575,
    name: 'Obsidian',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/23/Obsidian.png',
    wiki: 'https://stardewvalleywiki.com/Obsidian',
  },
  {
    id: 576,
    name: 'Slate',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/97/Slate.png',
    wiki: 'https://stardewvalleywiki.com/Slate',
  },
  {
    id: 577,
    name: 'Fairy Stone',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d9/Fairy_Stone.png',
    wiki: 'https://stardewvalleywiki.com/Fairy_Stone',
  },
  {
    id: 578,
    name: 'Star Shards',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/3f/Star_Shards.png',
    wiki: 'https://stardewvalleywiki.com/Star_Shards',
  },
]
const geodes = [
  {
    id: 535,
    name: 'Geode',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/43/Geode.png',
    wiki: 'https://stardewvalleywiki.com/Geode',
  },
  {
    id: 536,
    name: 'Frozen Geode',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/bf/Frozen_Geode.png',
    wiki: 'https://stardewvalleywiki.com/Frozen_Geode',
  },
  {
    id: 537,
    name: 'Magma Geode',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/89/Magma_Geode.png',
    wiki: 'https://stardewvalleywiki.com/Magma_Geode',
  },
  {
    id: 749,
    name: 'Omni Geode',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/09/Omni_Geode.png',
    wiki: 'https://stardewvalleywiki.com/Omni_Geode',
  },
]
const seeds = [
  {
    id: 495,
    name: 'Spring Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/39/Spring_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Spring_Seeds',
  },
  {
    id: 496,
    name: 'Summer Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c4/Summer_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Summer_Seeds',
  },
  {
    id: 497,
    name: 'Fall Seeds',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/55/Fall_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Fall_Seeds',
  },
  {
    id: 498,
    name: 'Winter Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/dd/Winter_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Winter_Seeds',
  },
  {
    id: 499,
    name: 'Ancient Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ec/Ancient_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Ancient_Seeds',
  },
  {
    id: 251,
    name: 'Tea Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/12/Tea_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Tea_Sapling',
  },
  {
    id: 885,
    name: 'Fiber Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/05/Fiber_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Fiber_Seeds',
  },
  {
    id: 292,
    name: 'Mahogany Seed',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/84/Mahogany_Seed.png',
    wiki: 'https://stardewvalleywiki.com/Mahogany_Seed',
  },
  {
    id: 299,
    name: 'Amaranth Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/ca/Amaranth_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Amaranth_Seeds',
  },
  {
    id: 310,
    name: 'Maple Seed',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/36/Maple_Seed.png',
    wiki: 'https://stardewvalleywiki.com/Maple_Seed',
  },
  {
    id: 347,
    name: 'Rare Seed',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/5b/Rare_Seed.png',
    wiki: 'https://stardewvalleywiki.com/Rare_Seed',
  },
  {
    id: 425,
    name: 'Fairy Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/8e/Fairy_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Fairy_Seeds',
  },
  {
    id: 429,
    name: 'Jazz Seeds',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/95/Jazz_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Jazz_Seeds',
  },
  {
    id: 431,
    name: 'Sunflower Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/1f/Sunflower_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Sunflower_Seeds',
  },
  {
    id: 453,
    name: 'Poppy Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/a2/Poppy_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Poppy_Seeds',
  },
  {
    id: 455,
    name: 'Spangle Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/85/Spangle_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Spangle_Seeds',
  },
  {
    id: 472,
    name: 'Parsnip Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d3/Parsnip_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Parsnip_Seeds',
  },
  {
    id: 474,
    name: 'Cauliflower Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/bb/Cauliflower_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Cauliflower_Seeds',
  },
  {
    id: 475,
    name: 'Potato Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/44/Potato_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Potato_Seeds',
  },
  {
    id: 476,
    name: 'Garlic Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d5/Garlic_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Garlic_Seeds',
  },
  {
    id: 477,
    name: 'Kale Seeds',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/00/Kale_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Kale_Seeds',
  },
  {
    id: 478,
    name: 'Rhubarb Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/47/Rhubarb_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Rhubarb_Seeds',
  },
  {
    id: 479,
    name: 'Melon Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/5e/Melon_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Melon_Seeds',
  },
  {
    id: 480,
    name: 'Tomato Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e3/Tomato_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Tomato_Seeds',
  },
  {
    id: 481,
    name: 'Blueberry Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/8/81/Blueberry_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Blueberry_Seeds',
  },
  {
    id: 482,
    name: 'Pepper Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/67/Pepper_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Pepper_Seeds',
  },
  {
    id: 483,
    name: 'Wheat Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/2b/Wheat_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Wheat_Seeds',
  },
  {
    id: 484,
    name: 'Radish Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/b1/Radish_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Radish_Seeds',
  },
  {
    id: 485,
    name: 'Red Cabbage Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ec/Red_Cabbage_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Red_Cabbage_Seeds',
  },
  {
    id: 486,
    name: 'Starfruit Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e0/Starfruit_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Starfruit_Seeds',
  },
  {
    id: 487,
    name: 'Corn Seeds',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d1/Corn_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Corn_Seeds',
  },
  {
    id: 488,
    name: 'Eggplant Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/f9/Eggplant_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Eggplant_Seeds',
  },
  {
    id: 489,
    name: 'Artichoke Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/71/Artichoke_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Artichoke_Seeds',
  },
  {
    id: 490,
    name: 'Pumpkin Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/99/Pumpkin_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Pumpkin_Seeds',
  },
  {
    id: 491,
    name: 'Bok Choy Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/21/Bok_Choy_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Bok_Choy_Seeds',
  },
  {
    id: 492,
    name: 'Yam Seeds',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e9/Yam_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Yam_Seeds',
  },
  {
    id: 493,
    name: 'Cranberry Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/ec/Cranberry_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Cranberry_Seeds',
  },
  {
    id: 494,
    name: 'Beet Seeds',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Beet_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Beet_Seeds',
  },
  {
    id: 745,
    name: 'Strawberry Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/f2/Strawberry_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Strawberry_Seeds',
  },
  {
    id: 770,
    name: 'Mixed Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/2e/Mixed_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Mixed_Seeds',
  },
  {
    id: 802,
    name: 'Cactus Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/09/Cactus_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Cactus_Seeds',
  },
  {
    id: 833,
    name: 'Pineapple Seeds',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/17/Pineapple_Seeds.png',
    wiki: 'https://stardewvalleywiki.com/Pineapple_Seeds',
  },
  {
    id: 891,
    name: 'Mushroom Tree Seed',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/d4/Mushroom_Tree_Seed.png',
    wiki: 'https://stardewvalleywiki.com/Mushroom_Tree_Seed',
  },
  {
    id: 69,
    name: 'Banana Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/69/Banana_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Banana_Sapling',
  },
  {
    id: 628,
    name: 'Cherry Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/22/Cherry_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Cherry_Sapling',
  },
  {
    id: 629,
    name: 'Apricot Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/9d/Apricot_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Apricot_Sapling',
  },
  {
    id: 630,
    name: 'Orange Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/08/Orange_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Orange_Sapling',
  },
  {
    id: 631,
    name: 'Peach Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e3/Peach_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Peach_Sapling',
  },
  {
    id: 632,
    name: 'Pomegranate Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/10/Pomegranate_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Pomegranate_Sapling',
  },
  {
    id: 633,
    name: 'Apple Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/68/Apple_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Apple_Sapling',
  },
  {
    id: 835,
    name: 'Mango Sapling',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/b0/Mango_Sapling.png',
    wiki: 'https://stardewvalleywiki.com/Mango_Sapling',
  },
  {
    id: 309,
    name: 'Acorn',
    image: 'https://stardewvalleywiki.com/mediawiki/images/c/cd/Acorn.png',
    wiki: 'https://stardewvalleywiki.com/Acorn',
  },
  {
    id: 311,
    name: 'Pine Cone',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Pine_Cone.png',
    wiki: 'https://stardewvalleywiki.com/Pine_Cone',
  },
]
const sprinklers = [
  {
    id: 599,
    name: 'Sprinkler',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/08/Sprinkler.png',
    wiki: 'https://stardewvalleywiki.com/Sprinkler',
  },
  {
    id: 621,
    name: 'Quality Sprinkler',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/a/af/Quality_Sprinkler.png',
    wiki: 'https://stardewvalleywiki.com/Quality_Sprinkler',
  },
  {
    id: 645,
    name: 'Iridium Sprinkler',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/90/Iridium_Sprinkler.png',
    wiki: 'https://stardewvalleywiki.com/Iridium_Sprinkler',
  },
]
const tackle = [
  {
    id: 686,
    name: 'Spinner',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/7b/Spinner.png',
    wiki: 'https://stardewvalleywiki.com/Spinner',
  },
  {
    id: 687,
    name: 'Dressed Spinner',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e8/Dressed_Spinner.png',
    wiki: 'https://stardewvalleywiki.com/Dressed_Spinner',
  },
  {
    id: 694,
    name: 'Trap Bobber',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/d/da/Trap_Bobber.png',
    wiki: 'https://stardewvalleywiki.com/Trap_Bobber',
  },
  {
    id: 695,
    name: 'Cork Bobber',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/0b/Cork_Bobber.png',
    wiki: 'https://stardewvalleywiki.com/Cork_Bobber',
  },
  {
    id: 691,
    name: 'Barbed Hook',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/4/4f/Barbed_Hook.png',
    wiki: 'https://stardewvalleywiki.com/Barbed_Hook',
  },
  {
    id: 692,
    name: 'Lead Bobber',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/cb/Lead_Bobber.png',
    wiki: 'https://stardewvalleywiki.com/Lead_Bobber',
  },
  {
    id: 693,
    name: 'Treasure Hunter',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/79/Treasure_Hunter.png',
    wiki: 'https://stardewvalleywiki.com/Treasure_Hunter',
  },
  {
    id: 856,
    name: 'Curiosity Lure',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/26/Curiosity_Lure.png',
    wiki: 'https://stardewvalleywiki.com/Curiosity_Lure',
  },
  {
    id: 877,
    name: 'Quality Bobber',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/01/Quality_Bobber.png',
    wiki: 'https://stardewvalleywiki.com/Quality_Bobber',
  },
]
const minedMetalGoods = [
  {
    id: 881,
    name: 'Bone Fragment',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/97/Bone_Fragment.png',
    wiki: 'https://stardewvalleywiki.com/Bone_Fragment',
  },
  {
    id: 848,
    name: 'Cinder Shard',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/fd/Cinder_Shard.png',
    wiki: 'https://stardewvalleywiki.com/Cinder_Shard',
  },
  {
    id: 382,
    name: 'Coal',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a7/Coal.png',
    wiki: 'https://stardewvalleywiki.com/Coal',
  },
  {
    id: 334,
    name: 'Copper Bar',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Copper_Bar.png',
    wiki: 'https://stardewvalleywiki.com/Copper_Bar',
  },
  {
    id: 335,
    name: 'Iron Bar',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png',
    wiki: 'https://stardewvalleywiki.com/Iron_Bar',
  },
  {
    id: 336,
    name: 'Gold Bar',
    image: 'https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png',
    wiki: 'https://stardewvalleywiki.com/Gold_Bar',
  },
  {
    id: 337,
    name: 'Iridium Bar',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c4/Iridium_Bar.png',
    wiki: 'https://stardewvalleywiki.com/Iridium_Bar',
  },
  {
    id: 384,
    name: 'Gold Ore',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f7/Gold_Ore.png',
    wiki: 'https://stardewvalleywiki.com/Gold_Ore',
  },
  {
    id: 386,
    name: 'Iridium Ore',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e9/Iridium_Ore.png',
    wiki: 'https://stardewvalleywiki.com/Iridium_Ore',
  },
  {
    id: 338,
    name: 'Refined Quartz',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/9/98/Refined_Quartz.png',
    wiki: 'https://stardewvalleywiki.com/Refined_Quartz',
  },
]
const bait = [
  {
    id: 685,
    name: 'Bait',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/ff/Bait.png',
    wiki: 'https://stardewvalleywiki.com/Bait_(item)',
  },
  {
    id: 908,
    name: 'Magic Bait',
    image: 'https://stardewvalleywiki.com/mediawiki/images/5/58/Magic_Bait.png',
    wiki: 'https://stardewvalleywiki.com/Magic_Bait',
  },
  {
    id: 774,
    name: 'Wild Bait',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/da/Wild_Bait.png',
    wiki: 'https://stardewvalleywiki.com/Wild_Bait',
  },
  {
    id: 703,
    name: 'Magnet',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/8c/Magnet.png',
    wiki: 'https://stardewvalleywiki.com/Magnet',
  },
]
const fossils = [
  {
    id: 820,
    name: 'Fossilized Skull',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/72/Fossilized_Skull.png',
    wiki: 'https://stardewvalleywiki.com/Fossilized_Skull',
  },
  {
    id: 821,
    name: 'Fossilized Spine',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/5/5c/Fossilized_Spine.png',
    wiki: 'https://stardewvalleywiki.com/Fossilized_Spine',
  },
  {
    id: 822,
    name: 'Fossilized Tail',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/3/3a/Fossilized_Tail.png',
    wiki: 'https://stardewvalleywiki.com/Fossilized_Tail',
  },
  {
    id: 823,
    name: 'Fossilized Leg',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/0/09/Fossilized_Leg.png',
    wiki: 'https://stardewvalleywiki.com/Fossilized_Leg',
  },
  {
    id: 824,
    name: 'Fossilized Ribs',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/fc/Fossilized_Ribs.png',
    wiki: 'https://stardewvalleywiki.com/Fossilized_Ribs',
  },
  {
    id: 825,
    name: 'Snake Skull',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/2/25/Snake_Skull.png',
    wiki: 'https://stardewvalleywiki.com/Snake_Skull',
  },
  {
    id: 826,
    name: 'Snake Vertebrae',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/7e/Snake_Vertebrae.png',
    wiki: 'https://stardewvalleywiki.com/Snake_Vertebrae',
  },
  {
    id: 827,
    name: 'Mummified Bat',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/6/6f/Mummified_Bat.png',
    wiki: 'https://stardewvalleywiki.com/Mummified_Bat',
  },
  {
    id: 828,
    name: 'Mummified Frog',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/e/e9/Mummified_Frog.png',
    wiki: 'https://stardewvalleywiki.com/Mummified_Frog',
  },
]
const monsterLoot = [
  {
    id: 766,
    name: 'Slime',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/38/Slime.png',
    wiki: 'https://stardewvalleywiki.com/Slime',
  },
  {
    id: 684,
    name: 'Bug Meat',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/b6/Bug_Meat.png',
    wiki: 'https://stardewvalleywiki.com/Bug_Meat',
  },
  {
    id: 767,
    name: 'Bat Wing',
    image: 'https://stardewvalleywiki.com/mediawiki/images/3/35/Bat_Wing.png',
    wiki: 'https://stardewvalleywiki.com/Bat_Wing',
  },
  {
    id: 768,
    name: 'Solar Essence',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/f/f4/Solar_Essence.png',
    wiki: 'https://stardewvalleywiki.com/Solar_Essence',
  },
  {
    id: 769,
    name: 'Void Essence',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/1/1f/Void_Essence.png',
    wiki: 'https://stardewvalleywiki.com/Void_Essence',
  },
]
const trash = [
  {
    id: 167,
    name: 'Joja Cola',
    image: 'https://stardewvalleywiki.com/mediawiki/images/d/d5/Joja_Cola.png',
    wiki: 'https://stardewvalleywiki.com/Joja_Cola',
  },
  {
    id: 168,
    name: 'Trash',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/7c/Trash_%28item%29.png',
    wiki: 'https://stardewvalleywiki.com/Trash_(item)',
  },
  {
    id: 169,
    name: 'Driftwood',
    image: 'https://stardewvalleywiki.com/mediawiki/images/6/63/Driftwood.png',
    wiki: 'https://stardewvalleywiki.com/Driftwood',
  },
  {
    id: 170,
    name: 'Broken Glasses',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/b/b5/Broken_Glasses.png',
    wiki: 'https://stardewvalleywiki.com/Broken_Glasses',
  },
  {
    id: 171,
    name: 'Broken CD',
    image: 'https://stardewvalleywiki.com/mediawiki/images/7/79/Broken_CD.png',
    wiki: 'https://stardewvalleywiki.com/Broken_CD',
  },
  {
    id: 172,
    name: 'Soggy Newspaper',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/c/c0/Soggy_Newspaper.png',
    wiki: 'https://stardewvalleywiki.com/Soggy_Newspaper',
  },
  {
    id: 747,
    name: 'Rotten Plant',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/7e/Rotten_Plant.png',
    wiki: 'https://stardewvalleywiki.com/Rotten_Plant',
  },
  {
    id: 748,
    name: 'Rotten Plant',
    image:
      'https://stardewvalleywiki.com/mediawiki/images/7/7e/Rotten_Plant.png',
    wiki: 'https://stardewvalleywiki.com/Rotten_Plant',
  },
]

// These items are not linked in any category on the Frienship Wiki page, but mentioned directly
const unsorted = {
  loved: [
    {
      id: 373,
      name: 'Golden Pumpkin',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/4/46/Golden_Pumpkin.png',
      wiki: 'https://stardewvalleywiki.com/Golden_Pumpkin',
    },
    {
      id: 279,
      name: 'Magic Rock Candy',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/2/25/Magic_Rock_Candy.png',
      wiki: 'https://stardewvalleywiki.com/Magic_Rock_Candy',
    },
    {
      id: 797,
      name: 'Pearl',
      image: 'https://stardewvalleywiki.com/mediawiki/images/7/73/Pearl.png',
      wiki: 'https://stardewvalleywiki.com/Pearl',
    },
    {
      id: 446,
      name: "Rabbit's Foot",
      image:
        'https://stardewvalleywiki.com/mediawiki/images/c/ca/Rabbit%27s_Foot.png',
      wiki: 'https://stardewvalleywiki.com/Rabbit%27s_Foot',
    },
  ],
  liked: [
    {
      id: 773,
      name: 'Life Elixir',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/6/6e/Life_Elixir.png',
      wiki: 'https://stardewvalleywiki.com/Life_Elixir',
    },
    {
      id: 724,
      name: 'Maple Syrup',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png',
      wiki: 'https://stardewvalleywiki.com/Maple_Syrup',
    },
  ],
  neutral: [
    {
      id: 417,
      name: 'Sweet Gem Berry',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png',
      wiki: 'https://stardewvalleywiki.com/Sweet_Gem_Berry',
    },
    {
      id: 392,
      name: 'Nautilus Shell',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/a/a4/Nautilus_Shell.png',
      wiki: 'https://stardewvalleywiki.com/Nautilus_Shell',
    },
    {
      id: 372,
      name: 'Clam',
      image: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png',
      wiki: 'https://stardewvalleywiki.com/Clam',
    },
    {
      id: 393,
      name: 'Coral',
      image: 'https://stardewvalleywiki.com/mediawiki/images/b/b1/Coral.png',
      wiki: 'https://stardewvalleywiki.com/Coral',
    },
    {
      id: 394,
      name: 'Rainbow Shell',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/3/3d/Rainbow_Shell.png',
      wiki: 'https://stardewvalleywiki.com/Rainbow_Shell',
    },
    {
      id: 812,
      name: 'Roe',
      image: 'https://stardewvalleywiki.com/mediawiki/images/5/56/Roe.png',
      wiki: 'https://stardewvalleywiki.com/Roe',
    },
    {
      id: 440,
      name: 'Wool',
      image: 'https://stardewvalleywiki.com/mediawiki/images/3/34/Wool.png',
      wiki: 'https://stardewvalleywiki.com/Wool',
    },
    {
      id: 444,
      name: 'Duck Feather',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png',
      wiki: 'https://stardewvalleywiki.com/Duck_Feather',
    },
    {
      id: 814,
      name: 'Squid Ink',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/a/ac/Squid_Ink.png',
      wiki: 'https://stardewvalleywiki.com/Squid_Ink',
    },
    {
      id: 430,
      name: 'Truffle',
      image: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Truffle.png',
      wiki: 'https://stardewvalleywiki.com/Truffle',
    },
  ],
  disliked: [
    {
      id: 78,
      name: 'Cave Carrot',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/3/34/Cave_Carrot.png',
      wiki: 'https://stardewvalleywiki.com/Cave_Carrot',
    },
    {
      id: 419,
      name: 'Vinegar',
      image: 'https://stardewvalleywiki.com/mediawiki/images/f/fe/Vinegar.png',
      wiki: 'https://stardewvalleywiki.com/Vinegar',
    },
    {
      id: 726,
      name: 'Pine Tar',
      image: 'https://stardewvalleywiki.com/mediawiki/images/c/ce/Pine_Tar.png',
      wiki: 'https://stardewvalleywiki.com/Pine_Tar',
    },
    {
      id: 399,
      name: 'Spring Onion',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/0/0c/Spring_Onion.png',
      wiki: 'https://stardewvalleywiki.com/Spring_Onion',
    },
    {
      id: 305,
      name: 'Void Egg',
      image: 'https://stardewvalleywiki.com/mediawiki/images/5/58/Void_Egg.png',
      wiki: 'https://stardewvalleywiki.com/Void_Egg',
    },
    {
      id: 403,
      name: 'Field Snack',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/1/1b/Field_Snack.png',
      wiki: 'https://stardewvalleywiki.com/Field_Snack',
    },
    {
      id: 889,
      name: 'Qi Fruit',
      image: 'https://stardewvalleywiki.com/mediawiki/images/b/b9/Qi_Fruit.png',
      wiki: 'https://stardewvalleywiki.com/Qi_Fruit',
    },
    {
      id: 341,
      name: 'Tea Set',
      image: 'https://stardewvalleywiki.com/mediawiki/images/9/9b/Tea_Set.png',
      wiki: 'https://stardewvalleywiki.com/Tea_Set',
    },
    {
      id: 746,
      name: 'Jack-O-Lantern',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/1/17/Jack-O-Lantern.png',
      wiki: 'https://stardewvalleywiki.com/Jack-O-Lantern',
    },
    {
      id: 423,
      name: 'Rice',
      image: 'https://stardewvalleywiki.com/mediawiki/images/d/da/Rice.png',
      wiki: 'https://stardewvalleywiki.com/Rice',
    },
    {
      id: 246,
      name: 'Wheat Flour',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/2/2c/Wheat_Flour.png',
      wiki: 'https://stardewvalleywiki.com/Wheat_Flour',
    },
    {
      id: 725,
      name: 'Oak Resin',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/4/40/Oak_Resin.png',
      wiki: 'https://stardewvalleywiki.com/Oak_Resin',
    },
  ],
  hated: [
    {
      id: 275,
      name: 'Artifact Trove',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/8/82/Artifact_Trove.png',
      wiki: 'https://stardewvalleywiki.com/Artifact_Trove',
    },
    {
      id: 178,
      name: 'Hay',
      image: 'https://stardewvalleywiki.com/mediawiki/images/a/aa/Hay.png',
      wiki: 'https://stardewvalleywiki.com/Hay',
    },
    {
      id: 152,
      name: 'Seaweed',
      image: 'https://stardewvalleywiki.com/mediawiki/images/1/13/Seaweed.png',
      wiki: 'https://stardewvalleywiki.com/Seaweed',
    },
    {
      id: 874,
      name: 'Bug Steak',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/b/b7/Bug_Steak.png',
      wiki: 'https://stardewvalleywiki.com/Bug_Steak',
    },
    {
      id: 378,
      name: 'Copper Ore',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/7/78/Copper_Ore.png',
      wiki: 'https://stardewvalleywiki.com/Copper_Ore',
    },
    {
      id: 380,
      name: 'Iron Ore',
      image: 'https://stardewvalleywiki.com/mediawiki/images/8/87/Iron_Ore.png',
      wiki: 'https://stardewvalleywiki.com/Iron_Ore',
    },
    {
      id: 879,
      name: 'Monster Musk',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/a/af/Monster_Musk.png',
      wiki: 'https://stardewvalleywiki.com/Monster_Musk',
    },
    {
      id: 710,
      name: 'Crab Pot',
      image: 'https://stardewvalleywiki.com/mediawiki/images/9/92/Crab_Pot.png',
      wiki: 'https://stardewvalleywiki.com/Crab_Pot',
    },
    {
      id: 351,
      name: 'Muscle Remedy',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/thumb/b/b2/Medical_Clinic.png/160px-Medical_Clinic.png',
      wiki: 'https://stardewvalleywiki.com/Muscle_Remedy',
    },
    {
      id: 852,
      name: 'Dragon Tooth',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/8/87/Dragon_Tooth.png',
      wiki: 'https://stardewvalleywiki.com/Dragon_Tooth',
    },
    {
      id: 772,
      name: 'Oil of Garlic',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/4/4b/Oil_of_Garlic.png',
      wiki: 'https://stardewvalleywiki.com/Oil_of_Garlic',
    },
    {
      id: 245,
      name: 'Sugar',
      image: 'https://stardewvalleywiki.com/mediawiki/images/a/a9/Sugar.png',
      wiki: 'https://stardewvalleywiki.com/Sugar',
    },
    {
      id: 463,
      name: 'Drum Block',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/d/dc/Drum_Block.png',
      wiki: 'https://stardewvalleywiki.com/Drum_Block',
    },
    {
      id: 93,
      name: 'Torch',
      image: 'https://stardewvalleywiki.com/mediawiki/images/b/b2/Torch.png',
      wiki: 'https://stardewvalleywiki.com/Torch',
    },
    {
      id: 349,
      name: 'Energy Tonic',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/thumb/b/b2/Medical_Clinic.png/160px-Medical_Clinic.png',
      wiki: 'https://stardewvalleywiki.com/Energy_Tonic',
    },
    {
      id: 917,
      name: 'Qi Seasoning',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/d/d2/Qi_Seasoning.png',
      wiki: 'https://stardewvalleywiki.com/Qi_Seasoning',
    },
    {
      id: 166,
      name: 'Treasure Chest',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/3/32/Treasure_Chest.png',
      wiki: 'https://stardewvalleywiki.com/Treasure_Chest',
    },
    {
      id: 909,
      name: 'Radioactive Ore',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/9/9f/Radioactive_Ore.png',
      wiki: 'https://stardewvalleywiki.com/Radioactive_Ore',
    },
    {
      id: 910,
      name: 'Radioactive Bar',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/7/7e/Radioactive_Bar.png',
      wiki: 'https://stardewvalleywiki.com/Radioactive_Bar',
    },
    {
      id: 441,
      name: 'Explosive Ammo',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/f/f3/Explosive_Ammo.png',
      wiki: 'https://stardewvalleywiki.com/Explosive_Ammo',
    },
    {
      id: 688,
      name: 'Warp Totem Farm',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/e/e4/Warp_Totem_Farm.png',
      wiki: 'https://stardewvalleywiki.com/Warp_Totem_Farm',
    },
    {
      id: 689,
      name: 'Warp Totem Mountains',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/d/d8/Warp_Totem_Mountains.png',
      wiki: 'https://stardewvalleywiki.com/Warp_Totem_Mountains',
    },
    {
      id: 690,
      name: 'Warp Totem Beach',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/2/2f/Warp_Totem_Beach.png',
      wiki: 'https://stardewvalleywiki.com/Warp_Totem_Beach',
    },
    {
      id: 886,
      name: 'Warp Totem: Island',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/b/b9/Warp_Totem_Island.png',
      wiki: 'https://stardewvalleywiki.com/Warp_Totem:_Island',
    },
    {
      id: 261,
      name: 'Warp Totem: Desert',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/8/83/Warp_Totem_Desert.png',
      wiki: 'https://stardewvalleywiki.com/Warp_Totem:_Desert',
    },
    {
      id: 157,
      name: 'White Algae',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/f/f7/White_Algae.png',
      wiki: 'https://stardewvalleywiki.com/White_Algae',
    },
    {
      id: 872,
      name: 'Fairy Dust',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/f/fc/Fairy_Dust.png',
      wiki: 'https://stardewvalleywiki.com/Fairy_Dust',
    },
    {
      id: 681,
      name: 'Rain Totem',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/f/f7/Rain_Totem.png',
      wiki: 'https://stardewvalleywiki.com/Rain_Totem',
    },
    {
      id: 464,
      name: 'Flute Block',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/3/31/Flute_Block.png',
      wiki: 'https://stardewvalleywiki.com/Flute_Block',
    },
    {
      id: 420,
      name: 'Red Mushroom',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png',
      wiki: 'https://stardewvalleywiki.com/Red_Mushroom',
    },
    {
      id: 297,
      name: 'Grass Starter',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/1/14/Grass_Starter.png',
      wiki: 'https://stardewvalleywiki.com/Grass_Starter',
    },
    {
      id: 92,
      name: 'Sap',
      image: 'https://stardewvalleywiki.com/mediawiki/images/7/73/Sap.png',
      wiki: 'https://stardewvalleywiki.com/Sap',
    },
    {
      id: 153,
      name: 'Green Algae',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/6/6d/Green_Algae.png',
      wiki: 'https://stardewvalleywiki.com/Green_Algae',
    },
    {
      id: 397,
      name: 'Sea Urchin',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/e/e7/Sea_Urchin.png',
      wiki: 'https://stardewvalleywiki.com/Sea_Urchin',
    },
    {
      id: 791,
      name: 'Golden Coconut',
      image:
        'https://stardewvalleywiki.com/mediawiki/images/c/ca/Golden_Coconut.png',
      wiki: 'https://stardewvalleywiki.com/Golden_Coconut',
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
    ...flowers.filter((item) => item.name !== 'Poppy'),
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
    ...unsorted.neutral,
    ...cooking.filter(
      (item) => item.name === 'Fried Egg' || item.name === 'Bread'
    ),
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
    ...fish.filter((item) => item.name !== 'Snail' && item.name !== 'Carp'),
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
    ...unsorted.hated,
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
  fish,
}
