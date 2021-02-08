[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# microservice
This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## HOW TO USE
Start the project with `npm run dev` command. 
In the terminal, try the following commands:

- `call users.create '{ "name": "a name", "username": "someUsername", "email": "youremail@gmail.com", "password": "yourPassword"}'` - Creates new user
- `call users.find` - Shows list of all users
- `call users.get '{"id": "6021303cc9c9b042fc837fd8"}'` - Show desired user with given ID as parameter
- `call users.update '{"id": "6021303cc9c9b042fc837fd8", "username": "updated2", "email": "qwe2@qwe.com"}'` - Updates the user with given ID and fields
- `call users.remove '{"id": "6021303cc9c9b042fc837fd8"}'` - Deletes the user with given ID




## Services
- **users**: a Service to manage users (do CRUD actions on users collection of mongoDB database)


## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose
