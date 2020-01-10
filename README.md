# Chef Portfolio Back End

| Method | Description                | Endpoint               |
| ------ | -------------------------- | ---------------------- |
| POST   | Create a user account      | `/auth/register`       |
| POST   | Login a user               | `/auth/login`          |
| POST   | Create a new recipe        | `/recipes`             |
| GET    | Get all recipes entries    | `/recipes`             |
| GET    | Get all ingredients        | `/recipes/ingredients` |
| GET    | Get all measurements       | `/recipes/measurement` |
| GET    | Get all registered chefs   | `/chefs`               |
| GET    | Get registered chef by ID  | `/chefs/:id`           |
| GET    | Get recipes by a chef's ID | `/chefs/:id/recipes`   |
| PUT    | Update a chef by ID        | `/chefs/:id`           |
| PUT    | Update a recipe by ID      | `/recipes/:id`         |
| DELETE | Delete a chef by ID        | `/recipes/:id`         |
| DELETE | Delete a recipe by ID      | `/chefs/:id`           |

## Register New Chef

```
{
  "first_name": "John",
  "last_name": "Monfriez",
  "username": "johnny5",
  "email_address": "night_train@chefs.com",
  "password": "courage"
}
```

### Chefs Table

| Key             | Type   | Required |
| --------------- | ------ | -------- |
| `first_name`    | string | Yes      |
| `last_name`     | string | Yes      |
| `location`      | string | No       |
| `contact`       | string | No       |
| `username`      | string | Yes      |
| `password`      | string | Yes      |
| `email_address` | string | Yes      |
| `avatar_url`    | string | no       |

## Login

```
{
    "username": "johnny5",
    "password": "courage"
}
```

| Key        | Type   | Required |
| ---------- | ------ | -------- |
| `username` | string | Yes      |
| `password` | string | Yes      |

## Create Recipe

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

### Recipe Table

| Key            | Type   | Required |
| -------------- | ------ | -------- |
| `title`        | string | Yes      |
| `description`  | string | No       |
| `instructions` | string | Yes      |
| `meal_type`    | string | No       |
| `chef_id`      | string | Yes      |
| `pic_url`      | string | No       |

### Ingredients Table

| Key               | Type   | Required |
| ----------------- | ------ | -------- |
| `ingredient_name` | string | Yes      |
