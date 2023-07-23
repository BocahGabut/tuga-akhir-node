## API Endpoints

## User Routes

### * Create User

`POST |  /users/register` 

| Key       | Value          |
| --------- | -----------    |
| name      | Admin          |
| email     | admin@admin.com|
| password  | password       |
| phone     | +947187520     |
| isAdmin   | true           |
| street    | Main Street    |
| apartment | Block C        |
| zip       | 10870          |
| city      | Colombo        |
| country   | SriLanka       |

### * Login User

`POST |  /users/login` 

| Key        | Value          |
| ---------  | -----------    |
| email      | admin@admin.com|
| password   | password       |

### * Get Users

`GET |  /users` 

### * Get Single Users

`GET |  /users/{id}` 

### * Delete User

`DELETE |  /users/{id}` 

### * Get Users Count

`GET |  /users/get/count` 

## Category Routes

### * Create Category

`POST |  /categories` 

| Key   | Value      |
| ------| ---------- |
| name  | Category 1 |
| icon  | icon-health|
| color | #55879     |

### * Get Categories

`GET |  /categories` 

### * Get Single Category

`GET |  /categories/{id}` 

### * Update Category

`PUT |  /categories/{id}` 

| Key   | Value      |
| ------| ---------- |
| name  | Category 1 |
| icon  | icon-health|
| color | #55879     |

### * Delete Category

`DELETE |  /categories/{id}`

## Product Routes

### * Create Product

`POST |  /products` 

| Key            | Value           |
| ---------      | -----------     |
| name           | Product 1       |
| description    | Description     |
| richDescription| Rich Description|
| image          | image           |
| brand          | Brand 1         |
| price          | 50              |
| category       | {category_id}   |
| countInStock   | 100             |
| rating         | 4.5             |
| numReviews     | 40              |
| isFeatured     | true            |

### * Get Products

`GET |  /products` 

###  * Get Single Category

`GET |  /products/{id}` 

###  * Get Prodcut Counts

`GET |  /products/get/count` 

###  * Get Featured Prodcut Counts

`GET |  /products/get/featured/{count}`

### * Upload Galley Images

`POST |  /products/gallery-images/{id}`
| Key            | Value           |
| ---------      | -----------     |
| images         | Array of images |

### * Update Product

`PUT |  /products` 
| Key            | Value           |
| ---------      | -----------     |
| name           | Product 1       |
| description    | Description     |
| richDescription| Rich Description|
| image          | image           |
| brand          | Brand 1         |
| price          | 50              |
| category       | {category_id}   |
| countInStock   | 100             |
| rating         | 4.5             |
| numReviews     | 40              |
| isFeatured     | true            |

### * Delete Product

`DELETE |  /products/{id}`

## Orders Routes

### * Create Order

`POST |  /orders` 
```
{
	"orderItems":[
		{
			"quantity": 3,
			"product" : "602e9c348e700335d8532b14"
		},
			{
			"quantity": 2,
			"product" : "602bde0161fcc409fc149734"
		}
	],
	"shippingAddress1" : "No 45,Park Street",
	"shippingAddress2" : "No 46,Main Street",
	"city" : "Colombo",
	"zip" : "10600t",
	"country" : "Sri Lanka",
	"phone" : "+94717185748",
	"user" : "602e9b718e700335d8532b13"
}
```
### * Get Orders

`GET |  /orders` 

### * Get Single Order

`GET |  /orders/{id}` 

### * Get Total Order Count

`GET |  /orders/get/count`

### * Get Total Sales

`GET |  /orders/get/totalsales`

### * Get User Order

`GET |  /orders/get/usersorders/{userid}`

### * Update Single Order

`PUT |  /orders/{id}` 

### * Delete Single Order

`DELETE |  /orders/{id}` 
