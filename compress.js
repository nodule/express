module.exports = {
  name: "compress",
  ns: "express",
  title: "Compress",
  description: "Express Compress",
  phrases: {
    active: "Using Express Compress Middleware"
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
  fn: function compress(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.compress($.express.compress(), function compressCallback() {
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