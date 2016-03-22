module.exports = {
  name: "urlencoded",
  ns: "express",
  title: "Urlencoded",
  description: "Express urlencoded",
  phrases: {
    active: "Using urlencoded middleware"
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
  fn: function urlencoded(input, $, output, state, done, cb, on) {
    var r = function() {
      $.app.urlencoded($.express.urlencoded(), function urlencodedCallback() {
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