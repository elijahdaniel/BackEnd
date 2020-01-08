exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurement_recipe_ingredient')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('measurement_recipe_ingredient').insert([
        { id: 1, recipe_id: 1, ingredient_id: 1, measurement: 'whole' },
        { id: 2, recipe_id: 1, ingredient_id: 2, measurement: '1 tablespoon' },
        { id: 3, recipe_id: 1, ingredient_id: 3, measurement: '1 cup' },
        { id: 4, recipe_id: 1, ingredient_id: 4, measurement: '1/4 cup' },
        { id: 5, recipe_id: 1, ingredient_id: 5, measurement: '2 tablespoons' },
        { id: 6, recipe_id: 1, ingredient_id: 6, measurement: '1 large' },
        { id: 7, recipe_id: 1, ingredient_id: 7, measurement: '2 cups' },
        { id: 8, recipe_id: 1, ingredient_id: 8, measurement: '2 teaspoons' },
        { id: 9, recipe_id: 1, ingredient_id: 9, measurement: '1/4 cup' },
        { id: 10, recipe_id: 1, ingredient_id: 10, measurement: '1/4 cup' },
        {
          id: 11,
          recipe_id: 1,
          ingredient_id: 11,
          measurement: '2 tablespoons'
        },
        {
          id: 12,
          recipe_id: 1,
          ingredient_id: 12,
          measurement: '1 tablespoon'
        },
        { id: 13, recipe_id: 1, ingredient_id: 13, measurement: '1 teaspoon' },
        {
          id: 14,
          recipe_id: 1,
          ingredient_id: 14,
          measurement: '1/2 teaspoon'
        },
        { id: 15, recipe_id: 1, ingredient_id: 2, measurement: '1/2 teaspoon' },
        {
          id: 16,
          recipe_id: 1,
          ingredient_id: 15,
          measurement: '1/2 teaspoon'
        },
        { id: 17, recipe_id: 1, ingredient_id: 16, measurement: '1 cup' },

        {
          id: 18,
          recipe_id: 2,
          ingredient_id: 17,
          measurement: '4 medium sized'
        },
        {
          id: 19,
          recipe_id: 2,
          ingredient_id: 8,
          measurement: '3 tablespoons'
        },
        { id: 20, recipe_id: 2, ingredient_id: 16, measurement: '1 quart' },

        {
          id: 21,
          recipe_id: 3,
          ingredient_id: 18,
          measurement: '1 1/2 teaspoons'
        },
        { id: 22, recipe_id: 3, ingredient_id: 19, measurement: '1 slice' },
        { id: 23, recipe_id: 3, ingredient_id: 6, measurement: '1' },
        {
          id: 24,
          recipe_id: 4,
          ingredient_id: 20,
          measurement: '1 1/2 tablespoons'
        },
        { id: 25, recipe_id: 4, ingredient_id: 21, measurement: '1/2 cup' },
        { id: 26, recipe_id: 4, ingredient_id: 22, measurement: '2 slices' },
        { id: 27, recipe_id: 4, ingredient_id: 6, measurement: '2 ' },
        {
          id: 28,
          recipe_id: 4,
          ingredient_id: 23,
          measurement: '1 tablespoon'
        },
        {
          id: 29,
          recipe_id: 4,
          ingredient_id: 24,
          measurement: '1 tablespoon'
        },
        {
          id: 30,
          recipe_id: 4,
          ingredient_id: 25,
          measurement: '2 fajita sized'
        },

        { id: 31, recipe_id: 4, ingredient_id: 6, measurement: '1' },
        { id: 32, recipe_id: 5, ingredient_id: 26, measurement: '1 pound' },
        { id: 33, recipe_id: 5, ingredient_id: 27, measurement: '1 cup' },
        {
          id: 34,
          recipe_id: 5,
          ingredient_id: 28,
          measurement: '2 tablespoons'
        },
        {
          id: 35,
          recipe_id: 5,
          ingredient_id: 29,
          measurement: '1 tablespoon'
        },
        {
          id: 36,
          recipe_id: 5,
          ingredient_id: 30,
          measurement: '1 1/2 teaspoons'
        },
        {
          id: 37,
          recipe_id: 5,
          ingredient_id: 14,
          measurement: '1/2 teaspoon'
        },
        {
          id: 38,
          recipe_id: 5,
          ingredient_id: 32,
          measurement: '1/2 teaspoon'
        },
        { id: 39, recipe_id: 5, ingredient_id: 33, measurement: '1' },
        {
          id: 40,
          recipe_id: 5,
          ingredient_id: 34,
          measurement: '12 ounce package'
        },
        { id: 41, recipe_id: 5, ingredient_id: 35, measurement: '1 head' },
        { id: 42, recipe_id: 5, ingredient_id: 36, measurement: '2 large' },
        { id: 43, recipe_id: 5, ingredient_id: 37, measurement: '8 ounces' },
        { id: 44, recipe_id: 5, ingredient_id: 38, measurement: '8 ounces' },
        { id: 45, recipe_id: 5, ingredient_id: 39, measurement: '8 ounces' },

        { id: 46, recipe_id: 6, ingredient_id: 9, measurement: '1/4 cup' },
        {
          id: 47,
          recipe_id: 6,
          ingredient_id: 40,
          measurement: '2 tablespoons'
        },
        {
          id: 48,
          recipe_id: 6,
          ingredient_id: 41,
          measurement: '2 tablespoons'
        },
        { id: 49, recipe_id: 6, ingredient_id: 42, measurement: '1 teaspoon' },
        { id: 50, recipe_id: 6, ingredient_id: 43, measurement: '1 teaspoon' },
        { id: 51, recipe_id: 6, ingredient_id: 44, measurement: '8 slices' },
        { id: 52, recipe_id: 6, ingredient_id: 45, measurement: '8 slices' },
        { id: 53, recipe_id: 6, ingredient_id: 46, measurement: '8' },

        { id: 54, recipe_id: 7, ingredient_id: 7, measurement: '1 1/2 cups' },
        {
          id: 55,
          recipe_id: 7,
          ingredient_id: 47,
          measurement: '3 1/2 teaspoons'
        },
        { id: 56, recipe_id: 7, ingredient_id: 8, measurement: '1 teaspoon' },
        {
          id: 57,
          recipe_id: 7,
          ingredient_id: 48,
          measurement: '1 tablespoon'
        },
        { id: 58, recipe_id: 7, ingredient_id: 49, measurement: '1 1/4 cups' },
        { id: 59, recipe_id: 7, ingredient_id: 6, measurement: '1' },
        {
          id: 60,
          recipe_id: 7,
          ingredient_id: 9,
          measurement: '3 tablespoons'
        },

        { id: 61, recipe_id: 8, ingredient_id: 50, measurement: '4 6-ounce ' },
        { id: 62, recipe_id: 8, ingredient_id: 51, measurement: '8 slices' },
        {
          id: 63,
          recipe_id: 8,
          ingredient_id: 52,
          measurement: '1/2 pound fresh'
        },
        {
          id: 64,
          recipe_id: 8,
          ingredient_id: 40,
          measurement: '3 tablespoons'
        },
        { id: 65, recipe_id: 8, ingredient_id: 53, measurement: '1 cup' },
        { id: 66, recipe_id: 8, ingredient_id: 54, measurement: 'too taste' },
        { id: 67, recipe_id: 9, ingredient_id: 55, measurement: '8 slices' },
        { id: 68, recipe_id: 9, ingredient_id: 56, measurement: '6 ounces' },
        {
          id: 69,
          recipe_id: 9,
          ingredient_id: 16,
          measurement: '1 1/2 tablespoons'
        },
        { id: 70, recipe_id: 9, ingredient_id: 37, measurement: '1 cup' },
        { id: 71, recipe_id: 9, ingredient_id: 9, measurement: '1 tablespoon' },
        { id: 72, recipe_id: 9, ingredient_id: 6, measurement: '4' },
        { id: 73, recipe_id: 10, ingredient_id: 30, measurement: '1/4' },
        { id: 74, recipe_id: 10, ingredient_id: 28, measurement: '2' },
        { id: 75, recipe_id: 10, ingredient_id: 57, measurement: '1/2' },
        { id: 76, recipe_id: 10, ingredient_id: 58, measurement: '2' },
        { id: 77, recipe_id: 10, ingredient_id: 59, measurement: '1/4' },
        { id: 78, recipe_id: 10, ingredient_id: 60, measurement: '8' },

        { id: 79, recipe_id: 11, ingredient_id: 48, measurement: '1 cup' },
        { id: 80, recipe_id: 11, ingredient_id: 9, measurement: '1/2 cup' },
        { id: 81, recipe_id: 11, ingredient_id: 6, measurement: '2' },
        {
          id: 82,
          recipe_id: 11,
          ingredient_id: 61,
          measurement: '2 teaspoons'
        },
        { id: 83, recipe_id: 11, ingredient_id: 7, measurement: '1 1/2 cups' },
        {
          id: 84,
          recipe_id: 11,
          ingredient_id: 47,
          measurement: '1 3/4 teaspoons'
        },
        { id: 85, recipe_id: 11, ingredient_id: 49, measurement: '3/4 cups' },
        {
          id: 86,
          recipe_id: 11,
          ingredient_id: 62,
          measurement: '1 tablespoon'
        },
        {
          id: 87,
          recipe_id: 11,
          ingredient_id: 63,
          measurement: '1 tablespoon'
        },

        { id: 88, recipe_id: 12, ingredient_id: 64, measurement: '3 1/2 cups' },
        { id: 89, recipe_id: 12, ingredient_id: 65, measurement: '3.5 ounces' },
        {
          id: 90,
          recipe_id: 12,
          ingredient_id: 66,
          measurement: '2 teaspoons'
        },
        {
          id: 91,
          recipe_id: 12,
          ingredient_id: 67,
          measurement: '1/2 teaspoon'
        },
        {
          id: 92,
          recipe_id: 12,
          ingredient_id: 68,
          measurement: '1/2 teaspoon'
        },
        { id: 93, recipe_id: 12, ingredient_id: 68, measurement: '2' },

        { id: 94, recipe_id: 13, ingredient_id: 7, measurement: '3 cups' },
        { id: 95, recipe_id: 13, ingredient_id: 48, measurement: '1/4 cup' },
        {
          id: 96,
          recipe_id: 13,
          ingredient_id: 70,
          measurement: '1/4 teaspoons'
        },
        {
          id: 97,
          recipe_id: 13,
          ingredient_id: 71,
          measurement: '3 tablespoons'
        },
        { id: 98, recipe_id: 13, ingredient_id: 6, measurement: '1' },
        { id: 99, recipe_id: 13, ingredient_id: 72, measurement: '1' },
        { id: 100, recipe_id: 13, ingredient_id: 73, measurement: '1/2 cup' },
        {
          id: 101,
          recipe_id: 13,
          ingredient_id: 74,
          measurement: '1 tablespoon'
        },
        {
          id: 102,
          recipe_id: 13,
          ingredient_id: 23,
          measurement: '2 tablespoons'
        },
        { id: 103, recipe_id: 13, ingredient_id: 75, measurement: '1' },
        { id: 104, recipe_id: 13, ingredient_id: 16, measurement: '1 quart' },
        { id: 105, recipe_id: 13, ingredient_id: 76, measurement: '32 ounces' },
        { id: 106, recipe_id: 13, ingredient_id: 77, measurement: '1/2 cup' },
        {
          id: 107,
          recipe_id: 13,
          ingredient_id: 62,
          measurement: '1 teaspoon'
        },
        { id: 108, recipe_id: 13, ingredient_id: 80, measurement: '4 ounces' },

        { id: 109, recipe_id: 14, ingredient_id: 80, measurement: '3 ounces' },
        { id: 110, recipe_id: 14, ingredient_id: 81, measurement: '1/4 cup' },
        { id: 111, recipe_id: 14, ingredient_id: 82, measurement: '3 sprigs' },
        { id: 112, recipe_id: 14, ingredient_id: 83, measurement: '1 medium' },
        { id: 113, recipe_id: 14, ingredient_id: 84, measurement: '1 medium' },
        { id: 114, recipe_id: 14, ingredient_id: 85, measurement: '1 medium' },
        { id: 115, recipe_id: 14, ingredient_id: 25, measurement: '1 6 inch' },
        {
          id: 116,
          recipe_id: 14,
          ingredient_id: 86,
          measurement: '2 tablespoons'
        },
        {
          id: 117,
          recipe_id: 14,
          ingredient_id: 66,
          measurement: '1 1/2 teaspoons'
        },
        {
          id: 118,
          recipe_id: 14,
          ingredient_id: 87,
          measurement: '1 teaspoon'
        },
        { id: 119, recipe_id: 14, ingredient_id: 59, measurement: 'to taste' },

        {
          id: 120,
          recipe_id: 15,
          ingredient_id: 88,
          measurement: '1 1/2 cups'
        },
        { id: 121, recipe_id: 15, ingredient_id: 23, measurement: '3 cups' },
        {
          id: 122,
          recipe_id: 15,
          ingredient_id: 16,
          measurement: '4 tablespoons'
        },
        { id: 123, recipe_id: 15, ingredient_id: 89, measurement: '1 cup' },
        { id: 124, recipe_id: 15, ingredient_id: 41, measurement: '1/2 cup' },
        {
          id: 125,
          recipe_id: 15,
          ingredient_id: 90,
          measurement: '1 1/2 cups'
        },
        { id: 126, recipe_id: 15, ingredient_id: 91, measurement: '1/4 cup' },
        { id: 127, recipe_id: 15, ingredient_id: 6, measurement: '2 beaten' },
        { id: 128, recipe_id: 15, ingredient_id: 8, measurement: '1 teaspoon' },
        {
          id: 129,
          recipe_id: 15,
          ingredient_id: 59,
          measurement: '1/4 teaspoon'
        },
        {
          id: 130,
          recipe_id: 15,
          ingredient_id: 66,
          measurement: '4 tablespoons'
        },
        {
          id: 131,
          recipe_id: 15,
          ingredient_id: 92,
          measurement: '1/4 teaspoon'
        },

        { id: 132, recipe_id: 16, ingredient_id: 9, measurement: '1 cup' },
        { id: 133, recipe_id: 16, ingredient_id: 12, measurement: '3/4 cup' },
        { id: 134, recipe_id: 16, ingredient_id: 48, measurement: '1/4 cup' },
        {
          id: 135,
          recipe_id: 16,
          ingredient_id: 93,
          measurement: '3.3 ounces'
        },
        {
          id: 136,
          recipe_id: 16,
          ingredient_id: 61,
          measurement: '1 teaspoon'
        },
        { id: 137, recipe_id: 16, ingredient_id: 6, measurement: '2' },
        {
          id: 138,
          recipe_id: 16,
          ingredient_id: 94,
          measurement: '1 teaspoon'
        },
        { id: 139, recipe_id: 16, ingredient_id: 7, measurement: '2 1/4' },
        { id: 140, recipe_id: 16, ingredient_id: 79, measurement: '12 ounces' },
        { id: 141, recipe_id: 16, ingredient_id: 95, measurement: '1 cup' },
        { id: 142, recipe_id: 16, ingredient_id: 96, measurement: '1/2 cip' },
        { id: 143, recipe_id: 16, ingredient_id: 79, measurement: '8 ounces' },

        { id: 144, recipe_id: 17, ingredient_id: 41, measurement: '1/4 cup' },
        { id: 145, recipe_id: 17, ingredient_id: 83, measurement: '1/8 cup' },
        { id: 146, recipe_id: 17, ingredient_id: 97, measurement: '3/8 cup' },
        {
          id: 147,
          recipe_id: 17,
          ingredient_id: 98,
          measurement: '2 teaspoons'
        },
        { id: 148, recipe_id: 17, ingredient_id: 99, measurement: '1 pound' },
        { id: 149, recipe_id: 17, ingredient_id: 100, measurement: '4' },
        {
          id: 150,
          recipe_id: 18,
          ingredient_id: 98,
          measurement: '2 teaspoons'
        },
        { id: 151, recipe_id: 18, ingredient_id: 35, measurement: '8 leaves' },
        { id: 152, recipe_id: 18, ingredient_id: 101, measurement: '4 slices' },
        { id: 153, recipe_id: 18, ingredient_id: 102, measurement: '1 ripe' },
        {
          id: 154,
          recipe_id: 18,
          ingredient_id: 103,
          measurement: '1 teaspoon'
        },

        { id: 155, recipe_id: 19, ingredient_id: 66, measurement: '1/4 cup' },
        { id: 156, recipe_id: 19, ingredient_id: 104, measurement: '1/4 cup' },
        { id: 157, recipe_id: 19, ingredient_id: 105, measurement: '1/4 cup' },
        {
          id: 158,
          recipe_id: 19,
          ingredient_id: 16,
          measurement: '4 tablespoons'
        },
        { id: 159, recipe_id: 19, ingredient_id: 58, measurement: '1 glove' },
        { id: 160, recipe_id: 19, ingredient_id: 106, measurement: 'to taste' },
        { id: 161, recipe_id: 19, ingredient_id: 107, measurement: 'to taste' },
        { id: 162, recipe_id: 19, ingredient_id: 8, measurement: 'to taste' },
        { id: 163, recipe_id: 19, ingredient_id: 59, measurement: 'to taste' },
        { id: 164, recipe_id: 19, ingredient_id: 108, measurement: '2' },

        { id: 166, recipe_id: 20, ingredient_id: 28, measurement: '1/2 cup' },
        { id: 167, recipe_id: 20, ingredient_id: 74, measurement: '1/4 cup' },
        { id: 168, recipe_id: 20, ingredient_id: 48, measurement: '1/3 cup' },
        {
          id: 169,
          recipe_id: 20,
          ingredient_id: 66,
          measurement: '3 tablespoons'
        },
        {
          id: 170,
          recipe_id: 20,
          ingredient_id: 109,
          measurement: '2 bunches'
        },
        { id: 171, recipe_id: 20, ingredient_id: 69, measurement: '1 bunch' },
        { id: 172, recipe_id: 20, ingredient_id: 110, measurement: '1/8 cup' },
        { id: 173, recipe_id: 20, ingredient_id: 111, measurement: '6 ounces' },

        { id: 174, recipe_id: 21, ingredient_id: 112, measurement: '12 ounce' },
        {
          id: 175,
          recipe_id: 21,
          ingredient_id: 113,
          measurement: '1 teaspoon'
        },
        {
          id: 176,
          recipe_id: 21,
          ingredient_id: 114,
          measurement: '1 teaspoon'
        },
        {
          id: 177,
          recipe_id: 21,
          ingredient_id: 14,
          measurement: '1/2 teaspoon'
        },
        {
          id: 178,
          recipe_id: 21,
          ingredient_id: 32,
          measurement: '1/2 teaspoon'
        },
        {
          id: 179,
          recipe_id: 21,
          ingredient_id: 48,
          measurement: '1/2 teaspoon'
        },
        { id: 180, recipe_id: 21, ingredient_id: 7, measurement: '3 1/4 cups' },
        {
          id: 181,
          recipe_id: 21,
          ingredient_id: 115,
          measurement: '1/2 ounce'
        },
        {
          id: 182,
          recipe_id: 21,
          ingredient_id: 48,
          measurement: '1 tablespoon'
        },
        {
          id: 183,
          recipe_id: 21,
          ingredient_id: 8,
          measurement: '1 1/2 teaspoons'
        },
        {
          id: 184,
          recipe_id: 21,
          ingredient_id: 23,
          measurement: '1 1/3 cups, warm'
        },
        { id: 185, recipe_id: 21, ingredient_id: 16, measurement: '1/3 cups' },
        { id: 186, recipe_id: 21, ingredient_id: 116, measurement: '6 ounces' },
        { id: 187, recipe_id: 21, ingredient_id: 117, measurement: '1 cup' },
        {
          id: 188,
          recipe_id: 21,
          ingredient_id: 15,
          measurement: '1/4 teaspoon'
        },
        {
          id: 189,
          recipe_id: 21,
          ingredient_id: 14,
          measurement: '1/2 teaspoon'
        },

        { id: 190, recipe_id: 22, ingredient_id: 118, measurement: '1' },
        { id: 191, recipe_id: 22, ingredient_id: 102, measurement: '1' },
        { id: 192, recipe_id: 22, ingredient_id: 36, measurement: '4 medium' },
        { id: 193, recipe_id: 22, ingredient_id: 119, measurement: '1' },
        { id: 194, recipe_id: 22, ingredient_id: 120, measurement: '1/2 cup' },
        { id: 195, recipe_id: 22, ingredient_id: 58, measurement: '3 cloves' },
        { id: 196, recipe_id: 22, ingredient_id: 8, measurement: '1 teaspoon' },
        {
          id: 197,
          recipe_id: 22,
          ingredient_id: 29,
          measurement: '2 tablespoons'
        },
        { id: 198, recipe_id: 22, ingredient_id: 121, measurement: '1/4 cup' },
        {
          id: 199,
          recipe_id: 22,
          ingredient_id: 28,
          measurement: '3 tablespoons'
        },

        { id: 200, recipe_id: 23, ingredient_id: 7, measurement: '2 cups' },
        {
          id: 201,
          recipe_id: 23,
          ingredient_id: 47,
          measurement: '1 1/2 teaspoons'
        },
        {
          id: 202,
          recipe_id: 23,
          ingredient_id: 94,
          measurement: '1/4 teaspoons'
        },
        {
          id: 203,
          recipe_id: 23,
          ingredient_id: 70,
          measurement: '1 1/2 teaspoons'
        },
        { id: 204, recipe_id: 23, ingredient_id: 20, measurement: '1/2 cup' },
        { id: 205, recipe_id: 23, ingredient_id: 48, measurement: '1 cup' },
        {
          id: 206,
          recipe_id: 23,
          ingredient_id: 122,
          measurement: '3 tablespoons'
        },
        { id: 207, recipe_id: 23, ingredient_id: 6, measurement: '1' },
        { id: 208, recipe_id: 23, ingredient_id: 48, measurement: '1/2 cup' },
        { id: 209, recipe_id: 23, ingredient_id: 123, measurement: '1/4 cup' },

        {
          id: 210,
          recipe_id: 24,
          ingredient_id: 124,
          measurement: '16 ounces'
        },
        {
          id: 211,
          recipe_id: 24,
          ingredient_id: 9,
          measurement: '4 tablespoons'
        },
        { id: 212, recipe_id: 24, ingredient_id: 14, measurement: '2 cloves' },
        { id: 213, recipe_id: 24, ingredient_id: 125, measurement: '1 pound' },
        {
          id: 214,
          recipe_id: 24,
          ingredient_id: 126,
          measurement: '2 tablespoons'
        },
        {
          id: 215,
          recipe_id: 24,
          ingredient_id: 63,
          measurement: '2 teaspoons'
        },
        { id: 216, recipe_id: 24, ingredient_id: 127, measurement: '1/2 cup' },
        { id: 217, recipe_id: 24, ingredient_id: 128, measurement: '1/4 cup' },
        {
          id: 218,
          recipe_id: 24,
          ingredient_id: 129,
          measurement: '2 tablespoons'
        },

        {
          id: 219,
          recipe_id: 25,
          ingredient_id: 14,
          measurement: '1 tablespoon'
        },
        {
          id: 220,
          recipe_id: 25,
          ingredient_id: 114,
          measurement: '1 tablespoon'
        },
        {
          id: 221,
          recipe_id: 25,
          ingredient_id: 8,
          measurement: '1/2 teaspoon'
        },
        { id: 222, recipe_id: 25, ingredient_id: 130, measurement: '4-6ounce' },
        {
          id: 223,
          recipe_id: 25,
          ingredient_id: 9,
          measurement: '2 tablespoons'
        },
        { id: 224, recipe_id: 25, ingredient_id: 131, measurement: '4 wedges' }
      ])
    })
}