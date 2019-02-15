module.exports = {
  "extends": "airbnb",
  "plugins":[
    "react",
    "jsx-a11y",
    "import"
  ],
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  env: {
    "browser": true,
    "es6": true
  },  
  rules:{
    "import/prefer-default-export": "off",
  },
}
