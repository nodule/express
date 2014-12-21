module.exports = {
  name: "json",
  ns: "express",
  title: "JSON",
  description: "Express JSON middleware",
  phrases: {
    active: "Using Express JSON middleware"
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
  fn: function json(input, output, state, done, cb, on) {
    var r = function() {
      input.app.json(input.express.json(), function jsonCallback() {
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