# Meal Lookup
## Video Demo:
### Description:

-----
## What is my Project?
Simply my project is a web-based application using reactjs and css that allows people
to search for meal's recipes. Users can find meals by catergory or search by key words.
Users can also view details of the recipe with all the ingredients as well as their measurments.
The instruction on how to prep and cook the meal is also included in the details page. You will be able 
to create an account and login and then you can add your favorite meals to your favorite meals list. The app is mobile-responsive too so it works on your smart phone as well, please check it out!

-----
## index.js
This is the file that initializes the App using react and reactDOM

-----
## App.js
This is the file that contains all the routes of the application. By having a view at it, you will be able 
to understand how routes work and how to navigate through them.

-----
## index.css
This is the file that contains some very general styling of some element such as tag a, li or ul. It also is where some css variables for colors are.

-----
## Components 
This is the folder that contains all the partial components of the App such as Header, Home, Footer...
This folder helps you be able to form a general structure of the App.

-----
## Header
With this component, you will see that there are the Logo, the search component and Login&Signup component.
You will be able to navigate back to the homepage by clicking the logo, search recipe by keywords and either sign up if you have not had an account or login if you already have one. In addition to the Login&Signup component, once you login, the Login button will change to indicate the name of the logined user and by clicking it, you should be directed to the UserFavoriteMeals page.

-----
## Footer
This is just to show that who is the author of the project.

-----
## Home
This is where all the meal component will be displayed and in the Meal component, you will see that there are 2 main functions of it. The first one is view-detail button that will allow you to see all the ingredients, their measuments and the recipe's instruction.

-----
## Meal
Beside the function to see recipe's details, you can also click on the add-favorite button to append your favorite meal to your favorite meal list. This can only be done once you log in.

-----
## Input
This is the component that has been used in the Login and Signup pages.

-----
## Login
This is the component that contains all the input and the logic to validate all the input prompted by users. In this component, it also stores the user's information to LocalStorage and redux State for later use.

-----
## Register
This component will present the sign-up function that allows users to create an account. It will also store the user's information to a json file so please remember to run the json server before you open the App.

-----
## Meal Details
This component will display all the information of a recipe.

-----
## Side Bar
This component will display a side bar on the left side that allows you to click on in order to fetch the recipes by category

-----
## User Fav
This component will display all the user's favorite recipes.

-----
## data
This folder contains a json file that is responsible for storing all users' information and accounts.

-----
## Layout
This component contains all the layout-related components such as Header, Footer and SideBar. This will help when it comes to reusing Header, Footer and SideBar components.

-----
## Redux
This folder contains the store file that consists of all the slices' reducers.
All the slice files and their reducers and actions will also be stored in the Slice folder inside Redux folder.

-----
## mealSlice
This file helps to control all the fetched recipes with functions such as fetchMealsByCategory...

-----
## userSlice
This file helps to control all the logined user.