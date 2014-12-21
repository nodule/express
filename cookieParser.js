module.exports = {
  name: "cookieParser",
  ns: "express",
  title: "Cookie Parser",
  description: "Express Cookie Parser",
  phrases: {
    active: "Using Express Cookie Parser middleware"
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
  fn: function cookieParser(input, output, state, done, cb, on) {
    var r = function() {
      input.app.cookieParser(input.express.cookieParser(), function cookieParserCallback() {
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