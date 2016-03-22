module.exports = {
  name: "directory",
  ns: "express",
  title: "Directory",
  description: "Express directory serving middleware",
  phrases: {
    active: "Using Express directory serving middleware"
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
      path: {
        type: "string",
        title: "Path"
      },
      hidden: {
        type: "boolean",
        title: "Hidden",
        "default": false
      },
      icons: {
        type: "boolean",
        title: "Icons",
        "default": false
      },
      filter: {
        type: "function",
        title: "Filter",
        "default": null
      }
    },
    output: {}
  },
  dependencies: {
    npm: {
      "express-directory": require('express-directory')
    }
  },
  fn: function directory(input, $, output, state, done, cb, on, express_directory) {
    var r = function() {
      $.app.directory(expressDirectory($.path, {
        hidden: $.hidden,
        icons: $.icons,
        filter: $.filter
      }), function directoryCallback() {
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