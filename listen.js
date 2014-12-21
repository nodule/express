module.exports = {
  name: "listen",
  ns: "express",
  title: "Listen",
  description: "express listen",
  phrases: {
    active: "listening on port {{input.port}}, ?address?"
  },
  ports: {
    input: {
      app: {
        type: "function",
        title: "Express app",
        readonly: true,
        required: true
      },
      port: {
        type: "string",
        title: "Port",
        description: "The port this express app should listen on",
        required: true
      }
    },
    output: {
      server: {
        title: "Server",
        type: "function"
      }
    }
  },
  fn: function listen(input, output, state, done, cb, on) {
    var r = function() {
      output = {
        server: input.app.listen(input.port)
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}