var React = require("react")
var reactDOMServer = require("react-dom/server")
var request = require("superagent")

var UserComponent = require("./../js/user_component.jsx") 

module.exports = function (app) {
  app.get("/", function (req, res) {
    request.get("http://jsonplaceholder.typicode.com/users")
            .end((err, response) => {
              var users = response.body
              var staticHtml = reactDOMServer.renderToString(<UserComponent data={users} />)
              res.render("index.ejs", { reactOutput: staticHtml })
            })
  })
}
