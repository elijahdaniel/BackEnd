const db = require('../database/dbConfig.js')

module.exports = {
  getRecipes,
  getIngredients,
  getMeasurements,
  getById,
  add,
  update,
  remove
}

function getRecipes() {
  return db('recipes as r')
    .join('chefs as c', 'c.id', 'r.chef_id')
    .select(
      'r.chef_id',
      'c.avatar_url',
      'r.title',
      'r.description',
      'r.instructions',
      'r.meal_type',
      'r.pic_url'
    )
}

function getMeasurements() {
  return db('measurement_recipe_ingredient')
}

function getIngredients() {
  return db('ingredients').select(
    'ingredients.id',
    'ingredients.ingredient_name'
  )
}

function getById(id) {
  return db('recipes').where({ id })
}

function add(recipes) {
  return db('recipes').insert(recipes, ['id'])
  //.then(([id]) => id)
}

function update(id, changes) {
  return db('recipes')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db('recipes')
    .where({ id })
    .del()
}
