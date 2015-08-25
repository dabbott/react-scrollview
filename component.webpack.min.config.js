var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var base = require('./component.webpack.config.js');

var production = _.clone(base);

production.plugins = production.plugins.slice();
production.plugins.push(new webpack.optimize.UglifyJsPlugin());

production.output = _.clone(production.output);
production.output.filename = 'react-scrollview.min.js';

module.exports = production;
