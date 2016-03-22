module.exports = {
  name: "cors",
  ns: "express",
  title: "CORS",
  description: "",
  phrases: {
    active: "CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options"
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
      },
      origin: {
        type: "string",
        title: "Origin",
        description: "Configures the Access-Control-Allow-Origin CORS header. Expects a string (ex: \"http://example.com\")",
        "default": null
      },
      methods: {
        type: "array",
        title: "Methods",
        description: "Configures the Access-Control-Allow-Methods CORS header. (ex: ['GET', 'PUT', 'POST'])",
        "default": null
      },
      allowedHeaders: {
        type: "array",
        title: "Allowed Headers",
        description: "Configures the Access-Control-Allow-Headers CORS header. (ex: ['Content-Type', 'Authorization]). If not specified, defaults to reflecting the headers specified in the request's Access-Control-Request-Headers header.",
        "default": null
      },
      exposedHeaders: {
        type: "array",
        title: "Exposed Headers",
        description: "Configures the Access-Control-Expose-Headers CORS header. (ex: ['Content-Range', 'X-Content-Range]). If not specified, no custom headers are exposed.",
        "default": null
      },
      credentials: {
        type: "boolean",
        title: "Credentials",
        description: "Configures the Access-Control-Allow-Credentials CORS header.",
        "default": false
      },
      maxAge: {
        type: "number",
        title: "Max Age",
        description: "Configures the Access-Control-Allow-Max-Age CORS header. Set to an integer to pass the header, otherwise it is omitted.",
        "default": null
      }
    },
    output: {}
  },
  dependencies: {
    npm: {
      cors: require('cors')
    }
  },
  fn: function cors(input, $, output, state, done, cb, on, cors) {
    var r = function() {
      $.app.cors(cors({
        origin: $.origin || true,
        methods: $.methods || undefined,
        allowedHeaders: $.allowedHeaders || undefined,
        exposedHeaders: $.exposedHeaders || undefined,
        credentials: $.credentials || undefined,
        maxAge: $.maxAge || undefined
      }), function corsCallback() {
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