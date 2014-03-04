output = function() {

  input.app.get(input.path, function(req, res) {

    cb({
      req: req,
      res: res,
      params: req.params,
      headers: req.headers,
      body: req.body
    });

    done();

  });

};
