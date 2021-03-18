const http = require('http');

function onRequest(req, res) {
    
  const options = {
    hostname: '34.72.155.232',
    port: 3000,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  console.log(options);

  const proxy = http.request(options, function (r) {
    res.writeHead(r.statusCode, r.headers);
    r.pipe(res, {
      end: true
    });
  });

  req.pipe(proxy, {
    end: true
  });
}

http.createServer(onRequest).listen(4000);
console.log('Listening on port 4000')