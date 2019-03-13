const expect = require('chai').expect;

describe('矩形计算器的接口测试',function(){
  it('正确的矩形参数',function(){
    const http = require('http');

    http.get('http://localhost:8080?width=10&height=20',(res)=>{
        var result = '';
        res.on('data',(data)=>{
          result += data;
        });
        res.on('end',()=>{
          var rect = JSON.parse(result);
          expect(rect.area).to.be.equal(200);
          expect(rect.perimeter).to.be.equal(60);
        })

      })

  })
})
