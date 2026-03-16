import AppleCake from "../assets/photos/AppleCake.jpg";
import PadSeeEw from "../assets/photos/PadSeeEw.jpg";
import ChorizoEggSalad from "../assets/photos/ChorizoEggSalad.jpg";
import Karbonader from "../assets/photos/KarbonaderWithCaramelizedOnions.jpg";
import ChickenWings from "../assets/photos/ChickenWingsWIthCuminLemonGarlic.jpg";
import TonkatsuPork from "../assets/photos/TonkatsuPork.jpg";
import ChocolateRaspberryBrownies from "../assets/photos/ChocolateRaspberryBrownies.jpg";
import NasiLemak from "../assets/photos/NasiLemak.jpg";
import Shawarma from "../assets/photos/Shawarma.jpg";
import PorkSauerkrautGoulash from "../assets/photos/PorkSauerkrautGoulash.jpg";

const recipes = [
  {
    recipeId: 1,
    name: "Apple Cake",
    imageUrl: AppleCake,
    ingredients: [
      {
        ingredientId: 1,
        ingredientName: "Eggs",
        quantity: 4,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 2,
        ingredientName: "Sugar",
        quantity: 200,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 3,
        ingredientName: "Self-raising flour",
        quantity: 200,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 4,
        ingredientName: "Melted butter",
        quantity: 200,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 5,
        ingredientName: "Vanilla extract",
        quantity: 1,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 6,
        ingredientName: "Ground cinnamon",
        quantity: 1,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 7,
        ingredientName: "Apples",
        quantity: 3,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 8,
        ingredientName: "Salt",
        quantity: null,
        unit: "pinch",
        notes: null,
      },
      {
        ingredientId: 9,
        ingredientName: "Ground sugar",
        quantity: 1,
        unit: "Sprinkling",
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Preheat the oven to 180°C. (350˚F) Grease a cake pan and line it with baking paper."
      },
      {
        step: 2,
        description: "In a large bowl, break the four eggs with the sugar and beat until they have tripled in volume and become fluffy."
      },
      {
        step: 3,
        description: "Sift the self-rising baking flour and add it to your egg mixture. Fold this over, preserving as much air as possible. Add the melted (and slightly cooled) butter and mix until combined."
      },
      {
        step: 4,
        description: "Add cinnamon, pinch of salt and vanilla extract."
      },
      {
        step: 5,
        description: "Add the diced apple to the batter and gently fold them into the batter so that the apple pieces are evenly distributed. You can roll the apple pieces through some more cinnamon."
      },
      {
        step: 6,
        description: "Pour the batter into the prepared cake pan and smooth the top with a spatula."
      },
      {
        step: 7,
        description: "Place the apple slices on top of the batter and press lightly. Sprinkle optionally with some almond shavings."
      },
      {
        step: 8,
        description: "Bake the apple cake in the preheated oven for about 45-50 minutes, or until a wooden skewer comes out clean when inserted into the center of the cake."
      },
      {
        step: 9,
        description: "Remove the cake from the oven and let it cool in the mold for a few minutes. Then carefully remove the cake from the mold and let cool completely on a wire rack."
      },
      {
        step: 10,
        description: "Sprinkle the cooled apple cake with powdered sugar."
      }
    ],
    country: "Netherlands",
    type: "dessert"
  },
  {
    recipeId: 2,
    name: "Pad See Ew",
    imageUrl: PadSeeEw,
    ingredients: [
      {
        ingredientId: 10,
        ingredientName: "Rice noodles",
        quantity: 180,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 11,
        ingredientName: "Dark soy sauce",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 12,
        ingredientName: "Oyster sauce",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 13,
        ingredientName: "Soy sauce",
        quantity: 2,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 14,
        ingredientName: "White vinegar",
        quantity: 2,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 2,
        ingredientName: "Sugar",
        quantity: 2,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 15,
        ingredientName: "Water",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 16,
        ingredientName: "Peanut oil",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 17,
        ingredientName: "Garlic",
        quantity: 2,
        unit: "cloves",
        notes: null,
      },
      {
        ingredientId: 18,
        ingredientName: "Chicken",
        quantity: 1,
        unit: "cup",
        notes: null,
      },
      {
        ingredientId: 1,
        ingredientName: "Egg",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 19,
        ingredientName: "Chinese broccoli",
        quantity: 4,
        unit: "cups",
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Mix Sauce in small bowl."
      },
      {
        step: 2,
        description: "Mince garlic into wok with oil. Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden."
      },
      {
        step: 3,
        description: "Push to the side of the wok, crack egg in and scramble. Don't worry if it sticks to the bottom of the wok - it will char and which adds authentic flavour."
      },
      {
        step: 4,
        description: "Add noodles, Chinese broccoli leaves and sauce. Gently mix together until the noodles are stained dark and leaves are wilted. Serve immediately!"
      }
    ],
    country: "Thailand",
    type: "meal"
  },
  {
    recipeId: 3,
    name: "Chorizo & Soft-boiled Egg Salad",
    imageUrl: ChorizoEggSalad,
    ingredients: [
      {
        ingredientId: 20,
        ingredientName: "Potatoes",
        quantity: 500,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 1,
        ingredientName: "Eggs",
        quantity: 4,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 21,
        ingredientName: "Green beans",
        quantity: 225,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 22,
        ingredientName: "Chorizo",
        quantity: 225,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 17,
        ingredientName: "Garlic",
        quantity: 1,
        unit: "cloves",
        notes: "sliced"
      },
      {
        ingredientId: 23,
        ingredientName: "Sherry vinegar",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 24,
        ingredientName: "Parsley",
        quantity: 2,
        unit: "tbsp",
        notes: "chopped"
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Cook the potatoes in a large pan of boiling salted water for 12 mins, adding the eggs after 6 mins, and the beans for the final 2 mins. Drain everything and cool the eggs under cold running water."
      },
      {
        step: 2,
        description: "Meanwhile fry chorizo slices for 1-2 mins, until beginning to crisp. Remove from the pan with a slotted spoon and set aside, leaving the oil from the chorizo in the pan. Add the garlic to the pan and cook gently for 1 min."
      },
      {
        step: 3,
        description: "Remove the pan from the heat, stir in the vinegar and parsley, then toss with the potatoes, beans, chorizo and seasoning. Shell the eggs, cut into quarters and add to the salad."
      }
    ],
    country: "Spain",
    type: "meal"
  },
  {
    recipeId: 4,
    name: "Karbonader with Caramelized Onions",
    imageUrl: Karbonader,
    ingredients: [
      {
        ingredientId: 25,
        ingredientName: "Onion",
        quantity: 2,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 26,
        ingredientName: "Butter",
        quantity: 3,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 27,
        ingredientName: "Ground beef",
        quantity: 1,
        unit: "lb",
        notes: null,
      },
      {
        ingredientId: 8,
        ingredientName: "Salt",
        quantity: 0.5,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 28,
        ingredientName: "Black pepper",
        quantity: 0.5,
        unit: "tsp"
      },
      {
        ingredientId: 29,
        ingredientName: "Nutmeg",
        quantity: 0.5,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 30,
        ingredientName: "Cornstarch",
        quantity: 0.5,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 15,
        ingredientName: "Water",
        quantity: 50,
        unit: "ml",
        notes: null,
      }
    ],
    instructions: [
      {
        step: 1,
        description: "Grate half an onion and set aside. Slice the rest of the onions and fry in butter on low/medium heat until caramelized."
      },
      {
        step: 2,
        description: "In a bowl, mix together ground beef, grated onion, salt, pepper, nutmeg, potato/corn starch, and water."
      },
      {
        step: 3,
        description: "Form into a sausage and cut 6 patties. Using a knife make a light grid pattern in each patty."
      },
      {
        step: 4,
        description: "Brown both sides of the karbonader in butter on high heat, then turn down to low heat and fry for another 2 - 3 minutes."
      },
      {
        step: 5,
        description: "Serve the karbonader and onions with potatoes, stewed peas, and brown sauce for dinner, or on a slice of bread for lunch or a snack."
      }
    ],
    country: "Norway",
    type: "meal"
  },
  {
    recipeId: 5,
    name: "Chicken Wings with Cumin, Lemon & Garlic",
    imageUrl: ChickenWings,
    ingredients: [
      {
        ingredientId: 31,
        ingredientName: "Chicken wings",
        quantity: 12,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 17,
        ingredientName: "Garlic",
        quantity: 2,
        unit: "cloves",
        notes: "minced"
      },
      {
        ingredientId: 32,
        ingredientName: "Lemon",
        quantity: 1,
        unit: null,
        notes: "zest and juice"
      },
      {
        ingredientId: 33,
        ingredientName: "Cumin seeds",
        quantity: 1,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 34,
        ingredientName: "Olive oil",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 35,
        ingredientName: "Honey",
        quantity: 1,
        unit: "tbsp",
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Using a pair of sharp kitchen scissors, cut each wing at the knuckle into two pieces. Mix the garlic, lemon zest and juice, cumin and oil with plenty of seasoning, then tip into a dish with the chicken wings and toss to coat. Cover and put in the fridge to marinate for at least 1 hr, or overnight if you have time."
      },
      {
        step: 2,
        description: "Heat oven to 200C/180C fan/gas 6, or heat an outdoor barbecue. Bake the chicken wings on an oven tray for 45-50 mins until crisp, or barbecue for 20 mins, drizzling over the honey for the final 10 mins of each method. Serve on a platter with plenty of paper napkins. Fill small bowls with olives, pistachios or almonds, dates and pickled chillies and flatbreads to serve alongside, along with the dishes below."
      }
    ],
    country: "Turkey",
    type: "meal"
  },
  {
    recipeId: 6,
    name: "Tonkatsu Pork",
    imageUrl: TonkatsuPork,
    ingredients: [
      {
        ingredientId: 36,
        ingredientName: "Pork chops",
        quantity: 4,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 37,
        ingredientName: "Flour",
        quantity: 100,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 1,
        ingredientName: "Eggs",
        quantity: 2,
        unit: null,
        notes: "beaten"
      },
      {
        ingredientId: 37,
        ingredientName: "Breadcrumbs",
        quantity: 100,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 38,
        ingredientName: "Fry vegetable oil",
        quantity: 4,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 39,
        ingredientName: "Tomato ketchup",
        quantity: 2,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 40,
        ingredientName: "Worcestershire sauce",
        quantity: 2,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 12,
        ingredientName: "Oyster sauce",
        quantity: 1,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 2,
        ingredientName: "Sugar",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Remove the large piece of fat on the edge of each pork loin, then bash each of the loins between two pieces of baking parchment until around 1cm in thickness – you can do this using a meat tenderiser or a rolling pin. Once bashed, use your hands to reshape the meat to its original shape and thickness – this step will ensure the meat is as succulent as possible."
      },
      {
        step: 2,
        description: "Put the flour, eggs and panko breadcrumbs into three separate wide-rimmed bowls. Season the meat, then dip first in the flour, followed by the eggs, then the breadcrumbs."
      },
      {
        step: 3,
        description: "In a large frying or sauté pan, add enough oil to come 2cm up the side of the pan. Heat the oil to 180C – if you don’t have a thermometer, drop a bit of panko into the oil and if it sinks a little then starts to fry, the oil is ready. Add two pork chops and cook for 1 min 30 secs on each side, then remove and leave to rest on a wire rack for 5 mins. Repeat with the remaining pork chops."
      },
      {
        step: 4,
        description: "While the pork is resting, make the sauce by whisking the ingredients together, adding a splash of water if it’s particularly thick. Slice the tonkatsu and serve drizzled with the sauce."
      }
    ],
    country: "Japan",
    type: "meal"
  },
  {
    recipeId: 7,
    name: "Chocolate Raspberry Brownies",
    imageUrl: ChocolateRaspberryBrownies,
    ingredients: [
      {
        ingredientId: 41,
        ingredientName: "Dark chocolate",
        quantity: 200,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 42,
        ingredientName: "Milk chocolate",
        quantity: 100,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 43,
        ingredientName: "Salted butter",
        quantity: 250,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 44,
        ingredientName: "Light brown soft sugar",
        quantity: 400,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 1,
        ingredientName: "Eggs",
        quantity: 4,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 37,
        ingredientName: "Flour",
        quantity: 140,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 45,
        ingredientName: "Cocoa",
        quantity: 50,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 46,
        ingredientName: "Raspberries",
        quantity: 200,
        unit: "g",
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Heat oven to 180C/160C fan/gas 4. Line a 20 x 30cm baking tray tin with baking parchment. Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat."
      },
      {
        step: 2,
        description: "Stir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days."
      }
    ],
    country: "USA",
    type: "dessert"
  },
  {
    recipeId: 8,
    name: "Nasi Lemak",
    imageUrl: NasiLemak,
    ingredients: [
      {
        ingredientId: 47,
        ingredientName: "Coconut milk",
        quantity: 2,
        unit: "cups",
        notes: null,
      },
      {
        ingredientId: 15,
        ingredientName: "Water",
        quantity: 2,
        unit: "cups",
        notes: null,
      },
      {
        ingredientId: 48,
        ingredientName: "Ginger paste",
        quantity: 0.25,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 49,
        ingredientName: "Ginger",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 50,
        ingredientName: "Bay leaf",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 51,
        ingredientName: "Rice",
        quantity: 2,
        unit: "cups",
        notes: null,
      },
      {
        ingredientId: 1,
        ingredientName: "Eggs",
        quantity: 4,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 52,
        ingredientName: "Cucumber",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 53,
        ingredientName: "Peanuts",
        quantity: 1,
        unit: "cup",
        notes: null,
      },
      {
        ingredientId: 54,
        ingredientName: "Anchovy fillet",
        quantity: 113,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 55,
        ingredientName: "Shallots",
        quantity: 3,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 56,
        ingredientName: "Chili Powder",
        quantity: 2,
        unit: "tsp",
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done."
      },
      {
        step: 2,
        description: "Place eggs in a saucepan, and cover with cold water. Bring water to a boil, and immediately remove from heat. Cover, and let eggs stand in hot water for 10 to 12 minutes. Remove eggs from hot water, cool, peel and slice in half. Slice cucumber."
      },
      {
        step: 3,
        description: "Meanwhile, in a large skillet or wok, heat 1 cup vegetable oil over medium-high heat. Stir in peanuts and cook briefly, until lightly browned. Remove peanuts with a slotted spoon and place on paper towels to soak up excess grease. Return skillet to stove. Stir in the contents of one package anchovies; cook briefly, turning, until crisp. Remove with a slotted spoon and place on paper towels. Discard oil. Wipe out skillet."
      },
      {
        step: 4,
        description: "Heat 2 tablespoons oil in the skillet. Stir in the onion, garlic, and shallots; cook until fragrant, about 1 or 2 minutes. Mix in the chile paste, and cook for 10 minutes, stirring occasionally. If the chile paste is too dry, add a small amount of water. Stir in remaining anchovies; cook for 5 minutes. Stir in salt, sugar, and tamarind juice; simmer until sauce is thick, about 5 minutes."
      },
      {
        step: 5,
        description: "Serve the onion and garlic sauce over the warm rice, and top with peanuts, fried anchovies, cucumbers, and eggs."
      }
    ],
    country: "Malaysia",
    type: "meal"
  },
  {
    recipeId: 9,
    name: "Shawarma",
    imageUrl: Shawarma,
    ingredients: [
      {
        ingredientId: 57,
        ingredientName: "Chicken thighs",
        quantity: 1,
        unit: "kg",
        notes: null,
      },
      {
        ingredientId: 58,
        ingredientName: "Coriander",
        quantity: 1,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 59,
        ingredientName: "Cumin",
        quantity: 1,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 60,
        ingredientName: "Cardamom",
        quantity: 1,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 61,
        ingredientName: "Cayenne pepper",
        quantity: 1,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 62,
        ingredientName: "Paprika",
        quantity: 2,
        unit: "tsp",
        notes: null,
      },
      {
        ingredientId: 63,
        ingredientName: "Lemon juice",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 34,
        ingredientName: "Olive oil",
        quantity: 3,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 64,
        ingredientName: "Greek yogurt",
        quantity: 1,
        unit: "cup",
        notes: null,
      },
      {
        ingredientId: 65,
        ingredientName: "Lettuce",
        quantity: 1,
        unit: null,
        notes: "sliced"
      },
      {
        ingredientId: 66,
        ingredientName: "Tomato",
        quantity: 1,
        unit: null,
        notes: "sliced"
      },
      {
        ingredientId: 67,
        ingredientName: "Pita bread",
        quantity: 6,
        unit: null,
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Combine the marinade ingredients in a large ziplock bag (or bowl)."
      },
      {
        step: 2,
        description: "Add the chicken and use your hands to make sure each piece is coated. If using a ziplock bag, I find it convenient to close the bag then massage the bag to disperse the rub all over each chicken piece. Marinate orvernight or up to 24 hours."
      },
      {
        step: 3,
        description: "Combine the Yoghurt Sauce ingredients in a bowl and mix. Cover and put in the fridge until required (it will last for 3 days in the fridge)."
      },
      {
        step: 4,
        description: "Heat grill/BBQ (or large heavy based pan on stove) on medium high. You should not need to oil it because the marinade has oil in it and also thigh fillets have fat. But if you are worried then oil your hotplate/grill. (See notes for baking)"
      },
      {
        step: 5,
        description: "Place chicken on the grill and cook the first side for 4 to 5 minutes until nicely charred, then turn and cook the other side for 3 to 4 minutes (the 2nd side takes less time)."
      },
      {
        step: 6,
        description: "Remove chicken from the grill and cover loosely with foil. Set aside to rest for 5 minutes."
      },
      {
        step: 7,
        description: "To serve, slice chicken and pile onto platter alongside flatbreads, Salad and the Yoghurt Sauce. To make a wrap, get a piece of flatbread and smear with Yoghurt Sauce. Top with a bit of lettuce and tomato and Chicken Shawarma. Roll up and enjoy!"
      }
    ],
    country: "Egyption",
    type: "meal"
  },
  {
    recipeId: 10,
    name: "Pork and Sauerkraut Goulash",
    imageUrl: PorkSauerkrautGoulash,
    ingredients: [
      {
        ingredientId: 68,
        ingredientName: "Lard",
        quantity: 3,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 25,
        ingredientName: "Onions",
        quantity: 4,
        unit: null,
        notes: "chopped"
      },
      {
        ingredientId: 33,
        ingredientName: "Cumin seeds",
        quantity: 1,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 69,
        ingredientName: "Pork shoulder",
        quantity: 800,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 17,
        ingredientName: "Garlic",
        quantity: 4,
        unit: "cloves",
        notes: "crushed"
      },
      {
        ingredientId: 37,
        ingredientName: "Flour",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 62,
        ingredientName: "Paprika",
        quantity: 2,
        unit: "tbsp",
        notes: null,
      },
      {
        ingredientId: 70,
        ingredientName: "Beef stock",
        quantity: 1.5,
        unit: "l",
        notes: null,
      },
      {
        ingredientId: 50,
        ingredientName: "Bay leaves",
        quantity: 4,
        unit: null,
        notes: null,
      },
      {
        ingredientId: 71,
        ingredientName: "White sauerkraut",
        quantity: 400,
        unit: "g",
        notes: null,
      },
      {
        ingredientId: 72,
        ingredientName: "Whipping cream",
        quantity: 200,
        unit: "ml",
        notes: null,
      },
      {
        ingredientId: 73,
        ingredientName: "Sour cream",
        quantity: 4,
        unit: "tbsp",
        notes: null,
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Heat the lard in a saucepan over a medium heat and fry the finely chopped onion until golden, around 5-8 mins. Tip in the cumin and pork, and fry for 10 mins all over until browned. Add the garlic, season well and scatter over the flour. Cook for about a minute, then add the paprika and cook for 1 min more."
      },
      {
        step: 2,
        description: "Pour in half of the stock, add the bay leaves, and simmer with the lid on over a low heat for 30 mins."
      },
      {
        step: 3,
        description: "Add the sauerkraut, remaining stock and a drizzle of the sauerkraut pickling juices. Simmer with the lid for 30 mins, stirring occasionally, until the meat is tender. Stir in the cream and simmer for 5 mins to combine the flavours. Season to taste, the serve garnished with a spoonful of soured cream."
      },
    ],
    country: "Poland",
    type: "meal"
  }
];

export default recipes;
