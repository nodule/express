module.exports = {
  name: "route",
  ns: "express",
  title: "Router",
  description: "express route",
  phrases: {
    active: "Adding router path {{input.path}} for {{input.type}} requests."
  },
  ports: {
    input: {
      app: {
        type: "function",
        title: "Express app",
        required: true,
        readonly: true
      },
      path: {
        type: "string",
        title: "Router path",
        required: true
      },
      type: {
        "enum": ["get",
          "post",
          "put",
          "delete",
          "options",
          "head",
          "patch"
        ],
        title: "Type",
        "default": "get",
        required: true
      }
    },
    output: {
      req: {
        title: "Request",
        type: "Stream"
      },
      res: {
        title: "Response",
        type: "Stream"
      }
    }
  },
  fn: function route(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.route($.path, function routeCallback(req, res) {
        cb({
          req: req,
          res: res
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