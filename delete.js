module.exports = {
  name: "delete",
  ns: "express",
  title: "DELETE",
  description: "express delete",
  phrases: {
    active: "Creating router path {{input.path}} for delete requests."
  },
  ports: {
    input: {
      app: {
        type: "function",
        title: "Express app",
        readonly: true,
        required: true
      },
      path: {
        type: "string",
        "default": "/",
        title: "A router path",
        description: "Regular expressions may also be used, and can be useful if you have very specific restraints",
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
  fn: function _delete(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.delete($.path, function deleteCallback(req, res, next) {
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