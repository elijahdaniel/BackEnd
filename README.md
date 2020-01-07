# Chef Portfolio Back End

| Method | Description                | Endpoint             |
| ------ | -------------------------- | -------------------- |
| POST   | Create a user account      | `/auth/register`     |
| POST   | Login a user               | `/auth/login`        |
| POST   | Create a new recipe        | `/recipes`           |
| GET    | Get all recipes entries    | `/recipes`           |
| GET    | Get recipes by a chef's ID | `/chefs/:id/recipes` |
| PUT    | Update a recipe by ID      | `/chefs/recipes/:id` |
| DELETE | Delete a recipe by ID      | `/chefs/recipes/:id` |

Register || returns new :id created

```
{
  "first_name": "John",
  "last_name": "Monfriez",
  "username": "johnny5",
  "email_address": "night_train@chefs.com",
  "password": "courage"
}
```

Login || "message": "Welcome johnny5!",

```
{
    "username": "johnny5",
    "password": "courage"
}
```

Create New Recipe || "message": "recipe created"

```
{
  "title": "test title",
  "description": "test description",
  "instructions": "test instructions",
  "meal_type": "test breakfast",
  "chef_id": "2",
  "pic_url": "asdf.png"
}
```
