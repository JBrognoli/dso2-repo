# dso2-repo

## Project Workflow:

### backend
```
run: yarn/npm install -> yarn dev / npm run dev

controllers: exports module functions of some model
model: creates the database models of the application
routes: controls the routes that the application will serve
middlewares: control the mids express will use and make the connection to the database
barrier: where the server is created and serve to a port, handle some listening errors
```

### frontend:
```
run: yarn/npm install -> yarn serve / npm run serve(compile and hot-reload for development)
run: yarn build/npm run build(compiles and minifies for production) 

assets: svgs and images
components: where the components of the application are created, both base and specify components.
modules: vuex modules of the aplication, where you keep their global store and share information between components.
plugins: plugins such as vuetify(used to define its uses)
services: folder to keep the api calls, separated by modules.
utils: place to keep funcionalities that might be use anywhere of the project.
views: main place to keep the views of the aplication, used mainly by routes.
```