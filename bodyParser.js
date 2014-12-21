module.exports = {
  name: "bodyParser",
  ns: "express",
  title: "Body Parser",
  description: "Express Body Parser",
  phrases: {
    active: "Adding Express Body Parser Middleware"
  },
  ports: {
    input: {
      app: {
        type: "function",
        title: "App",
        readonly: "true"
      },
      express: {
        type: "function",
        title: "Express",
        readonly: "true"
      }
    },
    output: {
      res: {
        type: "ServerResponse"
      },
      type: {
        type: "any"
      }
    }
  },
  dependencies: {
    npm: {
      "body-parser": require('body-parser')
    }
  },
  fn: function bodyParser(input, output, state, done, cb, on, body_parser) {
    var r = function() {
      input.app.bodyParser(body_parser.json(), function bodyParserCallback(res, type) {
        cb({
          res: res,
          type: type
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}