module.exports = {
  name: "close",
  ns: "express",
  title: "Close",
  description: "Close server (todo: can close any server connection, not just express)",
  phrases: {
    active: "Closing server"
  },
  ports: {
    input: {
      server: {
        type: "function",
        title: "HTTP Server",
        readonly: true,
        required: true,
        fn: function __SERVER__(data, x, source, state, input, output) {
          var r = function() {
            $.server.close();
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {}
  },
  state: {}
}