module.exports = {
  name: "send",
  ns: "express",
  title: "Send",
  async: true,
  description: "express send string",
  phrases: {
    active: "Sending response body"
  },
  ports: {
    input: {
      res: {
        type: "Stream",
        title: "Express response object",
        required: "true",
        async: true,
        readonly: "true",
        fn: function __RES__(data, x, source, state, input, $, output) {
          var r = function() {
            $.res.send($.body)
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      body: {
        type: "string",
        format: "html",
        title: "The response body",
        required: "true"
      }
    },
    output: {}
  },
  state: {}
}