module.exports = {
  name: "csrf",
  ns: "express",
  title: "csrf",
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
  fn: function csrf(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.csrf($.express.csrf(), function csrfCallback() {
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