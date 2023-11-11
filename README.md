#About
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start, run

- `npm install`
- `npm start`

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



## Additional considerations

- Is any of your state redundant? For example, if you're tracking `wins`, `losses`, and `total`, you can probably get rid of `losses` state, and calculate it as `total - wins`.
- Where should each piece of state live? How are you going to get data from where it lives to where it needs to be?
