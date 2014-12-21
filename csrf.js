module.exports = {
  name: "csfr",
  ns: "express",
  title: "csfr",
  description: "Express CSRF protection middleware",
  phrases: {
    active: "Using Express Cross-site request forgery protection middleware"
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
  fn: function csfr(input, output, state, done, cb, on) {
    var r = function() {
      input.app.csfr(input.express.csrf(), function csfrCallback() {
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