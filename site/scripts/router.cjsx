# Load css first thing. It gets injected in the <head> in a <style> element by
# the Webpack style-loader.
require '../public/main.css'

React = require 'react'
# Assign React to Window so the Chrome React Dev Tools will work.
window.React = React

Router = require('react-router')
Route = Router.Route

# Require route components.
Index = require './index'
StyleGuide = require './styleguide'
App = require './app'

routes = (
  <Route handler={App}>
    <Route name="index" handler={Index} path="/" />
    <Route name="styleguide" handler={StyleGuide} path="/styleguide" />
  </Route>
)
Router.run(routes, (Handler) ->
  React.render <Handler/>, document.getElementById 'app'
)
