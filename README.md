This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

### `git clone https://github.com/iangoodwin-developer/resume-app.git` 

Clones the project onto your local environment.

### `npm install`

Installs dependencies.

In the project directory, you can run:

### `npm start` 

This runs the app in the development mode.<br><br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the app

This app was developed as a way to demonstrate a basic React project. 

### React Router

Single Page Applications or SPAs need client side routing to allow navigation through a React application UI which usually contain multiple pages or views.
<br><br>
React Router facilitates keeping the application UI and the URL in synchronization. This is also known as declarative routing.

### HashRouter

I have chosen to use HashRouter, which utilizes the URL hash. Server-side routing is independent from client-side routing. Using HashRouter solves issues which can arise when using a static server on React websites.

### SCSS

SCSS has been used in this app to allow for the use of variables in the CSS styling. Variables make it easy to control the logic of the styling in an app and facilitate consistency of colors, spacing, layouts and other stylistic components across styling modules.
<br><br>
As the app grows, SCSS features such as nesting, mixins, and operators can also be used to reduce and organise code.

### JSON data

A local JSON data file has been used to organize the data points for the app. This facilitates clean, concise code in the app logic in the form of looping over arrays to generate html elements. This method has been used for the navigation, and for some of the pages which have repeated elements.
<br><br>
While this JSON data has been added as a local file, in most use cases, the JSON data would be retrieved in an API call to fetch the data from some other source such as a database or another application. In this case, the only change would be the way the JSON data is retrieved. The useage of the data would remain the same.

### Known issues

Using Bootstrap to manipulate the DOM in a React application is generally not good practice. In future development I would like to remove bootstrap for all DOM manipulation (perhaps leave it for styling), and replace it with React components. Examples of where this could be done is in the collapsing navigation and the modal overlays.
<br><br>
Due to a bug in the version of Bootstrap used in this app, the modal overlay which appears when clicking on an individual skill on the Skills page causes an error "Modal is transitioning", which does not appear to break the app. This can potentially be solve by updating the version of Bootstrap, which I will do at a later point. Because the app still works, this is not a critical issue.

### Missing react feature: state

This app makes no use of one of the key features of React, state. Managing state in a React app is one of the biggest challenges in using React, and state is also one of the most powerful features of React. State is the interface between the app data from any kind of backend or local change and the representation of this data with the UI in the frontend. State is able to keep the data of different components in sync because each state update will rerender all relevant components. State can be a medium to communicate between different components as well.
<br><br>
In a large application, state management may require a library or API such as Redux or Unstated. The use of these can solve some of the challenges of sharing state between parent and child or sibling components in an app, which can be tricky when dealing with larger applications.
<br><br>
I plan to create another app which uses state. It will be a todo list, and will use React state without any libraries or APIs. This will be a way of demonstrating a basic understanding of the management of state in a small React app. 


