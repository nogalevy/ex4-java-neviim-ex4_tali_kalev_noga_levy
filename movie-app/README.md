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
- Genre : The user can choose from a list of genres, this will retrieve a list of movies that
are of the types chosen (logical AND)
- Release Year : The user can search by year, this will retrieve a list of movies that were released
during the inputted year
- Title : The user can search by title, this will retrieve a list of movies or tv shows with the title 
inputted.

Note: Searching by genre is done by choosing items from the 'Choose Genre' dropdown. To search by title 
or year, the user must use the toggle button next to the search bar in order to search by desired option.


### Server Side:
- some server side stuff

## Additional Note:
- only previous searches of type 'Title' are added to the search history
- user can add movie item only once to cart
- each movie/tv show has a modal, once opened displays more details about the item

## ============================================

## README PROVIDED:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
