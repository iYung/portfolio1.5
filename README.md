Welcome to Portfolio 1.5!
===================


Portfolio 1.5 is a Wordpress-like web application which makes creating web portfolios quick and painless. This application is powered with React, NodeJS, Express, and MongoDB.

#### 1.5?
Portfolio 1.5 is a better version of [Portfolio](https://github.com/iYung/portfolio). Portfolio 1.5 features a redesigned front-end with a better UX.

#### Is there a demo?
A demo of Portfolio 1.5 can be found [here](https://fathomless-chamber-88700.herokuapp.com/).

----------


How Do I Use Portfolio 1.5?
-------------

#### Requirements

- NodeJS
- A MongoDB database

#### Configuration

Portfolio 1.5 stores and fetches data from a MongoDB database specified in a config.js file located in the root folder. Look below for an example of how this file should appear:

```js
module.exports = {
    'secret': '53CR3T_P455W0RD_G035_H3R3',
    'database': 'mongodb://your:info@your.mongo.db:goes/here',
    'saltRounds': 10,
    'serverPort': 3000
};
```

#### Installation

To build the website, first run the following command in the root of the project:

```sh
npm run build
```

After the page is build successfully, run the following command to deploy Portfolio 1.5:

```sh
node server.js
```

#### First Steps

Once Portfolio 1.5 launches for the first time, it should be pretty bare. Go fix that! Navigate to your-url.com/admin to access the admin dashboard. The first time you access this page, Portfolio 1.5 will have you make a username and password. After that, you can customize your web portfolio from the admin dashboard.