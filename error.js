module.exports = {
  name: "error",
  ns: "express",
  title: "Error",
  description: "express error",
  phrases: {
    active: "Sending Express error"
  },
  ports: {
    input: {
      app: {
        type: "function",
        title: "Express app",
        required: true,
        readonly: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      req: {
        title: "Request",
        type: "Stream"
      },
      res: {
        title: "Response",
        type: "Stream"
      },
      next: {
        title: "Next",
        type: "function"
      }
    }
  },
  fn: function error(input, $, output, state, done, cb, on) {
    var r = function() {
      //  $.app.error(function errorCallback(error,req,res,next) {cb({error: error, req: req, res: res, next: next});});
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}