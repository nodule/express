module.exports = {
  name: "options",
  ns: "express",
  title: "Post",
  description: "express options",
  phrases: {
    active: "Adding router path {{input.path}} for OPTIONS requests."
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
      output: {
        title: "Output",
        type: "object"
      }
    }
  },
  fn: function options(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.options($.path, function optionsCallback(output) {
        cb({
          output: output
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