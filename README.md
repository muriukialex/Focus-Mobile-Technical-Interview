## In the project directory, you can run:

## npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.

## node_modules/.bin/cypress open

Launches the cypress test runner.

## npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

# Open ended questions

## Which specifications were you unable to address in your submitted application?

- With the data structure used initially, was not able to implement removing items from a cart
  from the products details page, this can be done only from the carts page / checkout page

## Were you able to add a technique for boosting the application’s performance? If so, what technique did you use?

- Managed to implement lazyloading which boosts the application's perfomance according to this
  article https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading

## Which i18n library did you choose and why?

- Used react-intl. The library was used because react-intl would make development
  super easy since the library has built in support for a large number of translations to be made which is more than just transforming the text or message to a target language. Cultural differences must also be considered, like how numbers and dates are written or how units and currencies are placed for different locales. react-intl provides all this through built in support systems which uses jsx like methods which are

  - FormattedMessage
  - FormattedNumber
  - FormattedDate
  - FormattedPlural
    react-intl is also offers a complete localization solution with support for many locales
    at the same time being scalable and flexible

## If you had more time, how would you improve your application? What new features would you add?

- Making the application fullstack like, by implementing a full 'CRUD' like functionality with
  that persists by using a backend.

## Which part of the assignment did you enjoy the most?

- I particularly enjoyed building the functionality of the react application
  where users can add and delete items from the cart while shopping.

## Which part of the assignment did you enjoy the least?

- I generally enjoyed putting together the whole application but hey, there were moments where stuff
  did not add up, that sucked.
