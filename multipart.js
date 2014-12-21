module.exports = {
  name: "multipart",
  ns: "express",
  title: "Multipart",
  description: "Express multipart",
  phrases: {
    active: "Using Multipart Middleware"
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
  fn: function multipart(input, output, state, done, cb, on) {
    var r = function() {
      input.app.multipart(input.express.multipart(), function multipartCallback() {
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