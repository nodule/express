module.exports = {
  name: "post",
  ns: "express",
  title: "Post",
  description: "express post",
  phrases: {
    active: "Adding router path {{input.path}} for POST requests."
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
      },
      next: {
        title: "Next",
        type: "function"
      }
    }
  },
  fn: function post(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.post($.path, function postCallback(req, res, next) {
        cb({
          req: req,
          res: res,
          next: next
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