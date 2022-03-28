# Node + Mongo
> A REST API that follows CRUD principles, built using Node, Express and MongoDB and can be tested using Postman.

---

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

---

## General Information
- API means Application Programming Interface, which is a set of clearly defined methods of communication between the frontend and the database. REST APIs mostly use JSON as the preferred choice for transferring data as they are easy to understand and is readable.
- The project contains a REST API that would support the four operations — GET, POST, PATCH and DELETE.

---

## Technologies Used
- Node
- Express
- MongoDB

---

## Features
This REST API can perform the basic CRUD (Create, Read, Update, Delete) operations on a users database.
This API supports the four operations- GET, POST, PATCH, DELETE.
1. GET — GET means to read the data. The function of this operation is to retrieve the data from the database and present it to the user.
2. POST — POST, as the name suggests, is used to post/add new data to the database. It allows users to add new data to the database.
3. PATCH — PATCH means to update the data already present in the database.
4. DELETE — It is used to delete any existing data from the database.

---

## Setup
Clone this repo to your desktop.

To run this project, install it locally using npm:

```
$ cd ../node-mongo
$ npm install
$ npm start
```
You should get a response in the console 'Server started on port 3000' if the project ran successfully.

A response 'Database connected' in the console indicates that the API has been successfully connected to the MongoDB Database.

---

## Usage
## How to configure the MongoDB Database-
Head over to https://account.mongodb.com/account/login and create your account, or sign in if you already have one.

After signing in, we have to create a database.

So, create a Free Shared Cluster.

Then, add your IP Address.

Click Finish and Close.

It will take some time for our cluster to finish. Meanwhile, create a file called .env in the project folder.

And in the Cluster Home page, click the connect button.

Click on 'Connect your application' and it will return a connection string.

Add your username and password to this string that you have used before. The final connecting string will look something like this:

`mongodb+srv://aniketh:*******@cluster0.2jjzc.mongodb.net/UserDB?retryWrites=true&w=majority`

So, paste this string into the .env file.

`DATABASE_URL = mongodb+srv://aniketh:*******@cluster0.2jjzc.mongodb.net/UserDB?retryWrites=true&w=majority`

## Testing API endpoints-
To test out these operations, we would use a software called Postman.

In the Postman window, we can choose the type of operation and the target URL for sending requests.

1. GET Request (Read Operation)-
If we call this endpoint in Postman, we will get an array of objects in the Postman body.\
The GET request can be made by selecting GET in the dropdown section and entering the request URL:
`localhost:3000/api/get_users`

2. POST Request (Add Operation)-
For POST requests, we need to send some JSON data while sending request which we can be done by adding the JSON in the Body section.\
You need to select Raw data type and then choose JSON as the format.\
The POST request can be made by selecting POST in the dropdown section and entering the request URL:
`localhost:3000/api/post`\
An example of a JSON Object which can be sent-
```
{
    "name": "Rahul",
    "age": 10
}
```

3. PATCH Request (Update Operation)-
We also need to provide the data while PATCH request as we are updating the data. We only pass the data we need to update. We need to send the '_id' of the object that needs to be updated. The '_id' can be accessed by looking at the MongoDB Database.\
You need to select Raw data type and then choose JSON as the format.\
The PATCH request can be made by selecting PATCH in the dropdown section and entering the request URL:
`localhost:3000/api/patch/<_id>`

4. DELETE Request (Delete Operation)-
We can delete an object by sending a DELETE request. We need to send the '_id' of the object that needs to be deleted. The '_id' can be accessed by looking at the MongoDB Database.\
The DELETE request can be made by selecting DELETE in the dropdown section and entering the request URL:
`localhost:3000/api/delete/<_id>`\
On successully deleting an object, we get a response-
'<_id> has been deleted.'

---

## Room for Improvement
Room for improvement:
- Add, Update and Delete User API should be accessible by Auth token.
- Auth token should be generated using the credentials provided

---

## Contact
Created by [@aniketh-varma](https://github.com/aniketh-varma) - feel free to contact me!