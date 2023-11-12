# Live Link

[Link to project](https://updaily.netlify.app/)

# Design file

[Link to design file](https://www.figma.com/file/72rF9xOu4KbyIFjffPhTE8/Project?type=design&node-id=0%3A1&mode=design&t=nKJqTK9t23kJQxBB-1)

## Events are hardcoded but businesses are live

# Project Features

- The design was split 50/50 between Neat and Philip using Figma.

- Comprehrensive registration form, with progress bar.

- Convert address into latitude and longitude coordinates for the explore page.

- Explore page, with a toggle between "events" and "businesses". These are shown on the map, and can be filtered with a combination filter function. If the user arrives at the explore page by clicking one of the business cards, the toggle button is automatically moved.

- For optimisation purposes, the viewport area is measured, and businesses more than two miles outside of the viewport area are not shown.

- Cards are shown displaying each business or event, and when a card is clicked it moves the map to center on that location. It also makes the first card an "active" card, and you can then click on the arrow icon to open a modal with details about that business or event.

- To reduce API calls, a debounce function has been added.

- The search function on the home page converts locations into lat/long values and then this is used to search the map in the explore map page.

- The search function on the explore page searches through the database and can be used in combination with filters.

- A modal with a fade in has been added to allow the user to view more details about the business, by clicking each business.

- When a marker is clicked on the map, it becomes the active card and the search cards scroll to the far left. The first card shown is the "active" card.

# Technologies used

- TypeScript
- Google Maps API
- GraphQL
- FireBase
- PostgreSQL
- Cloudinary
- AWS (to host the database)

## Screenshots

![image](https://github.com/updaily-ca/updaily-frontend/assets/126236947/a53f604e-ae42-4a57-a3d5-0496404531ba)

![image](https://github.com/updaily-ca/updaily-frontend/assets/126236947/3db98291-3a3c-4f92-a15c-a5a8f93833e4)

![image](https://github.com/updaily-ca/updaily-frontend/assets/126236947/43974660-54ed-4e3b-85c5-07fe53de330b)

![image](https://github.com/updaily-ca/updaily-frontend/assets/126236947/5d0261ad-3cb9-4156-8db0-3a50f7d43e79)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
