# Gnomes Data Search with React

This application gives the option of filtering and sorting gnomes data by several options.
The following stack/modules are relevant cornerstones of the application.

**Framework:** React

**CSS:** Bootstrap CSS with reactstrap

**Form validation:** Formik as suggested by React docs

**State management container:** Redux

**Persisted State:** The gnomes data persist in the LocalStorage to load the data locally instead of fetching it from the API within the refresh time limit. A refresh of the data is required after 5 minutes which implicates a call to the API.

**ESLint:** Clean Code => ESLint runs a linter on the js code. As base set of rules I am extending Airbnb's linter rules.

## To run this project on your local computer follow the following steps:

### 1 Clone repository into your local folder
```
git clone https://github.com/gottschalkironhack/gnomesSearchReact.git
```

### 2 Move into project's directory folder
```
cd gnomesSearchReact
```

### 3 Check your version of node
Make sure you have node version >= 8.9.0 installed. I am using version v11.10.1.
To install the newest version of node you can run 

```
nvm install node
``` 

### 4 Install the node modules
Run 
```
yarn install
```
to install packages in package.json

### 5 Start the app
Run

```
yarn start
```

to run the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### 6 Optional: Check for lint errors
Run

```
yarn lint
```

to run the ESLinter. Errors will be shown in terminal. Rules can be added to or removed from the Airbnb set of rules in the **.eslintrc** file in the root directory under the option **rules**.

### 7 Optional: Build version of App
Run
```
yarn build
```
to build the production version of the app.

### Find a demo of the application here: https://gottschalkironhack.github.io/GnomesApp/
