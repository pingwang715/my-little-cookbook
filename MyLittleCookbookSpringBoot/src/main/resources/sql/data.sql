INSERT INTO recipes
(name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Apple Cake', '/photos/AppleCake.jpg', 'Netherlands', 'dessert', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name) VALUES
                                   ('Eggs'),
                                   ('Sugar'),
                                   ('Self-raising flour'),
                                   ('Melted butter'),
                                   ('Vanilla extract'),
                                   ('Ground cinnamon'),
                                   ('Apples'),
                                   ('Salt'),
                                   ('Ground sugar');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (1, 1, 4, NULL, NULL),
    (1, 2, 200, 'g', NULL),
    (1, 3, 200, 'g', NULL),
    (1, 4, 200, 'g', NULL),
    (1, 5, 1, 'tsp', NULL),
    (1, 6, 1, 'tsp', NULL),
    (1, 7, 3, NULL, NULL),
    (1, 8, NULL, 'tsp', NULL),
    (1, 9, 1, 'sprinkling', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (1, 1, 'Preheat the oven to 180°C. (350˚F) Grease a cake pan and line it with baking paper.'),
    (1, 2, 'n a large bowl, break the four eggs with the sugar and beat until they have tripled in volume and become fluffy.'),
    (1, 3, 'Sift the self-rising baking flour and add it to your egg mixture. Fold this over, preserving as much air as possible. Add the melted (and slightly cooled) butter and mix until combined.'),
    (1, 4, 'Add cinnamon, pinch of salt and vanilla extract.'),
    (1, 5, 'Add the diced apple to the batter and gently fold them into the batter so that the apple pieces are evenly distributed. You can roll the apple pieces through some more cinnamon.'),
    (1, 6, 'Pour the batter into the prepared cake pan and smooth the top with a spatula.'),
    (1, 7, 'Place the apple slices on top of the batter and press lightly. Sprinkle optionally with some almond shavings.'),
    (1, 8, 'Bake the apple cake in the preheated oven for about 45-50 minutes, or until a wooden skewer comes out clean when inserted into the center of the cake.'),
    (1, 9, 'Remove the cake from the oven and let it cool in the mold for a few minutes. Then carefully remove the cake from the mold and let cool completely on a wire rack.'),
    (1, 10, 'Sprinkle the cooled apple cake with powdered sugar.');

INSERT INTO recipes
(name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Pad See Ew', '/photos/PadSeeEw.jpg', 'Thailand', 'meal', current_timestamp, 'admin', NULL, NULL);

INSERT INTO ingredients (name) VALUES
                                   ( 'Rice noodles'),
                                   ( 'Dark soy sauce'),
                                   ('Oyster sauce'),
                                   ('Soy sauce'),
                                   ('White vinegar'),
                                   ('Water'),
                                   ('Peanut oil'),
                                   ('Garlic'),
                                   ('Chicken'),
                                   ('Chinese broccoli');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (2, 10, 180, 'g', NULL),
    (2, 11, 2, 'tbsp', NULL),
    (2, 12, 2, 'tbsp', NULL),
    (2, 13, 2, 'tsp', NULL),
    (2, 14, 2, 'tsp', NULL),
    (2, 2, 2, 'tsp', NULL),
    (2, 15, 2, 'tbsp', NULL),
    (2, 16, 2, 'tbsp', NULL),
    (2, 17, 2, 'cloves', NULL),
    (2, 18, 1, 'cup', NULL),
    (2, 1, 1, NULL, NULL),
    (2, 19, 4, 'cups', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (2, 1, 'Mix sauce in small bowl.'),
    (2, 2, 'Mince garlic into wok with oil. Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden.'),
    (2, 3, 'Push to the side of the wok, crack egg in and scramble. Do not worry if it sticks to the wok.'),
    (2, 4, 'Add noodles, Chinese broccoli leaves and sauce. Gently mix until noodles are dark and leaves wilted. Serve immediately.');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Chorizo & Soft-boiled Egg Salad', '/photos/ChorizoEggSalad.jpg', 'Spain', 'meal', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Potatoes'),
    ('Green beans'),
    ('Chorizo'),
    ('Sherry vinegar'),
    ('Parsley');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (3, 20, 500, 'g', NULL),
    (3, 1, 4, NULL, NULL),
    (3, 21, 225, 'g', NULL),
    (3, 22, 225, 'g', NULL),
    (3, 17, 1, 'clove', 'sliced'),
    (3, 23, 2, 'tbsp', NULL),
    (3, 24, 2, 'tbsp', 'chopped');

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (3, 1, 'Cook the potatoes in a large pan of boiling salted water for 12 mins, adding the eggs after 6 mins, and the beans for the final 2 mins. Drain everything and cool the eggs under cold running water.'),
    (3, 2, 'Meanwhile fry chorizo slices for 1-2 mins until beginning to crisp. Remove with a slotted spoon and set aside, leaving the oil in the pan. Add the garlic and cook gently for 1 min.'),
    (3, 3, 'Remove the pan from the heat, stir in the vinegar and parsley, then toss with the potatoes, beans, chorizo and seasoning. Shell the eggs, cut into quarters and add to the salad.');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Karbonader with Caramelized Onions', '/photos/KarbonaderWithCaramelizedOnions.jpg', 'Norway', 'meal', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Onion'),
    ('Butter'),
    ('Ground beef'),
    ('Black pepper'),
    ('Nutmeg'),
    ('Cornstarch');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (4, 25, 2, NULL, NULL),
    (4, 26, 3, 'tbsp', NULL),
    (4, 27, 1, 'lb', NULL),
    (4, 8, 0.5, 'tsp', NULL),
    (4, 28, 0.5, 'tsp', NULL),
    (4, 29, 0.5, 'tsp', NULL),
    (4, 30, 0.5, 'tsp', NULL),
    (4, 15, 50, 'ml', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (4, 1, 'Grate half an onion and set aside. Slice the rest of the onions and fry in butter on low/medium heat until caramelized.'),
    (4, 2, 'In a bowl, mix together ground beef, grated onion, salt, pepper, nutmeg, potato/corn starch, and water.'),
    (4, 3, 'Form into a sausage and cut 6 patties. Using a knife make a light grid pattern in each patty.'),
    (4, 4, 'Brown both sides of the karbonader in butter on high heat, then turn down to low heat and fry for another 2 - 3 minutes.'),
    (4, 5, 'Serve the karbonader and onions with potatoes, stewed peas, and brown sauce for dinner, or on a slice of bread for lunch or a snack.');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Chicken Wings with Cumin Lemon Garlic', '/photos/ChickenWingsWithCuminLemonGarlic.jpg', 'Turkey', 'meal', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Chicken wings'),
    ('Lemon'),
    ('Cumin seeds'),
    ('Olive oil'),
    ('Honey');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (5, 31, 12, NULL, NULL),
    (5, 17, 2, 'cloves', 'minced'),
    (5, 32, 1, null, 'zest and juice'),
    (5, 33, 1, 'tsp', NULL),
    (5, 34, 2, 'tbsp', NULL),
    (5, 35, 1, 'tbsp', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (5, 1, 'Using a pair of sharp kitchen scissors, cut each wing at the knuckle into two pieces. Mix the garlic, lemon zest and juice, cumin and oil with plenty of seasoning, then tip into a dish with the chicken wings and toss to coat. Cover and put in the fridge to marinate for at least 1 hr, or overnight if you have time.'),
    (5, 2, 'Heat oven to 200C/180C fan/gas 6, or heat an outdoor barbecue. Bake the chicken wings on an oven tray for 45-50 mins until crisp, or barbecue for 20 mins, drizzling over the honey for the final 10 mins of each method. Serve on a platter with plenty of paper napkins. Fill small bowls with olives, pistachios or almonds, dates and pickled chillies and flatbreads to serve alongside, along with the dishes below.');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Tonkatsu Pork', '/photos/TonkatsuPork.jpg', 'Japan', 'meal', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Pork chops'),
    ('Flour'),
    ('Breadcrumbs'),
    ('Fry vegetable oil'),
    ('Tomato ketchup'),
    ('Worcestershire sauce');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (6, 36, 4, NULL, NULL),
    (6, 37, 100, 'g', NULL),
    (6, 1, 2, null, 'beaten'),
    (6, 38, 100, 'g', NULL),
    (6, 39, 4, 'tbsp', NULL),
    (6, 40, 2, 'tsp', NULL),
    (6, 41, 2, 'tsp', NULL),
    (6, 12, 1, 'tsp', NULL),
    (6, 2, 2, 'tbsp', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (6, 1, 'Remove the large piece of fat on the edge of each pork loin, then bash each of the loins between two pieces of baking parchment until around 1cm in thickness – you can do this using a meat tenderiser or a rolling pin. Once bashed, use your hands to reshape the meat to its original shape and thickness – this step will ensure the meat is as succulent as possible.'),
    (6, 2, 'Put the flour, eggs and panko breadcrumbs into three separate wide-rimmed bowls. Season the meat, then dip first in the flour, followed by the eggs, then the breadcrumbs.'),
    (6, 3, 'In a large frying or sauté pan, add enough oil to come 2cm up the side of the pan. Heat the oil to 180C – if you don’t have a thermometer, drop a bit of panko into the oil and if it sinks a little then starts to fry, the oil is ready. Add two pork chops and cook for 1 min 30 secs on each side, then remove and leave to rest on a wire rack for 5 mins. Repeat with the remaining pork chops.'),
    (6, 4, 'While the pork is resting, make the sauce by whisking the ingredients together, adding a splash of water if it’s particularly thick. Slice the tonkatsu and serve drizzled with the sauce.');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Chocolate Raspberry Brownies', '/photos/ChocolateRaspberryBrownies.jpg', 'USA', 'dessert', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Dark chocolate'),
    ('Milk chocolate'),
    ('Salted butter'),
    ('Light brown soft sugar'),
    ('Cocoa'),
    ('Raspberries');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (7, 42, 200, 'g', NULL),
    (7, 43, 100, 'g', NULL),
    (7, 44, 250, 'g', NULL),
    (7, 45, 400, 'g', NULL),
    (7, 1, 4, NULL, NULL),
    (7, 37, 140, 'g', NULL),
    (7, 46, 50, 'g', NULL),
    (7, 47, 200, 'g', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (7, 1, 'Heat oven to 180C/160C fan/gas 4. Line a 20 x 30cm baking tray tin with baking parchment. Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat.'),
    (7, 2, 'Stir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days.');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Nasi Lemak', '/photos/NasiLemak.jpg', 'Malaysia', 'meal', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Coconut milk'),
    ('Ginger paste'),
    ('Ginger'),
    ('Bay leaf'),
    ('Rice'),
    ('Cucumber'),
    ('Peanuts'),
    ('Anchovy fillet'),
    ('Shallots'),
    ('Chili powder');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (8, 48, 2, 'cups', NULL),
    (8, 15, 2, 'cups', NULL),
    (8, 49, 0.25, 'tsp', NULL),
    (8, 50, 1, NULL, NULL),
    (8, 51, 1, NULL, NULL),
    (8, 52, 2, 'cups', NULL),
    (8, 1, 4, NULL, NULL),
    (8, 53, 1, NULL, NULL),
    (8, 54, 1, 'cup', NULL),
    (8, 55, 113, 'g', NULL),
    (8, 56, 3, NULL, NULL),
    (8, 57, 2, 'tsp', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (8, 1, 'In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done.'),
    (8, 2, 'Place eggs in a saucepan, and cover with cold water. Bring water to a boil, and immediately remove from heat. Cover, and let eggs stand in hot water for 10 to 12 minutes. Remove eggs from hot water, cool, peel and slice in half. Slice cucumber.'),
    (8, 3, 'Meanwhile, in a large skillet or wok, heat 1 cup vegetable oil over medium-high heat. Stir in peanuts and cook briefly, until lightly browned. Remove peanuts with a slotted spoon and place on paper towels to soak up excess grease. Return skillet to stove. Stir in the contents of one package anchovies; cook briefly, turning, until crisp. Remove with a slotted spoon and place on paper towels. Discard oil. Wipe out skillet.'),
    (8, 4, 'Heat 2 tablespoons oil in the skillet. Stir in the onion, garlic, and shallots; cook until fragrant, about 1 or 2 minutes. Mix in the chile paste, and cook for 10 minutes, stirring occasionally. If the chile paste is too dry, add a small amount of water. Stir in remaining anchovies; cook for 5 minutes. Stir in salt, sugar, and tamarind juice; simmer until sauce is thick, about 5 minutes'),
    (8, 5, 'Serve the onion and garlic sauce over the warm rice, and top with peanuts, fried anchovies, cucumbers, and eggs.');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Shawarma', '/photos/Shawarma.jpg', 'Egypt', 'meal', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Chicken thighs'),
    ('Coriander'),
    ('Cumin'),
    ('Cardamom'),
    ('Cayenne pepper'),
    ('Paprika'),
    ('Lemon juice'),
    ('Greek yogurt'),
    ('Lettuce'),
    ('Tomato'),
    ('Pita bread');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (9, 58, 1, 'kg', NULL),
    (9, 59, 1, 'tbsp', NULL),
    (9, 60, 1, 'tbsp', NULL),
    (9, 61, 1, 'tbsp', NULL),
    (9, 62, 1, 'tsp', NULL),
    (9, 63, 2, 'tsp', NULL),
    (9, 64, 2, 'tbsp', NULL),
    (9, 34, 3, 'tbsp', NULL),
    (9, 65, 1, 'cup', NULL),
    (9, 66, 1, 'head', NULL),
    (9, 67, 1, NULL, 'sliced'),
    (9, 68, 6, NULL, NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (9, 1, 'Combine the marinade ingredients in a large ziplock bag (or bowl).'),
    (9, 2, 'Add the chicken and use your hands to make sure each piece is coated. If using a ziplock bag, I find it convenient to close the bag then massage the bag to disperse the rub all over each chicken piece. Marinate orvernight or up to 24 hours.'),
    (9, 3, 'Combine the Yoghurt Sauce ingredients in a bowl and mix. Cover and put in the fridge until required (it will last for 3 days in the fridge).'),
    (9, 4, 'Heat grill/BBQ (or large heavy based pan on stove) on medium high. You should not need to oil it because the marinade has oil in it and also thigh fillets have fat. But if you are worried then oil your hotplate/grill. (See notes for baking)'),
    (9, 5, 'Place chicken on the grill and cook the first side for 4 to 5 minutes until nicely charred, then turn and cook the other side for 3 to 4 minutes (the 2nd side takes less time).'),
    (9, 6, 'Remove chicken from the grill and cover loosely with foil. Set aside to rest for 5 minutes.'),
    (9, 7, 'To serve, slice chicken and pile onto platter alongside flatbreads, Salad and the Yoghurt Sauce. To make a wrap, get a piece of flatbread and smear with Yoghurt Sauce. Top with a bit of lettuce and tomato and Chicken Shawarma. Roll up and enjoy!');

INSERT INTO recipes (name, image_url, country, type, created_at, created_by, updated_at, updated_by)
VALUES
    ('Pork and Sauerkraut Goulash', '/photos/PorkSauerkrautGoulash.jpg', 'Poland', 'meal', CURRENT_TIMESTAMP, 'admin', NULL, NULL);

INSERT INTO ingredients (name)
VALUES
    ('Lard'),
    ('Pork shoulder'),
    ('Beef stock'),
    ('White sauerkraut'),
    ('Whipping cream'),
    ('Sour cream');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
VALUES
    (10, 69, 3, 'tbsp', NULL),
    (10, 25, 4, null, 'chopped'),
    (10, 33, 1, 'tbsp', NULL),
    (10, 70, 800, 'g', NULL),
    (10, 17, 4, 'cloves', 'crushed'),
    (10, 37, 2,'tbsp', NULL),
    (10, 62, 2, 'tbsp', NULL),
    (10, 71, 1.5, 'l', NULL),
    (10, 50, 4, NULL, NULL),
    (10, 72, 400, 'g', NULL),
    (10, 73, 200, 'ml', NULL),
    (10, 74, 4, 'tbsp', NULL);

INSERT INTO instructions (recipe_id, step_number, description)
VALUES
    (10, 1, 'Heat the lard in a saucepan over a medium heat and fry the finely chopped onion until golden, around 5-8 mins. Tip in the cumin and pork, and fry for 10 mins all over until browned. Add the garlic, season well and scatter over the flour. Cook for about a minute, then add the paprika and cook for 1 min more.'),
    (10, 2, 'Pour in half of the stock, add the bay leaves, and simmer with the lid on over a low heat for 30 mins.'),
    (10, 3, 'Add the sauerkraut, remaining stock and a drizzle of the sauerkraut pickling juices. Simmer with the lid for 30 mins, stirring occasionally, until the meat is tender. Stir in the cream and simmer for 5 mins to combine the flavours. Season to taste, the serve garnished with a spoonful of soured cream.');