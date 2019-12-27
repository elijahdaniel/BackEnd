exports.seed = function(knex, Promise) {
  return knex('post').insert([
    {
      title: 'Caramel Cake',
      category: 'Dessert',
      imgURL: 'https://i.ibb.co/VDkFktV/caramel-cake-2.jpg',
      ingredients:
        'Eggs, Milk, Flour, Butter, Caramel, Baking soda, Heavy cream',
      instructions:
        'Preheat oven to 350 degrees. Mix all ingredients together. Place in cake pan. Stick into oven. Bring out of oven. Let it cool. Add caramel frosting.',
      description: 'Moist, delicious layer cake with caramel icing.',
      username: 'cakeKing',
      location: 'bakeb0$$123'
    },
    {
      title: 'Shrimp Alfredo',
      category: 'Entree',
      imgURL: 'https://i.ibb.co/Dw1f9nT/HT-Shrimp-Alfredo-103.png',
      ingredients:
        'Dried fettuccine pasta, Peeled raw shrimp, Kosher salt, Freshly ground black pepper, Unsalted butter, Minced garlic, Heavy cream, Grated parmesan cheese, Grated nutmeg, Italian parsley leaves',
      instructions:
        'Bring large pot of salted water to a boil. Add fettuccine and cook until al dente. Drain pasta. Dry the shrimp and season with salt and pepper. Melt butter in large skillet over medium-high heat. Add shrimp in an even layer and cook 1 to 2 minutes per side. Transfer the shrimp onto a plate. Melt butter in the skillet over medium heat. Add garlic and cook until fragrant. Whisk heavy cream and in until it starts to simmer. Whisk in parmesan cheese, salt, nutmeg, and pepper. Stir in pasta into sauce, toss to coat. Return the shrimp to the pan and toss to combine. Serve garnished with parsley.',
      description:
        'Shrimp Alfredo is a practical weeknight meal masquerading as fancy restaurant fare.',
      username: 'AlfredoMan',
      location: 'italy543'
    },
    {
      title: 'Fried Rice',
      category: 'Entree',
      imgURL: 'https://i.ibb.co/mDRHF5D/easy-fried-rice.jpg',
      ingredients:
        'White long grain rice, White onion, Peas, Carrots, Eggs, Sesame oil, Soy sauce, Green onions',
      instructions:
        'Preheat skillet to medium high heat. Pour sesame oil into the bottom of the skillet. Add onions, peas, and carrots. Fry until veggies are tender. Slide veggies to the side. Pour beaten eggs onto the other side. Use a spatula to scramble the eggs. Mix eggs together with the veggies. Add the rice to combine with the veggies and egg mixture. Pour soy sauce on top and stir until it is heated throughout. Garnish with green onions.',
      description:
        'Fried Rice is a combination of long grained rice, mixture of warm peas, carrots and onions with scrambled eggs mixed all together! You will not be getting take out any longer!',
      username: 'riceQueen',
      location: 'rice-dice1717'
    }
  ])
}
