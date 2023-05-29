# Exercise #4
## Authors
* Name: Noga Levy Email: levyno@edu.hac.ac.il
* Name: Tali Kalev Email: talikal@edu.hac.ac.il

## General Explanation
In this assignment we implemented an e-commerce website that uses the TMDB API to search,
explore and "purchase" movies and tv shows using react js on the client side
and Spring REST API and session beans as well as an SQL database for recording purchases.


### Client Side:
- There are 3 main pages, the home page which displays the data retrieved from the TMDB API,
  the Cart page, which displays the items the user has added to the cart and option to purchase,
  and a Checkout page (only displayed if there are items in the cart) which allows the user to complete
  their purchase.

#### Search Attributes
- By Genre : The user can choose from a list of genres, this will retrieve a list of movies that
  are of the types chosen (logical AND)
- By Release Year : The user can search by year, this will retrieve a list of movies that were released
  during the inputted year
- By Title : The user can search by title, this will retrieve a list of movies or tv shows with the title
  inputted.

Note: Searching by genre is done by choosing items from the 'Choose Genre' dropdown. To search by title
or year, the user must use the toggle button next to the search bar in order to switch between options
and then input search request into search bar.


### Server Side:
The server side is responsible for two main things-
1. Saving in the users cart data in Spring sessions
2. Saving data of the user upon a successful purchase in the SQL database

## Additional Note:
- only previous searches of type 'Title' are added to the search history
- user can add movie item only once to cart
- each movie/tv show has a modal, once opened displays more details about the item
- the default items displayed are "trending" movies and tv shows retrieved using the
  '/trending/all/week?&language=en-US' TMDB API
- if upon searching by year the TMDB API does not find movies with that release date,
  it returns trending page data
- if the server receives a request to delete a cart item that does not exist, it will respond with
status success 200


## ============================================

## README PROVIDED:


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7Tmn2VQK)

# Authors

# Explanations

---------------------


# Initializing the template

In order to initialize the project make sure to:

1. When you open the project, if intelliJ propose to "Load Maven Project" do it. You can later reload maven with the "M" icon on the right of the screen, or by right clicking on the pom.xml file and selecting "Maven -> Reload project".
2. You see red lines in the code? Go to File -> Project Structure -> Project Settings -> Project -> SDK -> and choose your Java SDK
3. Still see red stuff? Open the same dialog and click on "Fix" if you see some
4. Edit your configuration "ex4" at the top right. Make sure the "Main class" is set to "hac.DemoApplication" and that Java is set

Everything ok?
1. Run the SQL server as shown in the video (week 6) and create a database named "ex4". The DB credentials are stored in the application.properties file. You may change them if you want.
2. Run the project, you should not see any errors in IntelliJ console

So far the only route you can check is http://localhost:8080/debug/purchases
that returns a list of all purchases in the DB (empty for now).

## Initializing the React client (movie-app)

Open a terminal in *movie-app* and run `npm install` and then `npm start`. You should see the client running on http://localhost:3000.
You can also open another instance of IntelliJ and open the *movie-app* folder as a project. You can then run the client from there.

## Using the provided code to store purchases in the DB

We provide you with ready-to-use code to store purchases in the DB, in order to give you a taste of what Spring can do for you.
Look at the DebugController class. It has a method called "addPurchase" that receives a Purchase object and stores it in the DB.
When you develop your own controller, you must declare the repository member exactly as it is declared in the DebugController class.
Then you can use it to store purchases in the DB (repository.save(purchase)).

## Still have problems? Come to class.
