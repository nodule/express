module.exports = {
  name: "methodOverride",
  ns: "express",
  title: "Method Override",
  description: "Express Method Override",
  phrases: {
    active: "Using Method Override Middleware"
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
    output: {}
  },
  fn: function methodOverride(input, output, state, done, cb, on) {
    var r = function() {
      input.app.methodOverride(input.express.methodOverride(), function methodOverrideCallback() {
        cb({});
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