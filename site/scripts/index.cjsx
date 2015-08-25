_ = require 'lodash'
Link = require('react-router').Link
ScrollView = require '../../index.js'
highlightJS = require 'highlight.js'

# http://tools.medialab.sciences-po.fr/iwanthue/index.php
# colors = [
#   "#EE78B2"
#   "#5BE487"
#   "#53CBE9"
#   "#6688F2"
#   "#F5464D"
#   "#DD51EC"
#   "#7C8DC0"
#   "#34F0E0"
#   "#DCA6E9"
#   "#F1487A"
#   "#AA72F1"
#   "#41AA70"
#   "#E66F70"
#   "#ED44C3"
#   "#F13B9A"
#   "#37B7A5"
#   "#DB70DD"
#   "#BD7CAB"
#   "#379FB1"
#   "#54A5D7"
#   "#54E1A2"
#   "#AA82E6"
#   "#A486CA"
#   "#7BA2E8"
#   "#3CDEE4"
#   "#49EDC4"
#   "#868CDF"
#   "#C27DC7"
#   "#DF66B8"
#   "#E0789B"
# ]

colors = [
  "#E8EAF6"
  "#C5CAE9"
  "#9FA8DA"
  "#7986CB"
  "#5C6BC0"
  "#3F51B5"
  "#3949AB"
  "#303F9F"
  "#283593"
  "#1A237E"
]

randomColor = ->
  return colors[Math.floor(Math.random() * colors.length)]

alternatingColor = do ->
  count = 0
  altColors = [
    "rgb(255,255,255)"
    "rgb(245,245,245)"
  ]
  return ->
    altColors[count++ % 2]

pastelColor = ->
  r = (Math.round(Math.random() * 127) + 127).toString(16)
  g = (Math.round(Math.random() * 127) + 127).toString(16)
  b = (Math.round(Math.random() * 127) + 127).toString(16)
  '#' + r + g + b

module.exports = React.createClass
  displayName: 'Index'

  componentDidMount: ->
    _.map document.querySelectorAll('.js'), (node) ->
      highlightJS.highlightBlock(node, 'js')
    # console.log 'highlighted'

  renderInstallationGuide: ->
    <div>
      <h3>Install</h3>
      <br />
      <pre>
        <code>
        {'''
          npm install react-scrollview
        '''}
        </code>
      </pre>
      <br />
    </div>

  render: ->
    verticalStyle =
      backgroundColor: 'rgba(0,0,255,0.2)'
      height: 400

    horizontalStyle =
      backgroundColor: 'rgba(0,0,255,0.2)'
      height: 200

    contentContainerStyle =
      lineHeight: 0

    horizontalBoxes = for i in [0...10]
      inlineStyle =
        backgroundColor: "#{randomColor()}"
        height: 200
        width: 200
        lineHeight: '200px'
        color: 'white'
        textAlign: 'center'
      <div key={"h-#{i}"} style={inlineStyle}>
        <p>{i}</p>
      </div>

    verticalBoxes = for i in [0...100]
      inlineStyle =
        backgroundColor: "#{randomColor()}"
        height: 60
        lineHeight: '60px'
        color: 'white'
        textAlign: 'center'
      <div key={"v-#{i}"} style={inlineStyle}>
        <p>{i}</p>
      </div>

    style = {
      # textAlign: 'center'
    }

    <div style={style}>
      <h1>React ScrollView</h1>
      <br />
      {@renderInstallationGuide()}
      <h3>Vertical Scroll</h3>
      <br />
      <ScrollView style={verticalStyle}
        contentContainerStyle={contentContainerStyle}>
          {verticalBoxes}
      </ScrollView>
      <br />
      <br />
      <pre>
        <code className={'js'}>
        {'''
          var ScrollView = require('react-scrollview');

          var MyComponent = React.createClass({
            render: function() {
              return (
                <ScrollView />
              );
            }
          });
        '''}
        </code>
      </pre>
      <br />
      <h3>Horizontal Scroll</h3>
      <br />
      <ScrollView style={horizontalStyle}
        contentContainerStyle={contentContainerStyle}
        horizontal={true}>
          {horizontalBoxes}
      </ScrollView>
      <br />
      <br />
      <pre>
        <code className={'js'}>
        {'''
          var ScrollView = require('react-scrollview');

          var MyComponent = React.createClass({
            render: function() {
              return (
                <ScrollView horizontal={true} />
              );
            }
          });
        '''}
        </code>
      </pre>
    </div>
