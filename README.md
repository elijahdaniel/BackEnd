# Build Week - Chef Portfolio

## Table of Contents

- [Dummy Data](#dummy-data)
- [Auth Routes](#auth-routes)
  - [Register](#register)
  - [Login](#login)
- [User Routes](#user-routes)
  - [Get User](#get-user)
- [Post Routes](#post-routes)
  - [Create Post](#create-post)
  - [Get Post](#get-posts)
  - [Update Post](#update-post)
  - [Delete Post](#delete-post)

## API Documentation

### Dummy Data

```
Posts: [
    {
        "id": 1,
        "title": "Caramel Cake",
        "category": "Dessert",
        "imgURL": "https://i.ibb.co/VDkFktV/caramel-cake-2.jpg",
        "ingredients": "Eggs, Milk, Flour, Butter, Caramel, Baking soda, Heavy cream",
        "instructions": "Preheat oven to 350 degrees. Mix all ingredients together. Place in cake pan. Stick into oven. Bring out of oven. Let it cool. Add caramel frosting.",
        "description": "Moist, delicious layer cake with caramel icing.",
        "username": "cakeKing",
        "location": "bakeb0$$123"
    },
    {
        "id": 2,
        "title": "Shrimp Alfredo",
        "category": "Entree",
        "imgURL": "https://i.ibb.co/Dw1f9nT/HT-Shrimp-Alfredo-103.png",
        "ingredients": "Dried fettuccine pasta, Peeled raw shrimp, Kosher salt, Freshly ground black pepper, Unsalted butter, Minced garlic, Heavy cream, Grated parmesan cheese, Grated nutmeg, Italian parsley leaves",
        "instructions": "Bring large pot of salted water to a boil. Add fettuccine and cook until al dente. Drain pasta. Dry the shrimp and season with salt and pepper. Melt butter in large skillet over medium-high heat. Add shrimp in an even layer and cook 1 to 2 minutes per side. Transfer the shrimp onto a plate. Melt butter in the skillet over medium heat. Add garlic and cook until fragrant. Whisk heavy cream and in until it starts to simmer. Whisk in parmesan cheese, salt, nutmeg, and pepper. Stir in pasta into sauce, toss to coat. Return the shrimp to the pan and toss to combine. Serve garnished with parsley.",
        "description": "Shrimp Alfredo is a practical weeknight meal masquerading as fancy restaurant fare.",
        "username": "AlfredoMan",
        "location": "italy543"
    },
    {
        "id": 3,
        "title": "Fried Rice",
        "category": "Entree",
        "imgURL": "https://i.ibb.co/mDRHF5D/easy-fried-rice.jpg",
        "ingredients": "White long grain rice, White onion, Peas, Carrots, Eggs, Sesame oil, Soy sauce, Green onions",
        "instructions": "Preheat skillet to medium high heat. Pour sesame oil into the bottom of the skillet. Add onions, peas, and carrots. Fry until veggies are tender. Slide veggies to the side. Pour beaten eggs onto the other side. Use a spatula to scramble the eggs. Mix eggs together with the veggies. Add the rice to combine with the veggies and egg mixture. Pour soy sauce on top and stir until it is heated throughout. Garnish with green onions.",
        "description": "Fried Rice is a combination of long grained rice, mixture of warm peas, carrots and onions with scrambled eggs mixed all together! You will not be getting take out any longer!",
        "username": "riceQueen",
        "location": "rice-dice1717"
    }
]
```

# Auth Routes

| Table | Method |       Endpoint |                      Description |
| ----- | :----: | -------------: | -------------------------------: |
| users |  POST  | /auth/register |            Registers a new user. |
| users |  POST  |    /auth/login | Logs in already registered user. |

## Register

### Registers a new user.

_Method URL:_ `/auth/register`

_HTTP Method:_ **[POST]**

#### Request Body

| Name       |     Type     | Required |    Description |
| ---------- | :----------: | -------: | -------------: |
| `username` | varchar(128) |      Yes | Must be unique |
| `password` | varchar(128) |      Yes |                |
| `email`    | varchar(128) |       No |                |

#### Examples

```
{
  "username": "superchef123",
  "password": "ilovefood",
  "email": "superchef@mail.com"
}
```

#### Response

##### 201 (Created)

> If you successfully register a user, the endpoint will return an HTTP response with a status code `201`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Login

### Logs in an already registered user.

_Method URL:_ `/auth/login`

_HTTP Method:_ **[POST]**

#### Request Body

| Name       |     Type     |                                                Description |
| ---------- | :----------: | ---------------------------------------------------------: |
| `username` | varchar(128) |                           Must match username in database. |
| `password` | varchar(128) | Must match password to corresponding username in database. |

#### Example

```
{
  "username": "superchef123",
  "password": "ilovefood"
}
```

#### Response

##### 200 (OK)

> If you successfully log in, the endpoint will return an HTTP response with a status code `200`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# User Routes

## Get User

### Gets current user information.

_Method URL:_ `/users`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |     Type     | Required |      Description |
| --------------- | :----------: | -------: | ---------------: |
| `Content-Type`  | varchar(128) |      Yes | application/JSON |
| `Authorization` | varchar(128) |      Yes |   JSON Web Token |

#### Response

##### 200 (OK)

> If user is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# Post Routes

## Create Post

### Creates a post, with a title, category, ingredients, instructions, and description.

_Method URL:_ `/post/create/`

_HTTP Method:_ **[POST]**

#### Headers

| Name            |     Type     | Required |              Description |
| --------------- | :----------: | -------: | -----------------------: |
| `Content-Type`  | varchar(128) |      Yes | Must be application/JSON |
| `Authorization` | varchar(128) |      Yes |           JSON Web Token |

#### Body

| Name           |     Type     | Required | Description |
| -------------- | :----------: | -------: | ----------: |
| `Title`        | varchar(128) |      Yes |             |
| `Category`     |     json     |      Yes |             |
| `Image URL`    | varchar(128) |       No |    Optional |
| `Ingredients`  | varchar(128) |      Yes |             |
| `Instructions` | varchar(128) |      Yes |             |
| `Description`  | varchar(128) |      Yes |             |
| `Username`     | varchar(128) |       No |    Optional |
| `Location`     | varchar(128) |       No |    Optional |

#### Example

```
{
    title: 'Test recipe',
    category: 'Entree',
    imgURL: 'test.jpg',
    ingredients: 'test, test, test',
    instructions: 'test this. then test that.'
    description: 'this is a test',
    username: 'User',
    location: 'California
}
```

#### Response

##### 201 (Created)

> If post is created, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing any post information, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Posts

### Gets a list of posts.

_Method URL:_ `/post`

_HTTP Method:_ **[GET]**

#### Headers

No headers needed. `/post` is not a protected path.

#### Response

##### 200 (OK)

> If posts are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If posts are not found, the endpoint will return an HTTP response with a status code `404`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update Post

### Updates post by ID.

_Method URL:_ `/post/update/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |     Type     | Required |              Description |
| --------------- | :----------: | -------: | -----------------------: |
| `Content-Type`  | varchar(128) |      Yes | Must be application/JSON |
| `Authorization` | varchar(128) |      Yes |           JSON Web Token |

#### Body

| Name           |     Type     | Required | Description |
| -------------- | :----------: | -------: | ----------: |
| `Title`        | varchar(128) |      Yes |             |
| `Category`     |     json     |      Yes |             |
| `Image URL`    | varchar(128) |       No |    Optional |
| `Ingredients`  | varchar(128) |      Yes |             |
| `Instructions` | varchar(128) |      Yes |             |
| `Description`  | varchar(128) |      Yes |             |
| `Username`     | varchar(128) |       No |    Optional |
| `Location`     | varchar(128) |       No |    Optional |

#### Example

```
{
    title: 'Test recipe',
    category: 'Entree',
    imgURL: 'test.jpg',
    ingredients: 'test, test, test',
    instructions: 'test this. then test that.'
    description: 'this is a test',
    username: 'User',
    location: 'California
}
```

#### Response

##### 200 (OK)

> If post with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If post with specified ID is not found and updated, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete post

### Deletes post by ID.

_Method URL:_ `/post/delete/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |     Type     | Required |              Description |
| --------------- | :----------: | -------: | -----------------------: |
| `Content-Type`  | varchar(128) |      Yes | Must be application/JSON |
| `Authorization` | varchar(128) |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If post with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If post with specified ID is not found and deleted, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# <<<<<<< HEAD

```

```

> > > > > > > 4c5d44a8c8328f6ec56faac08275d2cfaf2b751e
