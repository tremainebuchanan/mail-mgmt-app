#  Snail Mail Management Software

## Objective

To create a open source tool to track and manage an organizations' snail mail. 

## Git Commit StyleGuide

To ensure commit messages are consistent and easily understandable, please read and 
follow the below style guide.

[Udacity Commit Style Guide](http://udacity.github.io/git-styleguide/)
1. feat: a new feature
2. fix: a bug fix
3. docs: changes to documentation
4. style: formatting, missing semi colons, etc; no code change
5. refractor: refractor production code
6. test: adding tests, refractoring test; no production code change
7. chore: updating build tasks, package manager configs; etc; no production code change

## Technology Stack

1. Front end JavaScript Framework - currently [AngularJS](https://angularjs.org/) (to be changed to [React](https://reactjs.org/)
2. Front End CSS Framework - [Bulma](https://bulma.io/)
3. Back end Framework - [NodeJS](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/)
4. Database - [MYSQL](https://www.mysql.com/)
5. Object Relational Mapper - [KnexJS](https://knexjs.org/)
6. In Memory Data Store - [Redis](https://redis.io/)
7. Testing Frameworks - [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
## JavaScript StyleGuide

To ensure the codebase conforms to a standard, the following JavaScript Style Guide will be adopted:
1. [Airbnb](https://github.com/airbnb/javascript)
## Project Folder Structure

- `api` - Contains all endpoints and middlewares
  - `middlewares`
  - `routes`
- `bin` - Contains entry point for the application. 
- `config` - To be removed
- `database` - Contains `knex` library configuration. 
    - `db.js` 
- `node_modules` - All node modules required for the project
- `public` - All front end code (javascript and stylesheets)
- `services` - Files interacting with the database or other services 
- `test` - Contains test files for each endpoint
- `views` - Contains `ejs` files used to render server side template
  - `.env` - Contains environmental variables such as database connection user name and passwords. 
  - `.env_copy` - Contains the environment variables that should be set for the project in the `env` file. 
  - `.eslintrc.js` 
  - `.gitignore` 
  - `.travis.yml`
  - `app.js`
  - `CONTRIBUTING.md`
  - `Dockerfile`
  - `LICENSE`
  - `package-lock.json`
  - `package.json`
  - `README.md`

