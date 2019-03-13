#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      qs = require('querystring');

http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url} ${req.httpVersion}`);
  console.log(req.headers);
  console.log();

  var addr = url.parse(req.url).query;
  var rect = qs.parse(addr);
  //console.log(rect.width,rect.height);

  var result = {
    area: Number(rect.width)*Number(rect.height),
    perimeter: (Number(rect.width)+Number(rect.height))*2
  }

  //res.end("{'code': 200, 'reason': '请求成功', 'result': 'area'}")

  res.end(JSON.stringify(result));

}).listen(8080);


