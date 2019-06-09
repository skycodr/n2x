# Express Api Server
This is a wrapper around Express to modularize REST api calls and works as a simple api server. Created to accomodate both 99x Technology & Auxenta interview assignments.
## Prerequisites
- Node version > 12
- TMDB API Key from [The Movie Database](https://www.themoviedb.org/)
- .env file on the server > .env to contain the following
```s
NODE_ENV=development
PORT=8090
TMDB_API_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```
## Installing
```sh
$ cd server
$ npm install
```
# Run the server
```sh
$ npm start
```
### Feature Demonstration
- Modularization
- Closure
- Dependancy injection (service)
- Routing
- REST calls
- User of Fetch & Promises
### To-do
- Memoization
- Authentication
- Databaser connectivity
- Unit test integration