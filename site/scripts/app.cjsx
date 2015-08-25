Link = require('react-router').Link
RouteHandler = require('react-router').RouteHandler

# Provides global navigation for app e.g. the "Hello | Styleguide" at the top.
module.exports = React.createClass
  displayName: 'HelloWorld'
  render: ->
    <div>
      <RouteHandler/>
    </div>

# <header><Link to="index">Index</Link> | <Link to="styleguide">Styleguide</Link></header>
