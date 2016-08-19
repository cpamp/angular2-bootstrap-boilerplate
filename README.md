# angular2-bootstrap-boilerplate
**Versions**  
v0.0.1-alpha.2  
Angular: v2.0.0-rc.5  
Bootstrap: 3.3.6  


The project `angular2-bootstrap-boilerplate` is a project created to easily setup and create new angular 2 applications with bootstrap. The project has two build configurations, development and distribution. Npm commands are suffixed by build with `:dev` and `:dist` respectively. Development and distribution builds use `gulp-angular2-embed-templates` to replace `templateUrl` properties with in-line html. Both builds also bundle your app with angular2.

## NPM Commands
The following commands must be prefixed with `:dev` or `:dist` for development and distribution builds respectively.
### start
`npm run start:*`
Compile and launch a `lite-server`.  
Note: `npm start` is the same as `npm run start:dev`
### server
`npm run server:*`  
Launch a `lite-server`.
### build
`npm run build:*`
Compile
## Gulp
Modify build configuration outputs, files, and sources in `gulpfile.js`.
### vendors.min.js
in: `files.dependencies.appDependencies`  
out: `out.dependencies`
### vendors.min.css
in: `files.dependencies.stylesheets`  
out: `out.dependencyStyles`
### Injectables
in: `injectables`  
out: `out.index`
## Todo
- [ ] Separate angular bundle from app bundle
- [ ] Finalize bootstrap template
