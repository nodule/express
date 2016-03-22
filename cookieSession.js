module.exports = {
  name: "cookieSession",
  ns: "express",
  title: "Cookie Session",
  description: "Express Cookie Session",
  phrases: {
    active: "Using Express Cookie Session middleware"
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
  fn: function cookieSession(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.cookieSession($.express.cookieSession(), function cookieSessionCallback() {
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