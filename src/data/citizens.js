const citizens = [
  {
    name: 'Alex',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/7/73/Alex_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/0/04/Alex.png/80px-Alex.png',
    },
    birthday: {
      month: 'Summer',
      day: 13,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Elliott',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/6/6f/Elliott_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/b/bd/Elliott.png/80px-Elliott.png',
    },
    birthday: {
      month: 'Fall',
      day: 5,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Harvey',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/7/7a/Harvey_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Harvey.png/80px-Harvey.png',
    },
    birthday: {
      month: 'Winter',
      day: 14,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
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
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Sebastian',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/6/6a/Sebastian_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/a8/Sebastian.png/80px-Sebastian.png',
    },
    birthday: {
      month: 'Winter',
      day: 10,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Shane',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/b/b4/Shane_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/8b/Shane.png/80px-Shane.png',
    },
    birthday: {
      month: 'Spring',
      day: 20,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Abigail',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/6/63/Abigail_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/88/Abigail.png/80px-Abigail.png',
    },
    birthday: {
      month: 'Fall',
      day: 13,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Emily',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/c/c3/Emily_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/2/28/Emily.png/80px-Emily.png',
    },
    birthday: {
      month: 'Spring',
      day: 27,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Haley',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/f/f7/Haley_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Haley.png/80px-Haley.png',
    },
    birthday: {
      month: 'Spring',
      day: 14,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [74],
    },
  },
  {
    name: 'Leah',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/6/6e/Leah_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/e/e6/Leah.png/80px-Leah.png',
    },
    birthday: {
      month: 'Winter',
      day: 23,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Maru',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/2/23/Maru_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/f/f8/Maru.png/80px-Maru.png',
    },
    birthday: {
      month: 'Summer',
      day: 10,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Penny',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/b/bc/Penny_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/ab/Penny.png/80px-Penny.png',
    },
    birthday: {
      month: 'Fall',
      day: 2,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Caroline',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/d/d4/Caroline_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/87/Caroline.png/80px-Caroline.png',
    },
    birthday: {
      month: 'Winter',
      day: 7,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Clint',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/7/74/Clint_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Clint.png/80px-Clint.png',
    },
    birthday: {
      month: 'Winter',
      day: 26,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Demetrius',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/0/0b/Demetrius_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/f/f9/Demetrius.png/80px-Demetrius.png',
    },
    birthday: {
      month: 'Summer',
      day: 19,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Dwarf',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/0/08/Dwarf_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Dwarf.png/80px-Dwarf.png',
    },
    birthday: {
      month: 'Summer',
      day: 22,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Evelyn',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/5/54/Evelyn_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/8e/Evelyn.png/80px-Evelyn.png',
    },
    birthday: {
      month: 'Winter',
      day: 20,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'George',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/a/ad/George_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/7/78/George.png/80px-George.png',
    },
    birthday: {
      month: 'Fall',
      day: 24,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
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
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
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
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Jodi',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/f/f7/Jodi_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/4/41/Jodi.png/80px-Jodi.png',
    },
    birthday: {
      month: 'Fall',
      day: 11,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Kent',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/8/86/Kent_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/9/99/Kent.png/80px-Kent.png',
    },
    birthday: {
      month: 'Spring',
      day: 4,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Krobus',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/1/10/Krobus_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/7/71/Krobus.png/80px-Krobus.png',
    },
    birthday: {
      month: 'Winter',
      day: 1,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
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
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Lewis',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/b/b6/Lewis_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Lewis.png/80px-Lewis.png',
    },
    birthday: {
      month: 'Spring',
      day: 7,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Linus',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/d/db/Linus_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Linus.png/80px-Linus.png',
    },
    birthday: {
      month: 'Winter',
      day: 3,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Marnie',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/d/d4/Marnie_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/5/52/Marnie.png/80px-Marnie.png',
    },
    birthday: {
      month: 'Fall',
      day: 18,
    },
    gifts: {
      loves: [],
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
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Pierre',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/c/cf/Pierre_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/7/7e/Pierre.png/80px-Pierre.png',
    },
    birthday: {
      month: 'Spring',
      day: 26,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Robin',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/d/d1/Robin_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Robin.png/80px-Robin.png',
    },
    birthday: {
      month: 'Fall',
      day: 21,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Sandy',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/7/7d/Sandy_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Sandy.png/80px-Sandy.png',
    },
    birthday: {
      month: 'Fall',
      day: 15,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Vincent',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/0/0b/Vincent_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Vincent.png/80px-Vincent.png',
    },
    birthday: {
      month: 'Spring',
      day: 10,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Willy',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/7/73/Willy_Icon.png',
      big: 'https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Willy.png/80px-Willy.png',
    },
    birthday: {
      month: 'Summer',
      day: 24,
    },
    gifts: {
      loves: [],
      likes: [],
      neutral: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    name: 'Wizard',
    image: {
      small:
        'https://stardewvalleywiki.com/mediawiki/images/e/e9/Wizard_Icon.png',
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
