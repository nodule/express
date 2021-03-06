module.exports = {
  name: "500",
  ns: "express",
  title: "500",
  description: "500 error",
  phrases: {
    active: "Sending 500 error message"
  },
  ports: {
    input: {
      error: {
        type: "object",
        title: "Error message"
      },
      req: {
        type: "Stream",
        title: "Express request object"
      },
      res: {
        type: "Stream",
        title: "Express response object"
      },
      next: {
        type: "function",
        title: "Express response object",
        readonly: true
      }
    },
    output: {}
  }
}