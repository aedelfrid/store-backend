# Planning

## routes

create and delete users
update users

sign in and sign out

create and delete products
update products

create and delete orders
update orders

view all users
view a user

view all products
view a product

view all orders
view orders by user
view orders by product

## models

**products**
id
name
image
price
description
stock

**users**
id
email
password

**orders**
id
userID
productID
date

## tools to use

node
express

sql
sequelize

## plan

### server

create express server

db config

create required routes

### models

#### create models

user
    password hashing and verification

products

orders

### controllers

add logic for routes
