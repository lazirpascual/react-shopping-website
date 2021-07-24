# Shopping-Website

This is a fullstack MERN application that models an e-commerce website that lets you buy computer parts. Made using Javascript, React JS, Node JS, Express, MongoDB, and Material-UI. <br />

[Live Demo of Application](https://cloudcomputers.netlify.app/)

# Backend

[Backend Repo](https://github.com/lazirpascual/shopping-website-backend)

## Tech Stack

| <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/javascript.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/react.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/node-dot-js.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/express.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/mongodb.svg" width="40"> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/material-ui.svg" width="40"> |
| :--------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |

- React JS
  - Routers
  - Context API
- Material-UI
- Node JS
- Express
- MongoDB
  - Mongoose
- Jest
- Heroku & Netlify
  - Frontend: Hosted in Netlify
  - Backend: Hosted in Heroku

## Features

- Responsive design which includes a clean user interface with smooth animations
- User registration/login
- Add, remove, and update products from the shopping cart
- Search products by name and filter products by categories in the shop

## Development Process

- **Frontend** <br />
  This project was initially created with only a frontend in mind. My goal was to build a project that would further enhance my React skills by using React Routers to navigate to different pages throughout my application and by using the Context API to globally manage state. Additionaly, I decided to use a component library called Material-UI to style my application.
- **Adding a Backend** <br />
  After initially building my application with a frontend, I decided that I had enough knowledge in React to finally configure and connect my application to a backend. After some research, I decided to adapt the MERN stack to turn my static application into a fullstack project. First, I used Node JS and Express to create a REST API that would hold the list of products in the shop as well as the list of products inside the cart. Then, I used MongoDB and Mongoose to connect the backend to a non-relational database that would indefinitely save the contents (products & cart items) of my application.
- **Adding Tests** <br />
  To complete the fullstack aspect of my application, I thought that it would be a good idea to implement testing. Therefore, I added three levels of testing in my application; Unit Testing, Integration Testing, and End-To-End Testing.
  - **Unit Testing** <br />
    First, I added some unit tests for the functionalities of the shopping cart page. These tests includes the following; the calculation for the subtotal of an item, the number of items in a cart and the total price in a cart.
  - **Integration Testing** <br />
    I then added some integation testing for the backend portion of my application. I decided to conduct API-level integration tests for the backend server by making HTTP requests and inspecting the test database I created with Mongoose. These tests included the testing of the REST API methods such as when initially retreiving, adding, and deleting an item from the shopping cart.
- **Adding More Features** <br />
  - **Login/Register** <br />
    After integrating a backend, I created the ability for users to sign up and log in to their own accounts. This made it possible for users to keep track of their individual shopping carts, ensuring that only they themselves can change the contents of their own products. This was accomplished through the addition of users/login REST APIs and User/Token Authentication.

## Screenshots

### Home Page

![preview](https://i.imgur.com/Zhy1Xpi.jpg)

### Catalog Page

![preview](https://i.imgur.com/07f9pMg.jpg)

### Product Page

![preview](https://i.imgur.com/ZBkOfbS.jpg)

### Cart Page

![preview](https://i.imgur.com/4CUGLN2.jpg)

### Checkout Page

![preview](https://i.imgur.com/Xn0gved.jpg)
