# typescript-koa-api-boilerplate

This is a quick start boilerplate repository to get a backend API up and running.
We rely upon koa to route requests, and I've included a helpful base route class.
I am also including jest as a developer dependency as having tests is very useful.
To get started:

1. Clone the repository.
2. Code away!

To run in development mode:
`yarn run start:dev`

To build:
`yarn run build`

To run for production:
`yarn run start`

## Structure

I am using a controller, repository structure. Feel free to throw this out and use
whatever methedology you prefer.

- repos: The repos folder should contain repositories that perform low level tasks such as retrieving data from a database.
- controllers: This is where most of the api logic will exist, it will call the repos to perform low level tasks.
- interfaces: I typically collect my interfaces in a single place to make them easy to find, this is where I place them.
- routes: contains the routing classes. These classes typically reach out to a controller to do the logic.
- utils: Utility functions.