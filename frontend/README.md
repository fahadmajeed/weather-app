#Weather App
It's a simple self-contained weather widget which we can put onto any web page or application using

First add the static assets that web component requires
```

<script defer="defer" src="/static/js/main.1db0556b.js"></script>
<link href="/static/css/main.bce169d9.css" rel="stylesheet">
</head><body>
```
and then add the markup
<weather-app latitude="31.5204" longitude="74.3587" city="London"></weather-app>

You can have as many independent instances of weather-app as you like and each will query GraphQL back-end to get the weather data based on the latitude, longitude provided.
#Getting Started
To run the app, you will need to have Node.js and npm installed. Once you have these installed, you can clone the repository and run the following commands:

npm install
npm start

To run tests you can run the following command:

npm test
The app will then be available at http://localhost:3000.