import { Tea, TeaType, Brand } from './Tea.types'
import applecider from './../assets/applecider.jpg'
import bloodorange from './../assets/bloodorange.jpg'
import buddhasblend from './../assets/buddhasblend.jpg'
import cardamom from './../assets/cardamom.jpg'
import chocolatemacaroon from './../assets/chocolatemacaroon.jpg'
import chrysanthemum from './../assets/chrysanthemum.jpg'
import dragonfruitaloe from './../assets/dragonfruitaloe.jpg'
import earlgrey from './../assets/earlgrey.jpg'
import foreverfrosty from './../assets/foreverfrosty.jpg'
import forevernuts from './../assets/forevernuts.jpg'
import genmaicha from './../assets/genmaicha.jpg'
import greenteadecaf from './../assets/greenteadecaf.jpg'
import guangzhou from './../assets/guangzhou.jpg'
import hazelnutchocolate from './../assets/hazelnutchocolate.jpg'
import headachehalo from './../assets/headachehalo.jpg'
import irishbreakfast from './../assets/irishbreakfast.jpg'
import jasmine from './../assets/jasmine.jpg'
import jinglebellchai from './../assets/jinglebellchai.jpg'
import lychee from './../assets/lychee.jpg'
import mangoceylon from './../assets/mangoceylon.jpg'
import mochachai from './../assets/mochachai.jpg'
import mothers from './../assets/mothers.jpg'
import orangespice from './../assets/orangespice.jpg'
import passionfruit from './../assets/passionfruit.jpg'
import peachygreen from './../assets/peachygreen.jpg'
import perfectpeach from './../assets/perfectpeach.jpg'
import pomegranatewhite from './../assets/pomegranatewhite.jpg'
import pomegrateful from './../assets/pomegrateful.jpg'
import pugolden from './../assets/pugolden.jpg'
import pumpkinchai from './../assets/pumpkinchai.jpg'
import pumpkincheesecake from './../assets/pumpkincheesecake.jpg'
import raspberrycream from './../assets/raspberrycream.jpg'
import santassecret from './../assets/santassecret.jpg'
import sleepytime from './../assets/sleepytime.jpg'
import sleighride from './../assets/sleighride.jpg'
import vanillabean from './../assets/vanillabean.jpg'
import vanillachai from './../assets/vanillachai.jpg'
import whitepumpkin from './../assets/whitepumpkin.jpg'
import butterfly from './../assets/butterfly.jpg'
import peppermint from './../assets/peppermint.jpg'
import guavacadabra from './../assets/guavacadabra.jpg'
import cherryblossom from './../assets/cherryblossom.jpg'

export const teaData: Tea[] = [
  {
    img: forevernuts,
    name: 'Forever Nuts',
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Apple, Almond, Cinnamon, Beetroot, Artificial sweet roasted almond flavouring.',
    caffeine: 0,
    sealed: false,
  },
  {
    img: applecider,
    name: 'Apple Cider',
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Apple, Apple pomace (apple pomace, citric acid), Sweet blackberry leaves, Apple flavouring (artificial apple flavouring, concentrated apple juice), Artificial (vanilla, cream) flavouring',
    caffeine: 0,
    sealed: false,
  },
  {
    img: buddhasblend,
    name: "Buddha's Blend",
    brand: Brand.DavidsTea,
    type: [TeaType.White, TeaType.Green],
    ingredients:
      'White tea, Green tea, Jasmine pearls, Artificial peach flavouring, White hibiscus blossoms',
    caffeine: 2,
    sealed: false,
  },
  {
    img: sleighride,
    name: 'Sleigh Ride',
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Apple (apple, citric acid), Candied pineapple (pineapple, sugar), Hibiscus blossoms, Candied papaya (papaya, sugar), Beetroot, Cinnamon, Artificial (cinnamon, almond, apple) flavouring, Raisins, Coconut rasps, Roasted almonds (almonds, sugar), Popped rice',
    caffeine: 0,
    sealed: true,
  },
  {
    img: hazelnutchocolate,
    name: 'Hazelnut Chocolate',
    brand: Brand.DavidsTea,
    type: [TeaType.Puer],
    ingredients:
      "Pu'erh tea, Apple, Cocoa peel, Artificial chocolate hazelnut flavouring, Chocolate (sugar, cocoa mass, low fat cocoa powder, cocoa butter, sunflower lecithin), Brittle pieces (sugar, hazelnut), Cocoa pieces, Hazelnut, Stevia extract",
    caffeine: 2,
    sealed: false,
  },
  {
    img: santassecret,
    name: "Santa's Secret",
    brand: Brand.DavidsTea,
    type: [TeaType.Black],
    ingredients:
      'Black tea, Peppermint, Artificial (vanilla, cream) flavouring',
    caffeine: 3,
    sealed: true,
  },
  {
    img: jinglebellchai,
    name: 'Jingle Bell Chai',
    brand: Brand.DavidsTea,
    type: [TeaType.Black],
    ingredients:
      "Black tea, Ginger, Cinnamon, Cocoa nibs, White chocolate (sugar, cocoa butter, whole milk powder, chocolate liquor, whey powder, lactose, soy lecithin, vanilla), Pink peppercorns, Cardamom, Natural white chocolate flavouring, Snowflake candies (sugar, rice flour, vegetable oil (palm, palm kernel), corn starch, gum Arabic, cellulose gum, titanium dioxide, confectioner's glaze, carrageenan, soy lecithin, artificial flavour), Cloves, Cocoa powder, Stevia extract",
    caffeine: 1,
    sealed: true,
  },
  {
    img: headachehalo,
    name: 'Headache Halo',
    brand: Brand.DavidsTea,
    type: [TeaType.Rooibos],
    ingredients:
      'Rooibos, Nana mint, Lemongrass, Willow bark, Nettle leaves, Lavender, Passionflower, Vervain leaves, Rose petals, Mallow blossoms',
    caffeine: 0,
    sealed: false,
  },
  {
    img: chocolatemacaroon,
    name: 'Chocolate Macaroon',
    brand: Brand.DavidsTea,
    type: [TeaType.Black],
    ingredients:
      'Black tea, Toasted coconut (coconut, sugar, dextrose, salt), Coconut, Pecans, Cacao nibs, Rock cane sugar, Natural chocolate flavouring',
    caffeine: 3,
    sealed: false,
  },
  {
    img: guangzhou,
    name: 'Guangzhou Milk Oolong',
    brand: Brand.DavidsTea,
    type: [TeaType.Oolong],
    ingredients:
      'Chinese oolong tea from the Fujian province, Natural and artificial milk flavouring',
    caffeine: 2,
    sealed: false,
  },
  {
    img: dragonfruitaloe,
    name: 'Dragonfruit Aloe',
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Apple, Candied Pineapple, Hibiscus Blossoms, Coconut Chips, Dragonfruit, Candied Aloe Vera, Natural Berry Flavoring, Raspberries',
    caffeine: 0,
    sealed: false,
  },
  {
    img: mothers,
    name: "Mother's Little Helper",
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Organic peppermint, Organic lemongrass, Organic hibiscus*, Organic rosehips, Organic chamomile, Organic valerian root, Cornflowers, Natural peppermint flavouring',
    caffeine: 0,
    sealed: false,
  },
  {
    img: pumpkinchai,
    name: 'Pumpkin Chai',
    brand: Brand.DavidsTea,
    type: [TeaType.Black],
    ingredients:
      "Black tea, Cinnamon, Cloves, Caramel (condensed skimmed milk, sugar, glucose syrup, butter, sorbitol, mono and diglycerides), Carrot, Lemon peel, Pumpkin candies (sugar, rice flour, palm and palm kernel oil, corn starch, gum Arabic, cellulose gum, FD&C Yellow 6, confectioner's glaze, carrageenan, soy lecithin, artificial flavouring), Pumpkin flakes, Natural and artificial pumpkin spice flavouring",
    caffeine: 2,
    sealed: true,
  },
  {
    img: foreverfrosty,
    name: 'Forever Frosty Tea',
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Apple, Cinnamon, Almond, Artificial sweet roasted almond and natural orange flavouring, Beetroot, Rock cane sugar, Coconut, Orange peel, Clove',
    caffeine: 0,
    sealed: false,
  },
  {
    img: mochachai,
    name: 'Mocha Chai',
    brand: Brand.DavidsTea,
    type: [TeaType.Black],
    ingredients:
      '100% Elephant Approved black tea, Dark chocolate chips (sugar, chocolate liquor, cocoa butter, soy lecithin, vanilla bean), Roasted yerba mate, Cacao, Chocolate (sugar, Dutch cocoa, unsweetened chocolate, soy lecithin, vanilla), Dark coffee bean, Cinnamon, Clove, Ginger, Natural (cinnamon, clove, milk chocolate) flavouring.',
    caffeine: 2,
    sealed: true,
  },
  {
    img: cardamom,
    name: 'Cardamom French Toast',
    brand: Brand.DavidsTea,
    type: [TeaType.Black],
    ingredients:
      '50% Elephant Approved black tea, Cinnamon, Lemon peel, Coriander seeds, Cardamom, Sugar (coconut sugar, cane sugar), Natural and artificial (vanilla, cardamom) flavouring',
    caffeine: 2,
    sealed: true,
  },
  {
    img: whitepumpkin,
    name: 'White Pumpkin',
    brand: Brand.DavidsTea,
    type: [TeaType.White],
    ingredients:
      'Apple, Coconut rasp, White chocolate (sugar, cocoa butter, whole milk powder, sunflower lecithin), White tea, Carrot, Natural (pumpkin pie, white chocolate) flavouring, Bean peel, Pumpkin, Pumpkin seed, Sea buckthorn, Stevia extract',
    caffeine: 1,
    sealed: true,
  },
  {
    img: bloodorange,
    name: 'Blood Orange Boost',
    brand: Brand.DavidsTea,
    type: [TeaType.Green],
    ingredients:
      'Apple (apple, citric acid), Green tea, Hibiscus blossoms, Natural blood orange flavouring, Orange peel, Rosemary, Roasted chicory root, GABA green tea, Olive leaves, Stevia extract',
    caffeine: 1,
    sealed: false,
  },
  {
    img: pomegrateful,
    name: 'Pomegrateful',
    brand: Brand.DavidsTea,
    type: [TeaType.White],
    ingredients:
      'Apple (apple, citric acid), Pineapple (pineapple, sugar), Hibiscus blossoms, White tea, Natural (pomegranate, cream) flavouring, Pomegranate seeds and blossoms, Rose petals, Stevia extract',
    caffeine: 1,
    sealed: true,
  },
  {
    img: pugolden,
    name: 'Pu Golden',
    brand: Brand.Steepologie,
    type: [TeaType.Puer],
    ingredients:
      'pu-erh tea + golden chrysanthemum flowers + tangerine mandarin extract',
    caffeine: 2,
    sealed: false,
  },
  {
    img: pumpkincheesecake,
    name: 'Pumpkin Cheesecake',
    brand: Brand.Steepologie,
    type: [TeaType.Puer],
    ingredients:
      'shou puer + honeybush + cinnamon + licorice root + pumpkin pie flavor + cloves + vanilla crème flavor.',
    caffeine: 2,
    sealed: false,
  },
  {
    img: vanillabean,
    name: 'Vanilla Bean',
    brand: Brand.Steepologie,
    type: [TeaType.Black],
    ingredients:
      'pu-erh tea + golden chrysanthemum flowers + tangerine mandarin extract',
    caffeine: 3,
    sealed: false,
  },
  {
    img: jasmine,
    name: 'Jasmine in Bloom',
    brand: Brand.Steepologie,
    type: [TeaType.Green],
    ingredients: 'green tea + jasmine blooms',
    caffeine: 2,
    sealed: false,
  },
  {
    img: mangoceylon,
    name: 'Mango Ceylon',
    brand: Brand.TheRepublicOfTea,
    type: [TeaType.Black],
    ingredients:
      'Fine black tea from Sri Lanka, natural mango flavor, and sunflower blossoms',
    caffeine: 2,
    sealed: false,
  },
  {
    img: chrysanthemum,
    name: 'Imperial Chrysanthemum',
    brand: Brand.OrientalTeaRhyme,
    type: [TeaType.Herbal],
    ingredients: 'Imperial Chrysanthemum',
    caffeine: 0,
    sealed: false,
  },
  {
    img: lychee,
    name: 'Lychee',
    brand: Brand.TheTaoOfTea,
    type: [TeaType.Black],
    ingredients: 'Black Tea leaves, Natural Lychee essence',
    caffeine: 3,
    sealed: false,
  },
  {
    img: pomegranatewhite,
    name: 'Pomegranate White Tea',
    brand: Brand.TraderJoes,
    type: [TeaType.White],
    ingredients:
      'Organic White Tea, Organic Hibiscus Flowers, Organic Lemongrass, Natural Flavors, Organic Pomegranate Extract, Organic Natural Orange Flavor, Organic Natural Lemon with Other Natural Flavors',
    caffeine: 1,
    sealed: false,
  },
  {
    img: passionfruit,
    name: "Passion Fruit Na' Pali",
    brand: Brand.HawaiianIslands,
    type: [TeaType.Black],
    ingredients: 'Black Tea, Natural Flavoring',
    caffeine: 2,
    sealed: false,
  },
  {
    img: irishbreakfast,
    name: 'Irish Breakfast',
    brand: Brand.Twinings,
    type: [TeaType.Black],
    ingredients: 'Black Tea',
    caffeine: 3,
    sealed: false,
  },
  {
    img: earlgrey,
    name: 'Earl Grey',
    brand: Brand.Stash,
    type: [TeaType.Black],
    ingredients: 'Blended black teas, bergamot oil',
    caffeine: 3,
    sealed: false,
  },
  {
    img: peachygreen,
    name: 'Organic Peachy Green',
    brand: Brand.Tazo,
    type: [TeaType.Green],
    ingredients:
      'Organic Darjeeling Green and Organic Black Teas, Natural Flavors of Cucumber and Peach',
    caffeine: 2,
    sealed: false,
  },
  {
    img: vanillachai,
    name: 'Decaf Vanilla Chai',
    brand: Brand.Stash,
    type: [TeaType.Black],
    ingredients:
      'Naturally decaffeinated black tea, cinnamon, ginger root, allspice, natural vanilla flavor, clove',
    caffeine: 0,
    sealed: false,
  },
  {
    img: greenteadecaf,
    name: 'Decaf Green Tea',
    brand: Brand.Bigelow,
    type: [TeaType.Green],
    ingredients: 'decaffeinated green tea',
    caffeine: 0,
    sealed: false,
  },
  {
    img: orangespice,
    name: 'Orange & Spice',
    brand: Brand.Bigelow,
    type: [TeaType.Herbal],
    ingredients:
      'rose hips, spices, hibiscus, orange peel, roasted chicory, natural orange flavours (soy lecithin)',
    caffeine: 0,
    sealed: false,
  },
  {
    img: perfectpeach,
    name: 'Perfect Peach',
    brand: Brand.Bigelow,
    type: [TeaType.Herbal],
    ingredients:
      'Rose hips, hibiscus, peaches, natural and artificial peach flavor (soy lecithin), spices, orange peel, lemon peel, apples, roasted chicory',
    caffeine: 0,
    sealed: false,
  },
  {
    img: sleepytime,
    name: 'Sleepytime',
    brand: Brand.CelestialSeasonings,
    type: [TeaType.Herbal],
    ingredients:
      'Chamomile, Spearmint, Lemongrass, Tilia Flowers, Blackberry Leaves, Orange Blossoms, Hawthorn and Rosebuds',
    caffeine: 0,
    sealed: false,
  },
  {
    img: genmaicha,
    name: 'Genmaicha',
    brand: Brand.Itoen,
    type: [TeaType.Green],
    ingredients: 'Roasted Rice, Green Tea',
    caffeine: 1,
    sealed: false,
  },
  {
    img: raspberrycream,
    name: 'Raspberry Cream',
    brand: Brand.QueenMary,
    type: [TeaType.Green],
    ingredients:
      'Queens selected green tea,  pineapple cubes, apple cubes, flavoring, freeze-dried whole raspberries, freeze-dried raspberry pieces, pink cornflower blossoms',
    caffeine: 1,
    sealed: false,
  },
  {
    img: peppermint,
    name: 'Peppermint Amour',
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Organic peppermint leaves from Oregon and Washington State.',
    caffeine: 0,
    sealed: false,
  },
  {
    img: butterfly,
    name: 'Butterfly Pea Flower',
    brand: Brand.NorthEarth,
    type: [TeaType.Herbal],
    ingredients:
      'Butterfly pea flower',
    caffeine: 0,
    sealed: true,
  },
  {
    img: cherryblossom,
    name: 'Cherry Blossom',
    brand: Brand.DavidsTea,
    type: [TeaType.White, TeaType.Green],
    ingredients:
      'White tea, Green tea, Coconut rasps, Artificial cherry flavouring, Rose petal, Cherries',
    caffeine: 2,
    sealed: true,
  },
  {
    img: guavacadabra,
    name: 'Guava Cadabra',
    brand: Brand.DavidsTea,
    type: [TeaType.Herbal],
    ingredients:
      'Candied mango (mango, sugar), Apple, Hibiscus blossom, Elderberry, Guava crunchy (guava puree, concentrated apple puree with ascorbic acid, concentrated apple juice), Artificial (guava, mango) flavouring, Beetroot, Rosehip peel.',
    caffeine: 0,
    sealed: false,
  },
]
